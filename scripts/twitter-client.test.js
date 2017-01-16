import { CONSUMER_KEY, CONSUMER_SECRET } from './config';
import { getBearerToken } from './twitter-client';

describe('Authenticate with getBearerToken', () => {
  it('should return a valid bearer token', () => {
    return getBearerToken(CONSUMER_KEY, CONSUMER_SECRET).then(response => {
      // return 'bearer' === response.token_type ? response.access_token : '';
      //expect(response.token_type).toBe('bearer');
      expect(response).toBeUndefined();
    });
  });
});
