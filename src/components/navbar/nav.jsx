import Link from "next/link";

const NavBar = () => {
  return(
    <div className="w-full h-8 flex justify-around bg-blue-400 sticky top-0 items-center  p-2">
      <Link href='/'>
        Home
      </Link>
      <Link href='/posts'>
        Posts
      </Link>
      <Link href='/buy'>
        Buy
      </Link>
    </div>
  )
}

export default NavBar;