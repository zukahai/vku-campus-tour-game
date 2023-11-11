function panel() {
    if(level != 0) {
        c.save()    
        let rate = fullScreen() / 100.0
        let currentScreenWidth = canvas.width / rate
        let x_ = currentScreenWidth + (canvas.width - currentScreenWidth) / 2
        c.drawImage(hp2, x_ - 170, -6, 160, 84)
        c.fillStyle="#f62020"
        c.fillRect(x_ - 126.5, 12, lives, 24)
        c.fillStyle="#e66f14"
        c.fillRect(x_ - 126.5, 40, municion, 24)
        c.drawImage(hp, x_ - 170, -6, 160, 84)
        c.drawImage(cuadro, x_ - 130, 70, 100, 30)
        c.shadowColor="black"
        c.shadowBlur=2
        c.lineWidth=4
        c.fillStyle="#fff"
        c.font="15px NVN-PixelFJVerdana8pt" 
        c.strokeText("LEVEL: " + level, 14 + (canvas.width - currentScreenWidth) / 2, 28)
        c.fillText("LEVEL: " + level, 14 + (canvas.width - currentScreenWidth) / 2, 28)
        c.strokeText("SCORE: " + score, 110 + (canvas.width - currentScreenWidth) / 2, 28)
        c.fillText("SCORE: " + score, 110 + (canvas.width - currentScreenWidth) / 2, 28)
        c.fillStyle="#16db7f"
        c.font="12px NVN-PixelFJVerdana8pt"
        if(timer2 < 10) c.fillStyle="#f62020"
        c.strokeText("TIME: " + timer2, x_ - 115, 93)
        c.fillText("TIME: " + timer2, x_ - 115, 93)         
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
        c.fillStyle = '#00FFFF'
        c.strokeText("VKU",canvas.width/2, canvas.height/2 - 100)
        c.fillText("VKU",canvas.width/2, canvas.height/2 - 100) 

        c.fillStyle = '#FF0000'      
        c.font="34px NVN-PixelFJVerdana8pt"
        c.strokeText("Press enter to start",canvas.width/2, canvas.height/2 + 100)
        c.fillText("Press enter to start",canvas.width/2, canvas.height/2 + 100) 

        c.font="24px NVN-PixelFJVerdana8pt"
        c.fillStyle = '#00FF00'
        c.strokeText("Make by HaiZuka",canvas.width/2, canvas.height/2 - 50)
        c.fillText("Make by HaiZuka",canvas.width/2, canvas.height/2 - 50)

        c.font="24px NVN-PixelFJVerdana8pt"
        c.fillStyle = '#00FF00'
        c.strokeText("Design by HoangDevils",canvas.width/2, canvas.height/2)
        c.fillText("Design by HoangDevils",canvas.width/2, canvas.height/2)

        c.font="24px NVN-PixelFJVerdana8pt"
        c.fillStyle = '#00FF00'
        c.strokeText("Fonts of Font Việt Hoá NVN",canvas.width/2, canvas.height/2 + 50)
        c.fillText("Fonts of Font Việt Hoá NVN",canvas.width/2, canvas.height/2 + 50)

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
                c.strokeText("CONGRATULATIONS", transicion[i].position.x +canvas.width / 2, 150)
                c.fillText("CONGRATULATIONS", transicion[i].position.x +canvas.width / 2, 150)
                c.font="40px NVN-PixelFJVerdana8pt"
                c.fillStyle="#fff"
                c.strokeText("Your score: " + score, transicion[i].position.x +canvas.width / 2, 220)
                c.fillText("Your score: " + score, transicion[i].position.x +canvas.width / 2, 220)
                c.strokeText("Press enter to start", transicion[i].position.x +canvas.width / 2, 520)
                c.fillText("Press enter to start", transicion[i].position.x +canvas.width / 2, 520)
                let width_image = 200;
                c.drawImage(victor, transicion[i].position.x + canvas.width / 2 - width_image / 2, 260, 200, 200)
            }
            if(muerte = true && lives <= 0) {
                c.font="80px NVN-PixelFJVerdana8pt"
                c.strokeText("GAME OVER", transicion[i].position.x +canvas.width / 2, 240);
                c.fillText("GAME OVER", transicion[i].position.x +canvas.width / 2, 240)
                c.font="21px NVN-PixelFJVerdana8pt"
                c.fillStyle="#fff"
                c.strokeText("Press enter to start", transicion[i].position.x +canvas.width / 2, 280)
                c.fillText("Press enter to start", transicion[i].position.x +canvas.width / 2, 280)
                c.strokeText("or Press c to continue (Scores will be initialized to zero)", transicion[i].position.x +canvas.width / 2, 312)
                c.fillText("or Press c to continue (Scores will be initialized to zero", transicion[i].position.x +canvas.width / 2, 312)
                let width_image = 200;
                c.drawImage(perder, transicion[i].position.x + canvas.width / 2 - width_image / 2, 340, 200, 200)
            }
            
            c.restore()
        }
    }
}

