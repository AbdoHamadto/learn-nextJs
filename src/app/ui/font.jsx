import {Inter, Lusitana, Roboto} from 'next/font/google'

export const inter = Inter({subsets: ['latin']})
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lusitana'
})
export const roboto = Roboto({
  subsets: ['greek'],
  weight: ['400']
})