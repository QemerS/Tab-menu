const buttons = [...document.getElementsByTagName('button')];
const paragraphs = [...document.getElementsByTagName('p')]

buttons.forEach(btn => btn.addEventListener('click', (e) => {
    let index = buttons.indexOf(btn);
    for (const p of paragraphs) {
        if (paragraphs.indexOf() !== index) {
            p.className = 'hidden';
        }
        paragraphs[index].className = 'active';
    }
}));