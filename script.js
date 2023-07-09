const input = document.querySelectorAll('input');

for(let i = 0; i < input.length; i++){
    input[i].addEventListener('input', function(){
        const r = input[0].value;
        const g = input[1].value;
        const b = input[2].value;

        document.body.style.backgroundColor = `rgb(${r},${g},${b})`
    })
}

const tombol = document.querySelector('.tombol button');

tombol.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
  
})

document.body.addEventListener('mousemove', function(e){
    const xPos = Math.round((e.clientX / window.innerWidth) * 255);
    const yPos = Math.round((e.clientY / window.innerHeight) * 255);
    
    document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`;
})