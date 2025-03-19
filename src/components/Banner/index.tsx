import { Image, Price, Title } from './style'

import imgBanner from '../../assets/images/banner_aranha.png'
import Tag from '../Tags'
import Button from '../Button'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${imgBanner})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
        <Price>
          De <span>R$250,00</span> <br />
          por apenas R$99,00
        </Price>
      </div>
      <Button
        title="Clique para aproveitar as ofertas"
        type="link"
        to="/produtos"
      >
        Aproveitar
      </Button>
    </div>
  </Image>
)

export default Banner
