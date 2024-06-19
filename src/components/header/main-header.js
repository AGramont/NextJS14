"use client";

import Link from "next/link";
import RBALogo from "@/assets/rba-logo.webp";
import Image from "next/image";
import styles from "./main-header.module.css";
import { usePathname } from "next/navigation";

export default function MainHeader() {

    const pathname = usePathname();
    console.log("Pathname: ", pathname);

    const links = [
        { label: "People", href: "/people"}
    ]

    return (
        <div className={styles.mainHeader}>
            <Link href="/">
                <Image src={RBALogo.src} alt="RBA Logo" height={43.1953} width={128.219} />
             </Link>
            <div>
                <nav className='app-link'>
                    <ul>
                        {
                            links.map(link => {
                                console.log("link: ", link);
                                const thisClassName = pathname.startsWith(link.href) ? "active-link" : "";
                                console.log("thisClassName: ", thisClassName);
                                return <li key={link.href}>
                                    <Link href={link.href} className={thisClassName}>{link.label}</Link>
                                </li>
                            })
                        }
                        <li>
                            
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}