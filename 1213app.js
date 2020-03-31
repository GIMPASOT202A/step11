// const MongoClient = require('mongodb').MongoClient;
// const stellaSdk = require('stellar-sdk');
// const fetch = require("node-fetch");
// const url = 'mongodb://localhost:27017';
// const dbName = 'circulation';
// const pair = stellaSdk.Keypair.random();
// const server = new stellaSdk.Server("https://horizon-testnet.stellar.org");
// async function main(){

//     const client = new MongoClient(url);
//     await client.connect();
//     const admin = client.db(dbName).admin()
//     console.log(await admin.serverStatus());
//     console.log(await admin.listDatabases()); 
// }
// main();
// (async function main() {
//     console.log(pair.secret());
//     console.log(pair.publicKey());
//     try {
//       const response = await fetch(
//         `https://friendbot.stellar.org?addr=${encodeURIComponent(pair.publicKey())}`
//       );
//       const responseJSON = await response.json();
//       console.log("SUCCESS! You have a new account :)\n", responseJSON);
//     } catch (e) {
//       console.error("ERROR!", e);
//     }
//     //the JS SDK uses promises for most actions, such as retrieving an account
//     const account = await server.loadAccount(pair.publicKey());
//     console.log("Balances for account: " + pair.publicKey());
//     account.balances.forEach(function(balance) {
//     console.log("Type:", balance.asset_type, ", Balance:", balance.balance);
//     });
//   })();