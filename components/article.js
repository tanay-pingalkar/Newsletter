import Link from 'next/link';
import style from '../styles/article.module.css';

const Article=({article})=>{
    return(
            <div className={style.div} style={{backgroundImage:`url(${article.urlToImage})`}}>
                <h3>{article.title}</h3><br></br>
                <p>{article.description}</p>
                <Link href={article.url}><h4>go to offitial site</h4></Link>
            </div>
    )
}
export default Article;