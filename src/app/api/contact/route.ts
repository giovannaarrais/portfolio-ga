import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const {nome, email, mensagem} = await req.json()

        if(!nome || !email || !mensagem) {
            return NextResponse.json(
                {error: "Dados Inválidos"},
                {status: 400}
            )
        }

        await resend.emails.send({
            from: 'Portfólio - GA <onboarding@resend.dev>',
            to: 'giovannaarrais13@gmail.com',
            subject: `Mensagem de ${nome}`,
            replyTo: email,
            html: `<div style="
                        font-family: Arial, Helvetica, sans-serif;
                        background: #f7f7f7;
                        padding: 24px;
                    ">
                        <table style="
                            width: 100%;
                            max-width: 600px;
                            margin: auto;
                            background: white;
                            border-radius: 10px;
                            overflow: hidden;
                            border: 1px solid #e5e5e5;
                        ">
                            <tr>
                                <td style="color: #000; padding: 20px; text-align: center; background-color: #0eb6fc;">
                                    <h2 style="margin: 0;">📩 Novo contato recebido</h2>
                                </td>
                            </tr>

                            <tr>
                                <td style="padding: 24px;">
                                    <p style="font-size: 15px; margin-bottom: 10px;">
                                        <strong>Nome:</strong> ${nome}
                                    </p>
                                    <p style="font-size: 15px; margin-bottom: 10px;">
                                        <strong>Email:</strong> ${email}
                                    </p>
                                    <p style="font-size: 15px; margin-bottom: 10px;">
                                        <strong>Mensagem:</strong>
                                    </p>

                                    <div style="
                                        background: #fafafa;
                                        border-left: 4px solid #000;
                                        padding: 16px;
                                        white-space: pre-line;
                                    ">
                                        <p style="font-size: 15px;"> ${mensagem} </p>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td style="padding: 16px; text-align: center; color: #777; font-size: 12px;">
                                    <p>Este email foi enviado através do formulário do portfólio.</p>
                                </td>
                            </tr>
                        </table>
                    </div>`
        }); 

        return NextResponse.json({success: true})


    } catch (error){
        console.log(error)
        return NextResponse.json(
            {error: "Erro ao enviar email"},
            {status: 500}
        )

    }
}