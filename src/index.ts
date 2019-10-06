import { AxiosRequestConfig } from './types'
import xhr from './xhr'

// config param is predefined by interface
function axios(config: AxiosRequestConfig): void {
  xhr(config)
}

export default axios
