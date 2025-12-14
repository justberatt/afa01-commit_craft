import styles from './Header.module.css'
import { bbhFont } from '../Fonts/fonts'

const Header = (): React.JSX.Element => {
    return (
        <header className={styles.header}>
            <h1 className={`${styles.logo} ${bbhFont.className}`}>CommitCraft</h1>
        </header>
    )
}

export default Header