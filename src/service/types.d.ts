type APIResponse<T> = {
  code: number;
  msg: string;
  body?: T;
};

type RegisterStruct = {
  username?: string;
  nickname?: string;
  password?: string;
};

type LoginStruct = {
  username: string;
  password: string;
};

type TokenResponse = APIResponse<string>;

type ProfileStruct = {
  token: string;
  uid: number;
};

type User = {
  user_name: string;
  nick_name: string;
  role: number;
  is_enabled: boolean;
};

type UserResponse = APIResponse<User>;
