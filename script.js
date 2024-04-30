let m_menu = document.querySelector('.main_menu')
let block = document.querySelector('.block')
let results = document.querySelector('.results')
let b_answer = document.querySelectorAll('.answer')
let time_g = document.querySelector('.time-game')
let life_g = document.querySelector('.life-game')
let b_main = document.querySelector('.to-main')
let c_time = document.querySelector('.time')
let c_score = document.querySelector('.score')
let result = document.querySelector('.res')
let question = document.querySelector('.question')
let c_life = document.querySelector('.life')
let coun_life = document.querySelector('.counter-life')
let coun_time = document.querySelector('.counter-time')
let t_life = document.querySelector('.t_life')
let t_time = document.querySelector('.t_time')
let t_score = document.querySelector('.t_score')
let exit = document.querySelector('.exit')
let score = 0
let time = 0
let lifes = 0
let right_ans = 0
let m_colors = ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'orange', 'black']
class Question{
    constructor(){
        let m_colors_copy = m_colors
        let cor_color = randint(0,7)
        this.que = m_colors_copy[cor_color]
        this.cor_ans = this.que
        m_colors_copy.splice(cor_color, 1)
        this.que_color = m_colors_copy[randint(0,6)]
        shuffle(m_colors_copy)
        this.answs = [this.cor_ans, m_colors_copy[0], m_colors_copy[1], m_colors_copy[2]]
        shuffle(this.answs)

    }
    display(){
        question.innerHTML = this.que
        question.style.color = this.que_color
        for (let i=0; i < this.answs.length; i +=1){
            b_answer[i].style.background = this.answs[i]
        }
    }
}
function randint(min, max){
    return Math.round(Math.random() * (max-min)+min)
}
function shuffle(array) {
    let currentIndex = array.length,randomIndex;
    while (currentIndex != 0) { 
        randomIndex = Math.floor(Math.random() * currentIndex); 
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [  
        array[randomIndex], array[currentIndex]];}
    return array
}
time_g.addEventListener('click', function(){
    now_que = new Question()
    now_que.display()
    coun_time.style.display = 'block'
    coun_life.style.display = 'none'
    m_menu.style.display = 'none'
    block.style.display = 'block'
    score = 0
    time = 9
    a = 0
    for (let i=0; i<10; i += 1){
        setTimeout(function(){
            c_time.innerHTML = time - i
        }, a +=1000)
    }
    setTimeout(function(){
        results.style.display = 'block'
        block.style.display = 'none'
        result.innerHTML = `${right_ans} из ${score}`
    },10000)
})

b_main.addEventListener('click', function(){
    results.style.display = 'none'
    m_menu.style.display = 'block'
    right_ans = 0
    c_score.innerHTML = 0
    c_time.innerHTML = 10
})
life_g.addEventListener('click', function(){
    now_que = new Question()
    now_que.display()
    lifes = 5
    block.style.display = 'block'
    coun_time.style.display = 'none'
    coun_life.style.display = 'block'
    m_menu.style.display = 'none'
    c_life.innerHTML = 5
})
exit.addEventListener('click', function(){
    m_menu.style.display = 'block'
    block.style.display = 'none'

})

for (let i = 0; i < b_answer.length; i+=1){
    b_answer[i].addEventListener('click', function(){
        if(b_answer[i].style.background == now_que.cor_ans){
            right_ans +=1
            b_answer[i].style.border = '5px solid'
            anime({
            targets: b_answer[i],
            duration: 300,
            border:  '1px solid green',
            easing: 'linear'
            })
        }
        else{
            b_answer[i].style.border = '5px solid'
            anime({
            targets: b_answer[i],
            duration: 300,
            border: '1px solid red',
            easing: 'linear'
            })
            c_life.innerHTML = lifes
            lifes -=1
            if (lifes==0){
                block.style.display = 'none'
                results.style.display = 'block'
                result.innerHTML = 'Вы проиграли'
                
            }
        }
        c_score.innerHTML = right_ans
        m_colors = ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'orange', 'black']
        score +=1
        now_que = new Question()
        now_que.display()
    })
}
