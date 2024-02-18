// we need axios to make HTTP requests
import axios from 'axios';

// and we need jsdom and Readability to parse the article HTML
import { JSDOM } from 'jsdom';
import { Readability } from '@mozilla/readability';

// First lets get some search data from News API

/*
// Build the URL we are going request. This will get articles related to Apple and sort them newest first
let url = 'https://newsapi.org/v2/everything?' +
'q=Apple&' +
'sortBy=publishedAt&' +
'apiKey=1200299230a54093ab0bd9a12413d913';
*/
const Purl = "https://www.cnn.com/2024/02/10/politics/trump-south-carolina-primary-haley/index.html"
export async function getHtml(articleUrl) {
  try {
    console.log("Getting html data...");
    const response = await axios.get(articleUrl);
    let dom = new JSDOM(response.data, {
      url: articleUrl
    });
    console.log("Parsing article...");
    let article = new Readability(dom.window.document).parse();
    return article ? article : "Empty Article";
  } catch (error) {
    console.error("Error fetching article data:", error);
    throw error; // rethrow the error to be caught by the caller
  }
}








