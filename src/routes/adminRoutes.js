const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:adminRoutes');

const adminRoute = express.Router();

const books = [
  {
    title: 'Sample book title here',
    genre: 'Historical fiction',
    author: 'Kwame Oppong',
    read: false,
  },
  {
    title: 'Sample book title here',
    genre: 'Historical fiction',
    author: 'Kwame Oppong',
    read: false,
  },
  {
    title: 'Sample book title here',
    genre: 'Historical fiction',
    author: 'Kwame Oppong',
    read: false,
  },
  {
    title: 'Sample book title here',
    genre: 'Historical fiction',
    author: 'Kwame Oppong',
    read: false,
  },
];
function router(nav) {
  adminRoute.route('/')
    .get((req, res) => {
      const url = 'mongodb://localhost:27017';
      const dbName = 'libraryApp';
      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url);
          debug('connected successfully');
          const db = client.db(dbName);
          const response = await db.collection('books').insertMany(books);
          res.json(response);
        } catch (err) {
          debug(err.stack);
        }
        client.close();
      }());
    });
  return adminRoute;
}

module.exports = router;
