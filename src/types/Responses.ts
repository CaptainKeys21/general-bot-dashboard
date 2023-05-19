export interface IApiResponse<T> {
  msg: string;
  data: T;
}

export interface IApiPagedResponse<T> extends IApiResponse<T> {
  metadata: {
    total: number;
    page: number;
    totalPages: number;
  },
}

export interface IAPIStandardError {
  code: string;
  detail: string;
}

export interface IdNames {
  [k: string]: {
    name: string;
    [k: string]: string | number;
  }
}