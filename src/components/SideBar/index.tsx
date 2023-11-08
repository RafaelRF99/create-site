import styles from './SideBar.module.scss'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import item from './item.json'

export default function SideBar() {
    const [windows, setWindows] = useState(true)
    const [disable, setDisable] = useState<number | null>(null)

    const checkScreenSize = () => {
        if (window.innerWidth > 600) {
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

    function handleDisable(id: number) {
        if (disable === id) {
            setDisable(null)
        } else {
            setDisable(id)
        }
    }

    function handleItem() {
        return item.map((item, i) => {
            const status = item.id === disable
            return (
                <div key={i}>
                    <div
                        className={styles.item}
                        onClick={() => handleDisable(item.id)}
                    >
                        {item.options ? (
                            <div>{item.title}</div>
                        ) : (
                            <Link href={item.router ? item.router : ''}>
                                <div>{item.title}</div>
                            </Link>
                        )}
                        <div className={styles.indicator}>
                            {item.options && <div>►</div>}
                        </div>
                    </div>
                    {status && (
                        <div className={styles.display}>
                            {item.options && (
                                <div className={styles.list}>
                                    <ul>
                                        <Link
                                            href={item.options.option1.router}
                                        >
                                            <li>{item.options.option1.item}</li>
                                        </Link>
                                        <hr />
                                        <Link
                                            href={
                                                item.options.option2
                                                    ? item.options.option2
                                                          ?.router
                                                    : ''
                                            }
                                        >
                                            <li>
                                                {item.options.option2?.item}
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )
        })
    }

    return (
        <nav className={styles.container}>
            <div className={styles.top}>
                <h1 className={styles.logo}>SideBar</h1>
                <button onClick={() => setWindows(!windows)}>=</button>
            </div>
            <div>{windows ? '' : handleItem()}</div>
        </nav>
    )
}
