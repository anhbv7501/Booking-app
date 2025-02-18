import axiosHelper from '../common/axiosHelper';
import constants from '../configures/constants';

const url = (category) => {
  return `category/${category ? category : 1}/product`;
};

export const getList = () => {
  return axiosHelper.get(`https://6012349784695f0017779d27.mockapi.io/vanh/product`);
};
// export const getList = (payload) => {
//   const { cate } = payload;
//   return axiosHelper.get(`${constants.API_URL}/${url(cate.id)}`);
// };

export function Search(params) {
  return axiosHelper.get(`${constants.API_URL}/${url(1)}?search=${params}`);
}

export const addProduct = (data) => {
  const { category } = data;
  return axiosHelper.post(`${constants.API_URL}/${url(category)}`, data);
};

export const updateProduct = (payload) => {
  return axiosHelper.put(
    `${constants.API_URL}/${url(payload.category)}/${payload.id}`,
    payload,
  );
};

export const deleteProduct = (data) => {
  return axiosHelper.delete(
    `${constants.API_URL}/${url(data.categoryId)}/${data.id}`,
  );
};
