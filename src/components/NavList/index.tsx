import React, { useContext, useEffect, useState } from "react";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBBadge,
} from "mdb-react-ui-kit";
import "./navList.scss";
import { UserContext } from "../context/UserContext";
export const NavList = () => {
  const [openBasic, setOpenBasic] = useState(false);
  const { user, token } = useContext(UserContext);

  // console.log(user.login);
  useEffect(() => {
    setOpenBasic(Boolean);
  }, [openBasic]);
  return (
    <div>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">
                <MDBBadge pill color="danger">
                  !
                </MDBBadge>
                <span>
                  <MDBIcon fas icon="shopping-cart"></MDBIcon>
                </span>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Link</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Dropdown
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href="/login">Login</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/register">Sign up</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                {" "}
                {!token ? (
                  <MDBNavbarLink href="/#" disabled>
                    zaloguj się
                  </MDBNavbarLink>
                ) : (
                  <MDBNavbarLink href="/#">{user.login}</MDBNavbarLink>
                )}
              </MDBNavbarItem>
              {/* <div className="width_search_input">
                <form className="d-flex input-group w-auto">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Type query"
                    aria-label="Search"
                  />
                  <MDBBtn color="primary">Search</MDBBtn>
                </form>
              </div> */}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};
