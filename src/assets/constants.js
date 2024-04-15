import GamePadIcon from "./Icons/GamePadIcon";
import HomeIcon from "./Icons/HomeIcon";
import MoviesIcon from "./Icons/MoviesIcon";
import MusicIcon from "./Icons/MusicIcon";
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