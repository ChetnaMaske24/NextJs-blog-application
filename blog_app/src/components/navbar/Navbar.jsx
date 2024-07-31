import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>Cheblog</div>
      <div className={styles.links}>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;