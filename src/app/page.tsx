'use client';

import { db } from './firebaseConfig';
import { useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';

export default function Home() {
  const [empresa, setEmpresa] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    console.log('Tentando logar com:', empresa, senha);

    if (!empresa || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const empresaQuery = query(collection(db, 'Empresas'), where('empresa', '==', empresa));
      const querySnapshot = await getDocs(empresaQuery);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const empresaData = doc.data();
          if (empresaData.senha === senha) {
            alert('Senha correta, redirecionando...');
            
            // Salvando sessão no localStorage
            localStorage.setItem('isLoggedIn', 'true');
            
            // Redireciona para a sessão inicial
            window.location.href = '/sessaoInicial';
          } else {
            alert('Senha incorreta.');
          }
        });
      } else {
        alert('Empresa não encontrada.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login');
    }
  };

  return (
    <div className="w-full h-full p-[1.98rem] flex flex-col justify-between gap-10">
      <p className="text-2xl text-black">Wiser</p>
      <div className="h-96 w-full flex flex-col justify-center text-center items-center gap-9">
        <p className="text-2xl text-black">Acessar</p>
        <div className="text-start">
          <p className="text-xl text-black">Empresa</p>
          <input
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            type="text"
            className="border-black border-[1px] rounded-xl bg-white p-1 w-96 text-black"
            placeholder="Insira o nome da empresa"
          />
        </div>
        <div className="text-start">
          <p className="text-xl text-black">Senha</p>
          <input
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            type="password"
            className="border-black border-[1px] rounded-xl bg-white p-1 w-96 text-black"
            placeholder="Insira a senha"
          />
          <div className="w-full flex flex-row justify-center pt-1 gap-36">
            <a className="text-black" href={"/criarConta"}>Criar Conta</a>
            <a className="text-black" href={"/recuperarAcesso"}>Recuperar Acesso</a>
          </div>
        </div>
        <button onClick={handleLogin} className="bg-green-600 hover:bg-green-700 border-white border-[1px] rounded-xl w-40 h-10">
          <p className="text-white">Acessar</p>
        </button>
      </div>
      <div className="flex flex-col justify-center text-center gap-4">
        <div>
          <a href="" className="text-black">Enfrentando problemas? Envie um email</a>
        </div>
        <div>
          <p className="text-black">O login só será permitido se o nome da empresa for digitado exatamente como cadastrado, incluindo acentos e outros caracteres especiais.</p>
        </div>
      </div>
    </div>
  );
}
