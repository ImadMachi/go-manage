import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as S from './Rating.styled';
library.add(faStar)

const Rating = ({value}:{value:number}) => {
  return (
    <S.Container>
        {
            value >= 1
              ? 
                <S.Icon checked>
                    <FontAwesomeIcon icon={faStar}/>
            </S.Icon>

              : <S.Icon><FontAwesomeIcon icon={faStar}/></S.Icon>
          }
        {
            value >= 2
              ? 
                <S.Icon checked>
                    <FontAwesomeIcon icon={faStar}/>
                </S.Icon>
            
              : <S.Icon><FontAwesomeIcon icon={faStar}/></S.Icon>
          }
        {
            value >= 3
              ? 
                <S.Icon checked>
                    <FontAwesomeIcon icon={faStar}/>
                </S.Icon>
              
              : <S.Icon><FontAwesomeIcon icon={faStar}/></S.Icon>
          }

{
            value >= 4
              ? 
                <S.Icon checked>
                    <FontAwesomeIcon icon={faStar}/>
                </S.Icon>

              : <S.Icon><FontAwesomeIcon icon={faStar}/></S.Icon>
          }

{
            value >= 5
              ? 
                <S.Icon checked>
                    <FontAwesomeIcon icon={faStar}/>
                </S.Icon>

              : <S.Icon><FontAwesomeIcon icon={faStar}/></S.Icon>

          }
    </S.Container>
  )
}

export default Rating