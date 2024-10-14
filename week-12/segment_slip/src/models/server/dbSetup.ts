import { db } from "../name";
import { createAnswerCollection } from "./answers.collection";
import { createCommentCollection } from "./comments.collection";
import { createQuestionCollection } from "./questions.collection";
import { createVoteCollection } from "./votes.collection";
import { databases } from "./config";

export const getOrCreateDB = async () => {
  try {
    await databases.get(db);
    console.log("database already exists");
    console.log("database connected");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    console.log("database not found creating database");

    try {
      await databases.create(db, db);
      console.log("database created");

      await Promise.all([
        createQuestionCollection(),
        createAnswerCollection(),
        createCommentCollection(),
        createVoteCollection(),
      ]);

      console.log("Collections created");
      console.log("database connected");
    } catch (error) {
      console.error("Error creating database: ", error);
    }

    return databases;
  }
};
