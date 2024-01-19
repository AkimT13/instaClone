// handleNews.js

import axios from 'axios';
import dotenv from 'dotenv';
import { ref, set } from 'firebase/database';
import { database } from './src/Firebase/Firebase.js';



dotenv.config();

export default async function handler() {
  try {
    //get data from newsapi
    //const apiKey = process.env.VITE_NEWSAPIKEY;
    const apiKey2 = "1200299230a54093ab0bd9a12413d913"
    let response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey2}`);
    const headlines = response.data;

    // Store the data in the database
    await set(ref(database, "/headlines"), headlines);

    
  } catch (error) {
    console.error('Error updating data', error);
    
  }
}
handler();