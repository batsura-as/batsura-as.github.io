let m_menu = document.querySelector('.main_menu')
let block = document.querySelector('.block')
let results = document.querySelector('.results')
let b_answer = document.querySelectorAll('.answer')
let time_g = document.querySelector('.time-game')
let life_g = document.querySelector('.life-game')
let b_main = document.querySelector('.to-main')
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
    setTimeout(function(){
        results.style.display = 'block'
        block.style.display = 'none'
        result.innerHTML = `${right_ans} из ${score}`
    },10000)
    document.querySelector('#clock').innerHTML = '';
	initCountdown(document.querySelector('#clock'), {color: '#FF768E', dotColor: '#fff', showMs: true, sec: 10});
})

b_main.addEventListener('click', function(){
    results.style.display = 'none'
    m_menu.style.display = 'block'
    right_ans = 0
    c_score.innerHTML = 0
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
function initCountdown(t,e){if(!t)return void console.error("Must have element to populate the clock!");const o={day:0,hour:0,min:0,sec:0,color:"#fff",showMs:!1,glow:!1,goldOutline:!1,font:"Roboto, sans-serif",fontWeight:600,showAllNumbers:!1,freezeTime:!1,onlyShowTime:!1,onlySec:!1,id:(()=>{let t=(new Date).getTime(),e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){let o=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?o:3&o|8).toString(16)}));return e})()},r=Object.assign(o,e);if(r.totalSeconds=parseInt(parseInt(3600*r.hour)+parseInt(60*r.min)+parseInt(r.sec)),r.totalSeconds<=0)return void console.error("What are you some kind of wiseguy?");!r.dotColor&&(r.dotColor=o.color);let s="0 -270; 0 -240; 0 -210; 0 -180; 0 -150; 0 -120; 0 -90; 0 -60; 0 -30; 0 0",a="0 -150; 0 -120; 0 -90; 0 -60; 0 -30; 0 0";const n=r.totalSeconds>=36e3?0:r.totalSeconds>=3600?-22.5:r.totalSeconds>=600?-45:r.totalSeconds>=60?-65:r.totalSeconds>=10?-90:-110,i=(t,e,o,a=s)=>{if(r.totalSeconds>=e){let t=r.totalSeconds%o-o;return Math.abs(t)===o&&(t=0),`<animateTransform attributeName="transform" type="translate" values="${a}" dur="${o}s" begin="${t}s" repeatCount="${Math.ceil(r.totalSeconds/o)}" calcMode="discrete" />`}return""},l=i(0,36e3,36e4),d=i(0,3600,36e3),f=i(0,600,3600,a),c=i(0,60,600),$=i(0,10,60,a),u=i(0,1,10),m=i(0,0,1,s),g=i(0,0,.1,s);let p=r.showMs?175+n:130+n,x=r.showAllNumbers?300:30,h=r.showAllNumbers?-300:0,w=r.showAllNumbers?2:1,y=r.showAllNumbers?` mask="url(#mask${r.id})"`:"",k=r.glow?`<use href="#fullClock${r.id}" filter="url(#glow${r.id})"/>`:"",b=r.glow?`<filter id="glow${r.id}" x="-200%" y="-200%" width="1000%" height="1000%"><feGaussianBlur in="SourceGraphic" stdDeviation="1.4"><animate attributeName="stdDeviation" values="1.4; 4; 1.4" dur="0.3s" begin="placeholderAnimation${r.id}.end" repeatCount="indefinite" /></feGaussianBlur></filter>`:"",v=r.showMs?"M 132.5 10 v0 m0 10 v0":"",S=r.showMs?`<g class="ms10"><use href="#nums${r.id}" transform="translate(135)" />${m}</g><g class="ms">\n\t<use href="#nums${r.id}" transform="translate(155)" />\n\t${g}\n\t</g>`:"",M=r.totalSeconds>=36e3?1:.2,G=r.totalSeconds>=3600?1:.2,C=r.totalSeconds>=600?1:.2,T=r.totalSeconds>=60?1:.2,N=r.totalSeconds>=10?1:.2,A="",I="",q="",B="";if(r.goldOutline){q=' visibility="hidden"',A=`<linearGradient id="goldGrad${r.id}" gradientTransform="rotate(5)" x1="0%" y1="0%" x2="42%" y2="0%" spreadMethod="repeat"><stop offset="0%" stop-color="#ffb338" /><stop offset="50%" stop-color="#3e2904" /><stop offset="100%" stop-color="#ffb338" /></linearGradient><linearGradient id="goldGrad2${r.id}" gradientTransform="rotate(5)" x1="0%" y1="5%" x2="0%" y2="61%" spreadMethod="repeat"><stop offset="0%" stop-color="#ffb338" /><stop offset="50%" stop-color="#77571d" /><stop offset="100%" stop-color="#ffb338" /></linearGradient>`;for(let t=0;t<10;t++){B+=`<use href="#t${t}${r.id}" />`;for(let e=0;e<10;e++)I+=`<use href="#t${t}${r.id}" transform="translate(0 ${.1+.1*e})" />`}}else q=` fill=${r.color}`;let D=`<svg id="clockItToMe${r.id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 ${h} ${p} ${x*w}" height="100%" class="clockCountdown"><defs>${A}${b}<g id="nums${r.id}" font-weight="${r.fontWeight}" font-size="25" font-family="${r.font}"><g${q}><text id="t0${r.id}" transform="translate(3 24)">0</text><text id="t1${r.id}" transform="translate(3 54)">1</text><text id="t2${r.id}" transform="translate(3 84)">2</text><text id="t3${r.id}" transform="translate(3 114)">3</text><text id="t4${r.id}" transform="translate(3 144)">4</text><text id="t5${r.id}" transform="translate(3 174)">5</text><text id="t6${r.id}" transform="translate(3 204)">6</text><text id="t7${r.id}" transform="translate(3 234)">7</text><text id="t8${r.id}" transform="translate(3 264)">8</text><text id="t9${r.id}" transform="translate(3 294)">9</text></g><g fill="url(#goldGrad${r.id})" stroke="url(#goldGrad${r.id})" stroke-width="0.5">${I}</g><g fill="${r.color}" stroke="url(#goldGrad2${r.id})" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round">${B}</g></g><linearGradient id="grad${r.id}" gradientTransform="rotate(90)"><stop offset="20%" stop-color="#000" /><stop offset="50%" stop-color="#fff" /><stop offset="80%" stop-color="#000" /></linearGradient><linearGradient id="grad2${r.id}" gradientTransform="rotate(90)"><stop offset="40%" stop-color="#000" /><stop offset="50%" stop-color="#fff" /><stop offset="60%" stop-color="#000" /></linearGradient></defs><g transform="translate(${n} 0)"><g id="fullClock${r.id}"${y}><g class="hr10" opacity="${M}"><use href="#nums${r.id}" />${l}</g><g class="hr" opacity="${G}"><use href="#nums${r.id}" transform="translate(20)" />${d}</g><g class="min10" opacity="${C}"><use href="#nums${r.id}" transform="translate(45)" />${f}</g><g class="min" opacity="${T}"><use href="#nums${r.id}" transform="translate(65)" />${c}</g><g class="sec10" opacity="${N}"><use href="#nums${r.id}" transform="translate(90)" />${$}</g><g class="sec"><use href="#nums${r.id}" transform="translate(110)" />${u}</g>${S}<path d="M42.5 10 v0 m0 10 v0" stroke="${r.dotColor}" stroke-width="3" stroke-linecap="square" opacity="${G/2}" /><path d="M 87.5 10 v0 m0 10 v0" stroke="${r.dotColor}" stroke-width="3" stroke-linecap="square" opacity="${T/2}" /><path d="${v}" stroke="${r.dotColor}" stroke-width="3" stroke-linecap="square" opacity="1" /></g>${k}<g><animate id="placeholderAnimation${r.id}" attributeName="opacity" values="0; 0" dur="${r.totalSeconds}s" begin="0s" repeatCount="1" /></g></g></svg>`;const O=document.createElement("div");O.innerHTML=D;const W=O.firstChild;return t.appendChild(W),r.id}

initCountdown(document.querySelector('#clock'), {color: '#345', dotColor: '#fff', showMs: true, sec: 10});

for (let i = 0; i < b_answer.length; i+=1){
    document.addEventListener('mousemove', function(e){
        let dx = e.pageX - window.innerWidth/2
        let dy = e.pageY - window.innerHeight/2
        let angX = 60 * dx/window.innerWidth/2
        let angY = 60 * dy/window.innerHeight/2
        b_answer[i].style.transform = `rotateX(${angY}deg) rotateY(${angX}deg)`
    })
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
