// Menu
const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')
const navlist = document.querySelector('.navlist')

burger.addEventListener('click', () => {
    navbar.classList.toggle('h-nav')
    navlist.classList.toggle('v-class')
})

// Slider 
const slideContainer = document.querySelector(".slider")
const sliderText = document.querySelector(".slider--text")
const btnLeft = document.querySelector(".slider__btn-left")
const btnRight = document.querySelector(".slider__btn-right")

const sliderImages = [
    {
        src: "/assets/image6.jpg",
        text: " Delighted by the jovial character of coffee, everyone was inspired to bring it home - leading to some of the most crucial firsts. ",
    },
    {
        src: "/assets/image2.jpg",
        text: " Delighted by the jovial character of coffee, everyone was inspired to bring it home - leading to some of the most crucial firsts. ",
    },
    {
        src: "/assets/image3.jpg",
        text: " Delighted by the jovial character of coffee, everyone was inspired to bring it home - leading to some of the most crucial firsts. ",
    },
    {
        src: "/assets/image4.jpg",
        text: " Delighted by the jovial character of coffee, everyone was inspired to bring it home - leading to some of the most crucial firsts. ",
    },
]

let slideCounter = 0

const startSlider = () => {
    slideContainer.style.backgroundImage = `linear-gradient(
    to right,
    rgba(34, 34, 34, 0.6),
    rgba(68, 68, 68, 0.6)
    ), url(${sliderImages[0].src})`
    sliderText.innerHTML = sliderImages[0].text
}

btnRight.addEventListener("click", function () {
    if (slideCounter === sliderImages.length - 1) {
        slideContainer.style.backgroundImage = `linear-gradient(
    to right,
    rgba(34, 34, 34, 0.6),
    rgba(68, 68, 68, 0.6)
    ), url(${sliderImages[0].src})`
        sliderText.innerHTML = sliderImages[0].text
        slideCounter = -1

        slideContainer.classList.add("fadeIn")
        setTimeout(() => {
            slideContainer.classList.remove("fadeIn")
        }, 1000)
    }
    slideContainer.style.backgroundImage = `linear-gradient(
    to right,
    rgba(34, 34, 34, 0.6),
    rgba(68, 68, 68, 0.6)
    ),url(${sliderImages[slideCounter + 1].src})`
    sliderText.innerHTML = sliderImages[slideCounter + 1].text
    slideCounter++
    slideContainer.classList.add("fadeIn")
    setTimeout(() => {
        slideContainer.classList.remove("fadeIn")
    }, 1000)
})

btnLeft.addEventListener("click", function () {
    if (slideCounter === 0) {
        slideContainer.style.backgroundImage = `linear-gradient(
    to right,
    rgba(34, 34, 34, 0.6),
    rgba(68, 68, 68, 0.6)
    ),url(${sliderImages[sliderImages.length - 1].src})`
        sliderText.innerHTML = sliderImages[sliderImages.length - 1].text
        slideCounter = sliderImages.length
        slideContainer.classList.add("fadeIn")
        setTimeout(() => {
            slideContainer.classList.remove("fadeIn")
        }, 1000)
    }

    slideContainer.style.backgroundImage = `linear-gradient(
    to right,
    rgba(34, 34, 34, 0.6),
    rgba(68, 68, 68, 0.6)
    ),url(${sliderImages[slideCounter - 1].src})`
    sliderText.innerHTML = sliderImages[slideCounter - 1].text
    slideCounter--
    slideContainer.classList.add("fadeIn")
    setTimeout(() => {
        slideContainer.classList.remove("fadeIn")
    }, 1000)
})

startSlider()

// Animated numbers (on scrolling)

const features = document.querySelector('.features')

const numObs = new IntersectionObserver((entries, observer) => {
    const [entry] = entries
    // console.log(entry)

    if (entry.isIntersecting === false) {
        return
    } else {
        const feature_number = document.querySelectorAll('.feature-number')

        const SPEED = 500

        feature_number.forEach(curElem => {
            const updateNumber = () => {
                const targetNumber = parseInt(curElem.dataset.number)
                const initialNumber = parseInt(curElem.innerHTML)
                const incrementNumber = Math.trunc(targetNumber / SPEED)

                if (initialNumber < targetNumber) {
                    curElem.innerHTML = initialNumber + incrementNumber

                    setTimeout(updateNumber, 10)
                }
            }

            updateNumber()
        })
        observer.unobserve(features)
    }
}, {

    root: null,
    threshold: 0,

})

numObs.observe(features)

// Play the sound when arrows of carousel are clicked
const clickSound = new Audio('/assets/click.mp3')

const playSound = () => {
    clickSound.play()
}

// Show alert when clicked on send message button
const input = document.querySelectorAll('input')
const box = document.querySelector('textarea')

const sendMsg = () => {
    if (input.value === '' || box.value === '') {
        alert("Please fill the form first!")
    }
    else {
        alert("Your message has been sent!")
        input.value = ''
        box.value = ''
    }
}