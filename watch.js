let watches={
    black:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fmiddle%2F253-2536384_app-apple-watch-animation-en-watch-app-clipart.png&imgrefurl=https%3A%2F%2Fwww.pinclipart.com%2Fpindetail%2Fwimmbm_app-apple-watch-animation-en-watch-app-clipart%2F&tbnid=Hl7HdZ04SokPmM&vet=12ahUKEwiMiazXl-bxAhWT5RoKHUo7A-IQMyhJegQIARB2..i&docid=76i6itS2zJtMDM&w=880&h=782&q=black%20watch%20animation&ved=2ahUKEwiMiazXl-bxAhWT5RoKHUo7A-IQMyhJegQIARB2',
    red:'https://i.imgur.com/PTgQlim.png',
    blue:'https://i.imgur.com/Mplj1YR.png',
    purple:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F96%2F5e%2F38%2F965e3882fd5218acc33e5025f91efbbe.png&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F595882594451549985%2F&tbnid=qjkcn5x761PAjM&vet=12ahUKEwjdw4bmgubxAhVDlxoKHT30D4wQMygFegUIARDiAQ..i&docid=gBD0oddwEGuyqM&w=277&h=320&q=purple%20watch%20band&ved=2ahUKEwjdw4bmgubxAhVDlxoKHT30D4wQMygFegUIARDiAQ'
    
}
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
            image.src=watches[id]
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
