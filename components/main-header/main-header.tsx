import Link from "next/link";
import Image from "next/image";

import Logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
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
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foddies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
