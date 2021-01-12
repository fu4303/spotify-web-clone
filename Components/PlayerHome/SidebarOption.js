const SidebarOption = ({ value, Icon }) => {
  return (
    <div className="cursor-pointer transition duration-300 ease-in-out text-sidebarFont hover:text-white flex my-3 px-2 p-1">
      {Icon && <Icon />}

      {!Icon ? <h4>{value}</h4> : <p className="ml-3">{value}</p>}
    </div>
  );
};

export default SidebarOption;
