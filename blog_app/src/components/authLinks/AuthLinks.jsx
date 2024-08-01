import styles from "./authLinks.module.css";

const AuthLinks = () => {
    const  status  = "notauthenticated"
     return(
     <>
    {status === "unauthenticated" ? (
      <Link href="/login" className={styles.link}>
        Login
      </Link>
    ) : (
      <>
        <Link href="/write" className={styles.link}>
          Write
        </Link>
        <span className={styles.link} onClick={signOut}>
          Logout
        </span>
      </>
    )}
    </>
    );
  };
  
  export default AuthLinks;