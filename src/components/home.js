import React from 'react';
import {db} from '../utility/firebase';
import {ref, onValue, child} from '@firebase/database';
import '../stylesheet/home.css'

const Home = () => {
    let tweetRef = ref(db, 'tweets');
    
    let tweets = [];

    onValue(tweetRef,snapshot=>{
        let allTweets;
        allTweets = Object.values(snapshot.val());
        for(let i=0;i<allTweets.length;i++){
            tweets.push(allTweets[i]);
            
        }
    })  

    return(
        <div>
            <h1>Home page</h1>
            
            <div className='allTweets'>
                {tweets.map(key=>{
                    return(
                        <div className='single-tweet'>
                            {key}
                            <br></br>
                        </div>
                    )
                })}
            </div>

        </div>
        
    ) 
}

export default Home;