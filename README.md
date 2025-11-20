# sistema-upa

🏥 Sistema de Agendamento de Consultas e Monitoramento de Leitos – UPAs São Luís

Este projeto consiste em uma interface web criada para facilitar o agendamento de consultas nas Unidades de Pronto Atendimento (UPAs) de São Luís, além de exibir status de disponibilidade de leitos, vagas, atendimentos em andamento e outras informações em tempo real (mockadas ou integradas futuramente a uma API).

Desenvolvido com HTML, CSS e JavaScript, e prototipado no Figma, o objetivo é melhorar a experiência do cidadão e otimizar o fluxo de atendimentos nas unidades.

📌 Funcionalidades
👨‍⚕️ Agendamentos

Agendamento de consultas por:

- Especialidade

- UPA desejada

- Data e horário disponíveis

- Confirmação do agendamento e geração de protocolo.

- Visualização de consultas agendadas.

🛏️ Status dos Leitos

- Exibição em tempo real (ou simulado) de:

- Leitos disponíveis

- Leitos ocupados

- Taxa de ocupação (%)

- Tipos de leitos (observação, emergência, isolamento, etc.)

🏥 Status das UPAs

Informações como:

- Tempo médio de espera

- Capacidade atual

- Número de pacientes em atendimento

Situação geral: 🟢 Normal | 🟡 Lotado | 🔴 Superlotado

🔍 Busca e Filtros

- Buscar UPAs por bairro

- Filtrar por disponibilidade de leitos ou vagas

- Filtrar por especialidade médica

📱 Interface Responsiva

Layout adaptado para:

- Desktop

- Tablets

- Smartphones

🎨 Protótipo no Figma

O design da interface foi planejado no Figma, contendo:

- Fluxo do usuário

- Telas de login (opcional)

- Tela inicial com mapa/lista das UPAs

- Tela de agendamento

- Dashboard de status

- Componentes reutilizáveis

🔗 Link do protótipo (exemplo):
https://www.figma.com/proto/seu-prototipo-aqui

(Troque pelo link real do seu protótipo)

🛠️ Tecnologias Utilizadas

Tecnologia 	             Uso
HTML5	                      Estrutura das páginas
CSS3 (Flexbox/Grid)      Estilos, layout e responsividade
JavaScript	              Lógica, simulação de dados, interações da interface
Figma	                      Criação do design e protótipo
JSON (mock)	              Simulação de API para leitos e agendamentos

📁 Estrutura do Projeto

/project
│── index.html
│── upas.html
│── agendamento.html
│── status-leitos.html
│── README.md
│
│── /assets
│     ├── /css
│     │     ├── style.css
│     │     ├── agendamento.css
│     │     ├── upas.css
│     │     └── status-leitos.css
│     │
│     ├── /js
│     │     ├── main.js                 // scripts gerais
│     │     ├── apiMock.js              // simulação da API (fetch do JSON)
│     │     ├── agendamento.js          // lógica da página de agendamento
│     │     ├── upas.js                 // lógica da listagem/consulta das UPAs
│     │     ├── statusLeitos.js         // lógica do dashboard de leitos
│     │     ├── filtros.js              // filtros de UPAs, leitos, especialidades
│     │     └── utils.js                // funções utilitárias
│     │
│     └── /img
│           ├── logo.png
│           ├── icones/
│           └── upas/
│
└── /mock
      └── dados.json
