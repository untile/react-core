/**
 * Regexes.
 */

const regexes = {
  emailLink: /mailto:([^?]*)/,
  telLink: /^(tel:)(\+[0-9]+)/,
  url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/
};

/**
 * Export `isExternalUrl` util.
 */

export function isExternalUrl(url: string): boolean {
  return (
    regexes.url.test(url) ||
    regexes.emailLink.test(url) ||
    regexes.telLink.test(url)
  );
}
