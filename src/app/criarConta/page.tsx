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
    <div className="w-full h-full p-[1.98rem] flex flex-col justify-between gap-10">
      <a href="./" className="text-2xl text-black">Wiser</a>
      <div className="h-96 w-full flex flex-col justify-center text-center items-center gap-3">
        <p className="text-2xl text-black">Criar Conta</p>
        <div className="text-start">
          <p className="text-xl text-black">Empresa</p>
          <input onChange={(e) => setEmpresa(e.target.value)} id="empresa" type="text" className="border-black border-[1px] rounded-xl bg-white p-1 w-96 text-black" placeholder='Insira o nome da empresa'/>
        </div>
        <div className="text-start">
          <p className="text-xl text-black">CNPJ</p>
          <input value={cnpj} onChange={handleCnpjChange} id="cnpj" type="text" className="border-black border-[1px] rounded-xl bg-white p-1 w-96 text-black" maxLength={14} minLength={14} placeholder='Insira o cnpj da empresa'/>
        </div>
        <div className="text-start">
          <p className="text-xl text-black">Cep</p>
          <input value={cep} onChange={handleCepChange} id="cep" type="text" className="border-black border-[1px] rounded-xl bg-white p-1 w-96 text-black" maxLength={8} minLength={8} placeholder='Insira o cep da empresa'/>
        </div>
        <div className="text-start">
          <p className="text-xl text-black">Email</p>
          <input onChange={(e) => setEmail(e.target.value)} id="email" type="text" className="border-black border-[1px] rounded-xl bg-white p-1 w-96 text-black" placeholder='Insira o email da empresa'/>
        </div>
        <div className="text-start">
          <p className="text-xl text-black">Senha</p>
          <input onChange={(e) => setSenha(e.target.value)} id="senha" type="password" className="border-black border-[1px] rounded-xl bg-white p-1 w-96 text-black" placeholder='Insira a senha'/>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <button onClick={addEmpresa} className="bg-green-600 hover:bg-green-700 border-white border-[1px] rounded-xl w-40 h-10">
          <p className="text-white">Criar</p>
        </button>
      </div>
    </div>
  );
}
