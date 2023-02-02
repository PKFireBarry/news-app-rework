


type Props = {
    searchParams: DataEntry;
}

function ArticlePage({ searchParams }: Props) {



    const DataEntry = searchParams;
    const article = DataEntry;

return (
    <article>
        <section className='flex flex-col rounded-lg lg:flex-row pb-24 px-0 lg:px-10'>
            {article.image && (
                <img
                className='mr-5 ml-5 mt-10 h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-lg'
                src={article.image as string}
                alt={article.title as string}
                />
            )}
            <div>
                <h1 className=' capitalize font-serif px-0 pb-5 pt-10 text-3xl font-bold text-center text-gray-900 dark:text-gray-100'>
                {article.title}
                </h1>
                <div>
                <div className='flex divide-x-2 space-x-4'>
                    <p className='text-sm font-medium text-gray-900 dark:text-gray-100'>
                        {article.author}
                    </p>
                    <p className='text-sm font-medium text-gray-900 dark:text-gray-100'>
                    Source: {article.source}
                    </p>
                    <p className='text-sm font-medium text-gray-900 dark:text-gray-100'>
                    Date: {article.published_at}
                    </p>
                </div>
                <p className='mt-6 text-gray-600 dark:text-gray-400'>
                    {article.description}
                </p>
                </div>
            </div>
        </section>
    </article>
  )
}

export default ArticlePage