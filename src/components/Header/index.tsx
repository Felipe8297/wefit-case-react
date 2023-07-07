import Image from 'next/image'
import Link from 'next/link'
import bag from '@/assets/bag.svg'
import { useCart } from '@/contexts/CartContext'
import { HeaderContainer, HeaderSection } from './styles'

export const Header = () => {
  const { cartQuantity } = useCart()

  const itemText = cartQuantity > 1 ? 'itens' : 'item'
  const href = cartQuantity ? '/CartWithItems' : '/EmptyCart'

  return (
    <HeaderContainer>
      <Link href="/" prefetch={false}>
        <h2>WeMovies</h2>
      </Link>

      <Link href={href} prefetch={false}>
        <HeaderSection>
          <div>
            <p>Meu Carrinho</p>
            <span>{`${cartQuantity} ${itemText}`}</span>
          </div>

          <Image
            src={bag}
            alt="A shopping bag white"
            loading="lazy"
            decoding="async"
          />
        </HeaderSection>
      </Link>
    </HeaderContainer>
  )
}
