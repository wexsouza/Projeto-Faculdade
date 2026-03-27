// API ViaCEP
function buscarCEP() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    const out = document.getElementById('resultado');

    if (cep.length !== 8) {
        out.innerHTML = "CEP inválido.";
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {
            if (data.erro) out.innerHTML = "Não encontrado.";
            else out.innerHTML = `📍 Localização: ${data.logradouro}, ${data.localidade}`;
        });
}

// Animação Simples de Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) nav.style.background = "rgba(5, 7, 10, 0.95)";
    else nav.style.background = "rgba(5, 7, 10, 0.8)";
});

// Frases aleatórias para o Mascote
const frases = [
    "Precisa de ajuda com o sensor?",
    "A SafeBag protege você!",
    "Clique no meu nariz para uma surpresa!",
    "Já verificou sua bateria 9V hoje?",
    "Estamos online 24h para você."
];

function falarMascote() {
    const balao = document.getElementById('balao');
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    balao.innerText = fraseAleatoria;
    
    // Pequeno efeito visual no mascote
    const bot = document.getElementById('safebot');
    bot.style.transform = "scale(1.1)";
    setTimeout(() => bot.style.transform = "scale(1)", 200);
}

// API de CEP atualizada
function buscarCEP() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    const out = document.getElementById('resultado-cep');

    if (cep.length !== 8) {
        out.innerHTML = "❌ Digite 8 números!";
        return;
    }

    out.innerHTML = "🔍 Buscando...";

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {
            if (data.erro) {
                out.innerHTML = "❌ CEP não encontrado.";
            } else {
                out.innerHTML = `✅ Disponível em: ${data.logradouro}, ${data.localidade} - ${data.uf}`;
                // O SafeBot comenta o resultado
                document.getElementById('balao').innerText = "Encontrei sua região! Temos suporte por aí.";
            }
        })
        .catch(() => out.innerHTML = "⚠️ Erro na conexão.");
}