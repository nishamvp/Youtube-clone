import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/liveChatSlice";

const useGetLiveChats = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchLiveMessage = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();

        dispatch(
          addMessage({
            name:
              (data?.results[0]?.name?.first ?? "") +
              " " +
              (data?.results[0]?.name?.last ?? ""),
            text: data?.results[0]?.location?.timezone?.description,
          })
        );
      } catch (err) {
        console.error(err);
      }
    };
    const interval = setInterval(() => {
      fetchLiveMessage();
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }, []);
};

export default useGetLiveChats;
