'use client'

import { Menu, Scissors, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/Button";

export const Header: React.FC<{ onNavigate: (section: string) => void }> = ({ onNavigate }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    return (
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-pink-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Espaço Cristina
              </span>
            </div>
  
            <nav className="hidden md:flex space-x-8 cursor-pointe">
              <Button onClick={() => onNavigate('home')} className="cursor-pointer text-gray-700 hover:text-pink-600 transition">Início</Button>
              <Button onClick={() => onNavigate('services')} className="cursor-pointer text-gray-700 hover:text-pink-600 transition">Serviços</Button>
              <Button onClick={() => onNavigate('booking')} className="cursor-pointer text-gray-700 hover:text-pink-600 transition">Agendar</Button>
              <Button onClick={() => onNavigate('about')} className="cursor-pointer text-gray-700 hover:text-pink-600 transition">Sobre</Button>
              <Button onClick={() => onNavigate('contact')} className="cursor-pointer text-gray-700 hover:text-pink-600 transition">Contato</Button>
            </nav>
  
            <Button className="md:hidden cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
  
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              <Button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className="cursor-pointer block w-full text-left py-2 text-gray-700 hover:text-pink-600">Início</Button>
              <Button onClick={() => { onNavigate('services'); setMobileMenuOpen(false); }} className="cursor-pointer block w-full text-left py-2 text-gray-700 hover:text-pink-600">Serviços</Button>
              <Button onClick={() => { onNavigate('booking'); setMobileMenuOpen(false); }} className="cursor-pointer block w-full text-left py-2 text-gray-700 hover:text-pink-600">Agendar</Button>
              <Button onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }} className="cursor-pointer block w-full text-left py-2 text-gray-700 hover:text-pink-600">Sobre</Button>
              <Button onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }} className="cursor-pointer block w-full text-left py-2 text-gray-700 hover:text-pink-600">Contato</Button>
            </nav>
          )}
        </div>
      </header>
    );
  };