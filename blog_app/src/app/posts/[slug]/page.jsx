import styles from "./singlePage.module.css";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.content}>
            <div className={styles.post}>
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: data?.desc }}
              />
              <div className={styles.comment}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
