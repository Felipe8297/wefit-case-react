import { Movie } from '@/contexts/CartContext'
import { Card } from '../Card'
import { ListCardsContainer } from './styles'

interface List {
  products: Movie[]
}

export const ListCards = ({ products }: List) => (
  <ListCardsContainer className="container">
    {products.map((prod) => (
      <Card key={prod.id} product={prod} />
    ))}
  </ListCardsContainer>
)
