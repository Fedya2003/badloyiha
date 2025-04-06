export async function POST(req: Request) {
	const { name, email, message } = await req.json();

	const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
	const chatId = process.env.TELEGRAM_CHAT_ID;

	const text = `
  📩 Yangi aloqa xabari:
  👤 Ism: ${name}
  📧 Email: ${email || 'kiritilmagan'}
  💬 Xabar: ${message}
    `;

	await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ chat_id: chatId, text }),
	});

	return new Response('Success');
}
