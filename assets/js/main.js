
const container = document.querySelector('.board-hover')
let stringHtml = ""

for (let i = 1; i <= 200; i++) {
    const spanTag = "<span></span>"
    stringHtml += spanTag
}

container.innerHTML = stringHtml

const placeHover = document.querySelectorAll('.board-hover span')

placeHover.forEach(element => {
    element.addEventListener('mouseover', (e) => {
        let light = ' 0px 0px 22px '
        element.style.backgroundColor = randomColor()
        element.style.boxShadow = light += randomColor()
        timeApear(element)
    })
});

function timeApear(el) {
    setTimeout(() => {
        el.style.backgroundColor = '#1d1d1d'
        el.style.boxShadow = ''
    }, 500);
}

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}

