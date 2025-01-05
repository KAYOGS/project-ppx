'use client';

import { useState } from 'react';
import { db } from '../firebaseConfig';
import { doc, updateDoc, query, where, getDocs, collection } from 'firebase/firestore';
import { formatCNPJ } from '../mascaraInput';

export default function RecuperarAcesso() {
  const [cnpj, setCnpj] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Validação das senhas
    if (novaSenha !== confirmarSenha) {
      alert('As senhas estão diferentes');
      return;
    }

    // Busca o documento da empresa no Firestore usando o CNPJ
    try {
      const empresasRef = collection(db, 'Empresas');
      const q = query(empresasRef, where('cnpj', '==', cnpj));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        alert('Nenhuma empresa encontrada com esse CNPJ.');
        return;
      }

      // Pega o primeiro documento encontrado
      const empresaDoc = querySnapshot.docs[0];
      const docRef = doc(db, 'Empresas', empresaDoc.id);

      // Define os dados que serão atualizados (somente a senha)
      const updatedData = {
        senha: novaSenha // Atualiza apenas o campo 'senha'
      };

      // Atualiza o documento no Firestore
      await updateDoc(docRef, updatedData);
      alert('Senha atualizada com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar empresa:', error);
      alert('Erro ao atualizar a senha');
    }
  };

  const handleCnpjChange = (event: { target: { value: string }; }) => {
    const formattedCnpj = formatCNPJ(event.target.value); // Formatar CNPJ
    setCnpj(formattedCnpj); // Atualiza o estado com o CNPJ formatado
  };

  const handleNovaSenhaChange = (event: { target: { value: string }; }) => {
    setNovaSenha(event.target.value); // Atualiza o estado da nova senha
  };

  const handleConfirmarSenhaChange = (event: { target: { value: string }; }) => {
    setConfirmarSenha(event.target.value); // Atualiza o estado da senha confirmada
  };

  return (
    <div className="w-full h-full p-[1.98rem] flex flex-col justify-between gap-10">
      <a href="./" className="text-2xl text-black">Wise</a>
      <div className="h-80 w-full flex flex-col justify-center text-center items-center gap-5">
        <p className="text-2xl text-black">Recuperar Acesso</p>
        <div className="text-start">
          <p className="text-xl text-black">CNPJ</p>
          <input 
            type="text" 
            value={cnpj} 
            onChange={handleCnpjChange} 
            className="border-black border-[1px] rounded-xl bg-white p-1 w-96 text-black" 
            minLength={14} 
            maxLength={14} 
            placeholder="Insira o cnpj da empresa"
          />
        </div>
        <div className="text-start">
          <p className="text-xl text-black">Nova Senha</p>
          <input 
            type="password" 
            value={novaSenha} 
            onChange={handleNovaSenhaChange} 
            className="border-black border-[1px] rounded-xl bg-white p-1 w-96 text-black" 
            placeholder="Insira a nova senha"
          />
        </div>
        <div className="text-start">
          <p className="text-xl text-black">Confirmar Senha</p>
          <input 
            type="password" 
            value={confirmarSenha} 
            onChange={handleConfirmarSenhaChange} 
            className="border-black border-[1px] rounded-xl bg-white p-1 w-96 text-black" 
            placeholder="Repita a nova senha"
          />
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <button 
          onClick={handleSubmit} 
          className="bg-green-600 hover:bg-green-700 border-white border-[1px] rounded-xl w-40 h-10"
        >
          <p className="text-white">Recuperar</p>
        </button>
      </div>
    </div>
  );
}
