const table = document.querySelector('table');
const colorInput = document.querySelector('#color');

const getRandomColor = () => {
    return Math.floor(Math.random() * 255);
}

const getRGB = () => {
    return 'rgb(' + getRandomColor() + ',' + getRandomColor() + ',' + getRandomColor() + ')';
}

const setColor = (element, backgroundColor = getRGB(), color = getRGB()) => {
    if (backgroundColor === '#000000') {
        color = '#ffffff';
    }
    element.style.backgroundColor = backgroundColor;
    element.style.color = color;
}

table.addEventListener('mouseover', event => {
    const target = event.target.closest('td');
    if (!target.classList.contains('variant')) {
        return;
    }
    setColor(target);
})

table.addEventListener('click', event => {
    const target = event.target.closest('td');
    const color = colorInput.value;
    if (!target.classList.contains('variant')) {
        return;
    }
    setColor(target, color, '#000000');
})

table.addEventListener('dblclick', event => {
    const target = event.target.closest('tr');
    const color = colorInput.value;
    const rows = Array.from(document.querySelectorAll('tr'));
    const index = rows.indexOf(target);
    for (let i = index; i < rows.length; i += 2) {
        setColor(rows[i], color, '#000000');
    }
})
