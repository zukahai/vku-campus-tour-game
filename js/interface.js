function panel() {
    if(level != 0) {
        c.save()        
        c.drawImage(hp2, canvas.width - 170, -6, 160, 84)
        c.fillStyle="#f62020"
        c.fillRect(canvas.width - 126.5, 12, lives, 24)
        c.fillStyle="#e66f14"
        c.fillRect(canvas.width - 126.5, 40, municion, 24)
        c.drawImage(hp, canvas.width - 170, -6, 160, 84)
        c.drawImage(cuadro, canvas.width - 130, 70, 100, 30)
        c.shadowColor="black"
        c.shadowBlur=2
        c.lineWidth=4
        c.fillStyle="#fff"
        c.font="15px NVN-PixelFJVerdana8pt" 
        c.strokeText("LEVEL: " + level, 14, 28)
        c.fillText("LEVEL: " + level, 14, 28)
        c.strokeText("SCORE: " + score, 110, 28)
        c.fillText("SCORE: " + score, 110, 28)
        c.fillStyle="#16db7f"
        c.font="12px NVN-PixelFJVerdana8pt"
        if(timer2 < 10) c.fillStyle="#f62020"
        c.strokeText("TIME: " + timer2, canvas.width - 115, 93)
        c.fillText("TIME: " + timer2, canvas.width - 115, 93)         
        c.restore()
    }
    if(lives <= 0) lives = 0
    if(lives >= 100) lives = 100
    if(municion <= 0) municion = 0
    if(municion >= 100) municion = 100
    if(timer <= 9) timer2 = '0' + timer
    else timer2 = timer

}

function portada() {
    if(portadaV === true){
        c.save()
        c.fillStyle = 'rgba(255, 255, 255, .1)'
        c.fillRect(0, 0, canvas.width, canvas.height)
        c.textAlign="center" 
        c.font="130px NVN-PixelFJVerdana8pt"
        c.shadowColor="black"
        c.shadowBlur=2
        c.lineWidth=4
        c.fillStyle = '#f75f5f'
        c.strokeText("VKU",canvas.width/2, canvas.height/2 + 10)
        c.fillText("VKU",canvas.width/2, canvas.height/2 + 10)  
        c.fillStyle = '#fff'      
        c.font="24px NVN-PixelFJVerdana8pt"
        c.strokeText("press enter to start",canvas.width/2, canvas.height/2 + 48)
        c.fillText("press enter to start",canvas.width/2, canvas.height/2 + 48) 
        c.restore()       
    }
}

function transicionF() {
    for(let i = 0; i < transicion.length; i++) {
        if(transicion[i].identificador === 'transicion'){
            c.save()
            c.fillStyle = 'rgba(255, 255, 255, 1)'
            c.fillRect(transicion[i].position.x, 0, canvas.width, canvas.height)
            c.fillStyle="#f75f5f"
            c.font="100px NVN-PixelFJVerdana8pt" 
            c.textAlign="center"
            c.shadowColor="black"
            c.shadowBlur= 2
            c.lineWidth= 4
            if(ganar === false && lives >= 1) {
                c.strokeText("LEVEL " + level, transicion[i].position.x +canvas.width / 2, 240)
                c.fillText("LEVEL " + level, transicion[i].position.x +canvas.width / 2, 240)
                c.font="100px NVN-PixelFJVerdana8pt" 
                if(level === 1) {
                    c.font="28px NVN-PixelFJVerdana8pt"
                    c.fillStyle="#fff"
                    c.strokeText("Train Station", transicion[i].position.x + canvas.width / 2, 290)
                    c.fillText("Train Station", transicion[i].position.x + canvas.width / 2, 290)
                    let width_image = 473;
                    c.drawImage(tren, transicion[i].position.x +canvas.width / 2 - width_image / 2, 310, 473, 185)
                }
                if(level === 2) {
                    c.font="28px NVN-PixelFJVerdana8pt"
                    c.fillStyle="#fff"
                    c.strokeText("City", transicion[i].position.x + canvas.width / 2, 290)
                    c.fillText("City", transicion[i].position.x + canvas.width / 2, 290)
                    let width_image = 181;
                    c.drawImage(edificio, transicion[i].position.x + canvas.width / 2 - width_image / 2, 310, 181, 250)
                }
                if(level === 3) {
                    c.font="28px NVN-PixelFJVerdana8pt"
                    c.fillStyle="#fff"
                    c.strokeText("Restaurant", transicion[i].position.x + canvas.width / 2, 290)
                    c.fillText("Restaurant", transicion[i].position.x + canvas.width / 2, 290)
                    let width_image = canvas.width / 2
                    c.drawImage(mostrador, transicion[i].position.x + canvas.width / 2 - width_image / 2, 310, canvas.width / 2, 181)
                }
                if(level === 4) {
                    c.font="28px NVN-PixelFJVerdana8pt"
                    c.fillStyle="#fff"
                    c.strokeText("VKU", transicion[i].position.x + canvas.width / 2, 290)
                    c.fillText("VKU", transicion[i].position.x + canvas.width / 2, 290)
                    let width_image = 300
                    c.drawImage(vku, transicion[i].position.x + canvas.width / 2 - width_image / 2, 310, 300, 181)
                }
                if(level === 5) {
                    c.font="28px NVN-PixelFJVerdana8pt"
                    c.fillStyle="#fff"
                    c.strokeText("Dangerous night", transicion[i].position.x + canvas.width / 2, 290)
                    c.fillText("Dangerous night", transicion[i].position.x + canvas.width / 2, 290)
                    let width_image = 300
                    c.drawImage(night, transicion[i].position.x + canvas.width / 2 - width_image / 2, 310, 300, 181)
                }
                
            }
            if(ganar === true && lives >= 1) {
                c.font="70px NVN-PixelFJVerdana8pt"
                c.strokeText("CONGRATULATIONS", transicion[i].position.x +canvas.width / 2, 230)
                c.fillText("CONGRATULATIONS", transicion[i].position.x +canvas.width / 2, 230)
                c.font="21px NVN-PixelFJVerdana8pt"
                c.fillStyle="#fff"
                c.strokeText("You arrived at work on time", transicion[i].position.x +canvas.width / 2, 270)
                c.fillText("You arrived at work on time", transicion[i].position.x +canvas.width / 2, 270)
                let width_image = 200;
                c.drawImage(victor, transicion[i].position.x + canvas.width / 2 - width_image / 2, 300, 200, 200)
            }
            if(muerte = true && lives <= 0) {
                c.font="80px NVN-PixelFJVerdana8pt"
                c.strokeText("GAME OVER", transicion[i].position.x +canvas.width / 2, 240);
                c.fillText("GAME OVER", transicion[i].position.x +canvas.width / 2, 240)
                c.font="21px NVN-PixelFJVerdana8pt"
                c.fillStyle="#fff"
                c.strokeText("press enter to start", transicion[i].position.x +canvas.width / 2, 280)
                c.fillText("press enter to start", transicion[i].position.x +canvas.width / 2, 280)
                c.strokeText("or press c to continue", transicion[i].position.x +canvas.width / 2, 312)
                c.fillText("or press c to continue", transicion[i].position.x +canvas.width / 2, 312)
                let width_image = 200;
                c.drawImage(perder, transicion[i].position.x + canvas.width / 2 - width_image / 2, 340, 200, 200)
            }
            
            c.restore()
        }
    }
}

