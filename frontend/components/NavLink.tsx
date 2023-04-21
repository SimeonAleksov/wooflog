import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import navbarStyles from "./Navbar.module.scss"


interface NavLinkProps {
  href: string;
  children: string;
}

export const NavLink: React.FC<NavLinkProps> = ({href, children}) => {
  const router = useRouter();
  return (
      <Link className={router.pathname == href ? navbarStyles["nav__item--active"] : navbarStyles.nav__item} href={href}>
        {children}
      </Link>
  );
};
