import { SidebarTypes } from "../types";

const Sidebar = ({
  userList,
  selectedUser,
  toggleSelectedUser,
}: SidebarTypes) => {
  return (
    <div className="sidebar">
      {userList.map((d) => (
        <div
          className={`${selectedUser.id === d.id ? "selectedUser" : ""} user`}
          key={d.id}
          onClick={() => toggleSelectedUser(d)}
        >
          <h3>{d.name}</h3>
          <p>{d.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
