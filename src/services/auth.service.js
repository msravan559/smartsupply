import http from '../http/http-common';
import { authAPI } from '../http/apiURL';

class AuthService {
  login(payload) {
    return http.put(authAPI.auth, payload);
  }

  logout(payload) {
    return http.delete(authAPI.auth, { data: payload });
  }

  getAllUsers() {
    return http.get(authAPI.users);
  }

  changePassword(payload, reqHeaders) {
    return http.post(authAPI.changePassword, payload, reqHeaders);
  }

  forceLogout() {
    return http.post(authAPI.forceLogout);
  }
}

export default new AuthService();
