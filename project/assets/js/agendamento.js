// (Conteúdo do agendamento.js, sem alterações)
document.addEventListener("DOMContentLoaded", function() {
    const btnAgendar = document.getElementById("btnAgendar");
    const btnVoltar = document.getElementById("btnVoltar");
    const listaAgendamentosDiv = document.getElementById("listaAgendamentos");

    function exibirAgendamentos() {
        const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
        
        listaAgendamentosDiv.innerHTML = '<h2>Agendamentos Anteriores</h2>';

        if (agendamentos.length === 0) {
            listaAgendamentosDiv.innerHTML += '<p>Nenhum agendamento realizado ainda.</p>';
            return;
        }

        const ul = document.createElement('ul');
        agendamentos.forEach((agendamento, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <b>Protocolo:</b> ${agendamento.protocolo}<br>
                <b>Especialidade:</b> ${agendamento.esp} | <b>UPA:</b> ${agendamento.upa}<br>
                <b>Data/Hora:</b> ${agendamento.data} às ${agendamento.hora}
                <hr>
            `;
            ul.appendChild(li);
        });

        listaAgendamentosDiv.appendChild(ul);
    }

    exibirAgendamentos(); 
    
    btnAgendar.addEventListener("click", function () {
        const esp = document.getElementById("especialidade").value;
        const upa = document.getElementById("upa").value;
        const data = document.getElementById("data").value;
        const hora = document.getElementById("hora").value;

        if (!esp || !upa || !data || !hora) {
            alert("Preencha todos os campos!");
            return;
        }

        const protocolo = "UPA-" + Math.floor(Math.random() * 9000 + 1000);

        const novoAgendamento = { esp, upa, data, hora, protocolo };

        const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
        agendamentos.unshift(novoAgendamento); 
        localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

        document.getElementById("protocolo").innerText =
            "✅ Agendamento confirmado! Protocolo: " + protocolo;
        
        exibirAgendamentos();
    });

    btnVoltar.addEventListener("click", function() {
        window.location.href = "index.html"; 
    });
});