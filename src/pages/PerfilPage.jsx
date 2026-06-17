import React, { useState, useContext } from 'react'; // 1. Importamos o useContext aqui
import { UsuarioContext } from '../context/UsuarioContext'; // 2. Importamos o contexto do usuário
import './PerfilPage.css';

export default function PerfilPage() {
  // 3. Ativamos o contexto para ler os dados globais do aluno
  const { usuario } = useContext(UsuarioContext);
  const [abaAtiva, setAbaAtiva] = useState('dados');

  return (
    <div className="perfil-container">
      <div className="perfil-header-card">
        {/* Deixamos o avatar dinâmico pegando as primeiras letras do nome do contexto */}
        <div className="profile-avatar">
          {usuario?.nome ? usuario.nome.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : 'JS'}
        </div>
        <div className="profile-meta">
          {/* 4. Trocamos o Nome, Curso e Ano fixos pelas variáveis do Contexto */}
          <h2>{usuario?.nome}</h2>
          <p>{usuario?.curso} • {usuario?.ano}</p>
        </div>
      </div>

      <div className="profile-tabs">
        <button 
          className={`tab-item ${abaAtiva === 'dados' ? 'active' : ''}`}
          onClick={() => setAbaAtiva('dados')}
        >
          Dados Pessoais
        </button>
        <button 
          className={`tab-item ${abaAtiva === 'config' ? 'active' : ''}`}
          onClick={() => setAbaAtiva('config')}
        >
          Configurações
        </button>
        <button 
          className={`tab-item ${abaAtiva === 'seguranca' ? 'active' : ''}`}
          onClick={() => setAbaAtiva('seguranca')}
        >
          Segurança
        </button>
      </div>

      {abaAtiva === 'dados' && (
        <div className="info-table-container">
          <div className="table-row">
            <span className="row-label">Nome Completo</span>
            {/* 5. Trocamos o nome fixo dentro da tabela */}
            <span className="row-value">{usuario?.nome}</span>
          </div>
          <div className="table-row">
            <span className="row-label">Endereço de E-mail</span>
            {/* 6. Trocamos o e-mail fixo pelo do contexto */}
            <span className="row-value">{usuario?.email}</span>
          </div>
          <div className="table-row">
            <span className="row-label">Matrícula / CPF</span>
            {/* 7. Trocamos a matrícula/CPF fixa pela do contexto */}
            <span className="row-value">{usuario?.matricula}</span>
          </div>
        </div>
      )}

      {abaAtiva === 'config' && (
        <div className="info-table-container p-20">
          <h3>Configurações do Painel</h3>
          <p style={{ color: '#666', marginTop: '10px' }}>Aqui você poderá alterar o tema visual e as notificações do sistema.</p>
        </div>
      )}

      {abaAtiva === 'seguranca' && (
        <div className="info-table-container p-20">
          <h3>Segurança da Conta</h3>
          <p style={{ color: '#666', marginTop: '10px' }}>Opções para alteração de senha e autenticação em duas etapas (2FA).</p>
        </div>
      )}
    </div>
  );
}