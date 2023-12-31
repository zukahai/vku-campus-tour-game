window.addEventListener('keydown', (event) => {

    if(player.preventInput) return

    switch (event.key){
        case 'Enter':
            if(level === 0){
                for(let i = 0; i < transicion.length; i++) {
                    transicion[i].velocity.x = 14
                    level = 1
                    preventTransicion = true
                    enemigos.splice(0, 50)
                    lives = 100
                }
            }
            if(muerte === true){
                resetIntervalos()
                muerte = false
                lives = 100
                timer = 60
                municion = 130
                score = 0
                intro = false
                player.preventInput = false  
                level= 1
                levels[level].init()
                clearTimeout(timerId)

            }
            if(ganar === true){
                // làm mới lại trang f5
                window.location.reload()
            }
            audioLevel.volume = .15        
            audioLevel.currentTime = 0
            audioLevel.play()
            break

            case 'c':
                if(muerte === true){

                    resetIntervalos()
                    timer = 60
                    municion = 30
                    score = 0
                    intro = false
                    muerte = false
                    player.preventInput = false  
                    lives = 100
                    levels[level].init()
                    clearTimeout(timerId) 

                }
                break
            

        case 'ArrowLeft':
        case 'a':
            keys.ArrowLeft.pressed = true
            break

        case 'ArrowRight':
        case 'd':
            keys.ArrowRight.pressed = true
            break

        case 'ArrowUp':
        case 'w':           
        if(player.velocity.y === 0 && lives > 0 && ganar === false && level != 0 && keys.ArrowUp.pressed === false) {
                keys.ArrowUp.pressed = true
                player.velocity.y = -12
            }
            break

        case ' ':
            if(level != 0 && controlDisparo === true && lives > 0 && municion >= 1) {

                audioShoot.volume = .2        
                audioShoot.currentTime = 0
                audioShoot.play()
                keys.Space.pressed = true            
                controlDisparo = false
                municion--
                player.disparar()                
            }
            break

        case 'm':
            mutear()     
            break
    }
})
window.addEventListener('keyup', (event) => {

    switch (event.key){
        case 'ArrowLeft':
        case 'a':
            keys.ArrowLeft.pressed = false
            break

        case 'ArrowRight':   
        case 'd':         
            keys.ArrowRight.pressed = false
            break 

        case 'ArrowUp':   
        case 'w':         
            keys.ArrowUp.pressed = false
            break 
            
        case ' ':
            keys.Space.pressed = false
            controlDisparo = true
            break
    }
})
