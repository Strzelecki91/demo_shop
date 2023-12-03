import { ChangeEvent, createContext, FormEvent } from "react";
import { useUsers } from "../Hooks/useUsers";

export type usersType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type UsersContextProps = {
  users: usersType[];

  newUserInputValue: usersType;
  addUser: () => Promise<any>;
  handleInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNewUser: (
    event: React.FormEvent<HTMLFormElement>,
    userId: number
  ) => Promise<void>;
  setUsers: (value: React.SetStateAction<usersType[]>) => void;
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

    newUserInputValue,
    addUser,
    handleNewUser,
    handleInputValue,
    setUsers,
  } = useUsers();
  return (
    <UserContext.Provider
      value={{
        users,

        newUserInputValue,
        addUser,
        handleNewUser,
        handleInputValue,
        setUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
