
window.onload = function(){
    let contenedor = document.getElementById('loader')
    contenedor.style.visibility = 'hidden'
    contenedor.style.opacity = '0'
}

window.addEventListener("keydown", function(e) {
    if(["Space" ,"ArrowUp" ,"ArrowDown" ,"ArrowLeft" ,"ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault()
    }
}, false)

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 32 * 32 // 1024
canvas.height = 32 * 18 // 576
height_screen = document.documentElement.clientHeight;
width_screen = document.documentElement.clientWidth;
// canvas.height = height_screen;
canvas.width = width_screen;

let parsedCollisions
let collisionBlocks
let background
let background0
let background01
let background02
let background03
let transicion = []
let preventTransicion = false

let hit = false

let proyectiles = []
let efectoProyectiles = []
let controlDisparo = true
let municion = 30
let lives = 100
let score = 0
let timer = 60
let timer2
let timerId
let fps = 0
let lastTime = 0;

let enemigos = []
let efectoEnemigos = []
let proyectilesEnemigos = []
let efectoProyectilesEnemigos = []

let objetos = []
let efectoObjetos = []

let portadaV = false
let muerte = false
let ganar = false

let myTimeout7, myTimeout3

let mute = true 

const hp = new Image();hp.src = "assets/hp.png"
const hp2 = new Image();hp2.src = "assets/hp2.png"
const cuadro = new Image();cuadro.src = "assets/cuadro.png"
const tren = new Image();tren.src = "assets/tren.png"
const edificio = new Image();edificio.src = "assets/edificio24.png"
const mostrador = new Image();mostrador.src = "assets/mostrador.png"
const vku = new Image();vku.src = "assets/vku.png"
const night = new Image();night.src = "assets/night.png"
const victor = new Image();victor.src = "assets/victor.png"
const perder = new Image();perder.src = "assets/perder.png"

let player = new Player({
    position: {
        x: 20,
        y: 500
    },
    imageSrc: './assets/img/player/idleR.png',
    scale: 1,
    frameRate: 4,
    frameBuffer: 6,
    loop: true,
    autoplay: true,
    animations: {
        idleRight:{
            frameRate: 4,
            frameBuffer: 6,
            loop: true,
            imageSrc: './assets/img/player/idleR.png',
        },
        idleLeft:{
            frameRate: 4,
            frameBuffer: 6,
            loop: true,
            imageSrc: './assets/img/player/idleL.png',
        },
        runRight:{
            frameRate: 5,
            frameBuffer: 6,
            loop: true,
            imageSrc: './assets/img/player/runR.png',
        },
        runLeft:{
            frameRate: 5,
            frameBuffer: 6,
            loop: true,
            imageSrc: './assets/img/player/runL.png',
        },
        jumpRight:{
            frameRate: 1,
            frameBuffer: 6,
            loop: true,
            imageSrc: './assets/img/player/jumpR.png',
        },
        jumpLeft:{
            frameRate: 1,
            frameBuffer: 6,
            loop: true,
            imageSrc: './assets/img/player/jumpL.png',
        },
        ataqueRight:{
            frameRate: 4,
            frameBuffer: 4,
            loop: false,
            imageSrc: './assets/img/player/attackR2.png',
        },
        ataqueLeft:{
            frameRate: 4,
            frameBuffer: 4,
            loop: false,
            imageSrc: './assets/img/player/attackL2.png',
        },
        hurtR: {
            frameRate: 1,
            frameBuffer: 10,
            loop: true,
            imageSrc: './assets/img/player/hurtR.png',
        },
        hurtL: {
            frameRate: 1,
            frameBuffer: 10,
            loop: true,
            imageSrc: './assets/img/player/hurtL.png',
        },
        muerteR: {
            frameRate: 8,
            frameBuffer: 10,
            loop: false,
            imageSrc: './assets/img/player/deadR.png',
        },
        muerteL: {
            frameRate: 8,
            frameBuffer: 10,
            loop: false,
            imageSrc: './assets/img/player/deadL.png',
        },
    }
})

let level = 0

const keys = {
    ArrowUp: { 
        pressed: false,
    },
    ArrowLeft: { 
        pressed: false,
    },
    ArrowRight: { 
        pressed: false,
    },
    Space: { 
        pressed: false,
    }
}

let camera = {
    position:{
        x: 0,
        y: 0
    }
}


function animate() {
    
    //Tính fps
    //fps = Math.round(1000 / (Date.now() - lastTime))
    //lastTime = Date.now()
    //console.log(fps);

    
    c.save()

    background0.draw()
        
    c.translate(camera.position.x,camera.position.y)
    background01.draw()
    background02.draw()
    background03.draw()
    background.draw()

    objetos.forEach((objeto) => {
        objeto.draw()
    })
    enemigos.forEach((enemigo) => {
        enemigo.draw()
    })

    player.draw()
    player.handleInput(keys)
    player.update()

    efectoEnemigos.forEach((efectoEnemigo) => {
        efectoEnemigo.draw()
    })

    efectoObjetos.forEach((efectoObjeto) => {
        efectoObjeto.draw()
    })

    proyectilesEnemigos.forEach((proyectilesEnemigo) => {
        proyectilesEnemigo.draw()
    })

    proyectiles.forEach((proyectil) => {
        proyectil.draw()
    })

    efectoProyectiles.forEach((efectoProyectil) => {
        efectoProyectil.draw()
    })
    efectoProyectilesEnemigos.forEach((efectoProyectilesEnemigo) => {
        efectoProyectilesEnemigo.draw()
    })
         
    c.restore()

    panel()
    
    c.save()

    transicion.forEach((transicio) => {
        transicio.draw()
    })
    
    c.restore()
    
    portada() 
    
    transicionF()
    // if (player.position.x <= 100)
    //     player.position.x = 100

    // window.requestAnimationFrame(animate)
    configPostion()
    setTimeout(animate, 1000 / 60)

}

function fullScreen() {
    let chieuDaiManHinh = document.documentElement.clientHeight
    let persen = (chieuDaiManHinh / 576) * 100
    document.body.style.zoom = persen + "%";
    return persen
}

function configPostion() {
    let rate = fullScreen() / 100.0
    let currentScreenWidth = canvas.width / rate
    if (player.position.x <= canvas.width - currentScreenWidth - player.width)
        player.position.x = canvas.width - currentScreenWidth - player.width
    if (player.position.y > 576)
        player.position.y = 400
}

levels[level].init()
animate()
fullScreen()
persen = fullScreen() / 100.0

// localStorage.clear()