import * as cheerio from 'cheerio';
import axios from 'axios';

const Scrap = async () => {
const {data} = await axios.get('https://www.linkedin.com/jobs/search?keywords=Software%20Engineer&location=India&geoId=102713980&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0');
console.log(data);
};
//response.then((data) => console.log(data));

console.log(Scrap());
//for(i=0;i<arr.length;i++){console.log(arr[i].getElementsByClassName("base-search-card__title")[0].outerText)}

//const data = cheerio.fromURL('https://www.linkedin.com/jobs/search?keywords=Software%20Engineer&location=India&geoId=102713980&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0');