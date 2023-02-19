const fs = require("fs");

const transporter = require("../config/nodemailer.config");

const sendEmail = async (recipientEmail, targetShopName) => {
  try {
    const screenshotDirectory = `screenshots/${targetShopName}`;

    const screenshotFiles = fs.readdirSync(screenshotDirectory);

    const screenshotAttachments = screenshotFiles.map((screenshot) => {
      return {
        filename: screenshot,
        path: `${screenshotDirectory}/${screenshot}`,
      };
    });

    const date = new Date();
    const currentDate = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;

    const message = {
      from: "serpvisibilitychecker@zohomail.eu",
      to: recipientEmail,
      subject: `SERP Visibility Checker: Visibility for requested keywords for ${targetShopName} on ${currentDate}`,
      text: "Dear user,\n \nplease download the attached .jpg file(s) to view the visibility for your selected keywords and domain.\n \nBest regards,\n \nSERP Visibility Checker",
      attachments: screenshotAttachments,
    };

    await transporter.sendMail(message);

    console.log("Email successfully sent!");
  } catch (error) {
    console.error("An error occurred while sending an email: ", error);
  }
};

module.exports = sendEmail;
