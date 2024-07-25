import Link from "next/link"

const Buy = () => {
  return(
    <div>
      <p>you can bu now</p>
      <Link href='/'>
        <bottun className='h-4 w-4 bg-blue-400'>
          take me to Home
        </bottun>
      </Link>
    </div>
  )
}

export default Buy;