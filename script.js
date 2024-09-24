// Simulação de uma biblioteca de músicas com links
const musicLibrary = [
    { title: "Bohemian Rhapsody", artist: "Queen", link: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ" },
    { title: "Hotel California", artist: "Eagles", link: "https://www.youtube.com/watch?v=lm7M7F_r_c0" },
    { title: "Imagine", artist: "John Lennon", link: "https://www.youtube.com/watch?v=YkgkThdzX-8" },
    { title: "Stairway to Heaven", artist: "Led Zeppelin", link: "https://www.youtube.com/watch?v=QkF3iD8Cw64" },
    { title: "Shape of You", artist: "Ed Sheeran", link: "https://www.youtube.com/watch?v=JGwWNGJdvx8" },
    { title: "Billie Jean", artist: "Michael Jackson", link: "https://www.youtube.com/watch?v=Zi_XLOBDo_Y" },
    { title: "Rolling in the Deep", artist: "Adele", link: "https://www.youtube.com/watch?v=rYEDA3JcQqw" },
    { title: "Dynamite", artist: "BTS", link: "https://www.youtube.com/watch?v=gdZLi9oWNZg" },
    { title: "That's What I Like", artist: "Bruno Mars", link: "https://www.youtube.com/watch?v=PMvW4wE2OAY" },
    { title: "333", artist: "Matuê", link: "https://www.youtube.com/watch?v=JahkMb1AptI" },
    { title: "susseguei", artist: "Jorge & Mateus", link: "https://www.youtube.com/watch?v=qU1DB6FQW0s" },
    { title: "leão", artist: "Marília Mendonça", link: "https://www.youtube.com/watch?v=ale_Y1MtRFQ" },
    { title: "Panini", artist: "Lil Nas X", link: "https://www.youtube.com/watch?v=bXcSLI58-h8" },
    { title: "Domingo de manhã", artist: "Marcos & Belutti", link: "https://youtu.be/vuiAcTC8o88?si=_Zmhkka93vhpPze3" },
    { title: "Baby", artist: "Justin Bieber", link: "https://youtu.be/kffacxfA7G4?si=RL_MvzF_SSXf64MB" },
    { title: "Sorry", artist: "Justin Bieber", link: "https://youtu.be/fRh_vgS2dFE?si=Rm0utNGETo_Wage3" },
    { title: "Mirrors", artist: "Justin Timberlake", link: "https://youtu.be/uuZE_IRwLNI?si=_pY-f7sG-SwcOJyG" },
    { title: "Smooth Criminal", artist: "Michael Jackson", link: "https://youtu.be/h_D3VFfhvs4?si=gfm7aTq9PYisNf_d" },
    { title: "", artist: "", link: "" },
    { title: "", artist: "", link: "" },
    { title: "", artist: "", link: "" },
    { title: "", artist: "", link: "" },
    { title: "", artist: "", link: "" },
    { title: "", artist: "", link: "" },
    { title: "", artist: "", link: "" },
    { title: "", artist: "", link: "" },
    { title: "", artist: "", link: "" },
    { title: "", artist: "", link: "" },
    { title: "", artist: "", link: "" },
    { title: "", artist: "", link: "" },
    { title: "", artist: "", link: "" },
    { title: "", artist: "", link: "" },
    { title: "", artist: "", link: "" },
    { title: "", artist: "", link: "" },
    { title: "", artist: "", link: "" },
    { title: "", artist: "", link: "" },
    { title: "", artist: "", link: "" },
    { title: "", artist: "", link: "" },
];

// Função para buscar músicas com base no input do usuário
function searchMusic(query) {
    return musicLibrary.filter(song => 
        song.title.toLowerCase().includes(query.toLowerCase()) || 
        song.artist.toLowerCase().includes(query.toLowerCase())
    );
}

// Função para exibir os resultados na página
function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>Nenhuma música encontrada.</p>';
        return;
    }

    results.forEach(song => {
        const songElement = document.createElement('div');
        songElement.classList.add('song');
        songElement.innerHTML = `
            <strong>${song.title}</strong> - ${song.artist}<br>
            <a href="${song.link}" target="_blank">Ouça aqui</a>
        `;
        resultsContainer.appendChild(songElement);
    });
}

// Adicionando evento ao botão de busca
document.getElementById('botao').addEventListener('click', function() {
    const query = document.getElementById('search').value;
    const results = searchMusic(query);
    displayResults(results);
});
