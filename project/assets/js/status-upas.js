document.addEventListener("DOMContentLoaded", function() {
    // Dados simulados (Mock Data) de várias UPAs
    const mockUpas = [
        {
            nome: "UPA Cidade Operária",
            tempoEspera: "30 min",
            capacidadeAtual: "20/25", // 20 pacientes em 25 de capacidade
            pacientesAtendimento: 15,
            status: "Normal" // 🟢
        },
        {
            nome: "UPA Itaqui-Bacanga",
            tempoEspera: "1h 15 min",
            capacidadeAtual: "28/30", // 28 pacientes em 30 de capacidade
            pacientesAtendimento: 22,
            status: "Lotado" // 🟡
        },
        {
            nome: "UPA Vinhais",
            tempoEspera: "2h 00 min",
            capacidadeAtual: "35/35", // 35 pacientes em 35 de capacidade
            pacientesAtendimento: 30,
            status: "Superlotado" // 🔴
        },
        {
            nome: "UPA Centro",
            tempoEspera: "45 min",
            capacidadeAtual: "18/20",
            pacientesAtendimento: 16,
            status: "Lotado"
        }
    ];

    const upasStatusDiv = document.getElementById("upas-status");
    const btnVoltar = document.getElementById("btnVoltar");

    // --- 1. FUNÇÃO PARA RENDERIZAR OS CARTÕES DE STATUS ---
    mockUpas.forEach(upa => {
        const divUpa = document.createElement("div");
        divUpa.className = "cartao-upa"; 

        // Determina a classe de cor e o texto do status para exibição
        let statusClass = '';
        let statusCorTexto = '';
        
        if (upa.status === "Normal") {
            statusClass = 'status-normal';
            statusCorTexto = '🟢 Normal';
        } else if (upa.status === "Lotado") {
            statusClass = 'status-lotado';
            statusCorTexto = '🟡 Lotado';
        } else if (upa.status === "Superlotado") {
            statusClass = 'status-superlotado';
            statusCorTexto = '🔴 Superlotado';
        }

        divUpa.innerHTML = `
            <h3>${upa.nome}</h3>
            
            <div class="status-indicator ${statusClass}"></div>
            
            <p>Status Geral: <span class="${statusClass}"><b>${statusCorTexto}</b></span></p>
            
            <hr>
            
            <p>Tempo de Espera Médio: <b>${upa.tempoEspera}</b></p>
            <p>Capacidade Atual: <b>${upa.capacidadeAtual}</b></p>
            <p>Pacientes em Atendimento: <b>${upa.pacientesAtendimento}</b></p>
        `;
        
        upasStatusDiv.appendChild(divUpa);
    });

    // --- 2. FUNCIONALIDADE DO BOTÃO VOLTAR ---
    btnVoltar.addEventListener("click", function() {
        // Redireciona para 'login.html', que está na mesma pasta /html/
        window.location.href = "index.html"; 
    });
});