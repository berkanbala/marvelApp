import { createContext, useContext, useState } from "react";
import styles from "./themeContext.module.scss";
import classNames from "classnames";

const ThemeContext = createContext({} as any);
export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(false);

  const changeAppTheme = () => setTheme(!theme);
  const contextValue: ContextValueProps = { changeAppTheme, theme };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={classNames(styles.container, theme && styles.darkTheme)}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

interface Props {
  children: React.ReactNode;
}

interface ContextValueProps {
  changeAppTheme: () => void;
  theme: boolean;
}
