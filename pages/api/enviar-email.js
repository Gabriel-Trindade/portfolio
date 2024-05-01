// Importar o módulo nodemailer para enviar emails
import nodemailer from "nodemailer";
import dotenv from 'dotenv';


dotenv.config();
export default async function handler(req, res) {
  if (req.method === "POST") {

    // Carregar as variáveis de ambiente do arquivo .env
    
    // Extrair os dados do formulário do corpo da requisição
    const { nome, email, mensagem } = req.body;
    // Configurar o transporte SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com", // Substitua com o host SMTP do seu provedor de email
      port: 587, // Porta SMTP
      secure: false, // false para TLS; true para SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      // Enviar o email
      await transporter.sendMail({
        from: "gabriel18.trindade@hotmail.com",
        to: `<${email}>`,
        subject: "Agradeço seu contato!",
        text: `Agradeço seu contato, ${nome}! Em breve entrarei em contato com você. Sua mensagem: ${mensagem}`,
      });

      await transporter.sendMail({
        from: "gabriel18.trindade@hotmail.com",
        to: "gabriel18.trindade@hotmail.com",
        subject: "Contato recebido.",
        text: `Oi, contato recebido via site portfólio.
        Nome: ${nome}
        Email: ${email}
        Mensagem: ${mensagem}
        Lembre-se de responder a pessoa.`,
      });

      // Enviar uma resposta de sucesso
      res.status(200).json({ success: true });
    } catch (error) {
      // Enviar uma resposta de erro
      res
        .status(500)
        .json({ error: "Ocorreu um erro ao enviar o email.", error });
    }
  } else {
    // Se a requisição não for POST, enviar uma resposta de erro
    res.status(405).json({ error: "Método não permitido." });
  }
}
