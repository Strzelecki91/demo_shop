import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

import "./productCard.scss";
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
      </div>
    </>
  );
};
