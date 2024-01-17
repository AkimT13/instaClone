// handleNews.js

import axios from 'axios';
import dotenv from 'dotenv';
import { ref, set } from 'firebase/database';
import { database } from './src/Firebase/Firebase.js';
import { process } from 'node';

dotenv.config();

export default async function handler(req, res) {
  try {
    // Your data update logic here
    const apiKey = process.env.VITE_NEWSAPIKEY;
    let response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
    const headlines = response.data;

    // Store the data in the database
    await set(ref(database, "/headlines"), headlines);

    res.status(200).json({ message: 'Data updated successfully' });
  } catch (error) {
    console.error('Error updating data', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
