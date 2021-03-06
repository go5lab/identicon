import * as React from "react"

import { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"
import Script from 'next/script'


import styles from "../styles/top.module.scss"

import { Notification, KIND } from "baseui/notification"
import { Input } from "baseui/input"
import {Search} from 'baseui/icon'
import {Button} from 'baseui/button'

// identicon lib
import BoringAv from "boring-avatars"

const Page = () => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const handleClick = (e) =>  {
        e = inputRef.current.value
        window.location.assign(`/${e}`)
    }
    return (
        <div>
            <Head>
                <link rel="canonical" href="https://identicon.go5.run/ja/"/>
                <title key="site:title">identicon | ðGenerates an icon from the input text</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.notify}>
                <Notification  kind={KIND.warning}>
                    {() => "ããã¯éçºä¸­ã®ãã¢çã§ããåºæ¬çã«ã¯æ­£å¸¸ã«åä½ãã¾ããã"}
                </Notification>
                </div>
                <Link href="mailto:hi@kan.run"><a>
                    <button className={styles.button}><span>Contact</span></button>
                </a></Link>
                <div></div>
                <Link href="/ja"><a>
                    <button className={styles.button}><span>JP site</span></button>
                </a></Link>
                <div></div>
                <div className={styles.input_wrap}>
                <Input
                    endEnhancer={<Search size="18px" />}
                    placeholder="ããªãã®ååãå¥åãã¦ãã ããð"
                    inputRef={inputRef}
                />
                <div id="go">
                <Button onClick={handleClick}>
                    GoGo!
                </Button>
                </div>
                </div>
                <Script src="/js/gogogo.js" />
                <Script src="https://cdn.jsdelivr.net/npm/jdenticon@3.1.1/dist/jdenticon.min.js" />
            </main>
        </div>
    )
}


export default Page