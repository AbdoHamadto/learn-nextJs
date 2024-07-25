import Link from "next/link"

const postDetails = async ({ params }) => {
  const postId = params.postid
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  const post = await res.json()
  return(
    <div className="p-4 flex flex-col justify-center items-center">
      <p className="p-2 bg-slate-400 my-4 text-white font-bold rounded-lg">{post.title}</p>
      <p className="p-2 bg-slate-400 my-4 text-white font-bold rounded-lg">{post.body}</p>
      <Link className="w-30 p-2 bg-blue-600 text-white font-bold my-10 mx-auto rounded-lg" href='/posts'>
        posts
      </Link>
    </div>
  )
}

export default postDetails;