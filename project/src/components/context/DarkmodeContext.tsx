import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react";

interface iStateAndRequestContextProvider {
  children: ReactNode;
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

interface iDarkmodeContextValue {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const DarkmodeContext = createContext(
  {} as iDarkmodeContextValue
);

export function StateAndRequestContextProvider(props: iStateAndRequestContextProvider) {
  const { children, darkMode, setDarkMode } = props;

  return (
    <DarkmodeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkmodeContext.Provider>
  );
}
