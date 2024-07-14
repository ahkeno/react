'use client';
import Link from "next/link"
import Image from "next/image";
import classes from './header.module.css';
import logo from '@/assests/logo.png'
import { usePathname } from "next/navigation";
import Classes from './header.module.css'
export default function Header(){
    const path = usePathname();
    return (
        <header className={classes.header}>
        <Link className={classes.logo} href="/">
            <Image src={logo} priority alt="logo"></Image>
            Next Level Food 
        </Link>
        <nav className={classes.nav}>
            <ul>
            <li>
                <Link href="/meals" className={path.startsWith('/meals')? classes.active:undefined}>Browse Meals</Link>
            </li>
            <li>
                <Link href="/community" className={path.startsWith('/community')?classes.active:undefined}>Foodies Community</Link>
            </li>
            </ul>
        </nav>
    </header>
    )
}