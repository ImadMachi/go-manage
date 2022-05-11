import Card from '../../components/card';
import { useProducts } from '../../hooks/useProducts';
import * as S from './ProductScreen.styled'

 const ProductScreen = () => {
  const { loading, error, products } = useProducts();
  

  
  
  return (<S.Container>
    {products.map(product=><Card {...product} />)}
  </S.Container>
  )
  }
export default ProductScreen;
