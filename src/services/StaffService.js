import axiosHelper from "../common/axiosHelper";
import constants from "../configures/constants";

export const getList = () => {
    return axiosHelper.get(`${constants.API_URL}/staff`);
}