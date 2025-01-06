'use client';

import Image from 'next/image';

export default function sessaoInicial() {
  return (
    <div className="flex flex-col justify-center w-full h-full">
      <div className="w-full h-14 bg-blue-700 flex flex-row gap-6">
        <div className="p-4">
          <a href="./" className="text-white">Sair</a>
        </div>
        <div className="flex flex-row justify-center p-4 gap-9 w-full">
          <a href="" className="text-white">RH</a>
          <a href="" className="text-white">Financeira</a>
          <a href="" className="text-white">Vendas</a>
          <a href="" className="text-white">TI</a>
          <a href="" className="text-white">Estoque</a>
          <a href="" className="text-white">Suprimento</a>
          <a href="" className="text-white">CRM</a>
          <a href="" className="text-white">Conformidade</a>
          <a href="" className="text-white">Auditoria</a>
          <a href="" className="text-white">Comunicação Interna</a>
          <a href="" className="text-white">BI</a>
        </div>
        <div className="p-4">
          <Image src="./logo.png" alt="Logo do Meu Site" width={9} height={9}/>
        </div>
      </div>
      <div className="w-full">
        ola
      </div>
    </div>
  );
}
