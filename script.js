document.addEventListener('DOMContentLoaded', () => {
    const memeContainer = document.getElementById('meme-container');
    const searchInput = document.getElementById('search');

    fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => {
            const memes = data.data.memes;
            displayMemes(memes);

            searchInput.addEventListener('input', () => {
                const searchTerm = searchInput.value.toLowerCase();
                const filteredMemes = memes.filter(meme => meme.name.toLowerCase().includes(searchTerm));
                displayMemes(filteredMemes);
            });
        });

    function displayMemes(memes) {
        memeContainer.innerHTML = '';
        memes.forEach(meme => {
            const memeElement = document.createElement('div');
            memeElement.classList.add('meme');
            memeElement.innerHTML = `
                <img src="${meme.url}" alt="${meme.name}">
                <p>${meme.name}</p>
            `;
            memeContainer.appendChild(memeElement);
        });
    }
});
const memeDescriptions = {
    "Drake Hotline Bling": "A meme template featuring Drake with two panels, one rejecting and one approving.",
    "Distracted Boyfriend": "A meme template showing a man looking at another woman while his girlfriend looks on disapprovingly.",
    // Add more descriptions as needed
};

function displayMemes(memes) {
    memeContainer.innerHTML = '';
    memes.forEach(meme => {
        const memeElement = document.createElement('div');
        memeElement.classList.add('meme');
        memeElement.innerHTML = `
            <img src="${meme.url}" alt="${meme.name}">
            <p>${meme.name}</p>
            <p>${memeDescriptions[meme.name] || 'No description available.'}</p>
        `;
        memeContainer.appendChild(memeElement);
    });
}