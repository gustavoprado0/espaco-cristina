import { Scissors } from "lucide-react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-pink-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Espaço Cristina
              </span>
            </div>
            <p className="text-gray-800">
              Transformando sonhos em realidade através da beleza e do cuidado personalizado.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-900">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-800">
              <li><Link href="#" className="hover:text-pink-700 transition underline">Início</Link></li>
              <li><Link href="#" className="hover:text-pink-700 transition underline">Serviços</Link></li>
              <li><Link href="#" className="hover:text-pink-700 transition underline">Agendar</Link></li>
              <li><Link href="#" className="hover:text-pink-700 transition underline">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-900 mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="text-gray-800">(11) 96878-4638</li>
              <li className="text-gray-800">Rua Jacob, 609 - Jardim Tranquilidade</li>
              <li className="text-gray-800">Guarulhos - SP</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-800">
          <p>&copy; 2026 Espaço Cristina. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};