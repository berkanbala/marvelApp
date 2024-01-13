import { ThemeMarvel } from "../../themeSwitch/themeMarvel";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import Marvel from "../../../../media/logo/marvel2.png";
import classNames from "classnames";

export const Header = (props: Props) => {
  const { className } = props;
  return (
    <div className={classNames(className, styles.container)}>
      <ul>
        <li>
          {/* <Link to="/"> */}
          <Link to={"https://www.marvel.com"} target="blank">
            <img alt="" src={Marvel} />
            {/* </Link> */}
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.home}>
            Home
          </Link>
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
