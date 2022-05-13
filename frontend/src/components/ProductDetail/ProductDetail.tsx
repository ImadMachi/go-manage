import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { selectSingleProduct } from '../../features/slices/productSlice';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Rating from '../Rating';
import * as S from './ProductDetail.styled'

 const ProductDetail = () => {
   const {productId=-1} = useParams()
   const product = useTypedSelector(state=>selectSingleProduct(state, +productId))
   
    

  return (
    <S.Container>
      {!!product &&
<>
<S.ImageContainer>
<S.Image src='/images/cerave.jfif'/>
</S.ImageContainer>

<S.Actions>
<S.Category>{product.category}</S.Category>  
<S.Title>{product.title}</S.Title>
<S.ContainerPrice>   
<S.Price>${product.price}</S.Price>
<S.Rating><Rating value={product.rating} /></S.Rating>


</S.ContainerPrice>
<S.Description>{product.description}</S.Description>

</S.Actions>
</>
      }


  </S.Container>
  )
}
export default ProductDetail;
