
import axios from 'axios'
function fetchbalance (e){
// const addy = e.target.value;
    console.log("this is e ->",e);
    const addy = e;
    // axios.get(`https://wikiwhales-server.vercel.app/api/getHolderBalance/${addy}`)
    axios.get(`http://localhost:3001/api/getHolderBalance/0xb552cf92e761c8c71f8de52ed10b0df6dcfa24ff`)
    .then((result) => {
    return(result.data);
    });      
}
export default fetchbalance;