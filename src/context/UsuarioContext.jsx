import React, { createContext, useState } from 'react';

export const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {
  const [usuario] = useState({
    nome: "João Silva",
    curso: "Engenharia de Software",
    ano: "3º Ano",
    email: "joao.silva@satc.edu.br",
    matricula: "***.***.***-89"
  });

  return (
    <UsuarioContext.Provider value={{ usuario }}>
      {children}
    </UsuarioContext.Provider>
  );
}