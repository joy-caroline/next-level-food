import Link from "next/link";
import Image from "next/image";

import Logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Navlink from "./navlink";
import MainHeaderBackground from "../main-header-background";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image src={Logo} alt="A plate with food on in" />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Navlink href="/meals">Browse Meals</Navlink>
              {/* <Link href="/meals" className={path.startsWith("/meals") ? classes.active : undefined}>Browse Meals</Link> */}
            </li>
            <li>
              <Navlink href="/community">Foddies Community</Navlink>

              {/* <Link href="/community" className={path.startsWith("/community") ? classes.active : undefined}>Foddies Community</Link> */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
