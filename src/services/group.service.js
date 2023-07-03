import http from "../http/http-common";
import { groupsAPI } from "../http/apiURL";

class GroupService {
  getAllGroups(params) {
    return http.get(`${groupsAPI.getallgroups}?${params}`);
  }

  getGroupById(groupId) {
    return http.get(`${groupsAPI.getallgroupsbyid}/${groupId}`);
  }

  deleteGroupById(groupId) {
    return http.delete(`${groupsAPI.deletegroupbyid}/${groupId}`);
  }
}

export default new GroupService();
