import React, { useState } from 'react';
import axios from 'axios';
import styles from './post.module.css';

const Post = () => {
    const [msg, setMsg] = useState(null);
    const postHandler = (e) => {
        e.preventDefault();
        setMsg(null);
        axios.post('http://localhost:5000/quotes', {
            quote: document.getElementById('quote').value,
            author: (document.getElementById('author').value.length > 0 ? document.getElementById('author').value : "Anonymous")
        })
            .then((res) => {
                console.log(res);
                const msg = <p>Quote posted successfully</p>
                setMsg(msg);
            })
            .catch((err) => {
                console.log(err);
                const msg = <p>Some error occured<br />400 Bad request <br /> Check if your quote is empty <br /> If it is not empty then the quote already exists<br />Check your browsers console for more information</p>
                setMsg(msg);
            });
        document.getElementById('quote').value = "";
        document.getElementById('author').value = "";
    }
    return (
        <div className={styles.div}>
            <div>
            <p className={styles.p}>Enter Quote : </p>
            <input type="text" placeholder="Enter quote here" id="quote" className={styles.input1}/>
            </div>
            <div>
            <p className={styles.p}>Enter Author : </p>
            <input type="text" placeholder="Enter author here" id="author" className={styles.input2}/>
            </div>
            <button onClick={postHandler} className={styles.button}>Post</button>
            {msg ? <div>
                <div>{msg}</div>
            </div> : null
            }
        </div>
    );
}

export default Post;