'use client'

/*export const formatCPF = (value: string): string => {
    // Lógica para formatar CPF
    return value.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};*/
  
export const formatCNPJ = (value: string): string => {
    // Lógica para formatar CNPJ
    return value.replace(/\D/g, '').replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
};
  
/*export const formatPhone = (value: string): string => {
    // Lógica para formatar telefone
    return value.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
};*/
  
export const formatCEP = (value: string): string => {
    // Lógica para formatar CEP
    return value.replace(/\D/g, '').replace(/(\d{5})(\d{3})/, '$1-$2');
};