const obj = {
  DBURI: process.env.MONGO_DB_URI,
  AUTH_SECRET_KEY: process.env.AUTH_SECRET_KEY,
  VERIFICATION_SECRET_KEY: process.env.VERIFICATION_SECRET_KEY,
  PASSWORD_SMTP: process.env.SMTP_PASSWORD,
  EMAIL_SMTP: process.env.SMTP_EMAIL,
  VERIFICATION_URL: process.env.VERIFICATION_URL,
  FORGET_PASSWORD_URL: process.env.FORGET_PASSWORD_URL,
  DOMAIN: process.env.DOMAIN,
  GoogleSiteVerificationContent: process.env.GOOGLE_SITE_VERIFICATION_CONTENT,
  IMAGE_SERVER_KEY :process.env.IMAGE_SERVER_KEY,
  IMAGE_SERVER_URL: process.env.IMAGE_SERVER_URL,
};

const FreezeEnv = Object.freeze(obj);
export default FreezeEnv;


