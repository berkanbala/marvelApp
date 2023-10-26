import styles from "./themeMarvel.module.scss";
import { useThemeContext } from "../../../context/themeContext";

export const ThemeMarvel = () => {
  const { changeAppTheme } = useThemeContext();

  return (
    <div className={styles.toggleThemeWrapper}>
      <span>☀️</span>
      <label className={styles.toggleTheme} htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={changeAppTheme} />
        <div className={styles.sliderRound}></div>
      </label>
      <span>🌒</span>
    </div>
  );
};
