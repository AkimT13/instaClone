import axios from 'axios';
import dotenv from 'dotenv';
import process from 'process'; 

dotenv.config();



const apiKey = process.env.VITE_NEWSAPIKEY;

const getTopHeadlines = async () => {
  try {
    let response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
    console.log("Fetched top headlines");
    return response.data;
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    throw error; // Re-throw the error to propagate it
  }
};

// Call the asynchronous function using await or .then()
async function fetchData() {
  try {
    const headlines = await getTopHeadlines();
    console.log(headlines);
  } catch (error) {
    console.error("Error in fetchData:", error);
  }
}

// Call the function
fetchData();


