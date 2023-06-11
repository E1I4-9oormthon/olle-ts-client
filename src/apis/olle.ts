import axios from 'axios';
import { NewOlle } from 'global/types';

const olle = {
  createOlle: async (data: NewOlle) => {
    try {
      await axios.post(`/olle`, data, { withCredentials: true });
    } catch {
      throw {
        code: 500,
        message: 'CANNOT_GET_MEMBER_INFO_FROM_SERVER',
      };
    }
  },
};

export { olle };
