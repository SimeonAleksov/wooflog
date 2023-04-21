import Image from 'next/image'
import logoImg from "../public/images/profile.png";
import navbarStyles from "./Navbar.module.scss"
import {NavLink} from "./NavLink";

const navLinks = [
  { name: "Home",
   path: "/"
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

export function NavBar() {
  return (
    <nav className={navbarStyles.nav}>
      <Image src={logoImg} alt="logo" width={50} height={50} className={navbarStyles.nav__logo} />
      {navLinks.map((link, index) => {
          return (
              <NavLink href={link.path} key={index}>
                  {link.name}
              </NavLink>
          )
      })}
    </nav>
  );
}
