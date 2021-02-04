import ArticleList from '../components/articleList';
import styles from '../styles/Home.module.css';

export default function Home({articles}) {
  return (
    <div className={styles.container}>
      <h1>Newsletter</h1><br></br>
      <ArticleList articles={articles}></ArticleList>
    </div>
  )
}


export const getStaticProps=async()=>{
  const res=await fetch('http://newsapi.org/v2/top-headlines?country=in&apiKey=a1322d7c6a1b4e94ac34e80c58230686');
  const whole = await res.json();
  const articles=whole.articles;
  return{
    props:{
      articles
    }
  }
}
