'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import ajustado para a nova versão do Next.js
import Menu from '../menu/menu';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { formatCNPJ } from '../mascaraInput';

export default function SessaoInicial() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

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
    } catch (error) {
      console.log('Erro ao adicionar report:', error); // Detalhamento do erro
      alert("Erro ao enviar report. Tente novamente.");
    }
  }

  useEffect(() => {
    // Apenas habilita o código quando estiver no lado do cliente
    setIsClient(true);

    // Verifica se o código está rodando no cliente
    if (typeof window !== 'undefined') {
      // Verifica se o usuário está logado
      const isLoggedIn = localStorage.getItem('isLoggedIn');

      // Se não estiver logado, redireciona para a página de login
      if (isLoggedIn !== 'true') {
        router.push('/');
      }
    }
  }, [router]);

  if (!isClient) {
    // Retorna um estado de loading ou null enquanto espera o lado do cliente estar disponível
    return null;
  }

  // Função para formatar o CNPJ
  const handleCnpjChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCnpj = formatCNPJ(event.target.value); // Verifique se a máscara está funcionando corretamente
    setCnpj(formattedCnpj);
  };
  
  return (
    <div className="flex flex-col justify-center w-screen h-screen">
      <Menu />
      <div className="flex flex-row h-screen">
        <div className="w-[70%] h-full p-4">
          <div className="text-justify">
            Wiser Up, trabalhando em soluções integradas para uma gestão empresarial mais eficiente, conectando todas as áreas do seu negócio em um só lugar.
            Na Wiser Up, nossa missão é proporcionar às empresas as ferramentas mais eficazes e inovadoras para o gerenciamento de suas operações. Sabemos que cada detalhe importa, e é por isso que oferecemos um suporte técnico especializado para garantir que nossos clientes tenham a melhor experiência possível com nossos serviços.
            Nosso time de suporte está sempre à disposição para auxiliar na resolução de problemas, responder a dúvidas e oferecer orientação personalizada. Seja uma questão simples ou um desafio mais complexo, estamos preparados para atuar com agilidade e eficiência, garantindo que sua empresa não perca tempo com interrupções ou dificuldades técnicas.Valorizamos o relacionamento com nossos clientes e entendemos que nosso sucesso está diretamente ligado ao seu. É por isso que a responsabilidade com o cliente é um dos pilares fundamentais da Wiser Up. Assumimos o compromisso de oferecer soluções que realmente façam a diferença, prezando pela transparência e pela confiança em cada interação.
          </div>
          <p className="title">Suporte</p>
          <input value={cnpj} onChange={handleCnpjChange} id="cnpj" type="text" placeholder="Informe o CNPJ" maxLength={18}/><br/>
          <input value={problema} onChange={(e) => setProblema(e.target.value)} id="problema" type="text" placeholder="Informe o problema"/>
          <button className="m-3" onClick={addReport}>
            Enviar
          </button>
        </div>
        <div className="w-[30%] h-96 p-4 m-4 rounded-xl menu text-white">
          Ola
        </div>
      </div>
    </div>
  );
}
