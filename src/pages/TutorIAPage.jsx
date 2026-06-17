import React, { useState, useEffect, useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';
import Header from '../components/Header';

export default function TutorIAPage() {
  const { usuario } = useContext(UsuarioContext);
  
  // Estados para os critérios técnicos do professor
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [chatAtivo, setChatAtivo] = useState(false);

  // Simulação de carregamento assíncrono do histórico do chat
  useEffect(() => {
    async function simularCarregamentoChat() {
      try {
        setLoading(true);
        // Delay de 1.2 segundos para simular a busca dos dados
        await new Promise((resolve) => setTimeout(resolve, 1200));
        
        setChatAtivo(true);
        setErro(null);
      } catch (err) {
        setErro("Erro ao carregar o chat do Tutor IA. Recarregue a página.");
      } finally {
        setLoading(false);
      }
    }

    simularCarregamentoChat();
  }, []);

  return (
    <>
      <Header />

      {/* Container principal centralizado de acordo com o print */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Inter, sans-serif' }}>
        
        {/* ESTADO DE LOADING (Exigência do Professor) */}
        {loading && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: '#10b981', fontWeight: '500' }}>
            <span style={{ fontSize: '1.2rem' }}>🔄 Carregando chat com o Tutor IA...</span>
          </div>
        )}

        {/* ESTADO DE ERRO (Exigência do Professor) */}
        {erro && (
          <div style={{ backgroundColor: '#fce8e6', color: '#d93025', padding: '15px', borderRadius: '8px', textAlign: 'center', fontWeight: '500' }}>
            ⚠️ {erro}
          </div>
        )}

        {/* EXIBIÇÃO DO CHAT (Aparece idêntico ao print após o loading acabar) */}
        {!loading && !erro && chatAtivo && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '120px' }}>
            
            {/* Bloco de Pergunta do Aluno */}
            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#10b981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.9rem' }}>
                {usuario?.nome ? usuario.nome[0].toUpperCase() : 'J'}
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px 0', color: '#1f2937', fontWeight: '600' }}>{usuario?.nome || "João Silva"}</h4>
                <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.5' }}>Explique computação quântica</p>
              </div>
            </div>

            {/* Bloco de Resposta do Tutor IA */}
            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', border: '1px solid #e5e7eb' }}>
                🤖
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 5px 0', color: '#1f2937', fontWeight: '600' }}>Tutor IA</h4>
                <p style={{ margin: '0 0 15px 0', color: '#1f2937', lineHeight: '1.6', textAlign: 'justify' }}>
                  Computação quântica é uma forma avançada de computação que usa as leis da mecânica quântica. Em vez de 
                  usar bits tradicionais, que podem ser 0 ou 1, ela utiliza qubits, que podem ser ambos ao mesmo tempo. Isso 
                  permite que os computadores quânticos realizem cálculos muito mais rapidamente do que os computadores 
                  comuns, resolvendo problemas complexos que seriam impossíveis para a tecnologia atual.
                </p>
                
                {/* Ícones de ação abaixo do texto (iguais aos do print) */}
                <div style={{ display: 'flex', gap: '12px', color: '#9ca3af', fontSize: '0.9rem', cursor: 'pointer' }}>
                  <span>🔊</span>
                  <span>📋</span>
                  <span>🔄</span>
                  <span>👎</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Barra de Digitação Fixa no Rodapé (Igual ao seu layout) */}
        <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', backgroundColor: '#fff', padding: '20px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '90%', maxWidth: '800px', display: 'flex', alignItems: 'center', border: '1px solid #e5e7eb', borderRadius: '25px', padding: '10px 20px', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <span style={{ fontSize: '1.2rem', marginRight: '15px', color: '#9ca3af', cursor: 'pointer' }}>📎</span>
            <input 
              type="text" 
              placeholder="Pergunte alguma coisa" 
              disabled={loading}
              style={{ flex: 1, border: 'none', outline: 'none', fontSize: '1rem', color: '#1f2937' }}
            />
            <button style={{ backgroundColor: '#10b981', border: 'none', borderRadius: '50%', width: '32px', height: '32px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '1.1rem' }}>
              ↑
            </button>
          </div>
          <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>O Tutor pode cometer erros. Considere verificar informações importantes.</span>
        </div>

      </div>
    </>
  );
}