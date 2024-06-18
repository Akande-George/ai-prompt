import {
  Client,
  Account,
  ID,
  Avatars,
  Databases,
  Query,
} from "react-native-appwrite";
export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platfrom: "com.george.learnreactnative",
  projectId: "667037fc000faf6f10c5",
  databaseId: "66703aef003608e4eadf",
  userCollectionId: "66703b36000bda8a83e0",
  videoCollectionId: "66703b6d00098dcbf4f4",
  storageId: "66703ddb0011eedebdd0",
};
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platfrom); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
// Register User
export const createUser = async (email, password, username) => {
  try {
    const newACcount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newACcount) throw Error;
    const avatarUrl = avatars.getInitials(username);
    await signIn(email, password);
    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newACcount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export async function signIn(email, password) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw Error(error);
  }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;
    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );
    if (!currentUser) throw Error;
    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
  }
};

export const getAllPosts = async () => {
  try {
    const posts = await databases.listDocuments(
      config.databaseId,
      config.videoCollectionId
    );
    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
};
