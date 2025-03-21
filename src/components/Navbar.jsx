import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const avatarRef = useRef(null);

  // Close the dropdown if the user clicks outside the avatar or dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        avatarRef.current &&
        !avatarRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-[270px] w-[calc(100%-275px)] bg-white shadow-md p-4 flex justify-end">

      {/* Avatar & Dropdown */}
      <div className="relative">
        {/* Avatar + Green Dot */}
        <div
          ref={avatarRef}
          className="relative cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)} // Toggle dropdown on click
        >
          <img
            src="/images/avatar.png" // Replace with your avatar image
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2"
          >
            <ul className="text-gray-700">
              <li className="p-2 hover:bg-green-100 hover:text-green-400 cursor-pointer">Profile</li>
              <li className="p-2 hover:bg-red-100 hover:text-red-400 cursor-pointer">Log Out</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
