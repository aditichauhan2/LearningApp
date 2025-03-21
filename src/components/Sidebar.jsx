import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation(); // Get current URL path

  const menuItems = [
    { name: "Dashboard", path: "/", icon: "bx bx-home" },
    { name: "eCommerce", path: "/commerce", icon: "bx bx-cart" },
    { name: "Users", path: "/users", icon: "bx bx-user" },
  ];

  return (
    <div className="w-64 bg-white p-5 shadow-md fixed top-0 left-0 h-screen overflow-y-auto">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-6">
        <img src="/images/logo.png" alt="Logo" className="w-6 h-6" />
        <h1 className="text-2xl font-bold">Logo</h1>
      </div>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`flex items-center space-x-2 p-2 rounded w-full transition-colors ${
                location.pathname === item.path
                  ? "bg-indigo-500 text-white" 
                  : "hover:bg-indigo-100 hover:text-indigo-400"
              }`}
            >
              <i className={`${item.icon} text-xl`}></i>
              <span>{item.name}</span>
              <i className="bx bx-chevron-right flex items-end"></i>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
