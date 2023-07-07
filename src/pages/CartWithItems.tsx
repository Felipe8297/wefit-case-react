import { Footer } from '@/components/Footer'
import { Item } from '@/components/Item'
import { useCart } from '@/contexts/CartContext'
import {
  CartWithItemsContainer,
  CartWithItemsHeader,
} from '@/styles/pages/cartWithItems'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'

export default function CartWithItems() {
  const { cartItems, cartItemsTotal } = useCart()
  const router = useRouter()

  const returnToHome = useCallback(async () => {
    if (cartItems.length === 0) {
      await router.push('/')
      return <></>
    }
  }, [cartItems.length, router])

  useEffect(() => {
    returnToHome()
  }, [returnToHome])

  return (
    <CartWithItemsContainer>
      <CartWithItemsHeader>
        <span>Produto</span>
        <span>Qtd</span>
        <span>Subtotal</span>
      </CartWithItemsHeader>

      {cartItems.map((item) => (
        <Item product={item} key={item.id} />
      ))}

      <hr />

      <Footer buttonText="Finalizar pedido" total={cartItemsTotal} />
    </CartWithItemsContainer>
  )
}
