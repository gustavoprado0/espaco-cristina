'use client'

import { useState } from "react";
import { Button } from "./ui/Button";

interface Service {
    id: string;
    name: string;
    description: string;
    duration: string;
    price: string;
    category: string;
  }

export const ServicesSection: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'Todos' },
        { id: 'corte', name: 'Cortes' },
        { id: 'coloracao', name: 'Coloração' },
        { id: 'tratamento', name: 'Tratamentos' },
        { id: 'escova', name: 'Escova' },
        { id: 'penteado', name: 'Penteados' },
        { id: 'unha', name: 'Unhas' },
    ];

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

    const filteredServices = selectedCategory === 'all'
        ? services
        : services.filter(s => s.category === selectedCategory);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
                    <p className="text-xl text-gray-600">Serviços completos para realçar sua beleza</p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map(cat => (
                        <Button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-6 py-2 rounded-full font-medium transition cursor-pointer ${selectedCategory === cat.id
                                ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {cat.name}
                        </Button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredServices.map(service => (
                        <div key={service.id} className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-gray-500">Duração</p>
                                    <p className="font-semibold text-gray-900">{service.duration}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-500">A partir de</p>
                                    <p className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">{service.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};