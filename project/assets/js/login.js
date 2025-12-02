document.addEventListener("DOMContentLoaded", () => {
    const btnLogin = document.getElementById("btnLogin");

    btnLogin.addEventListener("click", () => {
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        if (email === "" || senha === "") {
            alert("Preencha todos os campos.");
            return;
        }

        // Login simples (mock)
        const user = localStorage.getItem("user");

        if (!user) {
            alert("Usuário não cadastrado.");
            return;
        }

        const data = JSON.parse(user);

        if (email === data.email && senha === data.senha) {
            alert("Login realizado com sucesso!");
            window.location.href = "index.html";
        } else {
            alert("Email ou senha incorretos.");
        }
    });
});
