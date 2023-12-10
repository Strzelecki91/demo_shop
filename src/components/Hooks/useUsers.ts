import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
  KeyboardEvent,
} from "react";
import { usersType } from "../context/UserContext";

type useUserData = {
  users: usersType[];
  emailError: string;
  loginError: string;
  firstNameError: string;
  lastNameError: string;
  newUserInputValue: usersType;
  complexity: number;
  regExps: RegExp[];
  addUser: () => Promise<any>;
  handleNewUser: (
    event: React.FormEvent<HTMLFormElement>,
    userId: number
  ) => Promise<void>;
  handleInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
  setUsers: (value: React.SetStateAction<usersType[]>) => void;
  handleProgress: (event: KeyboardEvent<HTMLInputElement>) => void;
};

export const useUsers = (): useUserData => {
  const [users, setUsers] = useState<usersType[]>([]);
  const [countUsers, setCountUsers] = useState(users.length);
  const URL = "http://localhost:5000/users";
  const [newUserInputValue, setNewUserInputValue] = useState<usersType>({
    id: countUsers,
    firstName: "",
    lastName: "",
    login: "",
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [complexity, setComplexity] = useState(0);

  const { firstName, lastName, login, email, password } = newUserInputValue;

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(newUserInputValue.email)) {
      setEmailError("Please enter a correct email address.");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };
  const validateFirstName = (firstName: string) => {
    const firstNamePattern = /^[a-zA-ZąĄćĆęĘóÓłŁśŚźŹżŻńŃ0-9.,/”“"'&() -"\n"]*$/;
    if (!firstNamePattern.test(newUserInputValue.firstName)) {
      setFirstNameError("Please enter a correct name.");
      return false;
    } else {
      setFirstNameError("");
      return true;
    }
  };
  const validateLastName = (firstName: string) => {
    const lastNamePattern = /^[a-zA-ZąĄćĆęĘóÓłŁśŚźŹżŻńŃ0-9.,/”“"'&() -"\n"]*$/;
    if (!lastNamePattern.test(newUserInputValue.lastName)) {
      setLastNameError("Please enter a correct last name");
      return false;
    } else {
      setLastNameError("");
      return true;
    }
  };

  const getUser = async () => {
    try {
      const response = await fetch(`${URL}`);
      if (!response.ok)
        throw new Error("ups something gose wrong with getting user data");
      const data = await response.json();
      console.log("pobiera usera", data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async () => {
    try {
      const data = await fetch(`${URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          login: login,
          email: email,
          password: password,
        }),
      });
      if (!data.ok) throw new Error("something goes wrong while adding user");
      const response = await data.json();
      console.log("Dodało użytkownika", response);
      setCountUsers((prev) => prev + 1);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfEmailExist = async (email: string) => {
    try {
      const response = await fetch(`${URL}`);
      if (!response.ok)
        throw new Error("ups something gose wrong with getting user data");
      const data = await response.json();
      console.log("pobiera usera", data);
      return data.some((user: usersType) => user.email === email);
    } catch (error) {
      console.log(error);
    }
    return true;
  };
  const checkIfLoginExist = async (login: string) => {
    try {
      const response = await fetch(`${URL}`);
      if (!response.ok)
        throw new Error("ups something gose wrong with getting user data");
      const data = await response.json();

      return data.some(
        (user: usersType) =>
          user.login.toLocaleLowerCase() === login.toLocaleLowerCase()
      );
    } catch (error) {
      console.log(error);
    }
    return true;
  };
  const regExps = [/[a-z]/, /[A-Z]/, /[0-9]/, /.{8}/];
  const calculateComplexityPassword = (password: string) => {
    let complexity = 1;

    regExps.forEach((regexp) => {
      if (regexp.test(password)) {
        setComplexity(complexity++);
      }
    });
    return {
      value: complexity,
      max: regExps.length,
    };
  };
  console.log(regExps.length, complexity, " długosć tablicy hasła");
  const handleProgress = (event: KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    calculateComplexityPassword(password);
  };
  // const checkPasswordStregth = (password) => {};
  const handleNewUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailExist = await checkIfEmailExist(newUserInputValue.email);
    const loginExist = await checkIfLoginExist(newUserInputValue.login);
    console.log(emailExist, "type wartości");
    console.log(loginExist, "type wartości");
    if (emailExist) {
      setEmailError("Email exist in database");
      return;
    }
    if (loginExist) {
      setLoginError("Use other login, this login is use by someone");
      return;
    }

    if (validateEmail(newUserInputValue.email) === false) {
      setEmailError("Enter correct email address");
      return;
    }
    if (
      newUserInputValue.firstName.length < 3 ||
      validateFirstName(newUserInputValue.firstName) === false
    ) {
      setFirstNameError("Entered name are uncorrect");
      return;
    }
    if (
      newUserInputValue.lastName.length < 3 ||
      validateLastName(newUserInputValue.lastName) === false
    ) {
      setLastNameError("Entered last name are uncorrect");
      return;
    }
    if (!calculateComplexityPassword(password)) {
      setLoginError("password is too weak");
    }
    if (complexity < regExps.length) {
      setLoginError("Password too weak");
      return;
    }
    const newUser = await addUser();
    setUsers((prev) => [...prev, newUser]);
    setNewUserInputValue({
      id: 0,
      firstName: "",
      lastName: "",
      login: "",
      email: "",
      password: "",
    });
    setEmailError("");
  };
  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setNewUserInputValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  useEffect(() => {
    getUser();
  }, []);
  return {
    users,
    emailError,
    newUserInputValue,
    loginError,
    firstNameError,
    lastNameError,
    complexity,
    regExps,
    handleNewUser,
    handleInputValue,
    addUser,
    setUsers,
    handleProgress,
  };
};
