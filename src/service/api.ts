import axios from 'axios';
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

// deprecated
// export async function updateProblem(option: ProblemStruct): Promise<Profile> {
//   try {
//     if (
//       option.content === undefined ||
//       option.is_enabled === undefined ||
//       option.memory_limit === undefined ||
//       option.pid === undefined ||
//       option.time_limit === undefined ||
//       option.title === undefined
//     )
//       return Promise.reject('参数未定义');
//     const headers = { Authorization: 'Bearer ' + option.token };
//     const response = await axios.post<ProfileResponse>(
//       '/user/profile',
//       option,
//       {
//         headers: headers,
//       }
//     );
//     if (response.data === undefined) return Promise.reject('服务器错误');
//     if (response.data.code !== 0 || response.data.body === undefined)
//       return Promise.reject(response.data.msg ?? '服务器错误');
//     return response.data.body;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// }

export async function updateProblem(option: ProblemStruct): Promise<Profile> {
  try {
    if (
      option.file === undefined ||
      option.pid === undefined ||
      option.token === undefined
    )
      return Promise.reject('参数未定义');
    const headers = {
      Authorization: 'Bearer ' + option.token,
      'Content-Type': 'multipart/form-data',
    };
    const data = new FormData();
    data.append('pid', option.pid.toString());
    data.append('file', option.file);
    const response = await axios.post<ProfileResponse>('/problem/update', {
      data: data,
      headers: headers,
    });
    if (response.data === undefined) return Promise.reject('服务器错误');
    if (response.data.code !== 0 || response.data.body === undefined)
      return Promise.reject(response.data.msg ?? '服务器错误');
    return response.data.body;
  } catch (error) {
    return Promise.reject(error);
  }
}
