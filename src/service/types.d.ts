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

type User = {
  nickname: string;
  token: string;
};

type UserResponse = APIResponse<User>;

type ProfileStruct = {
  token: string;
  uid: number;
};

type Profile = {
  user_name: string;
  nick_name: string;
  role: number;
  is_enabled: boolean;
};

type Token = {
  id: number;
  role: number;
};

type ProfileResponse = APIResponse<Profile>;

// type ProblemStruct = {
//   token: string;
//   title?: string;
//   content?: string;
//   time_limit?: number;
//   memory_limit?: number;
//   pid?: number;
//   is_enabled?: boolean;
// };

type ProblemStruct = {
  token: string;
  file?: File;
  pid: number;
  title: string;
  statement: string;
  is_enabled: boolean;
};

type Problem = {
  meta: {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
  };
  title: string;
  statement: string;
  provider: Profile;
  is_enabled: boolean;
};

type ProblemResponse = APIResponse<Problem>;

type SearchStruct = {
  search?: string;
};

type ProblemList = Array<Problem>;

type ProblemListResponse = APIResponse<ProblemList>;

type Upload = {
  key: string;
  url: string;
};

type UploadResponse = APIResponse<Upload>;
