import { Clock, Sparkles, Star } from "lucide-react";
import { Button } from "./ui/Button";

export const Hero: React.FC<{ onNavigate: (section: string) => void }> = ({ onNavigate }) => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforme sua beleza em
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"> arte</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Há mais de 15 anos cuidando da beleza feminina com excelência, carinho e profissionalismo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate('booking')}
              className="cursor-pointer px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition"
            >
              Agendar Horário
            </Button>
            <Button
              onClick={() => onNavigate('services')}
              className="cursor-pointer px-8 py-4 border-2 border-pink-600 text-pink-600 rounded-full font-semibold hover:bg-pink-50 transition"
            >
              Ver Serviços
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <Sparkles className="h-12 w-12 text-pink-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Produtos Premium</h3>
            <p className="text-gray-600">Trabalhamos apenas com as melhores marcas do mercado</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <Star className="h-12 w-12 text-pink-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Profissionais Qualificados</h3>
            <p className="text-gray-600">Equipe treinada e atualizada com as últimas tendências</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <Clock className="h-12 w-12 text-pink-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Horários Flexíveis</h3>
            <p className="text-gray-600">Funcionamento de segunda a sábado para sua comodidade</p>
          </div>
        </div>
      </div>
    </section>
  );
};