import React,{useState,useEffect} from 'react';
import axios from 'axios';
import styles from './get.module.css';

const Get=()=>{
    const [msg, setMsg] = useState(null);
    const [data, setData] = useState(null);
    const refreshHandler = () => {
        setData(null);
        setMsg(null);
        axios.get('http://localhost:5000/quotes')
            .then(res => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
                const msg = <p>Some error occured<br />500 Server error<br />Some error at server side<br />Check your browsers console for more information</p>
                setMsg(msg);
            });;
    }
    useEffect(() => {
        refreshHandler()
    }, [])
    return(
        <div className={styles.div}>
            {data !== null ? 
            <div key={data['id']}>
                <p className={styles.quote}>{data['quote']}</p>
                <p className={styles.auth}>- {data['author']}</p>
                <div className={styles.bd}>
                <button onClick={refreshHandler} className={styles.button}>Get another Quote</button>
                </div>
            </div> : msg ? 
            <div>
                <div>{msg}</div>
            </div> : null
            }
        </div>
    );
}

export default Get;