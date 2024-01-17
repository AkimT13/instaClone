import axios from 'axios';
import dotenv from 'dotenv';
import process from 'process'; 
import { ref, set } from 'firebase/database';
import {database} from './src/Firebase/Firebase.js';


dotenv.config();

//file will be ran by vercel every 24 hours

async function deleteData() {
    try {
        await delete(ref(database, "/headlines"));
        console.log("Data Deleted");
    } catch (error) {
        console.error("Error deleting data", error);
    }
}

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
async function storeData() {
  try {
    const headlines = await getTopHeadlines();
    console.log("Storing data...");
    // Store the data in the database
     await set(ref(database, "/headlines"), headlines);

  } catch (error) {
    console.error("Error in Storing Data", error);
  }
}

// Call the function
deleteData();
storeData();


