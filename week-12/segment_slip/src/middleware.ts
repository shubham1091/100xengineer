import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getOrCreateDB } from "./models/server/dbSetup";
import { getOrCreateStorage } from "./models/server/storage.collection";

let init = false;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function middleware(request: NextRequest) {
  if (!init) {
    await Promise.all([getOrCreateDB(), getOrCreateStorage()]);
    init = true;
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  /* match all request paths except for the the ones that starts with:
  - api
  - _next/static
  - _next/image
  - favicon.com

  */
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
