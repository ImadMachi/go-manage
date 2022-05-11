import React from 'react'
import Rating from '../Rating';
import * as S from './Card.styled'
interface CardProps {
  image:string;
  title:string;
  price:number;
  rating:number;

}
 const Card = ({title,image,price,rating}:CardProps) => {
  return (
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
  )
}
export default Card;
