// Import mongoose library (helps interact with MongoDB more easily)
import mongoose from "mongoose";

/**
 * Connects to MongoDB using the provided connection string (URL).
 * This function is async because connecting to a database
 * is not instant — it takes time, so it returns a Promise.
 *
 * @param {string} url - The MongoDB connection string
 * @returns {Promise} - Resolves when connection is successful
 */
export async function connectToMongoDB(url) {
  // mongoose.connect() establishes the connection
  // and returns a Promise (so we can await or .then() it)
  return mongoose.connect(url);
}
