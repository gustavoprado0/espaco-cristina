import { Scissors } from "lucide-react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="h-8 w-8 text-pink-400" />
              <span className="text-2xl font-bold">Espaço Cristina</span>
            </div>
            <p className="text-gray-400">
              Transformando sonhos em realidade através da beleza e do cuidado personalizado.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-pink-400 transition">Início</Link></li>
              <li><Link href="#" className="hover:text-pink-400 transition">Serviços</Link></li>
              <li><Link href="#" className="hover:text-pink-400 transition">Agendar</Link></li>
              <li><Link href="#" className="hover:text-pink-400 transition">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>(11) 96878-4638</li>
              <li>Rua Jacob, 609 - Jardim Tranquilidade</li>
              <li>Guarulhos - SP</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Espaço Cristina. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};