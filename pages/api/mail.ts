import { NextApiRequest, NextApiResponse } from "next";
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

type Data = {
  success: boolean;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const {
      name,
      email,
      subject,
      message,
    }: { name: string; email: string; subject: string; message: string } =
      req.body;

    const msg = {
      to: "Bahiadelsol_1777@yahoo.com.ar",
      from: "bahia_del_sol@outlook.com",
      subject: `Mensaje de potencial cliente ${name}`,
      text: `Email de ${name} : ${email}`,
      html: `<h2> Asunto: <strong> ${subject} </strong> </h2> <h3> Cliente: <strong> ${name} </strong></h3>
      <h4>Email: <strong> ${email} </strong> </h4>
       <p><strong>${message}</strong> </p>`,
    };

    try {
      // await sgMail.send(msg);
      console.log("Email sent");
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(200).json({ success: false });
    }
  }
};
