import Card from '../../components/card';
import { useServices } from '../../hooks/useService';
import * as S from './ServiceScreen.Styled'; 

 const ServiceScreen = () => {
  const { loading, error, services } = useServices();
  

  
  
  return (<S.Container>
    {services.map(service=><Card {...service} />)}
  </S.Container>
  )
  }
export default ServiceScreen;