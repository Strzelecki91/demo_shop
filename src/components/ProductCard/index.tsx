import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

import "./productCard.scss";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
type productCardProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  category: string;
  images: string;
};
export const ProductCard = ({
  id,
  title,
  description,
  price,
  stock,
  brand,
  category,
  images,
}: productCardProps) => {
  const { token } = useContext(UserContext);
  return (
    <>
      {/* <MDBCard>
        <MDBCardImage src={images} alt="..." position="top" />
        <MDBCardBody>
          <MDBCardText>{description}</MDBCardText>
        </MDBCardBody>
      </MDBCard> */}

      <div className="productCardBox">
        <div className="container_img">
          {" "}
          <img className="thumbnail" src={images} alt="product picture" />
        </div>
        <p>Title: {title}</p>
        <p>Price: {price}</p>
        <MDBBtn color="light" rippleColor="dark">
          Details
        </MDBBtn>
        {token ? (
          <MDBBtn color="light" rippleColor="dark">
            Add to Cart
          </MDBBtn>
        ) : (
          <MDBBtn color="light" rippleColor="dark" disabled>
            Add to Cart
          </MDBBtn>
        )}
        {/* <li className="nav__item">
          <img src={"/assets/list.png"} alt="icon of employess list" />
          {token ? (
            <NavLink className="nav__link" to={"/employees"} end>
              {t("employeeList")}
            </NavLink>
          ) : (
            <button className="nav__inactive" disabled>
              {t("employeeList")}
            </button>
          )}
        </li> */}
      </div>
    </>
  );
};
