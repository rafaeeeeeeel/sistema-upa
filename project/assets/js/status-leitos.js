// status-leitos.js
document.addEventListener('DOMContentLoaded', function() {
    // Dados de exemplo (substituir por dados reais da API)
    const dadosUPA = {
        totalLeitos: 150,
        leitosOcupados: 120,
        leitosLivres: 30,
        taxaOcupacao: 80,
        tiposLeitos: [
            {
                tipo: "UTI Adulto",
                total: 40,
                ocupados: 38,
                livres: 2,
                ocupacao: 95
            },
            {
                tipo: "UTI Pediátrica",
                total: 25,
                ocupados: 20,
                livres: 5,
                ocupacao: 80
            },
            {
                tipo: "Enfermaria Adulto",
                total: 60,
                ocupados: 48,
                livres: 12,
                ocupacao: 80
            },
            {
                tipo: "Enfermaria Pediátrica",
                total: 25,
                ocupados: 14,
                livres: 11,
                ocupacao: 56
            }
        ]
    };

    // Preencher resumo geral
    const resumoHTML = `
        <div class="resumo-item">
            <h3>Total de Leitos</h3>
            <div class="resumo-numero">${dadosUPA.totalLeitos}</div>
        </div>
        <div class="resumo-item">
            <h3>Leitos Ocupados</h3>
            <div class="resumo-numero">${dadosUPA.leitosOcupados}</div>
        </div>
        <div class="resumo-item">
            <h3>Leitos Livres</h3>
            <div class="resumo-numero">${dadosUPA.leitosLivres}</div>
        </div>
        <div class="resumo-item">
            <h3>Taxa de Ocupação</h3>
            <div class="resumo-numero">${dadosUPA.taxaOcupacao}%</div>
        </div>
    `;
    
    document.getElementById('resumoGeral').innerHTML = resumoHTML;

    // Preencher detalhes dos leitos
    const leitosHTML = dadosUPA.tiposLeitos.map(leito => `
        <div class="leito-card">
            <div class="leito-titulo">
                <span>${leito.tipo}</span>
            </div>
            <div class="leito-info">Total: <span>${leito.total}</span> leitos</div>
            <div class="leito-info">Ocupados: <span>${leito.ocupados}</span></div>
            <div class="leito-info">Livres: <span>${leito.livres}</span></div>
            
            <div class="barra-container">
                <div class="barra-label">
                    <span>Ocupação</span>
                    <span>${leito.ocupacao}%</span>
                </div>
                <div class="barra">
                    <div class="barra-preenchida" style="width: ${leito.ocupacao}%"></div>
                </div>
            </div>
        </div>
    `).join('');

    document.getElementById('leitos').innerHTML = leitosHTML;

    // Botão voltar
    document.getElementById('btnVoltar').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});