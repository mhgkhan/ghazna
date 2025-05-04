const obj = {
  DBURI: process.env.MONGO_DB_URI,
  AUTH_SECRET_KEY: process.env.AUTH_SECRET,
  VERIFICATION_SECRET_KEY: process.env.VERIFICATION_SECRET_KEY,
  // CURRECY_API_KEY: process.env.CURRECY_API_KEY
};

const FreezeEnv = Object.freeze(obj);
export default FreezeEnv;


