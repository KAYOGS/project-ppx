'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import ajustado para a nova versão do Next.js
import Menu from '../menu/menu';

export default function SessaoInicial() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Apenas habilita o código quando estiver no lado do cliente
    setIsClient(true);

    // Verifica se o código está rodando no cliente
    if (typeof window !== 'undefined') {
      // Verifica se o usuário está logado
      const isLoggedIn = localStorage.getItem('isLoggedIn');

      // Se não estiver logado, redireciona para a página de login
      if (isLoggedIn !== 'true') {
        router.push('/');
      }
    }
  }, [router]);

  if (!isClient) {
    // Retorna um estado de loading ou null enquanto espera o lado do cliente estar disponível
    return null;
  }

  return (
    <div className="flex flex-col justify-center w-screen h-screen">
      <Menu />
      <div className="flex flex-row h-screen">
        <div className="w-[70%] h-full p-4">
          <div className="text-justify">
            Wiser Up, trabalhando em soluções integradas para uma gestão empresarial mais eficiente, conectando todas as áreas do seu negócio em um só lugar.
            Na Wiser Up, nossa missão é proporcionar às empresas as ferramentas mais eficazes e inovadoras para o gerenciamento de suas operações. Sabemos que cada detalhe importa, e é por isso que oferecemos um suporte técnico especializado para garantir que nossos clientes tenham a melhor experiência possível com nossos serviços.
            Nosso time de suporte está sempre à disposição para auxiliar na resolução de problemas, responder a dúvidas e oferecer orientação personalizada. Seja uma questão simples ou um desafio mais complexo, estamos preparados para atuar com agilidade e eficiência, garantindo que sua empresa não perca tempo com interrupções ou dificuldades técnicas.Valorizamos o relacionamento com nossos clientes e entendemos que nosso sucesso está diretamente ligado ao seu. É por isso que a responsabilidade com o cliente é um dos pilares fundamentais da Wiser Up. Assumimos o compromisso de oferecer soluções que realmente façam a diferença, prezando pela transparência e pela confiança em cada interação.
          </div>
          <p className="title">Suporte</p>
          <input type="text" placeholder="Informe o problema"/>
          <button className="m-3">
            Enviar
          </button>
        </div>
        <div className="w-[30%] h-96 p-4 m-4 rounded-xl menu text-white">
          Ola
        </div>
      </div>
    </div>
  );
}
