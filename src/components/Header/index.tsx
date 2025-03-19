import { Link } from 'react-router-dom'

import { HeaderBar, LinkCart, Links, LinksItem } from './styles'

import logo from '../../assets/images/logo vetor.svg'
import cart from '../../assets/images/shopping-cart 1.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="Eplay" />
      </Link>
      <nav>
        <Links>
          <LinksItem>
            <Link to="/categorias">Categorias</Link>
          </LinksItem>
          <LinksItem>
            <a href="#">Novidades</a>
          </LinksItem>
          <LinksItem>
            <a href="#">Promoções</a>
          </LinksItem>
        </Links>
      </nav>
    </div>
    <LinkCart>
      0 - produto(s)
      <img src={cart} alt="cart-shop" />
    </LinkCart>
  </HeaderBar>
)

export default Header
