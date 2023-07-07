import weFit from '@/assets/wefit.png'
import { Movie, useCart } from '@/contexts/CartContext'
import { formattedPrice } from '@/utils/formattedPrice'
import Image from 'next/image'
import { Button } from '../Button'
import { Loader } from '../Loader'
import { CardContainer } from './styles'

interface CardProps {
  product: Movie
}

export const Card = ({ product }: CardProps) => {
  const { addMovieToCart, quantityMovieInStorage } = useCart()

  if (!product.id) {
    return <Loader />
  }

  const hasCurrentProduct = quantityMovieInStorage(product.id)

  const handleAddProduct = () => {
    const movieToAdd = { ...product, quantity: 1 }
    addMovieToCart(movieToAdd)
  }

  return (
    <CardContainer>
      <div>
        <div>
          <Image
            src={product.image ?? weFit}
            alt={`Movie cover image ${product.title}`}
            loading="lazy"
            decoding="async"
            width={147}
            height={188}
            placeholder="blur"
            blurDataURL="https://user-images.githubusercontent.com/54115624/216507723-680f5174-9963-4b6f-b860-605d751aa02f.png"
          />

          <p>{product.title}</p>
        </div>

        <p>{formattedPrice.format(product.price)}</p>
      </div>

      <Button
        type="button"
        hasIcon
        onClick={handleAddProduct}
        disabled={hasCurrentProduct !== 0}
      >
        Adicionar ao carrinho
      </Button>
    </CardContainer>
  )
}
