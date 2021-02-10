import React, { useState } from 'react';
import Get from '../get/get';
import Post from '../post/post';
import styles from './main.module.css';

const Main = () => {
    const [state, setState] = useState(false)
    return (
        <div>
            <h1 className={styles.heading}>Random Quote Generator</h1>
            <div className={styles.div}>
                <div className={styles.card}>
                    <div className={state ? styles.tab : styles.tab + " " + styles.active} onClick={() => setState(false)}>Get Quote</div>
                    <div className={state ? styles.tab + " " + styles.active : styles.tab} onClick={() => setState(true)}>Post Quote</div>
                    <div className={styles.content}>
                        {state ? <Post /> : <Get />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;