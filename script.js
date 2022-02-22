import FloodFill from "./floodfill.js"
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const cube = document.querySelector(".cube")
const paint = document.querySelector(".paint")

//background
ctx.fillStyle = '#2f5b94';
ctx.fillRect(0,0,canvas.width,canvas.height)

const floodfill = new FloodFill(ctx)

let functionRun = "paint"

cube.addEventListener("click",_=>{
    functionRun = "cube"
})

paint.addEventListener("click",_=>{
    functionRun = "paint"
})

let canDraw = false

const paintDown = e=>{
    ctx.beginPath()
    ctx.moveTo(e.clientX - canvas.offsetLeft,e.clientY - canvas.offsetTop)
    ctx.lineWidth = 10
    ctx.lineJoin = "round"
    ctx.lineCap = "round"
    ctx.stroke()
}

const paintMove = e =>{
    ctx.lineTo(e.clientX - canvas.offsetLeft,e.clientY - canvas.offsetTop)
    ctx.stroke();
}


canvas.addEventListener("mousedown",e=>{
    if(functionRun === "paint"){
        paintDown(e)
        canDraw = true
        return
    }
    const x = e.clientX - canvas.offsetLeft
    const y = e.clientY - canvas.offsetTop
    floodfill.flood(x,y,[164, 0, 0,255])
})

canvas.addEventListener("mousemove",e=>{
    if(functionRun === "paint"){
        if(canDraw){
            paintMove(e)
        }
    }
})

canvas.addEventListener("mouseup",_=>{
    if(functionRun === "paint"){
        canDraw = false
    }

})


