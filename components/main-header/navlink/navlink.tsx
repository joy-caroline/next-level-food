"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import classes from './navlink.module.css';

type NavlinkProps = {
    href: string,
    children: ReactNode
}

export default function Navlink({href, children}: NavlinkProps) {
    const path = usePathname();
  return (
    <Link
      href={href}
      className={path.startsWith(href) ? classes.active : undefined}
    >
      {children}
    </Link>
  );
}
