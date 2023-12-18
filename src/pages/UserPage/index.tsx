import { Footer } from "../../components/Footer";
import { NavList } from "../../components/NavList";
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from "mdb-react-ui-kit";
import { UserContext } from "../../components/context/UserContext";
import { useContext } from "react";

import "./userPage.scss";
import { Carusel } from "../../components/Carusel";
export const UserPage = () => {
  const { user, token } = useContext(UserContext);
  return (
    <div>
      <NavList />
      <h2>User information</h2>
      <div className="userDetailsBox">
        <div className="userDetails">
          {token ? (
            <MDBTable bordered>
              <MDBTableHead>
                <tr>
                  <th scope="col">Details</th>
                  <th scope="col">First name</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <th scope="row">id</th>
                  <td>{user.id}</td>
                </tr>
                <tr>
                  <th scope="row">First name</th>
                  <td>{user.firstName}</td>
                </tr>
                <tr>
                  <th scope="row">Last name</th>
                  <td>{user.lastName}</td>
                </tr>
                <tr>
                  <th scope="row">login</th>
                  <td>{user.login}</td>
                </tr>
                <tr>
                  <th scope="row">email</th>
                  <td>{user.email}</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          ) : (
            <MDBTable bordered>
              <MDBTableHead>
                <tr>
                  <th scope="col">Details</th>
                  <th scope="col">First name</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <th scope="row">First name</th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Last name</th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">login</th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">email</th>
                  <td></td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          )}
          <MDBBtn color="primary">Edit</MDBBtn>
        </div>
      </div>
      <Footer />
    </div>
  );
};
