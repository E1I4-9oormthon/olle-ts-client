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
  getOlleList: async (start: number, count: number) => {
    try {
      let olleListData;
      if (start >= 0 && count >= 0) {
        olleListData = await axios.get(`/olle?start=${start}&count=${count}`);
      } else {
        olleListData = await axios.get(`/olle`);
      }
      return olleListData.data.data;
    } catch {
      throw {
        code: 500,
        message: 'CANNOT_GET_MEMBER_INFO_FROM_SERVER',
      };
    }
  },
};

export { olle };
