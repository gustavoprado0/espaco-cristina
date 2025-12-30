import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export const ContactSection: React.FC = () => {
    return (
        <section className="py-30 bg-gradient-to-br from-pink-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
                    <p className="text-xl text-gray-600">Estamos prontas para atendê-la</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <Phone className="h-6 w-6 text-pink-600 mt-1" />
                                <div>
                                    <p className="font-bold text-gray-900">Telefone/WhatsApp</p>
                                    <p className="text-gray-600">(11) 98765-4321</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <MapPin className="h-6 w-6 text-pink-600 mt-1" />
                                <div>
                                    <p className="font-bold text-gray-900">Endereço</p>
                                    <p className="text-gray-600">Rua das Flores, 123 - Centro<br />São Paulo - SP, 01234-567</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Clock className="h-6 w-6 text-pink-600 mt-1" />
                                <div>
                                    <p className="font-bold text-gray-900">Horário de Funcionamento</p>
                                    <p className="text-gray-600">Segunda a Sexta: 9h às 19h<br />Sábado: 9h às 17h</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-4 mt-8">
                            <a href="#" className="p-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full hover:shadow-lg transition">
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="p-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full hover:shadow-lg transition">
                                <Facebook className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h3>
                        <form className="space-y-4">
                            <Input
                                type="text"
                                placeholder="Seu Nome"
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-pink-600 focus:outline-none text-gray-900"
                            />
                            <Input
                                type="email"
                                placeholder="Seu Email"
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-pink-600 focus:outline-none text-gray-900"
                            />
                            <textarea
                                rows={4}
                                placeholder="Sua Mensagem"
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-pink-600 focus:outline-none text-gray-900"
                            />
                            <Button className="w-full py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition">
                                Enviar Mensagem
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};