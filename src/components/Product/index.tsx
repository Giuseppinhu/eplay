import Tag from '../Tags'
import { Card, Description, Infos, Title } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  img: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  img,
  id
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }
    return description
  }

  return (
    <Card to={`/product/${id}`}>
      <img src={img} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}{' '}
      </Infos>
      <Title>{title} </Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Description>{getDescription(description)}</Description>
    </Card>
  )
}

export default Product
