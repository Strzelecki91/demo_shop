import React, { FormEvent, useContext, useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Header } from "../../components/Header";
import { NavList } from "../../components/NavList";
import "./loginPage.scss";
import { Footer } from "../../components/Footer";
import { UserContext } from "../../components/context/UserContext";
import { useNavigate } from "react-router-dom";
import { Carusel } from "../../components/Carusel";
export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const { token, handleLogin, handleLogout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await handleLogin(email, password);
      // navigate("/");
      // window.location.reload();
      console.log("zalogowano", email, password);
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        setError("An error occurred. Please try again.");
      } else {
        console.error("Server error", error.message);
        setError("Wrong login or password");
      }
    }
  };

  return (
    <div>
      <NavList />
      {
        <div className="box">
          <div className="loginBox">
            {!token ? (
              <>
                <form onSubmit={handleSubmit}>
                  <MDBInput
                    className="mb-4"
                    type="email"
                    id="form2Example1"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p>{error}</p>
                  <p>{email}</p>
                  <p>{password}</p>
                  <MDBInput
                    className="mb-4"
                    type="password"
                    id="form2Example2"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <MDBRow className="mb-4">
                    <MDBCol className="d-flex justify-content-center">
                      <MDBCheckbox
                        id="form2Example3"
                        label="Remember me"
                        defaultChecked
                      />
                    </MDBCol>
                    <MDBCol>
                      <a href="#!">Forgot password?</a>
                    </MDBCol>
                  </MDBRow>

                  <MDBBtn type="submit" className="mb-4" block>
                    Sign in
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
              </>
            ) : (
              <MDBBtn
                type="button"
                className="mb-4"
                block
                onClick={handleLogout}
              >
                Logout
              </MDBBtn>

              // <button className="Login__button" onClick={handleLogout}>
              //   Logout
              // </button>
            )}
          </div>
        </div>
      }

      <Footer />
    </div>
  );
};
