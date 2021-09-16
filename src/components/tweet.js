import React, {useState} from 'react';
import '../stylesheet/tweet.css';
import {
    ref,
    set,
    push,
    child
  } from '@firebase/database';

import {db} from '../utility/firebase'


const Tweet = () => {
    const [tweet,setTweet] = useState('');
    const [tweets,setTweets] = useState([]);
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setTweets(()=>[...tweets,tweet])
        
        let tweetsRef = ref(db,'tweets');
        let newTweet = push(tweetsRef);
        set(newTweet,tweet);
        setTweet('');
    }

    const handleChange = (e) =>{
        setTweet(e.target.value);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} placeholder="Enter your tweet" value={tweet}/>    
                <button type="submit">Submit</button>
            </form>

        </div>
    )


}


export default Tweet