import { Link } from 'react-router-dom';
import { Product } from '../../models/productModel';
import { Service } from '../../models/serviceModel';
import Rating from '../Rating';
import * as S from './Card.styled'

 const Card = ({id, title,image,price,rating}:Product|Service) => {

  return (
    <Link to={`/dashboard/products/${id}`}>
    <S.Container>
    <S.ImageContainer>
<S.Image src='/images/cerave.jfif'/>
</S.ImageContainer>

<S.Actions>
<S.Title>{title}</S.Title>
<div><Rating value={rating} /></div>
<S.Price>${price}</S.Price>
</S.Actions>

  </S.Container>
  </Link>
  )
}
export default Card;
