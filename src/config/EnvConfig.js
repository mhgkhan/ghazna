const obj = {
  DBURI: process.env.MONGO_DB_URI,
  // CURRECY_API_KEY: process.env.CURRECY_API_KEY
};

const FreezeEnv = Object.freeze(obj);
export default FreezeEnv;


