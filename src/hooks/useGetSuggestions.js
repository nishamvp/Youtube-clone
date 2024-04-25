import { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTION_API } from "../assets/constants";

const useGetSuggestions = (searchQuery) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    let timeout;

    const fetchSuggestions = async () => {
      if (searchQuery) {
        timeout = setTimeout(async () => {
          const response = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
          const json = await response.json();
          setSuggestions(json[1]);
        }, 200);
      }
    };

    fetchSuggestions();

    return () => {
      clearTimeout(timeout);
    };
  }, [searchQuery]);

  return { suggestions };
};

export default useGetSuggestions;
