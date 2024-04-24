import GamePadIcon from "./Icons/GamePadIcon";
import HistoryIcon from "./Icons/HistoryIcon";
import HomeIcon from "./Icons/HomeIcon";
import MoviesIcon from "./Icons/MoviesIcon";
import MusicIcon from "./Icons/MusicIcon";
import PlayListIcon from "./Icons/PlayListIcon";
import ProfileIcon from "./Icons/ProfileIcon";
import ShortsIcon from "./Icons/ShortsIcon";
import SubscriptionIcon from "./Icons/SubscriptionIcon";
import TrophyIcon from "./Icons/TrophyIcon";

export const YOUTUBE_LOGO =
  "https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg";

export const SIDEBAR_EXPLORE_LIST = [
  { Icon: MusicIcon, text: "Music" },
  { Icon: TrophyIcon, text: "Sports" },
  { Icon: GamePadIcon, text: "Gaming" },
  { Icon: MoviesIcon, text: "Movies" },
];

export const SIDEBAR_MAIN_LIST = [
  { Icon: HomeIcon, text: "Home" },
  { Icon: ShortsIcon, text: "Shorts" },
  { Icon: SubscriptionIcon, text: "Subscriptions" },
];

export const SIDEBAR_PROFILE_LIST = [
  { Icon: ProfileIcon, text: "Your Channel" },
  { Icon: HistoryIcon, text: "History" },
  { Icon: PlayListIcon, text: "Playlists" },
];

export const BUTTON_LIST = [
  "All",
  "Game Shows",
  "iOS",
  "Mixes",
  "Dramedy",
  "Samsung",
  "AI",
  "Web Development",
  "Cricket",
  "Lessons",
  "Technology",
  "Vlogs",
  "Martial Arts",
  "Food",
  "Travel",
  "Sports",
  "Autos",
  "Comedy",
];

export const YOUTUBE_API_KEY = "AIzaSyCnaujOXtf416HsuxgE06MaNoX0hB8OUrw";

export const YOUTUBE_API = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=25&regionCode=IN&key=${YOUTUBE_API_KEY}`;

export const YOUTUBE_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
