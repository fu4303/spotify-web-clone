import SpotifyNameLogo from "../Images/SpotifyNameLogo";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <div class="h-screen flex-none lg:min-w-15 sm:min-w-25 bg-black">
      <div className="flex justify-center">
        <SpotifyNameLogo />
      </div>
      <SidebarOption value="Home" />
      <SidebarOption value="Search" />
      <SidebarOption value="Your Librar" />
    </div>
  );
};

export default Sidebar;
