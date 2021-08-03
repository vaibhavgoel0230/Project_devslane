import { createContext } from "react";
import { User } from "./modals/User";

interface AppContextData {
  user?: User;
  setUser: (u: User) => void;
}

const AppContext = createContext<AppContextData>({
  user: undefined,
  setUser: () => {},
});

export default AppContext;
