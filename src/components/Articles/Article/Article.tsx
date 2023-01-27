import Link from '@/components/Ui/Link'
import React from 'react'
import { ArticleType } from '../Articles'
import './Article.css'

const Article = ({
  data,
  direction
}: {
  data: ArticleType
  direction: string
}) => {
  return (
    <div className={`${direction === 'left' ? 'article' : 'reverse-article'}`}>
      <div className='article-data'>
        <span>{data.id}</span>
        <span>{data.title}</span>
        <p>{data.body}</p>
        <Link text='READ MORE' />
      </div>
      <div className='article-image'>
        <img
          src={data.img}
          alt=''
        />
      </div>
      <span>SURF CAMPS</span>
    </div>
  )
}

export default Article
