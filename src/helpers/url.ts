import { isDate, isObject } from './util'

/**
 * encode the param as url-friendly
 * @param val
 */
function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

/**
 * Help to attach params to the request url
 * @param url
 * @param params
 */
export function buildURL(url: string, params?: any): string {
  // if no params, return url directly
  if (!params) {
    return url
  }
  const parts: string[] = []

  Object.keys(params).forEach(key => {
    const val = params[key]
    // null
    if (val == null || typeof val === 'undefined') {
      // go to next loop
      return
    }
    // check if the param is array
    let values = []
    if (Array.isArray(val)) {
      values = val
      key += '[]' // attach a array sign to the key on request url
    } else {
      values = [val] // if the param is not a array, put it into a array
    }
    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString() // return the val as ISO date format
      } else if (isObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)} = ${encode(val)}`) // form the key->value array
    })

    // attach as url, separated by $
    let serializedParams = parts.join('$')
    if (serializedParams) {
      // see if hash tag exists, ignore it if its the case
      const markIndex = url.indexOf('#')
      if (markIndex != -1) {
        url = url.slice(0, markIndex)
      }
      // if the question mark exist already in the url, concate $ instead of ?
      url += (url.indexOf('?') === -1 ? '?' : '$') + serializedParams
    }
    return url
  })
}
