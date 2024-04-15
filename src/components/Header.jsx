import LogoContainer from "./LogoContainer"
import ProfileContainer from "./ProfileContainer"
import SearchContainer from "./SearchContainer"

const Header = () => {
  return <div className="grid grid-flow-col p-4">
    <LogoContainer/>
    <SearchContainer/>
    <ProfileContainer/>
  </div>
}

export default Header
