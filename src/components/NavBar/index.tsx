import styles from './NavBar.module.scss'

import { useEffect, useState } from 'react'

export default function NavBar() {
    const [windows, setWindows] = useState(true)

    const checkScreenSize = () => {
        if (window.innerWidth > 650) {
            setWindows(false)
        } else {
            setWindows(true)
        }
    }

    useEffect(() => {
        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)

        return () => {
            window.removeEventListener('resize', checkScreenSize)
        }
    }, [])

    return (
        <nav className={styles.container}>
            <div className={styles.logo}>
                <h1>NavBar</h1>
                <button onClick={() => setWindows(!windows)}>=</button>
            </div>
            {windows ? (
                ''
            ) : (
                <div className={styles.content}>
                    <div>Carreira</div>
                    <div>BootCamps</div>
                    <div>Projetos</div>
                    <div>Comunidade</div>
                </div>
            )}
        </nav>
    )
}
