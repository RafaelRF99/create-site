import styles from './SideBar.module.scss'

import { useState } from 'react'

import item from './item.json'
import Link from 'next/link'

export default function SideBar() {
    const [disable, setDisable] = useState<number | null>(null)

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
            <h1 className={styles.logo}>SideBar</h1>
            <div>{handleItem()}</div>
        </nav>
    )
}
