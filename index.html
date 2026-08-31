<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Expedição de Pescaria - Painel Completo</title>
  <style>
    /* RESET & ESTILOS BASE */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Segoe UI', system-ui, -apple-system, Roboto, sans-serif;
      background-color: #0f172a;
      color: #f8fafc;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* 1. CAPA HERO COM O MAR E BARCO */
    .hero-capa {
      background: linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.95) 100%), 
                  url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
      height: 380px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 20px;
      border-bottom: 2px solid rgba(56, 189, 248, 0.25);
    }

    .hero-capa h1 {
      font-size: 2.8rem;
      font-weight: 800;
      text-shadow: 0 4px 15px rgba(0, 0, 0, 0.8);
      color: #ffffff;
      margin-bottom: 12px;
    }

    .hero-capa p {
      font-size: 1.2rem;
      color: #7dd3fc;
      text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
      max-width: 600px;
    }

    /* 2. ESTRUTURA E CARDS */
    .container {
      max-width: 950px;
      margin: -50px auto 50px auto;
      padding: 0 20px;
      width: 100%;
      flex: 1;
      display: grid;
      gap: 24px;
      position: relative;
      z-index: 10;
    }

    .card {
      background: rgba(30, 41, 59, 0.95);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 20px;
      padding: 28px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(12px);
    }

    .card h2 {
      font-size: 1.5rem;
      color: #38bdf8;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    /* FORMULÁRIO DE DETALHES */
    .form-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 18px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-group label {
      font-size: 0.9rem;
      color: #94a3b8;
      font-weight: 600;
    }

    .form-group input, .form-group textarea {
      background: rgba(15, 23, 42, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 10px;
      padding: 12px 14px;
      color: #f8fafc;
      font-size: 0.95rem;
      outline: none;
      transition: border-color 0.2s;
    }

    .form-group input:focus, .form-group textarea:focus {
      border-color: #38bdf8;
    }

    .btn-salvar {
      margin-top: 16px;
      background: #0284c7;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .btn-salvar:hover {
      background: #0369a1;
    }

    /* UPLOAD E GALERIA */
    .upload-box {
      border: 2px dashed #0284c7;
      border-radius: 14px;
      padding: 30px 20px;
      text-align: center;
      background: rgba(14, 165, 233, 0.05);
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
    }

    .upload-box:hover {
      background: rgba(14, 165, 233, 0.12);
      border-color: #38bdf8;
    }

    .upload-box input[type="file"] {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }

    .galeria-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 24px;
      margin-bottom: 12px;
    }

    .btn-limpar {
      background: transparent;
      border: 1px solid #ef4444;
      color: #f87171;
      padding: 6px 14px;
      border-radius: 8px;
      font-size: 0.85rem;
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-limpar:hover {
      background: #ef4444;
      color: white;
    }

    .preview-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 16px;
    }

    .img-container {
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      height: 110px;
    }

    .img-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .btn-remover-img {
      position: absolute;
      top: 6px;
      right: 6px;
      background: rgba(0, 0, 0, 0.7);
      color: #ef4444;
      border: none;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      font-weight: bold;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* 3. RODAPÉ - DEVLIN MARIANO */
    footer {
      background: #0b1e36;
      padding: 28px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      margin-top: auto;
    }

    .dev-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(0, 210, 255, 0.35);
      padding: 12px 26px;
      border-radius: 50px;
      backdrop-filter: blur(8px);
      color: #e2e8f0;
      font-size: 0.95rem;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
    }

    .dev-badge:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0, 210, 255, 0.25);
    }

    .dev-badge strong {
      color: #00e5ff;
      font-weight: 700;
    }
  </style>
</head>
<body>

  <!-- Capa com fundo do Mar -->
  <header class="hero-capa">
    <h1>Expedição de Pescaria</h1>
    <p>Painel de planejamento, detalhes da viagem e galeria do barco</p>
  </header>

  <main class="container">
    <!-- Formulário de Informações da Pescaria -->
    <section class="card">
      <h2>📋 Detalhes da Expedição</h2>
      <form id="pescariaForm" onsubmit="salvarDadosPescaria(event)">
        <div class="form-grid">
          <div class="form-group">
            <label for="dataPesca">📅 Data da Pescaria</label>
            <input type="date" id="dataPesca">
          </div>
          <div class="form-group">
            <label for="localPesca">📍 Local / Ponto de Pesca</label>
            <input type="text" id="localPesca" placeholder="Ex: Baía de Ilhabela / Alto Mar">
          </div>
          <div class="form-group" style="grid-column: 1 / -1;">
            <label for="peixesAlvo">🐟 Espécies de Peixe Alvo</label>
            <input type="text" id="peixesAlvo" placeholder="Ex: Robalo, Garoupa, Sororoca">
          </div>
        </div>
        <button type="submit" class="btn-salvar">💾 Salvar Informações</button>
      </form>
    </section>

    <!-- Seção de Fotos do Barco -->
    <section class="card">
      <h2>⛵ Fotos da Embarcação</h2>
      <p style="color: #94a3b8; margin-bottom: 16px; font-size: 0.95rem;">
        Envie as fotos do barco. Elas ficarão salvas automaticamente neste navegador.
      </p>
      
      <div class="upload-box">
        <input type="file" id="fotoInput" accept="image/*" multiple onchange="processarFotos(event)">
        <span style="font-size: 2rem; display: block; margin-bottom: 8px;">📸</span>
        <div style="font-weight: 600; color: #e2e8f0;">Clique ou arraste as fotos do barco aqui</div>
      </div>

      <div class="galeria-header">
        <span style="font-weight: 600; color: #7dd3fc;" id="totalFotos">Fotos carregadas (0)</span>
        <button class="btn-limpar" onclick="limparTodasFotos()">🗑️ Limpar todas</button>
      </div>

      <div class="preview-grid" id="previewGrid"></div>
    </section>
  </main>

  <!-- Rodapé com Créditos do Desenvolvedor -->
  <footer>
    <div class="dev-badge">
      <span>⚡ Desenvolvido por</span>
      <strong>Devlin Mariano</strong>
    </div>
  </footer>

  <script>
    // CHAVES DO LOCALSTORAGE
    const KEY_DADOS = 'pescaria_dados';
    const KEY_FOTOS = 'pescaria_fotos';

    // AO CARREGAR A PÁGINA
    document.addEventListener('DOMContentLoaded', () => {
      carregarDadosPescaria();
      carregarFotosSalvas();
    });

    // 1. SALVAR E CARREGAR FORMULÁRIO
    function salvarDadosPescaria(e) {
      e.preventDefault();
      const dados = {
        data: document.getElementById('dataPesca').value,
        local: document.getElementById('localPesca').value,
        peixes: document.getElementById('peixesAlvo').value
      };
      localStorage.setItem(KEY_DADOS, JSON.stringify(dados));
      alert('Informações salvas com sucesso!');
    }

    function carregarDadosPescaria() {
      const salvas = localStorage.getItem(KEY_DADOS);
      if (salvas) {
        const dados = JSON.parse(salvas);
        document.getElementById('dataPesca').value = dados.data || '';
        document.getElementById('localPesca').value = dados.local || '';
        document.getElementById('peixesAlvo').value = dados.peixes || '';
      }
    }

    // 2. PROCESSAR E PERSISTIR FOTOS NO LOCALSTORAGE
    function processarFotos(event) {
      const files = Array.from(event.target.files);
      if (!files.length) return;

      let fotosSalvas = JSON.parse(localStorage.getItem(KEY_FOTOS) || '[]');

      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
          fotosSalvas.push(e.target.result);
          localStorage.setItem(KEY_FOTOS, JSON.stringify(fotosSalvas));
          renderizarGaleria();
        };
        reader.readAsDataURL(file);
      });
    }

    function carregarFotosSalvas() {
      renderizarGaleria();
    }

    function renderizarGaleria() {
      const grid = document.getElementById('previewGrid');
      const counter = document.getElementById('totalFotos');
      grid.innerHTML = '';

      const fotosSalvas = JSON.parse(localStorage.getItem(KEY_FOTOS) || '[]');
      counter.textContent = `Fotos carregadas (${fotosSalvas.length})`;

      fotosSalvas.forEach((base64Img, index) => {
        const container = document.createElement('div');
        container.className = 'img-container';

        const img = document.createElement('img');
        img.src = base64Img;

        const btnRemover = document.createElement('button');
        btnRemover.className = 'btn-remover-img';
        btnRemover.innerHTML = '&times;';
        btnRemover.onclick = () => removerFoto(index);

        container.appendChild(img);
        container.appendChild(btnRemover);
        grid.appendChild(container);
      });
    }

    function removerFoto(index) {
      let fotosSalvas = JSON.parse(localStorage.getItem(KEY_FOTOS) || '[]');
      fotosSalvas.splice(index, 1);
      localStorage.setItem(KEY_FOTOS, JSON.stringify(fotosSalvas));
      renderizarGaleria();
    }

    function limparTodasFotos() {
      if (confirm('Tem certeza que deseja apagar todas as fotos salvas do barco?')) {
        localStorage.removeItem(KEY_FOTOS);
        renderizarGaleria();
      }
    }
  </script>
</body>
</html>
