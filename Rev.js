let man1 = document.getElementById('man1')
let man2 = document.getElementById('man2')
let revolve = document.getElementById('rev')

let Player = 0
let count = 0
s = 0
s1 = 0
ran = Math.floor(Math.random() * 6);
// функция рандом

function rev() {

    if (Player === 1) {
        // Если ходит Игрок 1 то следующий ходит Игрок 2
        Player = 2;
        man1.classList.add('active'); // Скрыть Игрока 1
        man2.classList.remove('active'); // Показать Игрока 2
        revolve.src = 'rev1.png';

        // Смерть 1 игрока
            if(ran == count){
                man1.src = 'man_dead.png';
                document.getElementById('button').style.display = "flex";
                s++
                document.getElementById('p2').textContent = s;
                revolve.removeAttribute('onclick');
            }
    } 

    else {
        // Если ходит Игрок 2 то следующий ходит Игрок 1
        Player = 1;
        man2.classList.add('active'); // Скрыть Игрока 2
        man1.classList.remove('active'); // Показать Игрока 1
        revolve.src = 'rev.png';

        // Смерть 2 игрока
            if(ran == count){
                man2.src = 'man_dead.png';
                document.getElementById('button').style.display = "flex";
                s1++
                document.getElementById('p1').textContent = s1;
                revolve.removeAttribute('onclick');
            }
    }
    count++
    document.getElementById('c').textContent = 'Патрон:' + count;
}

//Кнопка перезагрузки
function restart(){
    revolve.setAttribute('onclick', 'rev()');
    ran = Math.floor(Math.random() * 6);
    man1.src = 'man.png'
    man2.src = 'man.png'
    count = 0
    document.getElementById('c').textContent = 'Патрон:' + count;
}

    
  

