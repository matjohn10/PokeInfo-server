const dotenv = require("dotenv");
dotenv.config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const storeEmails = async (email) => {
  try {
    await client.connect();
    const newsBD = await client.db("newsletter");
    const collection = await newsBD.collection("users");
    // Make sure email to add is not already added
    const account = await collection.findOne({ email: email });
    if (account !== null) return true;
    await collection.insertOne({ email: email });
    return false;
  } finally {
    client.close();
  }
};

const storeNewsletterMessage = async (message = null, html = null) => {
  // Connect to collection
  await client.connect();
  const newsBD = await client.db("newsletter");
  const collection = await newsBD.collection("sentEmails");

  // Prepare data
  const date_data = new Date();
  const year = date_data.getFullYear();
  const month = ("0" + (date_data.getMonth() + 1)).slice(-2);
  const day = ("0" + date_data.getDate()).slice(-2);
  const toStore = {
    date: year + "-" + month + "-" + date,
    message: message,
    html: html,
  };
  await collection.insertOne(toStore);
};

const storeNewUser = async (user) => {
  try {
    await client.connect();
    const newsBD = await client.db("pokeinfo_website");
    const collection = await newsBD.collection("users");

    const account = await collection.findOne({ email: user.email });
    if (account !== null) return false;
    await collection.insertOne(user);
    return true;
  } finally {
    client.close();
  }
};

const getUserPwd = async (username) => {
  try {
    await client.connect();
    const newsBD = await client.db("pokeinfo_website");
    const collection = await newsBD.collection("users");
    const account = await collection.findOne({ username: username });
    return account ? account.password : null;
  } finally {
    client.close();
  }
};

const getUserForgotPwd = async (email, birthday, toFetch) => {
  try {
    await client.connect();
    const newsBD = await client.db("pokeinfo_website");
    const collection = await newsBD.collection("users");
    const account = await collection.findOne({
      email: email,
      birthday: birthday,
    });
    return account ? account[toFetch] : null;
  } finally {
    client.close();
  }
};

const resetUserPwd = async (email, birthday, newPwd) => {
  try {
    await client.connect();
    const newsBD = await client.db("pokeinfo_website");
    const collection = await newsBD.collection("users");
    await collection.updateOne(
      { email: email, birthday: birthday },
      {
        $set: { password: newPwd },
      }
    );
    return { added: true, message: "success" };
  } catch (error) {
    return {
      added: false,
      error: error,
      message:
        "The user could not be found in the database and the password was not updated.",
    };
  } finally {
    client.close();
  }
};

const getUserInfo = async (username) => {
  try {
    await client.connect();
    const newsBD = await client.db("pokeinfo_website");
    const collection = await newsBD.collection("users");
    const account = await collection.findOne({
      username: username,
    });
    return account ? account : "";
  } finally {
    client.close();
  }
};

const saveNewTeam = async (team, user) => {
  const email = JSON.parse(user).email;
  try {
    await client.connect();
    const newsBD = await client.db("pokeinfo_website");
    const collection = await newsBD.collection("users");
    const account = await collection.findOne({
      email: email,
    });
    const hasTeam = account.teams;
    let success;
    if (hasTeam) {
      const filter = { email: email };
      const updateDoc = {
        $set: {
          teams: [...hasTeam, team],
        },
      };
      const result = await collection.updateOne(filter, updateDoc);
      success = result.acknowledged;
    } else {
      const filter = { email: email };
      const updateDoc = {
        $set: {
          teams: [team],
        },
      };
      const result = await collection.updateOne(filter, updateDoc);
      success = result.acknowledged;
    }
    return success;
  } finally {
    client.close();
  }
};

const getUserTeams = async (email) => {
  try {
    await client.connect();
    const newsBD = await client.db("pokeinfo_website");
    const collection = await newsBD.collection("users");
    const account = await collection.findOne({
      email: email,
    });
    const hasTeam = account.teams;
    return hasTeam;
  } finally {
    client.close();
  }
};

const deleteUserTeam = async (email, teamId) => {
  try {
    await client.connect();
    const newsBD = await client.db("pokeinfo_website");
    const collection = await newsBD.collection("users");
    const account = await collection.findOne({
      email: email,
    });
    const teams = account.teams.filter((team) => team.id !== teamId);
    const filter = { email: email };
    const updateDoc = {
      $set: {
        teams: [...teams],
      },
    };
    const result = await collection.updateOne(filter, updateDoc);
    return result.acknowledged;
  } finally {
    client.close();
  }
};

module.exports = {
  storeEmails,
  storeNewUser,
  getUserPwd,
  getUserForgotPwd,
  resetUserPwd,
  getUserInfo,
  saveNewTeam,
  getUserTeams,
  deleteUserTeam,
};
