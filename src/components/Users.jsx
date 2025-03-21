import "boxicons/css/boxicons.min.css";
import Pagination from "./Pagination";
import { useState } from "react";

const usersData = [
  { name: "Jordan Stevenson", 
    username: "jordan.stevenson", 
    role: "Admin", 
    plan: "Enterprise", 
    billing: "Auto Debit", 
    status: "Pending", 
    image: "/images/avatar.png" },

  { name: "Richard Payne", 
    username: "richad247", 
    role: "Editor", 
    plan: "Team", 
    billing: "Auto Debit", 
    status: "Active", 
    image: "/images/avatar2.png" },

  { name: "Jennifer Summers", 
    username: "summers.45", 
    role: "Author", 
    plan: "Company", 
    billing: "Auto Debit", 
    status: "Active", 
    image: "/images/avatar3.png" },

  { name: "Mr. Justin Richardson", 
    username: "jr.3734", 
    role: "Editor", 
    plan: "Team", 
    billing: "Manual Paypal", 
    status: "Pending", 
    image: "/images/avatar4.png" },

  { name: "Nicholas Tanner", 
    username: "nicholas.t", 
    role: "Maintainer", 
    plan: "Company", 
    billing: "Manual Cash", 
    status: "Active", 
    image: "/images/avatar5.png" },

  { name: "Crystal Mays", 
    username: "mays.754", 
    role: "Editor", 
    plan: "Team", 
    billing: "Manual Cash", 
    status: "Pending", 
    image: "/images/avatar6.png" },

  { name: "Mary Garcia", 
    username: "mary.garcia", 
    role: "Maintainer", 
    plan: "Team", 
    billing: "Auto Debit", 
    status: "Inactive", 
    image: "/images/avatar2.png" },

  { name: "Megan Roberts", 
    username: "roberts.3456", 
    role: "Subscriber", 
    plan: "Company", 
    billing: "Manual Paypal", 
    status: "Active", 
    image: "/images/avatar3.png" },

  { name: "Joseph Oliver", 
    username: "joseph.87", 
    role: "Subscriber", 
    plan: "Basic", 
    billing: "Manual Cash", 
    status: "Pending", 
    image: "/images/avatar4.png" },
];

const getRoleIcon = (role) => {
  switch (role) {
    case "Admin":
      return "bx-crown text-indigo-500";
    case "Editor":
      return "bx-edit text-amber-500";
    case "Author":
      return "bx-desktop text-red-500";
    case "Maintainer":
      return "bx-pie-chart-alt text-cyan-500";
    case "Subscriber":
      return "bx-user text-lime-500";
    default:
      return "";
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-500";
    case "Pending":
      return "bg-amber-100 text-amber-500";
    case "Inactive":
      return "bg-purple-100 text-purple-500";
    default:
      return "bg-gray-100 text-gray-500";
  }
};

export default function UsersTab() {
  const [users, setUsers] = useState(usersData);
  const [showDeleteDetails, setShowDeleteDetails] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [showDetailDetails, setShowDetailDetails] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDelete = (username) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.username !== username));
    setShowDeleteDetails(false);
  };

  return (
    <div className="p-1 bg-gray-100 min-h-screen">
    
      {/* Statistics */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { header: "Session", 
            title: "Total Users", 
            value: "21,459", 
            change: "(+29%)", 
            icon: "bx bx-group", 
            bgColor: "text-indigo-500 bg-indigo-100" },

          { header: "Paid Users", 
            title: "Last Week Analytics", 
            value: "4,567", 
            change: "(+18%)", 
            icon: "bx bx-user-plus", 
            bgColor: "text-red-500 bg-red-100" },

          { header: "Active Users", 
            title: "Last Week Analytics", 
            value: "19,860", 
            change: "(-14%)", 
            icon: "bx bx-user-check", 
            bgColor: "text-green-500 bg-green-100" },

          { header: "Pending Users", 
            title: "Last Week Analytics", 
            value: "237", 
            change: "(+42%)", 
            icon: "bx bx-user-voice", 
            bgColor: "text-amber-500 bg-amber-100" },

        ].map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <p className="text-gray-500">{card.header}</p>
              <h3 className="text-xl font-bold">
                {card.value} 
                <span className={`text-sm ml-1 ${index === 2 ? "text-red-400" : "text-green-400"}`}>
                {card.change}
                </span>
             </h3>

              <p className="text-gray-500">{card.title}</p>
            </div>
            <div className={`w-12 h-12 flex items-center justify-center ${card.bgColor} text-2xl rounded-md`}>
              <i className={card.icon}></i>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Users List</h2>

      {/* Users Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b font-semibold">
              <th className="pb-2">USER</th>
              <th className="pb-2">ROLE</th>
              <th className="pb-2">PLAN</th>
              <th className="pb-2">BILLING</th>
              <th className="pb-2 text-right pr-6">STATUS</th>
              <th className="pb-2 text-right">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-4 flex items-center space-x-3 mt-2">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-gray-500 text-sm">{user.username}</p>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center space-x-2">
                    <i className={`bx ${getRoleIcon(user.role)} text-xl`}></i>
                    <span>{user.role}</span>
                  </div>
                </td>
                <td className="py-4">{user.plan}</td>
                <td className="py-4">{user.billing}</td>
                <td className="py-4 text-right">
                  <span
                    className={`px-3 py-1 rounded-md text-sm font-semibold ${getStatusColor(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-4 text-right">
                  <div className="flex items-center justify-end space-x-4 text-xl">
                    <button
                      className="text-gray-500 hover:text-red-500"
                      onClick={() => {
                        setUserToDelete(user.username);
                        setShowDeleteDetails(true);
                      }}
                    >
                      <i className="bx bx-trash"></i>
                    </button>
                    <button 
                      className="text-gray-500 hover:text-blue-500"
                      onClick={() => {
                        setSelectedUser(user);
                        setShowDetailDetails(true);
                      }}
                    >
                      <i className="bx bx-show"></i>
                    </button>
                    <button className="text-gray-500 hover:text-gray-800">
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <p className="flex items-center text-gray-400">Showing 1 to 10 of 50 entries</p>
          <div className="flex items-center mb-8">
            <Pagination />
          </div>
        </div>
      </div>

      {/* Delete Confirmation */}
      {showDeleteDetails && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-80">
            <h3 className="text-lg font-semibold">Are you sure you want to delete this user?</h3>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={() => setShowDeleteDetails(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white"
              >
                No
              </button>
              <button
                onClick={() => handleDelete(userToDelete)}
                className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* User Details */}
      {showDetailDetails && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-md w-1/3 max-w-3xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">User Details</h3>
            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <img src={selectedUser.image}
                  alt={selectedUser.name}
                className="w-16 h-16 object-cover mb-6"
                />
              </div>
              <div>
                <p className="font-medium text-gray-700"><strong>Name:</strong></p>
                <p className="text-gray-600">{selectedUser.name}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700"><strong>Username:</strong></p>
                <p className="text-gray-600">{selectedUser.username}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700"><strong>Role:</strong></p>
                <p className="text-gray-600">{selectedUser.role}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700"><strong>Plan:</strong></p>
                <p className="text-gray-600">{selectedUser.plan}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700"><strong>Billing:</strong></p>
                <p className="text-gray-600">{selectedUser.billing}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700"><strong>Status:</strong></p>
                <p className="text-gray-600">{selectedUser.status}</p>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={() => setShowDetailDetails(false)}
                className="bg-indigo-200 text-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-400 transition"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}


      <footer className="mt-6 flex justify-between text-gray-500 text-sm"></footer>
    </div>
  );
}
