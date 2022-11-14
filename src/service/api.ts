import axios from 'axios';
import qs from 'qs';
axios.defaults.baseURL = '/api/v1';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export async function register(option: RegisterStruct): Promise<string> {
  try {
    if (
      option.nickname === undefined ||
      option.username === undefined ||
      option.password === undefined
    )
      return Promise.reject('参数不存在');
    const response = await axios.post<TokenResponse>('/user/create', option);
    console.log(response);
    if (response.data === undefined) return Promise.reject('服务器错误');
    if (response.data.code !== 0 || response.data.body === undefined)
      return Promise.reject(response.data.msg ?? '服务器错误');
    return response.data.body;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function login(option: LoginStruct): Promise<User> {
  try {
    if (option.username === undefined) return Promise.reject('请输入用户名');
    if (option.password === undefined) return Promise.reject('请输入密码');
    const response = await axios.post<UserResponse>('/user/login', option);
    if (response.data === undefined) return Promise.reject('服务器错误');
    if (response.data.code !== 0 || response.data.body === undefined)
      return Promise.reject(response.data.msg ?? '服务器错误');
    return response.data.body;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function profile(option: ProfileStruct): Promise<Profile> {
  // 需要验证的实例
  try {
    if (option.uid === undefined) return Promise.reject('uid错误');
    const headers = { Authorization: 'Bearer ' + option.token };
    const response = await axios.post<ProfileResponse>(
      '/user/profile',
      option,
      {
        headers: headers,
      }
    );
    if (response.data === undefined) return Promise.reject('服务器错误');
    if (response.data.code !== 0 || response.data.body === undefined)
      return Promise.reject(response.data.msg ?? '服务器错误');
    return response.data.body;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function getProblemList(
  option?: SearchStruct
): Promise<ProblemList> {
  try {
    const response = await axios.post<ProblemListResponse>(
      '/problem/search',
      option
    );
    if (response.data === undefined) return Promise.reject('服务器错误');
    if (response.data.code !== 0 || response.data.body === undefined)
      return Promise.reject(response.data.msg ?? '服务器错误');
    return response.data.body;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function getProblem(pid: number): Promise<ProblemDetail> {
  try {
    const response = await axios.post<ProblemDetailResponse>(
      '/problem/details',
      { pid: pid }
    );
    if (response.data === undefined) return Promise.reject('服务器错误');
    if (response.data.code !== 0 || response.data.body === undefined)
      return Promise.reject(response.data.msg ?? '服务器错误');
    return response.data.body;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function getSubmissions(
  option: QueryStruct
): Promise<SubmissionList> {
  if (option.pid === undefined && option.uid === undefined)
    return Promise.reject('参数未定义');
  try {
    const response = await axios.post<SubmissionListResponse>(
      '/submission/query',
      {
        uid: option.uid,
        pid: option.pid,
        offset: 0,
        limit: 500,
      }
    );
    if (response.data === undefined) return Promise.reject('服务器错误');
    if (response.data.code !== 0 || response.data.body === undefined)
      return Promise.reject(response.data.msg ?? '服务器错误');
    return response.data.body;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function getSubmission(sid: number): Promise<Submission> {
  if (sid === undefined) return Promise.reject('参数未定义');
  try {
    const response = await axios.post<SubmissionResponse>('/status/query', {
      sid: sid,
    });
    if (response.data === undefined) return Promise.reject('服务器错误');
    if (response.data.code !== 0 || response.data.body === undefined)
      return Promise.reject(response.data.msg ?? '服务器错误');
    return response.data.body;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function submit(option: SubmitStruct): Promise<void> {
  try {
    if (
      option.token === undefined ||
      option.pid === undefined ||
      option.code === undefined ||
      option.language === undefined
    )
      return Promise.reject('参数未定义');
    const headers = { Authorization: 'Bearer ' + option.token };
    const response = await axios.post<ProblemDetailResponse>(
      '/submission/create',
      qs.stringify({
        pid: option.pid,
        language: option.language,
        code: option.code,
      }),
      { headers: headers }
    );
    if (response.data === undefined) return Promise.reject('服务器错误');
    if (response.data.code !== 0)
      return Promise.reject(response.data.msg ?? '服务器错误');
    return;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function submission(sid?: string): Promise<Submission> {
  try {
    const response = await axios.post<SubmissionResponse>(
      '/status/query',
      qs.stringify({
        sid: sid,
      })
    );
    if (response.data === undefined) return Promise.reject('服务器错误');
    if (response.data.code !== 0 || response.data.body === undefined)
      return Promise.reject(response.data.msg ?? '服务器错误');
    return response.data.body;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function updateProblem(option: ProblemStruct): Promise<void> {
  try {
    if (
      option.token === undefined ||
      option.pid === undefined ||
      option.title === undefined ||
      option.statement === undefined
    )
      return Promise.reject('参数未定义');
    if (option.pid === 0 && option.file === undefined)
      // create problem, must upload dataset
      return Promise.reject('参数未定义');
    const headers = {
      Authorization: 'Bearer ' + option.token,
    };

    // upload statement
    const response = await axios.post<ProblemResponse>(
      '/problem/update',
      qs.stringify({
        title: option.title,
        pid: option.pid,
        statement: option.statement,
        is_enabled: true,
      }),
      { headers: headers }
    );
    if (response.data === undefined) return Promise.reject('服务器错误');
    if (response.data.code !== 0 || response.data.body === undefined)
      return Promise.reject(response.data.msg ?? '服务器错误');
    if (option.file === undefined) return;
    const pid = response.data.body.meta.ID;

    // get data upload URL
    const response2 = await axios.post<UploadResponse>(
      '/problem/upload',
      {},
      {
        headers: headers,
      }
    );
    if (response2.data === undefined) return Promise.reject('服务器错误');
    if (
      response2.data.code !== 0 ||
      response2.data.body === undefined ||
      response2.data.body?.key === undefined ||
      response2.data.body?.url === undefined
    )
      return Promise.reject(response2.data.msg ?? '服务器错误');
    const key = response2.data.body?.key;
    const url = response2.data.body?.url;

    // upload data
    //TODO:bug
    const response3 = await axios.put<ProblemResponse>(url, option.file, {
      headers: { 'Content-Type': 'application/zip' },
    });
    if (response3.status !== 200) return Promise.reject('服务器错误');

    // create problem version
    const response4 = await axios.post<APIResponse<null>>(
      '/problem/create_version',
      qs.stringify({
        pid: response.data.body.meta.ID,
        storage_key: key,
      }),
      { headers: headers }
    );
    if (response4.data === undefined) return Promise.reject('服务器错误');
    if (response4.data.code !== 0 || response4.data.body === undefined)
      return Promise.reject(response4.data.msg ?? '服务器错误');

    // make problem enable
    const response5 = await axios.post<ProblemResponse>(
      '/problem/update',
      qs.stringify({
        title: option.title,
        pid: pid,
        statement: option.statement,
        is_enabled: true,
      }),
      { headers: headers }
    );
    if (response5.data === undefined) return Promise.reject('服务器错误');
    if (response5.data.code !== 0 || response5.data.body === undefined)
      return Promise.reject(response5.data.msg ?? '服务器错误');
    return;
  } catch (error) {
    return Promise.reject(error);
  }
}
