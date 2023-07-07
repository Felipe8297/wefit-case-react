import confirmImg from '@/assets/confirm.svg'
import { Button } from '@/components/Button'
import Image from 'next/image'
import { ConfirmCartContainer } from '@/styles/pages/confirmCart'
import { useCart } from '@/contexts/CartContext'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { timerToRevalidate } from '@/utils/timerToRevalidate'
import { useEffect } from 'react'
import { Loader } from '@/components/Loader'

interface Option {
  title: string
  src: string
  alt: string
  width: number
  height: number
}

interface ConfirmCartProps {
  options: Option[]
}

export default function ConfirmCart({ options }: ConfirmCartProps) {
  const { cartQuantity, cleanCart } = useCart()

  const { alt, height, src, title, width } = options[0]

  useEffect(() => {
    if (cartQuantity > 0) {
      cleanCart()
    }
  }, [cartQuantity, cleanCart])

  if (cartQuantity > 0) {
    return <Loader />
  }

  return (
    <ConfirmCartContainer content={cartQuantity ? 'confirm' : 'empty'}>
      <h1>{title}</h1>

      <Image
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={width}
        height={height}
      />

      <Link href="/" prefetch={false}>
        <Button>Voltar</Button>
      </Link>
    </ConfirmCartContainer>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const options = [
    {
      title: 'Compra realizada com sucesso!',
      src: confirmImg,
      alt: 'Man with black hair, light shirt, dark pants, has the thumb of his left hand raised, behind a circle with a blue background with a confirmation symbol above his thumb. On the left side at the front is a completed form. Illustration.',
      width: 295,
      height: 307,
    },
  ]

  return {
    props: {
      options,
    },
    revalidate: timerToRevalidate(),
  }
}
