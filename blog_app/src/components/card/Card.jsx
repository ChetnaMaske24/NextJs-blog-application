import Image from "next/image";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src="./p1.jpeg" alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;