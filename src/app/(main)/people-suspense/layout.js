import Link from "next/link";
import RBALogo from "@/assets/rba-logo.webp";
import Image from "next/image";

export default function ItemsLayout({children}) {
    return (
        <main>
            <div>
                <nav>
                    <ul>
                        <Link href="/">
                            <Image src={RBALogo.src} alt="RBA Logo" priority width={377/2} height={127/2}/>
                        </Link>
                    </ul>
                </nav>
            </div>
            {children}
        </main>
    )
}