import AXIOS from '../http/http-common';
import { configAPI } from '../http/apiURL';

class ConfigService {
  getAboutInfo() {
    return AXIOS.get(configAPI.aboutInfo);
  }
}

export default new ConfigService();
