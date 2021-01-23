const cards = document.querySelectorAll('.project-card')
const areas = document.querySelectorAll('.cardArea')
const titles = document.querySelectorAll('.p-title')
const languages = document.querySelectorAll('.p-language')
const descrtiptions = document.querySelectorAll('.p-description')
const links = document.querySelectorAll('.p-link')

areas.forEach((area, index) => {
    area.addEventListener('mousemove', (e) => {

        let rect = area.getBoundingClientRect()
        let xAxis = (((rect.left + rect.right) / 2) - e.clientX) / 20
        let yAxis = (((rect.top + rect.bottom) / 2) - e.clientY) / 20

        cards[index].style.transform = `rotateX(${yAxis}deg) rotateY(${-xAxis}deg)`
    })

    area.addEventListener('mouseenter', (e) => {
        area.style.transform = `translate(0px, -30px)`

        cards[index].style.transition = 'none'
        titles[index].style.transform = 'translateZ(120px)'
        languages[index].style.transform = 'translateZ(90px)'
        descrtiptions[index].style.transform = 'translateZ(75px)'
        links[index].style.transform = 'translateZ(50px)'
    })

    area.addEventListener('mouseleave', (e) => {
        area.style.transform = `translate(0px, 0px)`

        cards[index].style.transition = 'all 0.5s ease'
        cards[index].style.transform = `rotateX(0deg) rotateY(0deg)`

        titles[index].style.transform = 'translateZ(0px)'
        languages[index].style.transform = 'translateZ(0px)'
        descrtiptions[index].style.transform = 'translateZ(0px)'
        links[index].style.transform = 'translateZ(0px)'
    })
});
