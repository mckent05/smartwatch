
let date=new Date()
let hour=date.getHours()
let minutes=date.getMinutes()
let seconds=date.getSeconds()
let colors=document.querySelectorAll('.color')
let image=document.querySelector('.image img')
let timeDisplay=document.querySelector('.time-disp')
let time=document.querySelector('.times')
let heart=document.querySelector('.heartbeat')
let heartrate=document.querySelector('.heartrate')
let fill=document.querySelectorAll('.time')
let watches =document.querySelectorAll('.image img')

window.addEventListener('DOMContentLoaded', loadWatch)
time.addEventListener('click', () => {
    heart.classList.remove('active')
    timeDisplay.classList.add('active')
})
heartrate.addEventListener('click', () => {
    timeDisplay.classList.remove('active')
    heart.classList.add('active')
})


function loadWatch(){
    colors.forEach((color) => {
        color.addEventListener('click', (e) => {
            color.classList.add('bord')
            let id= e.currentTarget.dataset.id
            let myClass=document.querySelector(`.${id}`)
            watches.forEach((watch) => {
                watch.classList.remove('disp-watch')
            })
            myClass.classList.add('disp-watch')
        
            colors.forEach((sshh) =>{
                if( sshh !== color){
                    sshh.classList.remove('bord')
                }
            })
        })
    })
    setInterval(getTime, 1000)
    getTime()
    
}
let format= (value) => {
    if (value < 10){
        return `0${value}`
    }
    return value
}
let getTime= () => {
    let values=[hour,minutes,seconds]
    fill.forEach((item,index) => {
        item.innerHTML= format(values[index])
    })
    
    
}
