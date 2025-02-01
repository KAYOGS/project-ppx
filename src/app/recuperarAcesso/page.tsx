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
      window.location.href = '/';
    } catch (error) {
      console.error('Erro ao atualizar empresa:', error);
      alert('Erro ao atualizar a senha');
      window.location.href = '/';
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
    <div className="w-screen p-3 h-screen flex flex-col justify-center">
      <a href="./" className="text-2xl text-black">Wiser Up</a>
      <div className="h-full w-full flex flex-col justify-center text-center items-center gap-5">
        <p className="title">Recuperar Acesso</p>
        <input type="text" value={cnpj} onChange={handleCnpjChange} minLength={14} maxLength={14} placeholder="Insira o cnpj da empresa"/>
        <input type="password" value={novaSenha} onChange={handleNovaSenhaChange} placeholder="Insira a nova senha"/>
        <input type="password" value={confirmarSenha} onChange={handleConfirmarSenhaChange} placeholder="Repita a nova senha"/>
        <button onClick={handleSubmit}>
          Recuperar
        </button>
      </div>
    </div>
  );
}
