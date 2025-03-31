import { PacmanLoader } from 'react-spinners'
import { Container } from './styles'
import { color } from '../../styles'

const Loader = () => (
  <Container>
    <PacmanLoader color={color.white} />
  </Container>
)

export default Loader
