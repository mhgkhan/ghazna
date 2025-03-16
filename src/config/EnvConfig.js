const obj= {
  DBURI: process.env.DB_URI,
};

const  FreezeEnv= Object.freeze(obj);
export default FreezeEnv;


