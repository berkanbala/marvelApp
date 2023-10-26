import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { ThemeMarvel } from "../../themeSwitch/themeMarvel";
import Marvel from "../../../../media/logo/marvel2.png";
import classNames from "classnames";

export const Header = (props: Props) => {
  const { className } = props;
  return (
    <div className={classNames(className, styles.container)}>
      <ul>
        <li>
          <Link to="/">
            <img alt="" src={Marvel} />
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <ThemeMarvel />
        </li>
      </ul>
    </div>
  );
};

interface Props {
  className: string;
}
