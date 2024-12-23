export default function criarConta() {
  return (
    <div className="w-full h-full p-6 flex flex-col justify-between gap-8">
      <a href="./" className="text-2xl text-white">Project PPX</a>
      <div className="h-96 w-full flex flex-col justify-center text-center items-center gap-3">
        <p className="text-2xl text-white">Criar Conta</p>
        <div className="text-start">
          <p className="text-xl text-white">Empresa</p>
          <input type="text" className="border-black border-[1px] rounded-xl bg-white p-1 w-96 text-black"/>
        </div>
        <div className="text-start">
          <p className="text-xl text-white">CNPJ</p>
          <input type="text" className="border-black border-[1px] rounded-xl bg-white p-1 w-96 text-black" minLength={14} maxLength={14}/>
        </div>
        <div className="text-start">
          <p className="text-xl text-white">Cep</p>
          <input type="text" className="border-black border-[1px] rounded-xl bg-white p-1 w-96 text-black" minLength={14} maxLength={14}/>
        </div>
        <div className="text-start">
          <p className="text-xl text-white">Email</p>
          <input type="text" className="border-black border-[1px] rounded-xl bg-white p-1 w-96 text-black" minLength={14} maxLength={14}/>
        </div>
        <div className="text-start">
          <p className="text-xl text-white">Senha</p>
          <input type="password" className="border-black border-[1px] rounded-xl bg-white p-1 w-96 text-black"/>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <button className="bg-green-600 hover:bg-green-700 border-white border-[1px] rounded-xl w-40 h-10">
          <p className="text-white">Criar</p>
        </button>
      </div>
    </div>
  );
}
