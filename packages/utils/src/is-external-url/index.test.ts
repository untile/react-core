/**
 * Module dependencies.
 */

import { isExternalUrl } from './';

/**
 * Test `add` util.
 */

describe(`'isExternalUrl' util`, () => {
  it('should return `true` if url is external', () => {
    const result = isExternalUrl('http://foo.bar');

    expect(result).toBe(true);
  });

  it('should return `false` if url is not external', () => {
    const result = isExternalUrl('/foo/bar');

    expect(result).toBe(false);
  });
});
