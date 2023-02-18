const SideMenu = ({setSelected, selected}) => {
  const menuItems = ["Entelect", "ZimSwitch", "AfroSoft"];

  return (
    <div className="space-y-4 font-rubik-regular border-l border-gray-500 ">
      {menuItems.map((item) => (
        <div className={selected.toLowerCase() === item.toLowerCase() ? "border-l-yello border-l-2 px-4 py-2 text-yello bg-black bg-opacity-10":"px-4 py-2"} key={item} onClick={()=>setSelected(item)}>{item}</div>
      ))}
    </div>
  );
};
export default SideMenu;
