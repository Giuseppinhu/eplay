import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetSoonQuery, useGetOnSaleQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingOnSale } = useGetOnSaleQuery()
  const { data: SoonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={onSaleGames}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={isLoadingOnSale}
      />
      <ProductsList
        games={SoonGames}
        title="Em breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}
export default Home
