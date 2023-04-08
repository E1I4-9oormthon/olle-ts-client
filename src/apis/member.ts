import axios from 'axios';
import { ModifiableMemberInfo } from 'global/types';

const member = {
  getMemberInfo: async () => {
    try {
      const memberInfo = await axios.get(`/member/info`, { withCredentials: true });
      return memberInfo.data.data;
    } catch {
      throw {
        code: 500,
        message: 'CANNOT_GET_MEMBER_INFO_FROM_SERVER',
      };
    }
  },
  modifyMemberInfo: async (data: ModifiableMemberInfo) => {
    try {
      await axios.patch(`/member/info`, data, { withCredentials: true });
    } catch {
      throw { code: 500, message: 'CANNOT_MODIFY_MEMBER_INFO' };
    }
  },
};

export { member };
