import Article from './Article/Article'
import article1 from '@/assets/images/article1.jpg'
import article2 from '@/assets/images/article2.jpg'
import './Articles.css'

export type ArticleType = typeof articles[0]

const articles = [
  {
    id: '01',
    title: 'Surf Training',
    body: 'By better understanding the various aspects of surfing. By better understanding the various aspects of surfing, you will improve faster and have more fun in the water',
    img: article1,
    href_text: 'READ MORE'
  },
  {
    id: '02',
    title: 'Point Break',
    body: 'By better understanding the various aspects of surfing. By better understanding the various aspects of surfing, you will improve faster and have more fun in the water',
    img: article2,
    href_text: 'READ MORE'
  }
]

const Articles = () => {
  return (
    <section className='articles'>
      {articles.map((article, index) => {
        let direction = 'right'
        if (index % 2 === 0) {
          direction = 'left'
        }
        return (
          <Article
            direction={direction}
            key={article.id}
            data={article}
          />
        )
      })}
      <div></div>
    </section>
  )
}

export default Articles
