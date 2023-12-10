import { ChangeEvent, createContext, FormEvent, KeyboardEvent } from "react";
import { useUsers } from "../Hooks/useUsers";

export type usersType = {
  id: number;
  firstName: string;
  lastName: string;
  login: string;
  email: string;
  password: string;
};

type UsersContextProps = {
  users: usersType[];
  emailError: string;
  loginError: string;
  newUserInputValue: usersType;
  loginInputValue: {
    email: string;
    password: string;
  };
  firstNameError: string;
  lastNameError: string;
  passwordError: string;
  complexity: number;
  regExps: RegExp[];
  addUser: () => Promise<any>;
  handleInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNewUser: (
    event: React.FormEvent<HTMLFormElement>,
    userId: number
  ) => Promise<void>;
  setUsers: (value: React.SetStateAction<usersType[]>) => void;
  handleProgress: (event: KeyboardEvent<HTMLInputElement>) => void;
  handleLogin: (login: string, password: string) => Promise<void>;
  handleLogout: () => void;
  // loginUser: (login: string, password: string) => Promise<void>;
};

type UserProviderProps = {
  children: JSX.Element;
};
export const UserContext = createContext<UsersContextProps>(
  {} as UsersContextProps
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const {
    users,
    emailError,
    newUserInputValue,
    loginError,
    firstNameError,
    lastNameError,
    complexity,
    regExps,
    passwordError,
    loginInputValue,
    addUser,
    handleNewUser,
    handleInputValue,
    setUsers,
    handleProgress,
    handleLogin,
    handleLogout,
    // loginUser,
  } = useUsers();
  return (
    <UserContext.Provider
      value={{
        users,
        emailError,
        newUserInputValue,
        loginError,
        firstNameError,
        lastNameError,
        complexity,
        regExps,
        passwordError,
        loginInputValue,
        addUser,
        handleNewUser,
        handleInputValue,
        setUsers,
        handleProgress,
        handleLogin,
        handleLogout,
        // loginUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
