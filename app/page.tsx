import { categories } from '../constant'
import fectchNews from '../lib/fetchNews'
import NewsList from './NewsList'


type Props = {}

async function page({}: Props) {

  //fetch news from server
  const news: NewsResponse = await fectchNews(categories.join(','))


  return (
    <div>
      <NewsList news={news} />
    </div>
  )
}

export default page