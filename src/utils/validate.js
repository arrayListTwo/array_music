/**
 * svg外链，是否合法
 * @param path svg路径
 * @returns {boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
