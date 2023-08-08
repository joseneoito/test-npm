const { Pool, Client } = require('pg');

const pg = new Pool();


module.exports.Query = (query) => {
  return new Promise((res, rej) => {
    pg.query(query, (err, data) => {
      if (err) {
        err.query = query;
        rej(err);
      } else {
        res(data);
      }
    });
  });
};
