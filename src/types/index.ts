// define the terms which can be used as method
export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

// config interface (as the parameter of axios())
export interface AxiosRequestConfig {
  url: string
  method?: Method // predefined on above
  data?: any
  param?: any
}
