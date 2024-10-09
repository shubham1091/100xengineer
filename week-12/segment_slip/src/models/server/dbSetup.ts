import { db } from "../name";
import { createAnswerCollection } from "./answers.collection";
import { createCommentCollection } from "./comments.collection";
import { createQuestionCollection } from "./questions.collection";
import { createVoteCollection } from "./votes.collection";
import { getOrCreateStorage } from "./storage.collection";
import { databases } from "./config";

export const getOrCreateDB = async () => {
  try {
    await databases.get(db);
    console.log("database already exists");
    console.log("database connected");
  } catch (error) {
    try {
      await databases.create(db, db);
      console.log("database created");

      await Promise.all([
        createQuestionCollection(),
        createAnswerCollection(),
        createCommentCollection(),
        createVoteCollection(),
        getOrCreateStorage(),
      ]);

      console.log("Collections created");
      console.log("database connected");
    } catch (error) {
      console.log("Error creating database: ", error);
    }

    return databases;
  }
};
