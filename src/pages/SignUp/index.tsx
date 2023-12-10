import { KeyboardEvent } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBProgress,
  MDBProgressBar,
} from "mdb-react-ui-kit";
import { NavList } from "../../components/NavList";
import { Footer } from "../../components/Footer";
import { useContext } from "react";
import { UserContext } from "../../components/context/UserContext";
export const SignUp = () => {
  const {
    newUserInputValue,
    emailError,
    loginError,
    firstNameError,
    lastNameError,
    complexity,
    regExps,
    handleNewUser,
    handleInputValue,
    handleProgress,
  } = useContext(UserContext);
  const { id, firstName, lastName, login, email, password } = newUserInputValue;
  console.log(regExps.length, complexity, " długosć tablicy hasła sing up");

  return (
    <div>
      <NavList />
      <div className="box">
        <div className="loginBox">
          sadasdsdadasdsad{newUserInputValue.firstName}
          <form onSubmit={(event) => handleNewUser(event, id)}>
            <MDBRow className="mb-4">
              <MDBCol>
                <MDBInput
                  id="form3Example1"
                  type="text"
                  name="firstName"
                  label="First Name"
                  value={firstName}
                  placeholder="Enter first name"
                  onChange={handleInputValue}
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  id="form3Example2"
                  type="text"
                  name="lastName"
                  label="Last name"
                  value={lastName}
                  placeholder="Enter last name"
                  onChange={handleInputValue}
                />
              </MDBCol>
            </MDBRow>
            <MDBInput
              className="mb-4"
              type="text"
              name="login"
              label="Login"
              value={login}
              placeholder="Enter login"
              onChange={handleInputValue}
            />
            <MDBInput
              className="mb-4"
              type="email"
              name="email"
              id="form3Example3"
              label="Email address"
              value={email}
              placeholder="Enter email"
              onChange={handleInputValue}
            />
            <MDBInput
              className="mb-4"
              type="password"
              name="password"
              id="form3Example4"
              label="Password"
              value={password}
              placeholder="Enter password"
              onChange={handleInputValue}
              onKeyUp={handleProgress}
            />
            <MDBProgress>
              <MDBProgressBar
                bgColor="success"
                width={(complexity / regExps.length) * 100}
                valuemin={0}
                valuemax={regExps.length}
              />
            </MDBProgress>
            <p>
              complexity{complexity} reg {regExps.length}
            </p>
            <progress value={complexity} max={regExps.length}></progress>
            <MDBCheckbox
              wrapperClass="d-flex justify-content-center mb-4"
              id="form3Example5"
              label="Subscribe to our newsletter"
              defaultChecked
            />
            <p>{emailError}</p>
            <p>{loginError}</p>
            <p>{firstNameError}</p>
            <p>{lastNameError}</p>

            <MDBBtn type="submit" className="mb-4" block>
              Sign up
            </MDBBtn>

            <div className="text-center">
              <p>
                Not a member? <a href="#!">Register</a>
              </p>
              <p>or sign up with:</p>

              <MDBBtn floating color="secondary" className="mx-1">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>

              <MDBBtn floating color="secondary" className="mx-1">
                <MDBIcon fab icon="google" />
              </MDBBtn>

              <MDBBtn floating color="secondary" className="mx-1">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>

              <MDBBtn floating color="secondary" className="mx-1">
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};
