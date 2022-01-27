import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
interface iDrbbblbeAndDarkmodeContextProps {
  children: ReactNode;
}

interface iDrbbblbeAndDarkmodeContextValue {
  darkMode: ReactNode;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const DrbbblbeAndDarkmodeContext = createContext(
  {} as iDrbbblbeAndDarkmodeContextValue
);

export function StateAndRequestContextProvider(
  props: iDrbbblbeAndDarkmodeContextProps
) {
  const { children } = props;
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DrbbblbeAndDarkmodeContext.Provider
      value={{ darkMode, setDarkMode }}
    >
      {children}
    </DrbbblbeAndDarkmodeContext.Provider>
  );
}
