import { AxiosRequestConfig } from '../types'

/**
 * module of xhr communciation
 * @param config
 */
export default function xhr(config: AxiosRequestConfig): void {
  // destructure the data, url and method from config
  // default data and method as they are optional in the config type
  const { data = null, url, method = 'get' } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true) // 3rd param allows async

  request.send(data)
}
