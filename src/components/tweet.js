import React, {useState} from 'react';

const Tweet = () => {
    const [tweet,setTweet] = useState('');
    const [tweets,setTweets] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setTweets((tweets)=>{
            return [...tweets,tweet];
        })
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

            <div>
                {tweets.map((tweet,index)=>{
                    return <div key={index}>{tweet}</div>
                })}
            </div>
        </div>
    )


}


export default Tweet