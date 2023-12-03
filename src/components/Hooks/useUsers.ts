import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { usersType } from "../context/UserContext";

type useUserData = {
  users: usersType[];

  newUserInputValue: usersType;
  addUser: () => Promise<any>;
  handleNewUser: (
    event: React.FormEvent<HTMLFormElement>,
    userId: number
  ) => Promise<void>;
  handleInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
  setUsers: (value: React.SetStateAction<usersType[]>) => void;
};

export const useUsers = (): useUserData => {
  const [users, setUsers] = useState<usersType[]>([]);
  const [countUsers, setCountUsers] = useState(users.length);
  const URL = "http://localhost:5000/users";
  const [newUserInputValue, setNewUserInputValue] = useState<usersType>({
    id: countUsers,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { firstName, lastName, email, password } = newUserInputValue;

  const getUser = async () => {
    try {
      const response = await fetch(`${URL}`);
      if (!response.ok)
        throw new Error("ups something gose wrong with getting user data");
      const data = await response.json();
      console.log("pobiera usera", data);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async () => {
    setCountUsers((prev) => prev + 1);
    console.log("spr 1");
    try {
      const data = await fetch(`${URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }),
      });
      if (!data.ok) throw new Error("something goes wrong while adding user");
      const response = await data.json();
      console.log("Dodało użytkownika", response);

      return response;
    } catch (error) {
      console.log(error);
    }
  };
  //   const addUser = async () => {
  //     setCountUsers((prev) => prev + 1);
  //     try {
  //       const data = await fetch(`${URL}`, {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           firstName: firstName,
  //           lastName: lastName,
  //           email: email,
  //           password: password,
  //         }),
  //       });
  //       if (!data.ok) throw new Error("ups");
  //       const response = await data.json();
  //       return response;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const handleNewUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      newUserInputValue.firstName.length > 3 &&
      newUserInputValue.lastName.length > 3
    ) {
      const newUser = await addUser();
      setUsers((prev) => [...prev, newUser]);
      setNewUserInputValue({
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    }
  };
  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setNewUserInputValue((prev) => {
      return { ...prev, [name]: value };
    });
  };
  //   const getProducts = async () => {
  //     try {
  //       const data = await fetch(`${URL}`);
  //       if (!data.ok)
  //         throw new Error("Ups something goes wrong with fetching data");
  //       const response = await data.json();
  //       console.log(response);
  //       console.log("pobiera?");
  //       setProductsList(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  useEffect(() => {
    getUser();
  }, []);
  return {
    users,

    newUserInputValue,
    handleNewUser,
    handleInputValue,
    addUser,
    setUsers,
  };
};
