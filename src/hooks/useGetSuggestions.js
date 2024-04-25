import { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTION_API } from "../assets/constants";
import { useDispatch, useSelector } from "react-redux";
import { caching } from "../utils/searchSlice";

const useGetSuggestions = (searchQuery) => {
  const [suggestions, setSuggestions] = useState([]);
  const cache = useSelector((store) => store.search);
  const dispatch = useDispatch();


  useEffect(() => {
    let timeout;
    const fetchSuggestions = async () => {
      if (searchQuery) {
        const response = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
        const json = await response.json();
        setSuggestions(json[1]);
        dispatch(caching({ [searchQuery]: json[1] }));
      }
    };

    if (cache[searchQuery]) {
      setSuggestions(cache[searchQuery]);
    } else {
      timeout = setTimeout(fetchSuggestions, 200);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [searchQuery, cache]);

  return { suggestions };
};

export default useGetSuggestions;
