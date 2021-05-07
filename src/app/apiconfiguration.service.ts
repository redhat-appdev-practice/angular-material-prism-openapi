import {Configuration} from '../sdk';
import { Environment } from '../environments/environment';

export const configFactory = (env: Environment) => {
  return new Configuration({ basePath: env.apiBaseUrl });
};
