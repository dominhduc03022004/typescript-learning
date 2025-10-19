export type ApiResponse<T> = {
  message: string;
  data: T;
  datas: T;
  token: string;
};