// app/api/order/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, brand, type, id } = body;

        // Берем данные из переменных окружения
        const botToken = process.env.BOT_TOKEN;
        // Используем ADMIN_CHAT_ID, либо фолбэк на TELEGRAM_CHAT_ID если он уже есть
        const chatId = process.env.ADMIN_CHAT_ID;

        if (!botToken || !chatId) {
            console.error("Telegram token or chat ID is missing");
            return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
        }

        // Формируем красивое сообщение с разметкой Markdown
        const message = `🔥 *Yangi buyurtma so'rovi!*\n\n📦 *Mahsulot:* ${name}\n🏷 *Brend:* ${brand}\n⚙️ *Turi:* ${type}\n🆔 *ID:* ${id}\n\nMijoz ushbu mahsulotga qiziqish bildirdi.`;

        const tgUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const res = await fetch(tgUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: "Markdown",
            }),
        });

        if (!res.ok) {
            throw new Error("Telegram API rejected the request");
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Order error:", error);
        return NextResponse.json({ error: "Xatolik yuz berdi" }, { status: 500 });
    }
}