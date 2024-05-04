import axios from "../libs/axios";
import requests from "../libs/request";
export const getFoods = async () => {
  try {
    const { data } = await axios.get(requests.getFetchFood);
    return data;
  } catch (error) {
    console.log(JSON.stringify(error));
    return null;
  }
};

//page datas

export const getPageData = async () => {
  const foodsInventories = await getFoods();
  return {
    foodsInventories,
  };
};
