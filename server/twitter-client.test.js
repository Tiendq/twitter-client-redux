import { getBearerToken } from './twitter-client';

const CONSUMER_KEY = '1doYirbYlY0kpF3v0R120p2uH';
const CONSUMER_SECRET = 'cqUEMyzBiGQd4RE8U8M2hSwwDz73wGVwNwnIDP73wdmOgUDutD';

test('should return a valid bearer token', () => {
  expect.assertions(2);

  return getBearerToken(CONSUMER_KEY, CONSUMER_SECRET).then(response => {
    expect(response.token_type).toBe('bearer');
    expect(response.access_token).toBeDefined();
  });
});

test('should throw an exception with invalid keys', () => {
  expect.assertions(1);

  return getBearerToken('12345', 'abcde').catch(error => {
    expect(error).toBeDefined();
  });
});
