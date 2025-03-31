import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import logo from '../../assets/images/logo vetor.svg'
import cart from '../../assets/images/shopping-cart 1.svg'

import { open } from '../../store/reducers/cart'

import * as S from './styles'

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to="/">
            <h1>
              <img src={logo} alt="Eplay" />
            </h1>
          </Link>
          <nav>
            <S.Links>
              <S.LinksItem>
                <Link
                  title="Clique aqui para acessar a página de Categorias"
                  to="/categorias"
                >
                  Categorias
                </Link>
              </S.LinksItem>
              <S.LinksItem>
                <HashLink
                  title="Clique aqui para acessar a seção em breve"
                  to="/#coming-soon"
                >
                  Em Breve
                </HashLink>
              </S.LinksItem>
              <S.LinksItem>
                <HashLink
                  title="Clique aqui para acessar a seção em breve"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </S.LinksItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton onClick={openCart}>
          {items.length} <span>- produto(s)</span>
          <img src={cart} alt="cart-shop" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinksItem>
            <Link
              title="Clique aqui para acessar a página de Categorias"
              to="/categorias"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinksItem>
          <S.LinksItem>
            <HashLink
              title="Clique aqui para acessar a seção em breve"
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em Breve
            </HashLink>
          </S.LinksItem>
          <S.LinksItem>
            <HashLink
              title="Clique aqui para acessar a seção em breve"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </S.LinksItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
