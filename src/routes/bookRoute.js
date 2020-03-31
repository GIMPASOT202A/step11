const express = require('express');
// This is the new addition for the lesson11
const {
  MongoClient,
} = require('mongodb');
const debug = require('debug')('app:bookRoutes');
// const bookRouter = express.Router();
// const sql = require('mssql');
// const debug = require('debug')('app:bookRoutes');
const bookRouter = express.Router();

function router(nav) {
  bookRouter.route('/')
    .get((req, res) => {
      const url = 'mongodb://localhost:27017';
      const dbName = 'libraryApp';
      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url);
          debug('connected successfully');
          const db = client.db(dbName);
          const col = await db.collection('books');

          // eslint-disable-next-line max-len
          // In mongo we use select to query the database for records. the find will bring back everything
          const books = await col.find().toArray();
          res.render(
            'bookListView', {
              nav,
              title: 'Library',
              books,
            },
          );
        } catch (err) {
          debug(err.stack);
        }
        client.close();
      }());
    });
  bookRouter.route('/:id')
    .get((req, res) => {
      (async function query() {
        const {
          id
        } = req.params;
        const request = new sql.Request();
        // eslint-disable-next-line operator-linebreak
        const {
          recordset
        } =
        // eslint-disable-next-line no-undef
        await request.input('id', sql.Int, id)
          .query('select * from books where Id = @id');
        res.render(
          'bookView', {
            nav,
            title: 'Library',
            book: recordset[0],
          },
        );
      }());
    });
  return bookRouter;
}
module.exports = router;
