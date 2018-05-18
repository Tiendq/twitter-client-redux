import { CONSUMER_KEY, CONSUMER_SECRET } from './config';
import { getBearerToken } from './twitter-client';

describe('Authenticate with getBearerToken', () => {
  test('should return a valid bearer token', () => {
    expect.assertions(2);
    return getBearerToken(CONSUMER_KEY, CONSUMER_SECRET).then(response => {
      expect(response.token_type).toBe('bearer');
      expect(response.access_token).toBeDefined();
    });
  });
});
