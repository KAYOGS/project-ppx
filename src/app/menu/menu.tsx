'use client'

export default function menu(){
    return(
        <div>
            <div className="w-full h-14 bg-blue-700 flex flex-row gap-4">
                <div className="p-4">
                    <a href="./" className="text-white">Sair</a>
                </div>
                <div className="flex flex-row justify-center p-4 gap-6 w-full">
                    <a href="../sessaoInicial" className="text-white">Inicio</a>
                    <a href="../rh" className="text-white">RH</a>
                    <a href="" className="text-white">Financeira</a>
                    <a href="" className="text-white">Vendas</a>
                    <a href="" className="text-white">TI</a>
                    <a href="" className="text-white">Estoque</a>
                    <a href="" className="text-white">Suprimento</a>
                    <a href="" className="text-white">CRM</a>
                    <a href="" className="text-white">Conformidade</a>
                    <a href="" className="text-white">Auditoria</a>
                    <a href="" className="text-white">Comunicação Interna</a>
                    <a href="" className="text-white">BI</a>
                </div>
                <div className="p-4">
                    <p className="text-white">v1.0.0</p>
                </div>
            </div>
        </div>
    )
}