'use client';

import Menu from '../menu/menu';

export default function RH() {
  return (
    <div className="flex flex-col justify-center w-full h-full">
      <Menu />
      <div className="w-full p-4">
        <p className="text-black text-2xl">Recursos Humanos</p>
        <div className="w-full flex flex-row justify-between gap-4">
          <div className="bg-blue-700 flex flex-col justify-start w-2/3 h-[70vh] p-2 rounded-xl">
            <p className="text-white">Cadastro de Funcionários</p>
            <div className="gap-3 w-full h-full flex-col justify-start">
              <input type="text" placeholder="Nome completo"/>
            </div>
          </div>
          <div className="bg-blue-700 flex justify-start w-1/3 h-[70vh] p-2 rounded-xl">
            <p className="text-white">Controle de Ponto</p>
          </div>
        </div>
      </div>
    </div>
  );
}
