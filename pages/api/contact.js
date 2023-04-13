import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      !name.trim() ||
      !message ||
      !message.trim()
    ) {
      res.status(520).json({ message: "invalid input" });
      return;
    }

    const newMessage = { email, name, message };
    let client;
    //deploy
    let username = process.env.mongodb_username;
    let password = process.env.mongodb_password;
    let cluster = process.env.mongodb_cluster;
    let database = process.env.mongodb_database;

    const connectionString = `mongodb+srv://${username}:${password}@${cluster}.e9a3rna.mongodb.net/${database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res
        .status(500)
        .json({ message: error.message || "can not connect to db" });
      return;
    }
    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res
        .status(500)
        .json({ message: error.message || "can not insert into db" });

      return;
    }
    client.close();

    res.status(200).json({ message: "done", newMessage });
  }
}
// 22mwLwryVah3Aurj
// mongodb+srv://bamouzad1988:<password>@cluster1.e9a3rna.mongodb.net/?retryWrites=true&w=majority
