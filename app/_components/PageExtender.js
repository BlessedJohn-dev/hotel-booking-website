// PRACTICE PRACTICE PRACTICE
"use client";

import {useState} from react;

/*
import { AcademicCapIcon, HomeIcon, UserIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    name: "Home",
    href: "/cabin",
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    name: "About",
    href: "/about",
    icon: <AcademicCapIcon className="h-5 w-5" />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <UserIcon className="h-5 w-5" />,
  },
];

function Navlinks() {
  return (
    <nav>
      <ul>
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href="href">{link.icon}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default navLinks;
*/

function PageExtender({ children }) {
    const [extendText, setExtendText] = useState(false)

    const displayText = extendText ? children : children.split(" ").slice(0, 30).join(' ') + "..."

  return <span>
    {displayText}
<button className="bg-accent-500 text-primary-50 p-5" onClick={() => setExtendText(!extendText)}>
  {extendText ? "show less" : "show more"}
</button>
  </span>;
}

export default PageExtender;
