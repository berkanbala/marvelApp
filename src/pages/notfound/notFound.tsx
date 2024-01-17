import styles from "./notFound.module.scss";
// import IronMan from "../../common/media/images/ironman.jpg";
import IronMan from "../../common/media/images/ironMan.png";
export const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>404 Page Not Found</h1>
        <div className={styles.image}>
          <img alt="Marvel Not Found" src={IronMan} />
        </div>
      </div>
    </div>
  );
};
