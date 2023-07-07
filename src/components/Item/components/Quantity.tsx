import minus from '@/assets/minus.svg'
import plus from '@/assets/plus.svg'
import Image from 'next/image'
import { SectionQuantity } from '../styles'

interface QuantityProps {
  quantity: number
  onDecrease: () => void
  onIncrease: () => void
}

export const Quantity = ({
  quantity,
  onDecrease,
  onIncrease,
}: QuantityProps) => (
  <SectionQuantity>
    <button type="button" onClick={onDecrease}>
      <Image
        src={minus}
        alt="Circle with blue borders and the minus sign in the center"
        loading="lazy"
        decoding="async"
        width={18}
        height={18}
      />
    </button>

    <span>{quantity}</span>

    <button type="button" onClick={onIncrease}>
      <Image
        src={plus}
        alt="Circle with blue borders and the plus sign in the center"
        loading="lazy"
        decoding="async"
        width={18}
        height={18}
      />
    </button>
  </SectionQuantity>
)
