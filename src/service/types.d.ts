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
  username?: string;
  password?: string;
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

type Token = {
  id: number;
  role: number;
};

type UserResponse = APIResponse<User>;

type ProblemStruct = {
  token: string;
  title?: string;
  content?: string;
  time_limit?: number;
  memory_limit?: number;
  pid?: number;
  is_enabled?: boolean;
};

type Problem = {
  meta: {
    ID: number;
    CreatedAt: Date;
    UpdatedAt: Date;
  };
  title: string;
  content: string;
  time_limit: number;
  memory_limit: number;
  provider_id: number;
  is_enabled: boolean;
};

type ProblemResponse = APIResponse<Problem>;

type SearchStruct = {
  pid?: number;
  search?: string;
};

type ProblemList = Array<Problem>;

type ProblemListResponse = APIResponse<ProblemList>;
