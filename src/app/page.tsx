export default function Home() {
  return (
    <div className="w-full h-full p-[1.98rem] flex flex-col justify-between gap-10">
      <p className="text-2xl text-white">Project PPX</p>
      <div className="h-96 w-full flex flex-col justify-center text-center items-center gap-9">
        <p className="text-2xl text-white">Acessar</p>
        <div className="text-start">
          <p className="text-xl text-white">Empresa</p>
          <input type="text" className="border-black border-[1px] rounded-xl bg-white p-1 w-96 text-black"/>
        </div>
        <div className="text-start">
          <p className="text-xl text-white">Senha</p>
          <input type="password" className="border-black border-[1px] rounded-xl bg-white p-1 w-96 text-black"/>
          <div className="w-full flex flex-row justify-center pt-1 gap-36">
            <a className="text-white" href={"/criarConta"}>Criar Conta</a>
            <a className="text-white" href={"/recuperarAcesso"}>Recuperar Acesso</a>
          </div>
        </div>
        <button className="bg-green-600 hover:bg-green-700 border-white border-[1px] rounded-xl w-40 h-10">
          <p className="text-white">Recuperar</p>
        </button>
      </div>
      <div className="flex flex-row justify-center">
        <a href="" className="text-white">Enfrentando problemas? Envie um email</a>
      </div>
    </div>
  );
}
