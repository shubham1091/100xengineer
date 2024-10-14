import { db, voteCollection } from "@/models/name";
import { databases, users } from "@/models/server/config";
import { UserPrefs } from "@/store/Auth";
import { NextRequest, NextResponse } from "next/server";
import { AppwriteException, ID, Query } from "node-appwrite";

export async function POST(request: NextRequest) {
  try {
    const { votedById, voteStatus, type, typeId } = await request.json();

    const res = await databases.listDocuments(db, voteCollection, [
      Query.equal("type", type),
      Query.equal("typeId", typeId),
      Query.equal("votedById", votedById),
    ]);

    const prefs = await users.getPrefs<UserPrefs>(votedById);

    if (res.documents.length > 0) {
      await databases.deleteDocument(db, voteCollection, res.documents[0].$id);

      await users.updatePrefs<UserPrefs>(votedById, {
        reputation:
          res.documents[0].voteStatus == "upvoted"
            ? prefs.reputation - 1
            : prefs.reputation + 1,
      });
    }

    if (res.documents[0].voteStatus !== voteStatus) {
      await databases.createDocument(db, voteCollection, ID.unique(), {
        type,
        typeId,
        voteStatus,
        votedById,
      });

      if (res.documents[0]) {
        await users.updatePrefs<UserPrefs>(votedById, {
          reputation:
            res.documents[0].voteStatus == "upvoted"
              ? prefs.reputation - 1
              : prefs.reputation + 1,
        });
      } else {
        await users.updatePrefs<UserPrefs>(votedById, {
          reputation:
            voteStatus === "upvoted"
              ? prefs.reputation + 1
              : prefs.reputation - 1,
        });
      }
    }

    const [upvotes, downwotes] = await Promise.all([
      databases.listDocuments(db, voteCollection, [
        Query.equal("type", type),
        Query.equal("typeId", typeId),
        Query.equal("votedById", votedById),
        Query.equal("voteStatus", "upvoted"),
        Query.limit(1),
      ]),
      databases.listDocuments(db, voteCollection, [
        Query.equal("type", type),
        Query.equal("typeId", typeId),
        Query.equal("votedById", votedById),
        Query.equal("voteStatus", "downvoted"),
        Query.limit(1),
      ]),
    ]);

    return NextResponse.json(
      {
        data: {
          document: null,
          voteResult: upvotes.total + downwotes.total,
        },
        message: "vote handled successfully",
      },
      { status: 200 }
    );
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
