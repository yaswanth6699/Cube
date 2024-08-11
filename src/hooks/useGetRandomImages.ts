import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ContentImgTypes } from "../types";

export const useGetRandomImages = (id: string) => {
  // always use try, catch block to make sure the code wont break when there is any error and add appropriate console.
  // or in actual products we can use sentry to capture error messages for better debugging.
  const randomPage = Math.floor(Math.random() * 100);
  const fetchImagesList = async () => {
    try {
      const { data } = await axios.get(
        `https://picsum.photos/v2/list?page=${randomPage}&limit=9`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  return useQuery<ContentImgTypes[]>({
    queryKey: ["random-images", id],
    queryFn: fetchImagesList,
    refetchInterval: 10000,
  });
};
