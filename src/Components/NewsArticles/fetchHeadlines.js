import { database } from "../../Firebase/Firebase.js";
import { ref, getDatabase, get } from "firebase/database";

export async function fetchArticles() {
  const databaseRef = ref(getDatabase(), "headlines");
  try {
    const snapshot = await get(databaseRef);

    if (snapshot.exists()) {
      const rawData = snapshot.val();
      let rawArticles = rawData.articles;
      rawArticles = cleanArticles(rawArticles);
      return rawArticles;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error("Error reading from database:", error);
    throw error;
  }
}

function cleanArticles(articles) {
  let cleanedArticles = [];

  for (const article of articles) {
    let cleanedArticle = {
      author: article.author || "*No Name Mentioned*",
      content: article.content ? article.content.substring(0, 12) : "",
      description: article.description || (article.content ? article.content.substring(0, 12) : ""),
      date: article.publishedAt || "",
      source: {
        id: "",
        name: article.source ? article.source.name : "",
      },
      title: article.title || "",
      url: article.url || "",
      urlToImage: article.urlToImage || "",
    };

    cleanedArticles.push(cleanedArticle);
  }

  return cleanedArticles;
}






