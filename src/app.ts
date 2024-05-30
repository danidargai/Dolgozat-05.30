/*
File: app.ts
Author: dargai Dániel
Copyright: 2024, Dargai Dániel
Group: Szoft I-2-N
Date: 2024-05-30
Github: https://github.com/danidargai/
Licenc: GNU GPL
*/

class Atlo {
    aSide?: HTMLInputElement | null
    bSide?: HTMLInputElement | null
    atlo?: HTMLInputElement | null
    calcButton?: HTMLInputElement | null
    
    constructor() {
        this.bindHtml()
        this.handleEvent() 
    }


bindHtml() {
    this.aSide = document.querySelector('#aSide')
    this.bSide = document.querySelector('#bSide')
    this.atlo = document.querySelector('#atlo')
    this.calcButton = document.querySelector('#calcButton')
}
handleEvent() {
    this.calcButton?.addEventListener('click',() =>{
        console.log("Mükszik")
        this.startCalc()
    }) 
}
startCalc() {
    const aSide = Number(this.aSide?.value)
    const bSide = Number(this.bSide?.value)
    const atlo = this.calcAtlo(aSide, bSide)
    this.atlo!.value = String(atlo)
    
}

calcAtlo(aSide: number, bSide:number):number {
    return Math.sqrt((aSide ** 2) + (bSide ** 2))
}
}
new Atlo()