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
    <div className="w-screen p-3 h-screen flex flex-col justify-center">
      <p className="text-2xl text-black">Wiser Up</p>
      <div className="h-full w-full flex flex-col justify-center text-center items-center gap-5">
        <p className="title">Acessar</p>
        <input value={empresa} onChange={(e) => setEmpresa(e.target.value)} type="text" placeholder="Insira o nome da empresa"/>
        <input value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Insira a senha"/>
        <div className="w-full flex flex-row justify-center pt-1 gap-40">
          <a className="text-black" href={"/criarConta"}>Criar Conta</a>
          <a className="text-black" href={"/recuperarAcesso"}>Recuperar Acesso</a>
        </div>
        <button onClick={handleLogin}>
          Acessar
        </button>
      </div>
      <div className="flex flex-col justify-center text-center gap-4">
        <div>
          <a href="/suporte" className="text-black">Problemas? relatar o problema</a>
        </div>
      </div>
    </div>
  );
}
