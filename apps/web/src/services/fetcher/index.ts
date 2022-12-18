import axios from "axios";

// TODO: error handling

export const fetcher = async (key: string) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${key}`);

  return res.data;
};
