
import axios from 'axios'
function fetchbalance (e){
const addy = e.target.value;
    axios.get(`https://wikiwhales-server.vercel.app/api/getHolderBalance/${addy}`)
    .then((result) => {
    return(result.data);
    });      
}
export default fetchbalance;