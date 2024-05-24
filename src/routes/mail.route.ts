import { Router } from 'express';
const nodemailer = require('nodemailer');

const router = Router();

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Configura el transportador con las credenciales del servicio de correo
        let transporter = nodemailer.createTransport({
            host: 'smtp.office365.com', // Servidor SMTP de Hotmail/Outlook
            port: 587,                  // Puerto SMTP
            secure: false, 
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Configura las opciones del correo electrónico
        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'tamef.granados@gmail.com',
            subject: 'Nuevo mensaje de contacto',
            text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
            html: `<p>Nombre: ${name}</p><p>Email: ${email}</p><p>Mensaje: ${message}</p>`
        };

        // Envía el correo electrónico
        let info = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Correo enviado exitosamente', info: info.response });
    } catch (error:any) {
        res.status(500).json({ message: 'Error al enviar correo', error: error.toString() });
    }
});

export default router;
