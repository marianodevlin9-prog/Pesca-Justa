<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">

<meta
  name="viewport"
  content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
>

<meta name="theme-color" content="#102033">

<title>Pesca Justa</title>

<style>
:root{
  --bg:#0f1722;
  --panel:#1b2738;
  --panel2:#243247;
  --line:#3a4b63;
  --text:#eef5ff;
  --muted:#9db0c8;
  --accent:#38bdf8;
  --success:#22c55e;
  --danger:#ef4444;
  --warning:#f59e0b;
  --input:#121c2b;
}

*{
  box-sizing:border-box;
}

body{
  margin:0;
  background:linear-gradient(180deg,#0b1320,#101a28);
  color:var(--text);
  font-family:Arial,Helvetica,sans-serif;
}

header{
  position:sticky;
  top:0;
  z-index:20;
  background:rgba(15,23,34,.97);
  backdrop-filter:blur(12px);
  border-bottom:1px solid var(--line);
}

.top{
  max-width:1250px;
  margin:auto;
  padding:14px 18px;
  display:flex;
  gap:15px;
  align-items:center;
  justify-content:space-between;
}

.brand{
  font-size:22px;
  font-weight:800;
  color:#7dd3fc;
}

.brand small{
  display:block;
  color:var(--muted);
  font-size:11px;
  font-weight:400;
  margin-top:2px;
}

nav{
  display:flex;
  gap:7px;
  flex-wrap:wrap;
}

button{
  border:0;
  border-radius:8px;
  padding:10px 14px;
  font-weight:700;
  cursor:pointer;
  background:#334155;
  color:white;
}

button:hover{
  filter:brightness(1.12);
}

button.primary{
  background:#0284c7;
}

button.success{
  background:#15803d;
}

button.danger{
  background:#b91c1c;
}

button.warning{
  background:#b45309;
}

button.small{
  padding:6px 9px;
  font-size:12px;
}

.nav-btn.active{
  background:#0284c7;
}

main{
  max-width:1250px;
  margin:auto;
  padding:18px;
}

.view{
  display:none;
}

.view.active{
  display:block;
}

.card{
  background:rgba(27,39,56,.97);
  border:1px solid var(--line);
  border-radius:12px;
  padding:14px;
  margin-bottom:15px;
  box-shadow:0 8px 25px rgba(0,0,0,.14);
}

.card h2,
.card h3{
  margin:0 0 8px;
}

.sub{
  color:var(--muted);
  font-size:13px;
  margin:0 0 14px;
}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(210px,1fr));
  gap:12px;
}

label{
  font-size:12px;
  font-weight:700;
  color:#b7c9df;
  display:block;
  margin-bottom:5px;
}

input,
select{
  width:100%;
  background:var(--input);
  border:1px solid var(--line);
  border-radius:7px;
  color:white;
  padding:10px;
  min-height:40px;
}

input:focus,
select:focus{
  outline:2px solid rgba(56,189,248,.3);
  border-color:var(--accent);
}

.actions{
  display:flex;
  gap:8px;
  flex-wrap:wrap;
  margin-top:14px;
}

.table-wrap{
  overflow:auto;
  border:1px solid var(--line);
  border-radius:8px;
}

table{
  width:100%;
  border-collapse:collapse;
  font-size:12px;
  min-width:850px;
}

th{
  background:#172233;
  color:#8fd3ff;
  text-align:left;
}

th,
td{
  padding:8px;
  border-right:1px solid var(--line);
  border-bottom:1px solid var(--line);
  vertical-align:top;
}

tr:last-child td{
  border-bottom:0;
}

.pill{
  display:inline-block;
  padding:4px 8px;
  border-radius:20px;
  background:#25364d;
  margin:2px;
  font-size:11px;
}

.pill.empty{
  opacity:.55;
}

.paid{
  color:#86efac;
  font-weight:bold;
}

.due{
  color:#fca5a5;
  font-weight:bold;
}

.stats{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
  gap:10px;
  margin-bottom:15px;
}

.stat{
  padding:14px;
  border-radius:10px;
  background:#182536;
  border:1px solid var(--line);
}

.stat b{
  display:block;
  font-size:22px;
  color:#7dd3fc;
}

.stat span{
  font-size:11px;
  color:var(--muted);
}

.note{
  font-size:12px;
  color:#cbd5e1;
  background:#172536;
  padding:10px;
  border-radius:8px;
  border-left:3px solid var(--accent);
}

.boat-wrap{
  overflow:auto;
  padding:10px;
  background:#0d1724;
  border-radius:10px;
  border:1px solid var(--line);
}

.boat{
  position:relative;
  width:900px;
  height:430px;
  margin:auto;
  background:linear-gradient(90deg,#dbeafe,#93c5fd);

  clip-path:polygon(
    18% 2%,
    82% 2%,
    96% 22%,
    92% 88%,
    76% 98%,
    24% 98%,
    8% 88%,
    4% 22%
  );

  border:5px solid #0f172a;
  box-shadow:inset 0 0 0 8px rgba(15,23,42,.3);
}

.boat-title{
  position:absolute;
  left:0;
  right:0;
  text-align:center;
  top:12px;
  color:#0f172a;
  font-weight:900;
  font-size:18px;
}

.side{
  position:absolute;
  top:95px;
  bottom:70px;
  width:150px;
  display:flex;
  flex-direction:column;
  gap:13px;
  justify-content:center;
}

.left-side{
  left:70px;
}

.right-side{
  right:70px;
}

.popa{
  position:absolute;
  left:250px;
  right:250px;
  bottom:40px;
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:12px;
}

.seat{
  min-height:52px;
  background:#8b5a2b;
  border:3px solid #5b3518;
  border-radius:8px;
  padding:6px;
  color:white;
  font-size:11px;
  text-align:center;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:bold;
  box-shadow:0 3px 6px rgba(0,0,0,.25);
}

.seat.empty{
  background:#64748b;
}

.seat .pos{
  display:block;
  font-size:9px;
  opacity:.8;
}

.toast{
  position:fixed;
  bottom:18px;
  left:50%;
  transform:translateX(-50%);
  background:#0b1220;
  border:1px solid var(--accent);
  padding:11px 16px;
  border-radius:9px;
  z-index:100;
  display:none;
  box-shadow:0 8px 30px rgba(0,0,0,.35);
}

.toast.show{
  display:block;
}

.modal-back{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.65);
  display:none;
  align-items:center;
  justify-content:center;
  z-index:50;
  padding:15px;
}

.modal-back.show{
  display:flex;
}

.modal{
  width:min(560px,100%);
  background:#182536;
  border:1px solid var(--line);
  border-radius:12px;
  padding:16px;
  max-height:90vh;
  overflow:auto;
}

@media(max-width:700px){

  .top{
    align-items:flex-start;
    flex-direction:column;
  }

  .top nav{
    width:100%;
  }

  .nav-btn{
    flex:1;
    padding:9px 6px;
    font-size:11px;
  }

  main{
    padding:10px;
  }

  .card{
    padding:12px;
  }

  .grid{
    grid-template-columns:1fr 1fr;
  }

  .grid .wide{
    grid-column:1/-1;
  }

}
</style>
</head>

<body>

<header>

<div class="top">

<div class="brand">
🎣 Pesca Justa
<small>Organização, financeiro, vagas e revezamento inteligente</small>
</div>

<nav>

<button class="nav-btn active" data-view="dashboard">
Início
</button>

<button class="nav-btn" data-view="participantes">
Participantes
</button>

<button class="nav-btn" data-view="vagas">
Vagas & Barco
</button>

<button class="nav-btn" data-view="turnos">
Turnos
</button>

<button class="nav-btn" data-view="financeiro">
Financeiro
</button>

</nav>

</div>

</header>


<main>


<!-- DASHBOARD -->

<section id="dashboard" class="view active">

<div class="stats" id="dashboardStats"></div>


<div class="card">

<h2>🛥️ Resumo da Pescaria</h2>

<p class="sub">
Cadastre participantes, configure as vagas do barco,
informe os custos e gere o revezamento.
</p>


<div class="grid">

<div>
<label>Nome do evento</label>
<input id="eventName">
</div>


<div>
<label>Data de início</label>
<input type="datetime-local" id="tripStart">
</div>


<div>
<label>Data de término</label>
<input type="datetime-local" id="tripEnd">
</div>

</div>


<div class="actions">

<button class="primary" onclick="saveTripInfo()">
Salvar informações
</button>

</div>

</div>


<div class="card">

<h3>📋 Regras do revezamento</h3>

<div class="note">

<b>Regra da Popa/Fundo:</b>
um pescador que já ocupou o fundo não volta a ocupar
o fundo enquanto todos os demais participantes
não tiverem recebido a oportunidade.

<br><br>

A quantidade de vagas é sempre definida pela configuração
do barco. Se houver menos pescadores que vagas,
as vagas restantes ficam vazias.

<br><br>

Nenhum pescador pode ocupar duas vagas no mesmo turno.

</div>

</div>

</section>



<!-- PARTICIPANTES -->

<section id="participantes" class="view">

<div class="card">

<h2>👥 Participantes</h2>

<p class="sub">
Adicione, edite ou remova os pescadores.
Nomes duplicados não são permitidos.
</p>


<div class="grid">

<div class="wide">

<label>Nome do participante</label>

<input
id="newParticipant"
placeholder="Digite o nome do pescador"
>

</div>

</div>


<div class="actions">

<button class="primary" onclick="addParticipant()">
Adicionar participante
</button>

</div>

</div>


<div class="card">

<div id="participantsList"></div>

</div>

</section>



<!-- VAGAS -->

<section id="vagas" class="view">


<div class="card">

<h2>🛥️ Configuração das Vagas</h2>

<p class="sub">
Defina a quantidade real de posições disponíveis no barco.
</p>


<div class="grid">

<div>

<label>Vagas lado esquerdo</label>

<input
type="number"
min="0"
id="vEsq"
>

</div>


<div>

<label>Vagas lado direito</label>

<input
type="number"
min="0"
id="vDir"
>

</div>


<div>

<label>Vagas na Popa / Fundo</label>

<input
type="number"
min="0"
id="vPopa"
>

</div>

</div>


<div class="actions">

<button
class="primary"
onclick="saveBoatConfig()"
>
Salvar configuração
</button>

</div>

</div>



<div class="card">

<h3>Vista superior do barco</h3>

<p class="sub">
Os nomes aparecem diretamente nas posições
quando um turno é selecionado.
</p>


<div class="grid">

<div>

<label>Visualizar turno</label>

<select
id="boatTurnSelect"
onchange="renderBoat()"
></select>

</div>

</div>


<div class="boat-wrap">

<div
class="boat"
id="boat"
></div>

</div>

</div>

</section>



<!-- TURNOS -->

<section id="turnos" class="view">


<div class="card">

<h2>🎲 Tabela de Turnos & Cronograma</h2>

<p class="sub">
O sistema utiliza rodízio inteligente,
priorizando a oportunidade de todos pescarem
na Popa/Fundo antes de repetir participantes.
</p>


<div class="grid">


<div>

<label>Horas por turno</label>

<input
type="number"
min="1"
step="0.5"
id="turnHours"
>

</div>


<div>

<label>Início da pesca</label>

<input
type="datetime-local"
id="inicioPescaInput"
>

</div>


<div>

<label>Fim da pesca</label>

<input
type="datetime-local"
id="fimPescaInput"
>

</div>

</div>


<div class="actions">

<button
class="primary"
onclick="generateSchedule()"
>
Gerar Cronograma Inteligente
</button>


<button
class="danger"
onclick="clearSchedule()"
>
Limpar cronograma
</button>

</div>

</div>



<div class="card">

<div class="table-wrap">

<table>

<thead>

<tr>

<th>Turno</th>

<th>Início</th>

<th>Fim</th>

<th>Esquerda</th>

<th>Direita</th>

<th>Popa / Fundo</th>

<th>Fora / Descansando</th>

</tr>

</thead>


<tbody id="scheduleBody"></tbody>

</table>

</div>

</div>



<div class="card">

<h3>📊 Equilíbrio do revezamento</h3>


<div class="table-wrap">

<table>

<thead>

<tr>

<th>Pescador</th>

<th>Turnos</th>

<th>Esquerda</th>

<th>Direita</th>

<th>Popa</th>

<th>Descansos</th>

</tr>

</thead>


<tbody id="fairnessBody"></tbody>

</table>

</div>

</div>

</section>



<!-- FINANCEIRO -->

<section id="financeiro" class="view">


<div class="card">

<h2>💰 Financeiro & Rateio</h2>

<p class="sub">
Cadastre despesas por categoria.
O sistema calcula automaticamente
a parte de cada pescador.
</p>


<div class="grid">


<div>

<label>Categoria</label>

<select id="expenseCategory">

<option>Barco</option>
<option>Isca</option>
<option>Gelo</option>
<option>Alimentação</option>
<option>Bebidas</option>
<option>Churrasco</option>
<option>Combustível</option>
<option>Outros</option>

</select>

</div>


<div>

<label>Descrição</label>

<input
id="expenseDescription"
placeholder="Ex.: Aluguel do barco"
>

</div>


<div>

<label>Valor total (R$)</label>

<input
id="expenseValue"
type="number"
min="0"
step="0.01"
>

</div>

</div>


<div class="actions">

<button
class="primary"
onclick="addExpense()"
>
Adicionar despesa
</button>

</div>

</div>



<div class="card">

<h3>💵 Registrar pagamento</h3>


<div class="grid">


<div>

<label>Pescador</label>

<select id="paymentParticipant"></select>

</div>


<div>

<label>Categoria / referência</label>

<select id="paymentCategory">

<option value="Geral">
Geral
</option>

</select>

</div>


<div>

<label>Valor pago (R$)</label>

<input
id="paymentValue"
type="number"
min="0.01"
step="0.01"
>

</div>

</div>


<div class="actions">

<button
class="success"
onclick="addPayment()"
>
Registrar pagamento
</button>

</div>

</div>



<div class="card">

<h3>Despesas cadastradas</h3>

<div class="table-wrap">

<table>

<thead>

<tr>

<th>Categoria</th>

<th>Descrição</th>

<th>Valor</th>

<th></th>

</tr>

</thead>

<tbody id="expenseBody"></tbody>

</table>

</div>

</div>



<div class="card">

<h3>📌 Situação por pescador</h3>

<div class="table-wrap">

<table>

<thead>

<tr>

<th>Pescador</th>

<th>Deve pagar</th>

<th>Já pagou</th>

<th>Saldo</th>

<th>Situação</th>

</tr>

</thead>

<tbody id="financialBody"></tbody>

</table>

</div>

</div>



<div class="card">

<h3>Histórico de pagamentos</h3>

<div class="table-wrap">

<table>

<thead>

<tr>

<th>Data</th>

<th>Pescador</th>

<th>Categoria</th>

<th>Valor</th>

<th></th>

</tr>

</thead>

<tbody id="paymentBody"></tbody>

</table>

</div>

</div>

</section>


</main>



<div
id="toast"
class="toast"
></div>



<div
class="modal-back"
id="editModal"
>

<div class="modal">

<h3>Editar participante</h3>

<input id="editParticipantName">


<div class="actions">

<button
class="primary"
onclick="confirmEditParticipant()"
>
Salvar
</button>


<button onclick="closeModal()">
Cancelar
</button>

</div>

</div>

</div>



<script>

/* =========================================================
   CONFIGURAÇÃO
========================================================= */

const STORAGE_KEY = 'pescaJusta_v6';

let editingParticipantId = null;


/* =========================================================
   ESTADO PADRÃO
========================================================= */

const defaultState = {

  eventName:'Pesca Justa',

  tripStart:'2026-10-17T10:00',

  tripEnd:'2026-10-18T10:00',

  participants:[],

  boatConfig:{
    left:3,
    right:3,
    popa:4
  },

  schedule:[],

  expenses:[],

  payments:[]

};


let state = load();


/* =========================================================
   STORAGE
========================================================= */

function clone(obj){

  return JSON.parse(
    JSON.stringify(obj)
  );

}


function load(){

  try{

    const saved = JSON.parse(
      localStorage.getItem(STORAGE_KEY)
    );

    if(saved){

      return {

        ...clone(defaultState),

        ...saved,

        boatConfig:{
          ...defaultState.boatConfig,
          ...(saved.boatConfig || {})
        }

      };

    }

  }

  catch(e){

    console.error(e);

  }

  return clone(defaultState);

}


function persist(){

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(state)
  );

}


/* =========================================================
   UTILITÁRIOS
========================================================= */

function uid(){

  return Date.now().toString(36)
  +
  Math.random().toString(36).slice(2,9);

}


function money(value){

  return Number(value || 0)
  .toLocaleString(
    'pt-BR',
    {
      style:'currency',
      currency:'BRL'
    }
  );

}


function toast(message){

  const el =
  document.getElementById('toast');

  el.textContent = message;

  el.classList.add('show');

  clearTimeout(
    window.__toastTimer
  );

  window.__toastTimer =
  setTimeout(
    ()=>el.classList.remove('show'),
    3500
  );

}


function escapeHtml(value){

  return String(value)
  .replace(
    /[&<>"']/g,
    char => ({

      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      '"':'&quot;',
      "'":'&#039;'

    }[char])
  );

}


function fmtDate(value){

  const d = new Date(value);

  return d.toLocaleString(
    'pt-BR',
    {
      day:'2-digit',
      month:'2-digit',
      hour:'2-digit',
      minute:'2-digit'
    }
  );

}


function shuffle(array){

  const a = [...array];

  for(
    let i = a.length - 1;
    i > 0;
    i--
  ){

    const j =
    Math.floor(
      Math.random() * (i + 1)
    );

    [a[i],a[j]] =
    [a[j],a[i]];

  }

  return a;

}


/* =========================================================
   NAVEGAÇÃO
========================================================= */

document
.querySelectorAll('.nav-btn')
.forEach(button=>{

  button.addEventListener(
    'click',
    ()=>{

      document
      .querySelectorAll('.nav-btn')
      .forEach(
        b=>b.classList.remove('active')
      );

      document
      .querySelectorAll('.view')
      .forEach(
        v=>v.classList.remove('active')
      );


      button.classList.add('active');


      document
      .getElementById(
        button.dataset.view
      )
      .classList.add('active');

    }
  );

});


/* =========================================================
   INFORMAÇÕES DA PESCARIA
========================================================= */

function saveTripInfo(){

  state.eventName =
  document
  .getElementById('eventName')
  .value
  .trim()
  ||
  'Pesca Justa';


  state.tripStart =
  document
  .getElementById('tripStart')
  .value;


  state.tripEnd =
  document
  .getElementById('tripEnd')
  .value;


  document
  .getElementById('inicioPescaInput')
  .value =
  state.tripStart;


  document
  .getElementById('fimPescaInput')
  .value =
  state.tripEnd;


  persist();

  toast(
    'Informações salvas.'
  );

}


/* =========================================================
   PARTICIPANTES
========================================================= */

function addParticipant(){

  const input =
  document
  .getElementById('newParticipant');


  const name =
  input.value.trim();


  if(!name){

    toast(
      'Digite o nome do participante.'
    );

    return;

  }


  const exists =
  state.participants.some(
    p =>
    p.name
    .toLowerCase()
    ===
    name.toLowerCase()
  );


  if(exists){

    toast(
      'Este participante já está cadastrado.'
    );

    return;

  }


  state.participants.push({

    id:uid(),

    name:name

  });


  input.value = '';


  state.schedule = [];


  persist();


  renderAll();


  toast(
    'Participante adicionado.'
  );

}


function renderParticipants(){

  const box =
  document
  .getElementById(
    'participantsList'
  );


  if(!state.participants.length){

    box.innerHTML =
    '<p class="sub">Nenhum participante cadastrado.</p>';

    return;

  }


  box.innerHTML =
  '<div class="table-wrap">' +

  '<table>' +

  '<thead>' +

  '<tr>' +

  '<th>#</th>' +

  '<th>Nome</th>' +

  '<th>Ações</th>' +

  '</tr>' +

  '</thead>' +

  '<tbody>' +

  state.participants
  .map(
    (p,index)=>`

    <tr>

    <td>
    ${index + 1}
    </td>

    <td>
    ${escapeHtml(p.name)}
    </td>

    <td>

    <button
    class="small primary"
    onclick="editParticipant('${p.id}')"
    >
    Editar
    </button>

    <button
    class="small danger"
    onclick="removeParticipant('${p.id}')"
    >
    Excluir
    </button>

    </td>

    </tr>

    `
  )
  .join('')

  +

  '</tbody>' +

  '</table>' +

  '</div>';

}


function editParticipant(id){

  const participant =
  state.participants.find(
    p=>p.id===id
  );


  if(!participant)
  return;


  editingParticipantId = id;


  document
  .getElementById(
    'editParticipantName'
  )
  .value =
  participant.name;


  document
  .getElementById(
    'editModal'
  )
  .classList.add('show');

}


function closeModal(){

  editingParticipantId = null;


  document
  .getElementById(
    'editModal'
  )
  .classList.remove('show');

}


function confirmEditParticipant(){

  const participant =
  state.participants.find(
    p=>p.id===editingParticipantId
  );


  const name =
  document
  .getElementById(
    'editParticipantName'
  )
  .value
  .trim();


  if(!participant || !name){

    toast(
      'Digite um nome válido.'
    );

    return;

  }


  const exists =
  state.participants.some(
    p=>
    p.id !== participant.id
    &&
    p.name.toLowerCase()
    ===
    name.toLowerCase()
  );


  if(exists){

    toast(
      'Já existe participante com esse nome.'
    );

    return;

  }


  participant.name = name;


  state.schedule = [];


  persist();


  closeModal();


  renderAll();


  toast(
    'Nome atualizado. Cronograma anterior removido.'
  );

}


function removeParticipant(id){

  if(
    !confirm(
      'Excluir este participante?'
    )
  )
  return;


  state.participants =
  state.participants.filter(
    p=>p.id!==id
  );


  state.schedule = [];


  persist();


  renderAll();


  toast(
    'Participante removido.'
  );

}


/* =========================================================
   CONFIGURAÇÃO DO BARCO
========================================================= */

function saveBoatConfig(){

  const left =
  Math.max(
    0,
    parseInt(
      document
      .getElementById('vEsq')
      .value
    )
    ||
    0
  );


  const right =
  Math.max(
    0,
    parseInt(
      document
      .getElementById('vDir')
      .value
    )
    ||
    0
  );


  const popa =
  Math.max(
    0,
    parseInt(
      document
      .getElementById('vPopa')
      .value
    )
    ||
    0
  );


  const total =
  left + right + popa;


  if(total <= 0){

    toast(
      'Informe pelo menos uma vaga.'
    );

    return;

  }


  state.boatConfig = {

    left:left,

    right:right,

    popa:popa

  };


  state.schedule = [];


  persist();


  renderAll();


  toast(
    'Configuração salva.'
  );

}


function fillBoatInputs(){

  document
  .getElementById('vEsq')
  .value =
  state.boatConfig.left;


  document
  .getElementById('vDir')
  .value =
  state.boatConfig.right;


  document
  .getElementById('vPopa')
  .value =
  state.boatConfig.popa;

}


/* =========================================================
   GERADOR DE REVEZAMENTO
========================================================= */

function generateSchedule(){

  const participants =
  state.participants.map(
    p=>({
      id:p.id,
      name:p.name
    })
  );


  const cfg =
  state.boatConfig;


  const totalSeats =
  cfg.left
  +
  cfg.right
  +
  cfg.popa;


  if(!participants.length){

    toast(
      'Cadastre os participantes primeiro.'
    );

    return;

  }


  if(totalSeats <= 0){

    toast(
      'Configure as vagas do barco.'
    );

    return;

  }


  /*
    REGRA:

    Pode haver menos pescadores
    que vagas.

    Não pode haver mais pescadores
    do que vagas.
  */

  if(
    participants.length
    >
    totalSeats
  ){

    toast(
      `Há ${participants.length} pescadores, mas apenas ${totalSeats} vagas. Ajuste o barco ou reduza participantes.`
    );

    return;

  }


  const hours =
  parseFloat(
    document
    .getElementById('turnHours')
    .value
  )
  ||
  4;


  const startDate =
  new Date(
    document
    .getElementById(
      'inicioPescaInput'
    )
    .value
  );


  const endDate =
  new Date(
    document
    .getElementById(
      'fimPescaInput'
    )
    .value
  );


  if(

    Number.isNaN(
      startDate.getTime()
    )

    ||

    Number.isNaN(
      endDate.getTime()
    )

    ||

    endDate <= startDate

  ){

    toast(
      'Informe datas válidas.'
    );

    return;

  }


  const duration =
  hours * 60 * 60 * 1000;


  const turns =
  Math.ceil(
    (endDate - startDate)
    /
    duration
  );


  /*
    =====================================================

    ESTATÍSTICAS

    =====================================================
  */

  const stats = {};


  participants.forEach(
    (p,index)=>{

      stats[p.id] = {

        turns:0,

        left:0,

        right:0,

        popa:0,

        rests:0,

        lastArea:null,

        tie:index

      };

    }
  );


  /*
    =====================================================

    FILAS DE RODÍZIO

    A FILA DA POPA É A MAIS IMPORTANTE.

    QUEM SAI DA FILA PARA A POPA
    VAI PARA O FINAL.

    ISSO IMPEDE QUE UM PESCADOR
    VOLTE AO FUNDO ANTES DOS OUTROS.

    =====================================================
  */


  let popaQueue =
  shuffle(
    participants.map(
      p=>p.id
    )
  );


  let leftQueue =
  shuffle(
    participants.map(
      p=>p.id
    )
  );


  let rightQueue =
  shuffle(
    participants.map(
      p=>p.id
    )
  );


  let now =
  new Date(startDate);


  const schedule = [];


  /*
    =====================================================

    FUNÇÃO PARA PEGAR PESSOADORES
    DE UMA FILA

    =====================================================
  */

  function takeFromQueue(
    queue,
    count,
    available
  ){

    const picked = [];


    let safety = 0;


    while(

      picked.length < count

      &&

      available.length

      &&

      safety < 1000

    ){

      safety++;


      const id =
      queue.shift();


      if(
        id === undefined
      )
      break;


      /*
        Recoloca no final da fila.
      */

      queue.push(id);


      if(
        available.includes(id)
        &&
        !picked.includes(id)
      ){

        picked.push(id);


        const index =
        available.indexOf(id);


        if(index >= 0){

          available.splice(
            index,
            1
          );

        }

      }

    }


    return picked;

  }


  /*
    =====================================================

    GERAÇÃO DOS TURNOS

    =====================================================
  */


  for(

    let turn = 1;

    turn <= turns
    &&
    now < endDate;

    turn++

  ){


    const finish =
    new Date(

      Math.min(

        now.getTime()
        +
        duration,

        endDate.getTime()

      )

    );


    /*
      Todos os pescadores podem
      participar porque a quantidade
      de pescadores é menor ou igual
      à quantidade de vagas.
    */

    let available =
    participants.map(
      p=>p.id
    );


    /*
      -------------------------------------------------

      POPA

      A FILA É UTILIZADA PARA QUE TODOS
      PASSEM PELO FUNDO ANTES DE QUALQUER
      REPETIÇÃO.

      -------------------------------------------------
    */

    const popaCount =
    Math.min(
      cfg.popa,
      available.length
    );


    const popa =
    takeFromQueue(
      popaQueue,
      popaCount,
      available
    );


    /*
      -------------------------------------------------

      ESQUERDA

      -------------------------------------------------
    */

    const leftCount =
    Math.min(
      cfg.left,
      available.length
    );


    const left =
    takeFromQueue(
      leftQueue,
      leftCount,
      available
    );


    /*
      -------------------------------------------------

      DIREITA

      -------------------------------------------------
    */

    const rightCount =
    Math.min(
      cfg.right,
      available.length
    );


    const right =
    takeFromQueue(
      rightQueue,
      rightCount,
      available
    );


    /*
      Se sobrar alguém por alguma
      configuração, fica descansando.
    */

    const resting =
    [...available];


    /*
      -------------------------------------------------

      ATUALIZA ESTATÍSTICAS

      -------------------------------------------------
    */

    popa.forEach(
      id=>{

        stats[id].turns++;

        stats[id].popa++;

        stats[id].lastArea =
        'popa';

      }
    );


    left.forEach(
      id=>{

        stats[id].turns++;

        stats[id].left++;

        stats[id].lastArea =
        'left';

      }
    );


    right.forEach(
      id=>{

        stats[id].turns++;

        stats[id].right++;

        stats[id].lastArea =
        'right';

      }
    );


    resting.forEach(
      id=>{

        stats[id].rests++;

      }
    );


    /*
      -------------------------------------------------

      SALVA TURNO

      -------------------------------------------------
    */

    schedule.push({

      turn:turn,

      start:
      now.toISOString(),

      end:
      finish.toISOString(),

      left:left,

      right:right,

      popa:popa,

      resting:resting

    });


    now = finish;

  }


  state.schedule =
  schedule;


  persist();


  renderAll();


  toast(
    'Cronograma gerado com rodízio inteligente.'
  );

}


/* =========================================================
   LIMPAR CRONOGRAMA
========================================================= */

function clearSchedule(){

  if(

    !confirm(
      'Limpar o cronograma?'
    )

  )
  return;


  state.schedule = [];


  persist();


  renderAll();

}


/* =========================================================
   BUSCAR PARTICIPANTE
========================================================= */

function getParticipantName(id){

  const participant =
  state.participants.find(
    p=>p.id===id
  );


  return participant
  ?
  participant.name
  :
  'Participante removido';

}


/* =========================================================
   RENDER TURNOS
========================================================= */

function renderSchedule(){

  const body =
  document
  .getElementById(
    'scheduleBody'
  );


  if(!state.schedule.length){

    body.innerHTML =

    '<tr>' +

    '<td colspan="7" class="sub">' +

    'Nenhum cronograma gerado.' +

    '</td>' +

    '</tr>';

  }

  else{

    body.innerHTML =
    state.schedule
    .map(
      schedule=>`

      <tr>

      <td>
      <b>
      Turno ${schedule.turn}
      </b>
      </td>


      <td>
      ${fmtDate(schedule.start)}
      </td>


      <td>
      ${fmtDate(schedule.end)}
      </td>


      <td>

      ${
        schedule.left.length
        ?

        schedule.left
        .map(
          id=>`
          <span class="pill">
          ${escapeHtml(getParticipantName(id))}
          </span>
          `
        )
        .join('')

        :

        '<span class="pill empty">Vaga vazia</span>'
      }

      </td>


      <td>

      ${
        schedule.right.length
        ?

        schedule.right
        .map(
          id=>`
          <span class="pill">
          ${escapeHtml(getParticipantName(id))}
          </span>
          `
        )
        .join('')

        :

        '<span class="pill empty">Vaga vazia</span>'
      }

      </td>


      <td>

      ${
        schedule.popa.length
        ?

        schedule.popa
        .map(
          id=>`
          <span class="pill">
          ${escapeHtml(getParticipantName(id))}
          </span>
          `
        )
        .join('')

        :

        '<span class="pill empty">Vaga vazia</span>'
      }

      </td>


      <td>

      ${
        schedule.resting.length
        ?

        schedule.resting
        .map(
          id=>`
          <span class="pill">
          ${escapeHtml(getParticipantName(id))}
          </span>
          `
        )
        .join('')

        :

        '<span class="pill empty">
        Todos embarcados
        </span>'
      }

      </td>

      </tr>

      `
    )
    .join('');

  }


  renderFairness();

}


/* =========================================================
   EQUILÍBRIO
========================================================= */

function renderFairness(){

  const stats = {};


  state.participants.forEach(
    p=>{

      stats[p.id] = {

        name:p.name,

        turns:0,

        left:0,

        right:0,

        popa:0,

        rests:0

      };

    }
  );


  state.schedule.forEach(
    schedule=>{


      schedule.left.forEach(
        id=>{

          if(!stats[id])
          return;

          stats[id].turns++;

          stats[id].left++;

        }
      );


      schedule.right.forEach(
        id=>{

          if(!stats[id])
          return;

          stats[id].turns++;

          stats[id].right++;

        }
      );


      schedule.popa.forEach(
        id=>{

          if(!stats[id])
          return;

          stats[id].turns++;

          stats[id].popa++;

        }
      );


      schedule.resting.forEach(
        id=>{

          if(!stats[id])
          return;

          stats[id].rests++;

        }
      );

    }
  );


  document
  .getElementById(
    'fairnessBody'
  )
  .innerHTML =

  Object.values(stats)
  .map(
    person=>`

    <tr>

    <td>
    ${escapeHtml(person.name)}
    </td>

    <td>
    ${person.turns}
    </td>

    <td>
    ${person.left}
    </td>

    <td>
    ${person.right}
    </td>

    <td>
    <b>
    ${person.popa}
    </b>
    </td>

    <td>
    ${person.rests}
    </td>

    </tr>

    `
  )
  .join('')

  ||

  '<tr>' +

  '<td colspan="6" class="sub">' +

  'Cadastre participantes.'

  +

  '</td>' +

  '</tr>';

}


/* =========================================================
   SELECT DO BARCO
========================================================= */

function renderBoatSelect(){

  const select =
  document
  .getElementById(
    'boatTurnSelect'
  );


  const oldValue =
  select.value;


  select.innerHTML =

  '<option value="">Sem turno selecionado</option>'

  +

  state.schedule
  .map(
    schedule=>`

    <option
    value="${schedule.turn}"
    >

    Turno ${schedule.turn}
    —
    ${fmtDate(schedule.start)}

    </option>

    `
  )
  .join('');


  const exists =
  [...select.options]
  .some(
    option=>
    option.value===oldValue
  );


  if(exists){

    select.value =
    oldValue;

  }

  else if(
    state.schedule.length
  ){

    select.value =
    state.schedule[0].turn;

  }

}


/* =========================================================
   BARCO
========================================================= */

function renderBoat(){

  const selectedTurn =
  state.schedule.find(
    schedule=>

    String(schedule.turn)
    ===
    document
    .getElementById(
      'boatTurnSelect'
    )
    .value
  );


  const boat =
  document
  .getElementById(
    'boat'
  );


  function makeSeats(
    ids,
    area,
    total
  ){

    let html = '';


    for(
      let i = 0;
      i < total;
      i++
    ){

      const id =
      ids[i];


      if(id){

        html +=

        `
        <div class="seat">

        <span>

        <span class="pos">
        ${area} ${i + 1}
        </span>

        ${escapeHtml(
          getParticipantName(id)
        )}

        </span>

        </div>
        `;

      }

      else{

        html +=

        `
        <div class="seat empty">

        <span>

        <span class="pos">
        ${area} ${i + 1}
        </span>

        Vaga

        </span>

        </div>
        `;

      }

    }


    return html;

  }


  const left =
  selectedTurn
  ?
  selectedTurn.left
  :
  [];


  const right =
  selectedTurn
  ?
  selectedTurn.right
  :
  [];


  const popa =
  selectedTurn
  ?
  selectedTurn.popa
  :
  [];


  boat.innerHTML =

  `
  <div class="boat-title">

  🎣
  ${escapeHtml(state.eventName)}

  ${
    selectedTurn
    ?
    ' — Turno ' + selectedTurn.turn
    :
    ''
  }

  </div>


  <div class="side left-side">

  ${makeSeats(
    left,
    'Esquerda',
    state.boatConfig.left
  )}

  </div>


  <div class="side right-side">

  ${makeSeats(
    right,
    'Direita',
    state.boatConfig.right
  )}

  </div>


  <div class="popa">

  ${makeSeats(
    popa,
    'Popa',
    state.boatConfig.popa
  )}

  </div>
  `;

}


/* =========================================================
   FINANCEIRO - DESPESAS
========================================================= */

function addExpense(){

  const category =
  document
  .getElementById(
    'expenseCategory'
  )
  .value;


  const description =
  document
  .getElementById(
    'expenseDescription'
  )
  .value
  .trim();


  const value =
  parseFloat(
    document
    .getElementById(
      'expenseValue'
    )
    .value
  );


  if(
    !description
    ||
    !(value > 0)
  ){

    toast(
      'Informe descrição e valor.'
    );

    return;

  }


  state.expenses.push({

    id:uid(),

    category:category,

    description:description,

    value:value

  });


  document
  .getElementById(
    'expenseDescription'
  )
  .value = '';


  document
  .getElementById(
    'expenseValue'
  )
  .value = '';


  persist();


  renderFinance();


  toast(
    'Despesa adicionada.'
  );

}


function removeExpense(id){

  state.expenses =
  state.expenses.filter(
    expense=>
    expense.id!==id
  );


  persist();


  renderFinance();

}


/* =========================================================
   FINANCEIRO - PAGAMENTOS
========================================================= */

function addPayment(){

  const participant =
  document
  .getElementById(
    'paymentParticipant'
  )
  .value;


  const category =
  document
  .getElementById(
    'paymentCategory'
  )
  .value;


  const value =
  parseFloat(
    document
    .getElementById(
      'paymentValue'
    )
    .value
  );


  if(
    !participant
    ||
    !(value > 0)
  ){

    toast(
      'Selecione o pescador e informe o valor.'
    );

    return;

  }


  state.payments.push({

    id:uid(),

    participant:participant,

    category:category,

    value:value,

    date:
    new Date()
    .toISOString()

  });


  document
  .getElementById(
    'paymentValue'
  )
  .value = '';


  persist();


  renderFinance();


  renderDashboard();


  toast(
    'Pagamento registrado.'
  );

}


function removePayment(id){

  state.payments =
  state.payments.filter(
    payment=>
    payment.id!==id
  );


  persist();


  renderFinance();


  renderDashboard();

}


/* =========================================================
   RENDER FINANCEIRO
========================================================= */

function renderFinance(){

  const participants =
  state.participants;


  const totalExpenses =
  state.expenses.reduce(
    (total,expense)=>

    total
    +
    Number(expense.value),

    0
  );


  const valuePerPerson =
  participants.length
  ?
  totalExpenses
  /
  participants.length
  :
  0;


  /*
    DESPESAS
  */

  document
  .getElementById(
    'expenseBody'
  )
  .innerHTML =

  state.expenses
  .map(
    expense=>`

    <tr>

    <td>
    ${escapeHtml(
      expense.category
    )}
    </td>


    <td>
    ${escapeHtml(
      expense.description
    )}
    </td>


    <td>
    ${money(
      expense.value
    )}
    </td>


    <td>

    <button
    class="small danger"
    onclick="removeExpense('${expense.id}')"
    >
    Excluir
    </button>

    </td>

    </tr>

    `
  )
  .join('')

  ||

  '<tr>' +

  '<td colspan="4" class="sub">' +

  'Nenhuma despesa cadastrada.'

  +

  '</td>' +

  '</tr>';


  /*
    SELECT PARTICIPANTES
  */

  const paymentSelect =
  document
  .getElementById(
    'paymentParticipant'
  );


  paymentSelect.innerHTML =

  '<option value="">Selecione</option>'

  +

  participants
  .map(
    participant=>`

    <option
    value="${participant.id}"
    >

    ${escapeHtml(
      participant.name
    )}

    </option>

    `
  )
  .join('');


  /*
    CATEGORIAS
  */

  const categories =
  [

    ...new Set(

      state.expenses.map(
        expense=>
        expense.category
      )

    )

  ];


  document
  .getElementById(
    'paymentCategory'
  )
  .innerHTML =

  '<option value="Geral">Geral</option>'

  +

  categories
  .map(
    category=>`

    <option>
    ${escapeHtml(category)}
    </option>

    `
  )
  .join('');


  /*
    SITUAÇÃO FINANCEIRA
  */

  document
  .getElementById(
    'financialBody'
  )
  .innerHTML =

  participants
  .map(
    participant=>{


      const paid =
      state.payments
      .filter(
        payment=>

        payment.participant
        ===
        participant.id
      )
      .reduce(
        (total,payment)=>

        total
        +
        Number(payment.value),

        0
      );


      const balance =
      valuePerPerson
      -
      paid;


      const status =
      balance <= 0.009

      ?

      '<span class="paid">PAGO</span>'

      :

      '<span class="due">PENDENTE</span>';


      return

      `
      <tr>

      <td>
      ${escapeHtml(
        participant.name
      )}
      </td>


      <td>
      ${money(
        valuePerPerson
      )}
      </td>


      <td>
      ${money(
        paid
      )}
      </td>


      <td>
      ${money(
        Math.max(
          0,
          balance
        )
      )}
      </td>


      <td>
      ${status}
      </td>

      </tr>
      `;

    }
  )
  .join('')

  ||

  '<tr>' +

  '<td colspan="5" class="sub">' +

  'Cadastre participantes.'

  +

  '</td>' +

  '</tr>';


  /*
    HISTÓRICO
  */

  document
  .getElementById(
    'paymentBody'
  )
  .innerHTML =

  state.payments
  .map(
    payment=>`

    <tr>

    <td>

    ${new Date(
      payment.date
    ).toLocaleString('pt-BR')}

    </td>


    <td>

    ${escapeHtml(
      getParticipantName(
        payment.participant
      )
    )}

    </td>


    <td>

    ${escapeHtml(
      payment.category
    )}

    </td>


    <td>

    ${money(
      payment.value
    )}

    </td>


    <td>

    <button
    class="small danger"
    onclick="removePayment('${payment.id}')"
    >
    Excluir
    </button>

    </td>

    </tr>

    `
  )
  .join('')

  ||

  '<tr>' +

  '<td colspan="5" class="sub">' +

  'Nenhum pagamento registrado.'

  +

  '</td>' +

  '</tr>';

}


/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard(){

  const totalExpenses =
  state.expenses.reduce(
    (total,expense)=>

    total
    +
    Number(expense.value),

    0
  );


  const totalPaid =
  state.payments.reduce(
    (total,payment)=>

    total
    +
    Number(payment.value),

    0
  );


  const totalSeats =
  Number(
    state.boatConfig.left
  )
  +
  Number(
    state.boatConfig.right
  )
  +
  Number(
    state.boatConfig.popa
  );


  document
  .getElementById(
    'dashboardStats'
  )
  .innerHTML =

  `

  <div class="stat">

  <b>
  ${state.participants.length}
  </b>

  <span>
  Participantes
  </span>

  </div>


  <div class="stat">

  <b>
  ${totalSeats}
  </b>

  <span>
  Vagas por turno
  </span>

  </div>


  <div class="stat">

  <b>
  ${state.schedule.length}
  </b>

  <span>
  Turnos gerados
  </span>

  </div>


  <div class="stat">

  <b>
  ${money(totalExpenses)}
  </b>

  <span>
  Despesas
  </span>

  </div>


  <div class="stat">

  <b>
  ${money(totalPaid)}
  </b>

  <span>
  Pagamentos registrados
  </span>

  </div>

  `;

}


/* =========================================================
   RENDER GERAL
========================================================= */

function renderAll(){

  document
  .getElementById(
    'eventName'
  )
  .value =
  state.eventName;


  document
  .getElementById(
    'tripStart'
  )
  .value =
  state.tripStart;


  document
  .getElementById(
    'tripEnd'
  )
  .value =
  state.tripEnd;


  document
  .getElementById(
    'inicioPescaInput'
  )
  .value =
  state.tripStart;


  document
  .getElementById(
    'fimPescaInput'
  )
  .value =
  state.tripEnd;


  if(

    !document
    .getElementById(
      'turnHours'
    )
    .value

  ){

    document
    .getElementById(
      'turnHours'
    )
    .value = 4;

  }


  fillBoatInputs();


  renderParticipants();


  renderSchedule();


  renderBoatSelect();


  renderBoat();


  renderFinance();


  renderDashboard();

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

renderAll();

</script>

</body>
</html>
