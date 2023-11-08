import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.content}>
                <div>
                    <h2>Precisa de suporte?</h2>
                    <ul>
                        <li>
                            <span>E-mail</span>
                        </li>
                        <li>
                            <span>Fale Conosco</span>
                        </li>
                        <li>
                            <span>Assistência Online</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Siga-nos</h2>
                    <ul>
                        <li>
                            <span>Youtube</span>
                        </li>
                        <li>
                            <span>Instagram</span>
                        </li>
                        <li>
                            <span>Telegram</span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
