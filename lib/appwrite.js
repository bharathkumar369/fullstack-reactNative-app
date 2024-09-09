import { Account,Avatars,Client,Databases,ID } from 'react-native-appwrite';

export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.aora.practise",
    projectId: "66dc5056002e4121d0da",
    databaseId: "66dc52e6002f9c6e3c89",
    userCollectionId: "66dc530e001243d67459",
    videoCollectionId: "66dc534600103ce8769a",
    storageId: "66dc55660030de7e8b4c"
}

const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform) 

    const account = new Account(client);
    const avatars= new Avatars(client);
    const databases = new Databases(client)

export const createUser = async(email,password,username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if(!newAccount) throw Error;

        const avatarUrl = await avatars.getInitials(username);

        await signIn(email,password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId:newAccount.$id,
                email,
                username,
                avatar:avatarUrl
            }
        )
        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

export const signIn = async(email,password) => {
    try {
        const session = await account.createEmailPasswordSession(email,password);
        return session;
    } catch (error) {
        throw new Error(error)
    }
}
