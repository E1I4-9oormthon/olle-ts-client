import axios from 'axios';

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
};

export { member };
