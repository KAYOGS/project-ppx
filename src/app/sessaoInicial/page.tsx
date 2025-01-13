'use client';

import Menu from '../menu/menu';

export default function sessaoInicial() {
  return (
    <div className="flex flex-col justify-center w-full h-full">
      <Menu/>
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
