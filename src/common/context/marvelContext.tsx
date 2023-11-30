// import { useGetMarvel } from "common/hooks/useGetMarvel";
import { createContext, useContext } from "react";
const AppContext = createContext<IAppContext>({} as any);

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: Props) => {
  // const [heroes, setHeroes] = useState();
  // const { characters, charactersLoading, charactersError } = useGetMarvel();

  return (
    <AppContext.Provider
      value={{}}
      // value={{
      //   data: { characters, charactersError, charactersLoading },
      // }}
    >
      {children}
    </AppContext.Provider>
  );
};
interface Props {
  children: React.ReactNode;
}

interface IAppContext {
  data?: {
    characters: any;
    charactersError: any;
    charactersLoading: any;
  };
}
