import { Controller, Post, Body, InternalServerErrorException } from '@nestjs/common';

@Controller()
export class TelegramController {
  private async sendToTelegram(botToken: string, chatId: string, text: string) {
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
    });
    if (!res.ok) {
      throw new InternalServerErrorException('Telegram API xatosi');
    }
    return { success: true };
  }

  @Post('send-message')
  async sendMessage(@Body() body: { name: string; phone: string; email: string }) {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      throw new InternalServerErrorException('Telegram sozlamalari topilmadi');
    }

    const text = `🚀 *Yangi ariza*\n👤 *Ism:* ${body.name}\n📞 *Telefon:* ${body.phone}\n📧 *Email:* ${body.email}`;
    return this.sendToTelegram(botToken, chatId, text);
  }

  @Post('order')
  async order(@Body() body: { name: string; brand: string; type: string; id: string }) {
    const botToken = process.env.BOT_TOKEN ?? process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.ADMIN_CHAT_ID ?? process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      throw new InternalServerErrorException('Telegram sozlamalari topilmadi');
    }

    const text = `🔥 *Yangi buyurtma so'rovi!*\n\n📦 *Mahsulot:* ${body.name}\n🏷 *Brend:* ${body.brand}\n⚙️ *Turi:* ${body.type}\n🆔 *ID:* ${body.id}\n\nMijoz ushbu mahsulotga qiziqish bildirdi.`;
    return this.sendToTelegram(botToken, chatId, text);
  }
}
