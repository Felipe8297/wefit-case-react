import { CartItem, useCart } from '@/contexts/CartContext'
import { formattedPrice } from '@/utils/formattedPrice'
import Image from 'next/image'
import { Description, Quantity, TrashButton } from './components'
import { ItemContainer, Subtotal } from './styles'

interface CartItemProps {
  product: CartItem
}

export const Item = ({ product }: CartItemProps) => {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  const handleDecrease = () =>
    changeCartItemQuantity({ itemId: product.id, type: 'decrease' })

  const handleIncrease = () =>
    changeCartItemQuantity({ itemId: product.id, type: 'increase' })

  const handleRemove = () => removeCartItem(product.id)

  const subtotal = formattedPrice.format(product.price * product.quantity)

  return (
    <ItemContainer>
      <Image
        src={product.image}
        alt={`Movie cover image ${product.title}`}
        width={89}
        height={114}
        loading="lazy"
        decoding="async"
      />

      <div>
        <Description
          title={product.title}
          price={product.price}
          onClick={handleRemove}
        />

        <div>
          <Quantity
            quantity={product.quantity}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
          />

          <Subtotal>
            <span>Subtotal</span>
            {subtotal}
          </Subtotal>
        </div>

        <TrashButton type="button" onClick={handleRemove} />
      </div>
    </ItemContainer>
  )
}
