import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>About</S.Heading>

    <S.Body>
      <p>
        uasdhasuh asuidhasudhuasd uasdhuasdhuas uasdhuasdhasud asudhasudhas
        asudhasudhas asudhuasdhasu asudhasudhasud asudhasudhasudhas asduhasudhas
        uasdhuashdas adhdasudh asduhasudhas asduhasud asudhasudh asdasddas
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
