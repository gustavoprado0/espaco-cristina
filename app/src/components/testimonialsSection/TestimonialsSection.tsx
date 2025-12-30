import { Star } from "lucide-react";

export const TestimonialsSection: React.FC = () => {

    const testimonials = [
        { name: 'Maria Silva', text: 'Atendimento excepcional! A Cristina é uma artista, saio sempre renovada daqui.', rating: 5 },
        { name: 'Ana Paula', text: 'Melhor salão da região! Profissionalismo e qualidade incomparáveis.', rating: 5 },
        { name: 'Juliana Costa', text: 'Ambiente acolhedor e serviços impecáveis. Super recomendo!', rating: 5 },
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">O que dizem nossas clientes</h2>
                    <p className="text-xl text-gray-600">Depoimentos reais de quem confia no nosso trabalho</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg">
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                            <p className="font-bold text-gray-900">— {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};