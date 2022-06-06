import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Rating from "../../components/Rating";
import * as S from "./ProductDetails.styled";
import { useEffect, useState } from "react";
import { selectproduct } from "../../features/slices/productSlice";
import { fetchProduct } from "../../features/thunks/productThunk";
import { useAppDispatch } from "../../features/store";
import axios from "axios";

const ProductDetails = () => {
  const { productId = -1 } = useParams();
  const product = useTypedSelector((state) => selectproduct(state));
  const [img, setImg] = useState();

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function load() {
      try {
        const result = await dispatch(fetchProduct(+productId)).unwrap();
        const { data } = await axios.get(`/products/images/${result.image}`, { responseType: "blob" });

        const imageObjectURL = URL.createObjectURL(data);
        // @ts-ignore
        setImg(imageObjectURL);
        // setImg(data);
      } catch (e) {
        console.log(e);
      }
    }
    load();
  }, []);

  return (
    <S.Container>
      {!!product && (
        <>
          <S.ImageContainer>
            <S.Image src={img} loading="lazy" />
          </S.ImageContainer>

          <S.Actions>
            <S.Category>{product.category}</S.Category>
            <S.Title>{product.title}</S.Title>
            <S.ContainerPrice>
              <S.Price>${product.price}</S.Price>
              <S.Rating>
                <Rating value={product.rating} />
              </S.Rating>
            </S.ContainerPrice>
            <S.Description>{product.description}</S.Description>
          </S.Actions>
        </>
      )}
    </S.Container>
  );
};
export default ProductDetails;
