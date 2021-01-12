import SidebarOption from "./SidebarOption";
import SpotifyLogo from "../Images/SpotifyLogo";

import LibraryMusicOutlinedIcon from "@material-ui/icons/LibraryMusicOutlined";
import SearchIcon from "@material-ui/icons/Search";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";

import { useContext } from "react";
import { StateContext } from "../Context/StateContext";

import styles from "../../styles/sidebarIcons.module.css";

const Sidebar = () => {
  const { playlist } = useContext(StateContext);

  console.log(playlist);

  return (
    <div className="h-screen bg-black pl-3 pr-3  ">
      <div className="flex justify-center cursor-pointer my-2">
        <SpotifyLogo height={80} width={150} />
      </div>
      <SidebarOption value="Home" Icon={HomeOutlinedIcon} />
      <SidebarOption value="Search" Icon={SearchIcon} />
      <SidebarOption value="Your Library" Icon={LibraryMusicOutlinedIcon} />

      <strong className="text-sidebarFont ml-2">PLAYLISTS</strong>
      <hr className="m-1 border-1 border-sidebarLine" />

      <div className={styles.scroll}>
        {playlist === null || undefined ? (
          <div></div>
        ) : (
          playlist?.items?.map((p) => (
            <SidebarOption value={p.name} key={p.name} />
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;


// flex-none lg:min-w-15 sm:min-w-15 lg:max-w-20 lg:flex-0 xl:flex-0