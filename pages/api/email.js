import emailHelper from "@/app/lib/emailHelper";
const { EmailJSResponseStatus } = require("@emailjs/nodejs");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const templateParams = JSON.parse(req.body);

    let result = {};
    let response = false;
    if (templateParams) {
      response = await emailHelper.sendEmail(templateParams);

      if (response) {
        result = { message: "email is sent", error: false };
      } else {
        result = { message: "unknown error", error: true };
      }
    } else {
      result = { message: "missing data", error: true };
    }

    res.status(200).json(result);
  } else {
    res.status(404).json({ message: "method is not allowed", error: true });
  }
}
