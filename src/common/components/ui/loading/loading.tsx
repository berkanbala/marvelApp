<<<<<<< HEAD
import classnames from "classnames";
import styles from "./loading.module.scss";

export const Loading = ({ className }: Props) => {
  return (
    <div className={classnames(styles.container, className)}>
=======
import styles from "./loading.module.scss";
import classNames from "classnames";
export const Loading = ({ className }: Props) => {
  return (
    <div className={classNames(styles.container, className)}>
>>>>>>> ec06fc633963c974a05f46647448562ed22c95e7
      <div className={styles.loadingIcon} />
    </div>
  );
};

interface Props {
  className?: string;
}
