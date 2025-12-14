import styles from './Footer.module.css'
import { FaGithub } from 'react-icons/fa';
import { bbhFont } from '../Fonts/fonts'


const Footer = (): React.JSX.Element => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInfo}>
                <div className={`${styles.footerLogo} ${bbhFont.className}`}>
                    <h1 className={styles.logo}>CommitCraft</h1>
                </div>
                <div className={styles.footerLinks}>
                    <div className={styles.contactLinks}>
                        <ul>
                            <li><a href="https://github.com/justberatt">
                                <FaGithub size={30} color='#333' />
                                github/justberatt
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>Copyright <em>©December, 2025.</em> Kumanovo, North Macedonia</p>
            </div>
        </footer>
    )
}

export default Footer