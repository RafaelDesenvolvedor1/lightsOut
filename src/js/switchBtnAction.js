document.getElementById('switchBtn').addEventListener('click', ()=>{
    document.querySelector('.out').classList.toggle('active')
    document.querySelector('.content').classList.toggle('active')
    document.querySelector('.controls').classList.toggle('active')
})

document.getElementById('switchBtnMobile').addEventListener('click', ()=>{
    document.querySelector('.out').classList.toggle('active')
    document.querySelector('.content').classList.toggle('active')
    document.querySelector('.controls').classList.toggle('active')
})