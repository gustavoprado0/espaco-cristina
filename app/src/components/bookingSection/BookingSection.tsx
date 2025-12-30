'use client'

import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";


interface Service {
    id: string;
    name: string;
    description: string;
    duration: string;
    price: string;
    category: string;
}

interface TimeSlot {
    time: string;
    available: boolean;
}

export const BookingSection: React.FC = () => {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [clientName, setClientName] = useState('');
    const [clientPhone, setClientPhone] = useState('');
    const [bookingConfirmed, setBookingConfirmed] = useState(false);

    const services: Service[] = [
        { id: '1', name: 'Corte Feminino', description: 'Corte personalizado com acabamento profissional', duration: '45min', price: 'R$ 80', category: 'corte' },
        { id: '2', name: 'Escova Modelada', description: 'Escova com modelagem e finalização', duration: '1h', price: 'R$ 70', category: 'escova' },
        { id: '3', name: 'Hidratação Profunda', description: 'Tratamento intensivo para cabelos danificados', duration: '1h30min', price: 'R$ 120', category: 'tratamento' },
        { id: '4', name: 'Coloração Completa', description: 'Tintura completa com produtos de alta qualidade', duration: '2h30min', price: 'R$ 250', category: 'coloracao' },
        { id: '5', name: 'Mechas/Luzes', description: 'Iluminação personalizada para seu estilo', duration: '3h', price: 'R$ 350', category: 'coloracao' },
        { id: '6', name: 'Progressiva', description: 'Alisamento progressivo durável', duration: '3h', price: 'R$ 400', category: 'tratamento' },
        { id: '7', name: 'Penteado para Eventos', description: 'Penteados elegantes para ocasiões especiais', duration: '1h30min', price: 'R$ 150', category: 'penteado' },
        { id: '8', name: 'Manicure e Pedicure', description: 'Cuidados completos para unhas', duration: '1h', price: 'R$ 60', category: 'unha' },
    ];

    const availableTimes: TimeSlot[] = [
        { time: '09:00', available: true },
        { time: '10:00', available: true },
        { time: '11:00', available: false },
        { time: '14:00', available: true },
        { time: '15:00', available: true },
        { time: '16:00', available: true },
        { time: '17:00', available: false },
        { time: '18:00', available: true },
    ];

    const openWhatsApp = () => {
        const serviceName = services.find(
            s => s.id === selectedService
        )?.name;

        const phoneFormatted = clientPhone.replace(/\D/g, '');

        const message = `
    Olá ${clientName} 👋✨
    Gostaria de confirmar seu agendamento:
    
    💇‍♀️ Serviço: ${serviceName}
    📅 Data: ${new Date(selectedDate).toLocaleDateString('pt-BR')}
    ⏰ Horário: ${selectedTime}
        `.trim();

        const whatsappURL = `https://wa.me/55${phoneFormatted}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, '_blank');
    };



    const handleSubmit = async () => {
        if (
            selectedService &&
            selectedDate &&
            selectedTime &&
            clientName &&
            clientPhone
        ) {
            try {
                await openWhatsApp(); // 🔥 ENVIA O WHATSAPP

                setBookingConfirmed(true);

                setTimeout(() => {
                    setBookingConfirmed(false);
                    setStep(1);
                    setSelectedService('');
                    setSelectedDate('');
                    setSelectedTime('');
                    setClientName('');
                    setClientPhone('');
                }, 5000);
            } catch (error) {
                console.error('Erro ao enviar WhatsApp', error);
                alert('Erro ao enviar confirmação no WhatsApp');
            }
        }
    };


    if (bookingConfirmed) {
        return (
            <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Agendamento Confirmado!</h2>
                    <p className="text-xl text-gray-600 mb-4">
                        Olá {clientName}, seu horário foi agendado com sucesso!
                    </p>
                    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto">
                        <p className="text-lg mb-2 text-gray-600 font-normal"><strong>Serviço:</strong> {services.find(s => s.id === selectedService)?.name}</p>
                        <p className="text-lg mb-2 text-gray-600 font-normal"><strong>Data:</strong> {new Date(selectedDate).toLocaleDateString('pt-BR')}</p>
                        <p className="text-lg mb-2 text-gray-600 font-normal"><strong>Horário:</strong> {selectedTime}</p>
                        <p className="text-lg text-gray-600 font-normal"><strong>Telefone:</strong> {clientPhone}</p>
                    </div>
                    <p className="text-gray-600 mt-6">Enviaremos uma confirmação por WhatsApp!</p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-30 bg-gradient-to-br from-pink-50 to-purple-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Agende seu Horário</h2>
                    <p className="text-xl text-gray-600">Preencha os dados abaixo para realizar seu agendamento</p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="flex items-center space-x-4">
                        <div className={`flex items-center ${step >= 1 ? 'text-pink-600' : 'text-gray-400'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}>1</div>
                            <span className="ml-2 font-medium hidden sm:inline">Serviço</span>
                        </div>
                        <div className="w-12 h-1 bg-gray-300"></div>
                        <div className={`flex items-center ${step >= 2 ? 'text-pink-600' : 'text-gray-400'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}>2</div>
                            <span className="ml-2 font-medium hidden sm:inline">Data/Hora</span>
                        </div>
                        <div className="w-12 h-1 bg-gray-300"></div>
                        <div className={`flex items-center ${step >= 3 ? 'text-pink-600' : 'text-gray-400'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}>3</div>
                            <span className="ml-2 font-medium hidden sm:inline">Dados</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl">
                    {step === 1 && (
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-pink-600">Escolha o Serviço</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {services.map(service => (
                                    <Button
                                        key={service.id}
                                        onClick={() => setSelectedService(service.id)}
                                        className={`p-4 rounded-xl border-2 text-left transition cursor-pointer ${selectedService === service.id
                                            ? 'border-pink-600 bg-pink-50'
                                            : 'border-gray-200 hover:border-pink-300'
                                            }`}
                                    >
                                        <h4 className="font-semibold text-lg mb-1 text-gray-600">{service.name}</h4>
                                        <p className="text-sm text-gray-600 mb-2">{service.duration}</p>
                                        <p className="text-pink-600 font-bold">{service.price}</p>
                                    </Button>
                                ))}
                            </div>
                            <Button
                                onClick={() => selectedService && setStep(2)}
                                disabled={!selectedService}
                                className="mt-6 w-full cursor-pointer py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition"
                            >
                                Próximo
                            </Button>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-gray-700">Escolha Data e Horário</h3>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Data</label>
                                <Input
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-pink-600 focus:outline-none text-gray-600 font-normal"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Horário</label>
                                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                    {availableTimes.map(slot => (
                                        <Button
                                            key={slot.time}
                                            onClick={() => slot.available && setSelectedTime(slot.time)}
                                            disabled={!slot.available}
                                            className={`py-3 transition  border-2 border-gray-300 rounded-lg focus:border-pink-600 focus:outline-none text-pink-500 font-normal  ${selectedTime === slot.time
                                                ? 'bg-pink-600 text-white'
                                                : slot.available
                                                    ? 'border-pink-200 bg-pink-50 cursor-pointer'
                                                    : 'bg-gray-300 text-gray-400 cursor-not-allowed'
                                                }`}
                                        >
                                            {slot.time}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Button
                                    onClick={() => setStep(1)}
                                    className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition cursor-pointer"
                                >
                                    Voltar
                                </Button>
                                <Button
                                    onClick={() => selectedDate && selectedTime && setStep(3)}
                                    disabled={!selectedDate || !selectedTime}
                                    className="flex-1 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition cursor-pointer"
                                >
                                    Próximo
                                </Button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-700 mb-6">Seus Dados</h3>
                            <div className="space-y-4 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                                    <Input
                                        type="text"
                                        value={clientName}
                                        onChange={(e) => setClientName(e.target.value)}
                                        placeholder="Digite seu nome"
                                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-pink-600 focus:outline-none text-gray-600 font-normal"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone/WhatsApp</label>
                                    <Input
                                        type="tel"
                                        value={clientPhone}
                                        onChange={(e) => setClientPhone(e.target.value)}
                                        placeholder="(11) 99999-9999"
                                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-pink-600 focus:outline-none text-gray-600 font-normal"
                                    />
                                </div>
                            </div>
                            <div className="bg-pink-50 p-4 rounded-lg mb-6">
                                <h4 className="text-gray-600 font-normal mb-2">Resumo do Agendamento</h4>
                                <p className='text-gray-600 font-normal'><strong className='text-gray-600 font-normal'>Serviço:</strong> {services.find(s => s.id === selectedService)?.name}</p>
                                <p className='text-gray-600 font-normal'><strong className='text-gray-600 font-normal'>Data:</strong> {selectedDate}</p>
                                <p className='text-gray-600 font-normal'><strong className='text-gray-600 font-normal'>Horário:</strong> {selectedTime}</p>
                            </div>
                            <div className="flex gap-4">
                                <Button
                                    onClick={() => setStep(2)}
                                    className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition cursor-pointer"
                                >
                                    Voltar
                                </Button>
                                <Button
                                    onClick={handleSubmit}
                                    disabled={!clientName || !clientPhone}
                                    className="flex-1 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition cursor-pointer"
                                >
                                    Confirmar Agendamento
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};