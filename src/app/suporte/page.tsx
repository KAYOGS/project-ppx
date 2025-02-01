'use client';

import { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { formatCNPJ } from '../mascaraInput';

export default function Suporte() {
  const [cnpj, setCnpj] = useState('');
  const [problema, setProblema] = useState('');

  // Função para adicionar um novo report
  const addReport = async () => {
    if (!cnpj || !problema) {
      alert('Preencha todos os campos corretamente.');
      return;
    }

    try {
      // Verificando se o cnpj e problema estão no formato correto
      console.log('CNPJ:', cnpj);
      console.log('Problema:', problema);

      // Referência para a coleção 'Report' no Firestore
      const docRef = await addDoc(collection(db, 'Problemas'), {
        cnpj: cnpj,
        problema: problema
      });

      console.log("Report adicionado com ID: ", docRef.id);
      alert("Report enviado com sucesso!");
      window.location.href = '/';
    } catch (error) {
      console.log('Erro ao adicionar report:', error); // Detalhamento do erro
      alert("Erro ao enviar report. Tente novamente.");
      window.location.href = '/';
    }
  };

  // Função para formatar o CNPJ
  const handleCnpjChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCnpj = formatCNPJ(event.target.value); // Verifique se a máscara está funcionando corretamente
    setCnpj(formattedCnpj);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center p-3">
      <a href="./" className="text-2xl text-black">Wiser Up</a>
      <div className="h-full w-full flex flex-col gap-5 justify-center text-center items-center">
        <p className="title">Reportar Problema</p>
        <input value={cnpj} onChange={handleCnpjChange} id="cnpj" type="text" placeholder="Informe o CNPJ" maxLength={18}/>
        <input value={problema} onChange={(e) => setProblema(e.target.value)} id="problema" type="text" placeholder="Informe o problema"/>
        <button onClick={addReport}>
          Enviar
        </button>
      </div>
    </div>
  );
}
