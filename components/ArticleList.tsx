import { IArticle } from '@/types'
import React from 'react'
import Blogcard from './Blogcard';
import BlogCardWithImage from './BlogCardWithImage';

interface IPropType {
    articles: IArticle[];
}

const ArticleList = ({articles}: IPropType) => {
    // console.log("articlesList",articles)
  return (
    <div className='grid lg:grid-cols-2 grid-gap gap-14 mt-16 ml-4'>
        {articles.map((article,idx) => {
            return (
                <div key={article.id}>
                    {
                        idx==1? (
                            <BlogCardWithImage article={article} />
                        ) : (
                            <Blogcard article={article} />
                        )
                    }
                </div>
            )
        })}
    </div>
    
  )
}

export default ArticleList