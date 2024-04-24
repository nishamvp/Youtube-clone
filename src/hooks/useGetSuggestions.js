import { useEffect, useState } from "react"
import { YOUTUBE_SUGGESTION_API } from "../assets/constants"

const useGetSuggestions = (searchQuery)=>{
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
      const fetchSearchQuery = async () => {
        const suggestionData = await fetch(YOUTUBE_SUGGESTION_API + searchQuery)
        const json = await suggestionData.json()
        setSuggestions(json[1])
      }
      
      fetchSearchQuery()
    }, [searchQuery])
    return {suggestions}
}


export default useGetSuggestions