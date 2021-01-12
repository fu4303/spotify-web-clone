const SidebarOption = ({ value, Icon }) => {
  return (
    <div className="cursor-pointer transition duration-300 ease-in-out text-sidebarFont hover:text-white">
      <p>{value}</p>
    </div>
  );
};

export default SidebarOption;
