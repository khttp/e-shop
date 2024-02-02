const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
let _db;
const mongoconnect = async (callback) => {

  client = await mongoClient.connect(
    'mongodb+srv://abooh_kh:sniper2000@cluster0.eshop.mongodb.net/'
  );
  try {
    _db = client.db();
    console.log('connected');

  } catch (err) {
    console.error(err);
  }
}
const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found';
}

exports.mongoconnect = mongoconnect;
exprots.getDb = getDb;
