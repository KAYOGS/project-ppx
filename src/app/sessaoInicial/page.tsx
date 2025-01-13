'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Menu from '../menu/menu';

export default function SessaoInicial() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Apenas habilita o código quando estiver no lado do cliente
    setIsClient(true);

    // Verifica se o usuário está logado
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // Se não estiver logado, redireciona para a página de login
    if (isLoggedIn !== 'true') {
      router.push('/');
    }
  }, [router]);

  if (!isClient) {
    // Retorna um estado de loading ou null enquanto espera o lado do cliente estar disponível
    return null;
  }

  return (
    <div className="flex flex-col justify-center w-full h-full">
      <Menu />
      <div className="w-full p-4">
        <p>Wiser Up, trabalhando em soluções integradas para uma gestão empresarial mais eficiente, conectando todas as áreas do seu negócio em um só lugar.</p>
      </div>
      <div className="w-full p-4">
        <h2>Suporte</h2>
        <p>E-mail: wiserup@gmail.com</p>
      </div>
    </div>
  );
}
