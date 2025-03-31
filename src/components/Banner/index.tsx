import Tag from '../Tags'
import Button from '../Button'
import Loader from '../Loader'

import { useGetFeaturedGameQuery } from '../../services/api'
import { formatPrices } from '../../utils'

import * as S from './style'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game?.name}</S.Title>
          <S.Price>
            De <span>{formatPrices(game.prices.old)}</span> <br />
            por apenas {formatPrices(game.prices.current)}
          </S.Price>
        </div>
        <Button
          title="Clique para aproveitar as ofertas"
          type="link"
          to={`/product/${game.id}`}
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}
export default Banner
