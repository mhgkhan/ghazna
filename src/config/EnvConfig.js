const obj = {
  DBURI: process.env.MONGO_DB_URI,
  AUTH_SECRET_KEY: process.env.AUTH_SECRET,
  VERIFICATION_SECRET_KEY: process.env.VERIFICATION_SECRET_KEY,
  PASSWORD_SMTP: process.env.SMTP_PASSWORD,
  EMAIL_SMTP: process.env.SMTP_EMAIL,
  VERIFICATION_URL: process.env.VERIFICATION_URL,
  
};

const FreezeEnv = Object.freeze(obj);
export default FreezeEnv;


