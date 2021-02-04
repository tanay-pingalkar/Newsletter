import Link from 'next/link';
import Article from './article';
import style from '../styles/article.module.css';

const ArticleList=({articles})=>{
    return(
        <div className={style.list}>
            {articles.map((article,i)=><Article article={article}></Article>)}
        </div>
    )
}
export default ArticleList;