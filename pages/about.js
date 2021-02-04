import styles from '../styles/Home.module.css'
import { GitHub , Instagram, Twitter} from '@material-ui/icons';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <h3>this is a responsive Newsletter website build in next js framework<br></br>
      it is fetching the news from an api called <a href='https://newsapi.org/' style={{color:'blue'}}>https://newsapi.org/</a><br></br>
      To explore more, connect to the creator by the following means<br></br>
      </h3>
      <Link href='https://github.com/tanay-pingalkar'>
        <GitHub className={styles.icon} fontSize="large"></GitHub>
      </Link>
      <Link href='https://www.instagram.com/designing_web_tips/'>
        <Instagram className={styles.icon} fontSize="large"></Instagram>
      </Link>
      <Link href='https://twitter.com/tanay09970447'>
        <Twitter className={styles.icon} fontSize="large"></Twitter>
      </Link>
      
    </div>
  )

}