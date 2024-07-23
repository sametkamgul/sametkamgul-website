const emailjs = require("@emailjs/nodejs");
import "dotenv/config";

const sendEmail = async (templateParams) => {
  let success = false;
  try {
    await emailjs.send(
      process.env.EMAIL_SERVICE_ID,
      process.env.EMAIL_TEMPLATE_ID,
      templateParams,
      {
        publicKey: process.env.EMAIL_PUBLIC_KEY,
        privateKey: process.env.EMAIL_PRIVATE_KEY, // optional, highly recommended for security reasons
      }
    );

    success = true;
  } catch (error) {
    success = false;
  }

  return success;
};

export default { sendEmail };
