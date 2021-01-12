import HomeIcon from "../Images/sidebar/HomeIcon";
import SearchIcon from "../Images/sidebar/SearchIcon";
import LibraryIcon from "../Images/sidebar/LibraryIcon";
import SpotifyLogo from "../Images/SpotifyLogo";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <div className="h-screen flex-none lg:min-w-15 sm:min-w-25 bg-black pl-3 pr-3">
      <div className="flex justify-center cursor-pointer">
        <SpotifyLogo height={80} width={150} />
      </div>
      <div className="flex">
        <HomeIcon height={24} width={24} />
        <SidebarOption value="Home" />
      </div>
      <div className="flex">
        <SearchIcon height={24} width={24} />
        <SidebarOption value="Search" />
      </div>
      <div className="flex">
        <LibraryIcon height={24} width={24} />
        <SidebarOption value="Your Library" />
      </div>
    </div>
  );
};

export default Sidebar;
