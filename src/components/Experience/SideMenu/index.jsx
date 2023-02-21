const SideMenu = ({setSelected, selected, menuItems}) => {

  return (
    <div className="flex justify-between sm:justify-start sm:flex-col sm:space-y-4 font-rubik-regular sm:border-l border-gray-500 ">
      {menuItems.map((item) => (
        <div className={selected.toLowerCase() === item.toLowerCase() ? "border-yello sm:border-l-2 sm:border-b-0 border-b-2 px-4 py-2 text-yello bg-black bg-opacity-10":"px-4 py-2"} key={item} onClick={()=>setSelected(item)}>{item}</div>
      ))}
    </div>
  );
};
export default SideMenu;
