import React,{useState,useEffect} from "react";
import "./EmojiSearcher.css";
import EmojiData from './Emoji.json';

function EmojiSearcher() {
    const [search,setSearch] = useState('');
    const [data,setData]=useState([]);
    useEffect(() => {
        const newData = EmojiData.filter(emojis => emojis.title.toLowerCase().includes(search.toLowerCase()));
            setData(newData);
    },[search])

return (
<div>
<div className="main">
    <div className="part1"> 
        <h1 className="title1"> Emoji Searcher </h1>
        <input className="input1" type="text" value={search} onChange={(e) => setSearch(e.target.value) } /> 
    </div>
    <div className="part2">
    {
        data.length===0 ?
        <div> <h2 className="enot"> No Emojis Found </h2> </div>
        :
        data.map(emoji => 
        <div className="cards"> 
            <div className="eicon"> {emoji.symbol} </div>
            <br />
            <div className="etext"> {emoji.title} </div>
        </div>
        )
    }
    </div>
</div>
</div>
)
}

export default EmojiSearcher;