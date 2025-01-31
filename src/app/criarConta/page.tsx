'use client';

import { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { formatCNPJ, formatCEP } from '../mascaraInput';

export default function CriarConta() {
  const [empresa, setEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const addEmpresa = async () => {
    try {
      const q = query(collection(db, 'Empresas'), where('cnpj', '==', cnpj));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        const docRef = await addDoc(collection(db, 'Empresas'), {
          empresa,
          cnpj,
          cep,
          email,
          senha
        });
        console.log("Documento adicionado com ID: ", docRef.id); // Uso de docRef para evitar o erro
        alert("Cadastrado com sucesso");
        window.location.href = '/';
      } else {
        alert("CNPJ já está sendo utilizado");
        window.location.href = '/';
      }
    } catch (error) {
      console.log(error);
      alert("Erro ao cadastrar empresa");
      window.location.href = '/';
    }
  };

  const handleCnpjChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCnpj = formatCNPJ(event.target.value);
    setCnpj(newCnpj);
  };

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCep = formatCEP(event.target.value);
    setCep(newCep);
  };

  return (
    <div className="w-screen p-3 h-screen flex flex-col justify-center">
      <a href="./" className="text-2xl text-black">Wiser Up</a>
      <div className="h-full w-full flex flex-col justify-center text-center items-center gap-5">
        <p className="title">Criar Conta</p>
        <input onChange={(e) => setEmpresa(e.target.value)} id="empresa" type="text" placeholder='Insira o nome da empresa'/>
        <input value={cnpj} onChange={handleCnpjChange} id="cnpj" type="text" maxLength={14} minLength={14} placeholder='Insira o cnpj da empresa'/>
        <input value={cep} onChange={handleCepChange} id="cep" type="text" maxLength={8} minLength={8} placeholder='Insira o cep da empresa'/>
        <input onChange={(e) => setEmail(e.target.value)} id="email" type="text" placeholder='Insira o email da empresa'/>
        <input onChange={(e) => setSenha(e.target.value)} id="senha" type="password" placeholder='Insira a senha'/>
        <button onClick={addEmpresa}>
          Criar
        </button>
      </div>
    </div>
  );
}
