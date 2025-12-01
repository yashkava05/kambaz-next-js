import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";
const MODULES_API = `${HTTP_SERVER}/api/modules`;

export const deleteModule = async (moduleId: string) => {
  const response = await axiosWithCredentials.delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};

export const updateModule = async (module: any) => {
  const { data } = await axiosWithCredentials.put(`${MODULES_API}/${module._id}`, module);
  return data;
};