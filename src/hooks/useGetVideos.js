import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../assets/constants";
import { useDispatch } from "react-redux";
import { setPopularVideos } from "../utils/appSlice";

const useGetVideos = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getVideoData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(YOUTUBE_API, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const json = await response.json();
        dispatch(setPopularVideos(json.items));
      } catch (error) {
        console.error("Error getting video data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getVideoData();
  }, [dispatch]);

  return { isLoading }; 
};

export default useGetVideos;
