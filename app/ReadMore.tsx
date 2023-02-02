'use client'

import { useRouter } from "next/navigation"

type Props = {
    article: Article;
}

function ReadMore( {article}: Props ) {

    const router = useRouter();

    const handleClick = () => {
      const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
      
      const url = `/article?${queryString}`
      console.log(url)
      router.push(url)
    }
    



  return (
    <button
        onClick={handleClick}
        className="flex-1 bg-gray-500 h-10 rounded-lg dark:bg-zinc-500 justify-center hover:bg-slate-800 transition-all duration-500 ease-out">
        <p className="text-white text-center pt-2">Read More</p>


    </button>
  )
}

export default ReadMore