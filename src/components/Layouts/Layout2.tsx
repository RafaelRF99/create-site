import styles from './Layout2.module.scss'

import Display from '../Display'
import Footer from '../Footer'
import SideBar from '../SideBar'

export default function Layout2() {
    return (
        <div className={styles.container}>
            <div className={styles.display}>
                <SideBar />
                <Display />
            </div>
            <Footer />
        </div>
    )
}
