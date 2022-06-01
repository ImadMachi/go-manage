import { faArrowUp, faChartLine, faClock, faUpRightFromSquare, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from './CardAnalytic.styled'

const CardAnalytic = () => {
  return (
    <S.Container>
<S.Container1>
<S.Label>
  <S.Title>Users</S.Title>
  <S.IconCointainer>
  <FontAwesomeIcon icon={faUser} />
  </S.IconCointainer>
</S.Label>
<S.Text>28.05K</S.Text>
<S.Sp>
<FontAwesomeIcon icon={faArrowUp} />
16,24%</S.Sp>
<S.Title>vs. previous month</S.Title>
</S.Container1>

<S.Container1>
  <S.Label>
<S.Title>Sessions</S.Title>
<S.IconCointainer>
<FontAwesomeIcon icon={faChartLine} />
</S.IconCointainer>
</S.Label>
<S.Text>97.66k</S.Text>
<S.Sp>
<FontAwesomeIcon icon={faArrowUp} />
 3.96 %</S.Sp>
<S.Title>vs. previous month</S.Title>
</S.Container1>

<S.Container1>
<S.Label>
<S.Title>Avg. Visit Duration</S.Title>
<S.IconCointainer>
<FontAwesomeIcon icon={faClock} />
</S.IconCointainer>
</S.Label>
<S.Text>3m 40sec</S.Text>
<S.Sp>
<FontAwesomeIcon icon={faArrowUp} />
 0.24 %</S.Sp>
<S.Title>vs. previous month</S.Title>
</S.Container1>

<S.Container1>
<S.Label>
<S.Title>Bounce Rate</S.Title>
<S.IconCointainer>
<FontAwesomeIcon icon={faUpRightFromSquare} />
</S.IconCointainer>
</S.Label>
<S.Text>33.48%</S.Text>
<S.Sp>
<FontAwesomeIcon icon={faArrowUp} />
 7.05 %</S.Sp>
<S.Title>vs. previous month</S.Title>
</S.Container1>


    </S.Container>
  )
}

export default CardAnalytic