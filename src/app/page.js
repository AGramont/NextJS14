import Image from "next/image";
import styles from "./page.module.css";
import Mask from "@/components/svg/mask"

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.topInfo}>
        <div className={styles.teaserContainer}>
          <div className={styles.teaser}>
            Designed to Deliver
          </div>
          <div className={styles.teaser2}>
            NextJS 14 Demo
          </div>
        </div>
        
        <div className={styles.topInfoFooter}>
          <Mask/>
        </div>
      </div>
    </div>
  );
}
