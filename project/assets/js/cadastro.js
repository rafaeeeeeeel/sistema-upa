document.addEventListener("DOMContentLoaded", () => {
    const btnCadastrar = document.getElementById("btnCadastrar");

    // Adiciona o evento de clique ao botão
    btnCadastrar.addEventListener("click", () => {
        
        // Captura e remove espaços em branco (trim)
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();

        // Validação
        if (!nome || !email || !senha) {
            alert("⚠️ Por favor, preencha todos os campos!");
            return; 
        }

        // Cria e salva o objeto de usuário no localStorage
        const user = { nome, email, senha };
        localStorage.setItem("user", JSON.stringify(user));

        alert("✅ Cadastro realizado com sucesso!");
        
        // CORRIGIDO: Redirecionamento correto:
        // Sair de /js (..) e entrar em /html (/html/login.html)
        window.location.href = "login.html";
    });
});