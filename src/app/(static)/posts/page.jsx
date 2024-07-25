import Link from "next/link"

const PostePage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  return(
    <div className="grid grid-cols-4 gap-10 w-4/5 mx-auto my-20">
      {posts.map((item) => {
        return(
          <Link href={`/posts/${item.id}`}>
            <div className="border border-black p-2 cursor-pointer rounded-xl hover:scale-110">
              <p>{item.id}</p>
              <p >{item.title}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default PostePage;