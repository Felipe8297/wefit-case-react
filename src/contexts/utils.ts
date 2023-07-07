import { CartItem } from '@/contexts/CartContext'

const MOVIE_ITEMS_STORAGE_KEY = 'WeMovies:cartItems'

export const saveLocalStorage = (value: any) =>
  localStorage.setItem(MOVIE_ITEMS_STORAGE_KEY, JSON.stringify(value))

export const fetchLocalStorage = (): CartItem[] => {
  if (typeof window === 'undefined') return []

  const storedCartItems = localStorage.getItem(MOVIE_ITEMS_STORAGE_KEY)

  if (storedCartItems && storedCartItems !== 'undefined')
    return JSON.parse(storedCartItems)

  return []
}
