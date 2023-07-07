import Image from 'next/image'
import loaderImage from '@/assets/Loader.png'
import { LoaderContainer } from '@/components/Loader/Loader'

export const Loader = () => (
  <LoaderContainer>
    <Image
      src={loaderImage}
      alt="A shopping bag white"
      loading="lazy"
      decoding="async"
    />
  </LoaderContainer>
)
