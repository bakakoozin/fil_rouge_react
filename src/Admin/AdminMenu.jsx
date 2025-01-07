import { NavLink } from "react-router-dom";

function AdminMenu() {
  return (
    <>
      <NavLink to={"/admin"}>Admin</NavLink>
    </>
  );
}

export default AdminMenu;
