type WhatsAppParams = {
    phone: string;
    name: string;
    date: string;
  };
  
  export function openWhatsApp({ phone, name, date }: WhatsAppParams) {
    const message = `Olá! Me chamo ${name} e acabei de agendar um horário para ${date} 💇‍♂️✨`;
  
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  
    window.open(url, "_blank");
  }
  