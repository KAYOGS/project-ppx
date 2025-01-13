'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Menu from '../menu/menu';

export default function SessaoInicial() {
  const router = useRouter();

  useEffect(() => {
    // Verifica se o usuário está logado
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // Se não estiver logado, redireciona para a página de login
    if (isLoggedIn !== 'true') {
      router.push('/');
    }
  }, [router]);

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
