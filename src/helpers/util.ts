const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  // protect type as Date, help IDE to autocomplete
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}
