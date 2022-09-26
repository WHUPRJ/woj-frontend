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

export async function login(option: LoginStruct): Promise<string> {
  try {
    if (option.username === undefined) return Promise.reject('请输入用户名');
    if (option.password === undefined) return Promise.reject('请输入密码');
    const response = await axios.post<TokenResponse>('/user/login', option);
    if (response.data === undefined) return Promise.reject('服务器错误');
    if (response.data.code !== 0 || response.data.body === undefined)
      return Promise.reject(response.data.msg ?? '服务器错误');
    return response.data.body;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function profile(option: ProfileStruct): Promise<User> {
  // 需要验证的实例
  try {
    if (option.uid === undefined) return Promise.reject('uid错误');
    const headers = { Authorization: 'Bearer ' + option.token };
    const response = await axios.post<UserResponse>('/user/profile', option, {
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
