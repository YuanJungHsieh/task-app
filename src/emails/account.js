const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "leohsieh1001@gmail.com",
    subject: "Thanks for joining in!",
    text: `Hi ${name}, Welcome to the task manager app!`,
  });
};

const sendGoobyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "leohsieh1001@gmail.com",
    subject: "Cancelation completed",
    text: `Hi ${name}, sorry to see you go, let me know if you have any suggestion!`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendGoobyeEmail,
};
