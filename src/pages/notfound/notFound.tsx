import styles from "./notFound.module.scss";
import IronMan from "../../common/media/images/ironMan.png";

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404 Page Not Found</h1>
      <div className={styles.content}>
        <div className={styles.image}>
          <img alt="Marvel Not Found" src={IronMan} width={400} height={550} />
        </div>
      </div>
    </div>
  );
};
