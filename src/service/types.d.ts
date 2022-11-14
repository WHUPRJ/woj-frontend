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
  meta: {
    ID: number;
    CreateAt: string;
  };
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
};

type language = {
  Cmp: string;
  Lang: string;
  Script: string;
  Type: string;
};

type Task = {
  Id: number;
  Points: number;
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

type ProblemDetail = {
  problem: Problem;
  context: {
    // only in detail
    Languages: Array<language>;
    Runtime: {
      MemoryLimit: number;
      NProcLimit: number;
      TimeLimit: number;
    };
    Tasks: Array<Task>;
  };
};

type ProblemResponse = APIResponse<Problem>;
type ProblemDetailResponse = APIResponse<ProblemDetail>;

type SearchStruct = {
  search?: string;
};

type SubmitStruct = {
  token: string;
  pid: number;
  language: string;
  code: string;
};

type ProblemList = Array<Problem>;

type ProblemListResponse = APIResponse<ProblemList>;

type Upload = {
  key: string;
  url: string;
};

type UploadResponse = APIResponse<Upload>;

type QueryStruct = {
  uid: number;
  pid: number;
};

type task = {
  id: number;
  points: number;
  real_time: number;
  cpu_time: number;
  memory: number;
  message: string;
};

type Submission = {
  submission: {
    meta: {
      ID: number;
      CreatedAt: string;
    };
    problem_id: number;
    user: Profile;
    language: string;
    code: string;
  };
  point: number;
  context?: {
    tasks: Array<task>;
  };
};

type SubmissionList = Array<Submission>;

type SubmissionResponse = APIResponse<Submission>;

type SubmissionListResponse = APIResponse<SubmissionList>;
