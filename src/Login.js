import React, { useState } from 'react';
import './App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrar, setLembrar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Lembrar-me:', lembrar);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />

      <div className="checkbox-container">
        <input
          type="checkbox"
          id="lembrar"
          checked={lembrar}
          onChange={(e) => setLembrar(e.target.checked)}
        />
        <label htmlFor="lembrar">Lembrar-me</label>
      </div>

      <button type="submit">Entrar</button>

      <div className="signup-text">
        Não tem uma conta? <a href="#">Cadastre-se</a>
      </div>
    </form>
  );
}

export default Login;
