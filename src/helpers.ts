/**
 * @function firstLetterUppercase
 * This function capitalizes the first letter of the given string
 * @param {string} str the input string
 * @returns
 */

export function firstLetterUppercase(str: string): string {
  const valueString = str.toLowerCase();
  return valueString
    .split(' ')
    .map(
      (value: string) =>
        `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`
    )
    .join(' ');
}

/**
 * @function lowerCase
 * This function return a new string which is the lowercase version of the input string
 * @param {string} str the input string
 * @returns
 */

export function lowerCase(str: string): string {
  return str.toLowerCase();
}

/**
 * @function upperCase
 * This function return a new string which is the uppercase version of the input string
 * @param {string} str the input string
 * @returns
 */

export const upperCase = (str: string): string => {
  return str ? str.toUpperCase() : str;
};

/**
 * @function isEmail a function which can be used to determine if an email is valid or not
 * @param {string} email the input email to be checked
 * @returns true if imput provided is a valid email or else false
 */
export function isEmail(email: string): boolean {
  const regexExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
  return regexExp.test(email);
}

export function isDataURL(value: string): boolean {
  const dataUrlRegex =
    /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\\/?%\s]*)\s*$/i;
  return dataUrlRegex.test(value);
}
