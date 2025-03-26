import Tag from '../Tags'
import Button from '../Button'

import { formatPrices } from '../ProductsList'
import { Image, Price, Title } from './style'

import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game?.name}</Title>
          <Price>
            De <span>{formatPrices(game.prices.old)}</span> <br />
            por apenas {formatPrices(game.prices.current)}
          </Price>
        </div>
        <Button
          title="Clique para aproveitar as ofertas"
          type="link"
          to={`/product/${game.id}`}
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}
export default Banner
