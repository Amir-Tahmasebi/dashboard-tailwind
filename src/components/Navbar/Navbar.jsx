import { AiFillGitlab } from "react-icons/ai";
import { navItems } from "./list";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(0);
  const renderNavItems = navItems.map((item) => (
    <Link
      to={item.route}
      key={item.id}
      className={` custom-nav-item border-l-4 w-full min-h-max h-12 pr-4 flex items-center my-1 cursor-pointer transition-all ease-in duration-500 ${
        active === item.id
          ? "border-blue-600 text-blue-600 bg-gradient-to-l from-white via-blue-100  to-blue-400 hover:to-blue-500 hover:via-blue-200"
          : "border-gray-700 text-gray-700 bg-gradient-to-l  from-white hover:via-gray-100 hover:to-gray-500"
      }`}
      onClick={() => setActive(item.id)}
    >
      <item.icon className={`text-xl`} />
      <strong className={`mr-4 text-sm font-normal`}>{item.title}</strong>
    </Link>
  ));
  return (
    <nav className="lg:basis-1/5 h-full shadow-2xl bg-gray-100 flex flex-col justify-start align-center">
      <AiFillGitlab className="text-5xl self-center mt-8 border-r-4 rounded-full border-orange-500 pr-4" />
      <ul className="flex flex-col justify-start items-center md:mt-8">
        {renderNavItems}
      </ul>
    </nav>
  );
}
