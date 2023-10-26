import React from "react";
import styles from "./footer.module.scss";
import classNames from "classnames";

export const Footer = (props: Props) => {
  const { className } = props;

  return (
    <div className={classNames(className, styles.container)}>
      &copy; {new Date().getFullYear()} <span> |Marvel App| </span>
    </div>
  );
};

interface Props {
  className: string;
}
