const img = document.getElementById('favicon');
const input = document.getElementById('url');

function favicon(){
    const favicon = `https://www.google.com/s2/favicons?sz=32&domain_url=${input.value}`;
    img.src = favicon;
}