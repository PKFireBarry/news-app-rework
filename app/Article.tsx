import ReadMore from "./ReadMore"


type Props = {
    article: DataEntry;
}

function Article({article}: Props) {
  return (
    <article className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-110 hover:shadow-lg hover:bg-slate-200 transition-all duration-500 ease-out">
        {article.image && (
                <img 
                src={article.image as string} 
                alt={article.title as string} 
                className="h-56 w-full object-cover rounded-t-md"
                />)}
        <div className="flex-1 flex flex-col">
            <div className="flex-1 flex flex-col p-5">
                <h2 className=" font-serif text-xl font-bold">{article.title}</h2>
                <section className="mt-2 flex-1">
                    <p className="text-xs line-clamp-10">{article.description}</p>
                </section>
                <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-500">
                    <p>{article.author}</p>
                    <p>{article.published_at}</p>
                </footer>
            </div>
            <div className="flex justify-evenly">
                <a 
                className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-md px-2 py-1 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-500 ease-out"
                href={article.url as string}>
                    Read the full article
                </a>
            </div>
        </div>
    </article>
  )
}

export default Article