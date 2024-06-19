import Link from "next/link";
import RBALogo from "@/assets/rba-logo.webp";
import Image from "next/image";
import styles from "./main-header.module.css";

export default function MainHeader() {

    return (
        <div className={styles.mainHeader}>
            <Link href="/">
                <Image src={RBALogo.src} alt="RBA Logo" height={43.1953} width={128.219} />
             </Link>
            <div>
                <nav className='app-link'>
                    <ul>
                        <li>
                            <Link href="/people">People</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}