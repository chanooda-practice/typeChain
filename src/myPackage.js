// @ts-check

/**
 *
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
  return true;
}
/**
 *
 * @param {*} code
 * @returns
 */
export function exit(code) {
  return code + 1;
}
