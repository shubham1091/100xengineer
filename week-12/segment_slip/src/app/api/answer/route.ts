import { answerCollection, db } from "@/models/name";
import { databases, users } from "@/models/server/config";
import { UserPrefs } from "@/store/Auth";
import { NextRequest, NextResponse } from "next/server";
import { AppwriteException, ID } from "node-appwrite";

export async function POST(request: NextRequest) {
  try {
    const { questionId, answer, authorId } = await request.json();
    const response = await databases.createDocument(
      db,
      answerCollection,
      ID.unique(),
      {
        content: answer,
        authorId,
        questionId,
      }
    );
    // Increase author reputation
    const prefs = await users.getPrefs<UserPrefs>(authorId);
    await users.updatePrefs<UserPrefs>(authorId, {
      reputation: prefs.reputation + 1,
    });

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    const err = error as AppwriteException;
    return NextResponse.json(
      {
        error: err?.message || "Error creating answer",
      },
      {
        status: err?.code || 500,
      }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { answerId } = await request.json();

    const answer = await databases.getDocument(db, answerCollection, answerId);
    await databases.deleteDocument(db, answerCollection, answerId);

    const prefs = await users.getPrefs<UserPrefs>(answer.authorId);
    await users.updatePrefs<UserPrefs>(answer.authorId, {
      reputation: prefs.reputation - 1,
    });

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    const err = error as AppwriteException;

    return NextResponse.json(
      {
        error: err?.message || "Error deleting answer",
      },
      {
        status: err?.code || 500,
      }
    );
  }
}
