import SearchIcon from "../Images/sidebar/SearchIcon";

const SidebarOption = ({ value }) => {
  return (
    <div className="cursor-pointer transition duration-300 ease-in-out text-sidebarFont hover:text-white">
      <SearchIcon />
      <p>{value}</p>
    </div>
  );
};

export default SidebarOption;
