import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import Tag from '../Tags'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import * as S from './style'
import { formatPrices, getTotalPrice } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {items.length == 0 ? (
          <>
            <p className="cart-empty">
              Seu Carrinho está vazio! 😢 <br />
              <br />
              Adicione um item para continuar
            </p>
            <Button
              title="Clique aqui para voltar ao menu."
              type="button"
              onClick={closeCart}
            >
              Voltar para a home
            </Button>
          </>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{formatPrices(item.prices.current)}</span>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    type="button"
                  ></button>
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
            <S.Prices>
              Total de {formatPrices(getTotalPrice(items))}
              <span>Em até 6x sem juros</span>
            </S.Prices>
            <Button
              title="Clique aqui para comprar"
              type="button"
              onClick={goToCheckout}
            >
              Continuar com o pagamento
            </Button>
          </>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
