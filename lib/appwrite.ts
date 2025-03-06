// src/lib/server/appwrite.js
"use server";
import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient() {// For regular users who log in. It uses cookies for authentication.
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

  const session = cookies().get("appwrite-session");
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() { // account property lets the user interact with Appwrite's authentication API (e.g., signing in, signing out, updating profile info).
      return new Account(client);
    },
  };
}

//-----------------------------------------------
export async function createAdminClient() { // For admin-level access using an API key.
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.NEXT_APPWRITE_KEY!);

  return {
    get account() { // account: Manage user accounts.
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get user() {
      return new Users(client);
    }
  };
}



// NOTES

// Client = A connection to the Appwrite API that lets your app make requests and perform actions.
// User = A person who is interacting with your app, usually after they log in.

// In your code, when you call client.setSession(session.value), you're telling the client to authenticate using the user's session, allowing the user to perform actions like signing in or updating their profile via the account API.