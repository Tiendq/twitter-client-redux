let config = require('dotenv').config();
import { getBearerToken } from './twitter-client';

describe('Authenticate with getBearerToken', () => {
  test('should return a valid bearer token', () => {
    expect.assertions(2);
    return getBearerToken(process.env.CONSUMER_KEY, process.env.CONSUMER_SECRET).then(response => {
      expect(response.token_type).toBe('bearer');
      expect(response.access_token).toBeDefined();
    });
  });
});
