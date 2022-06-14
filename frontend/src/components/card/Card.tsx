import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../models/productModel";
import { Service } from "../../models/serviceModel";
import Rating from "../Rating";
import * as S from "./Card.styled";

const Card = ({ id, title, image, price, rating }: Product | Service) => {
  const [img, setImg] = useState();

  const fetchImage = async () => {
    const { data } = await axios.get(`/products/images/${image}`, { responseType: "blob" });
    const imageObjectURL = URL.createObjectURL(data);
    // @ts-ignore
    setImg(imageObjectURL);

    setImg(data);
  };

  useEffect(() => {
    fetchImage();
  }, []);
  return (
    <Link to={`/dashboard/products/${id}`}>
      <S.Container>
        <S.ImageContainer>
          <S.Image src='../images/download.jfif' />
        </S.ImageContainer>

        <S.Actions>
          <S.Title>{title}</S.Title>
          <Rating value={rating} />
          <S.Price>${price}</S.Price>
        </S.Actions>
      </S.Container>
    </Link>
  );
};
export default Card;
