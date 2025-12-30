import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { phone, name, date, time, service } = await req.json();

    const url = `https://graph.facebook.com/${process.env.WHATSAPP_API_VERSION}/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`;

    const body = {
        messaging_product: "whatsapp",
        to: phone,
        type: "text",
        text: {
            body: `Olá ${name} 👋✨
Seu agendamento foi confirmado!
Serviço: ${service}
Data: ${date}
Horário: ${time}`,
        },
    };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.WHATSAPP_API_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json({ success: true, data });
}
