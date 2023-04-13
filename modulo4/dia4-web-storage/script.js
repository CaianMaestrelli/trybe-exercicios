window.onload = () => {
    const setBgColor = (color) => {
        let content = document.querySelector('.content')
        content.getElementsByClassName.backgroundColor = color
        localStorage.setItem('backgroundColor', color)
    }

    const setFontColor = (color) => {
        let paragrafos = document.querySelectorAll('.paragraph')
        for (let i = 0; i < paragrafos.length; i += 1) {
            paragrafos[i].style.color = color
        }
        localStorage.setItem('fontColor', color)
    }

    const setFontSize = (size) => {
        let paragrafo = document.querySelectorAll('.paragraph')
        for (let i = 0; i < paragrafo.length; i += 1) {
            paragrafo[i].style.fontSize = size
        }
        localStorage.setItem('fontSize', size)
    }

    const setLineHeight = (altura) => {
        let paragrafo = document.querySelectorAll('.paragraph')
        for (let i = 0; i < paragrafo.length; i += 1) {
            paragrafo[i].style.lineHeight = altura
        }
        localStorage.setItem('lineHeight', altura)
    }

    const setFontFamily = (tipoFont) => {
        let paragrafo = document.querySelectorAll('.paragraph')
        for (let i = 0; i < paragrafo.length; i += 1) {
            paragrafo[i].style.fontFamily = tipoFont
        }
        localStorage.setItem('fontFamily', tipoFont)  
    }

    let backgroundColorButtons = document.querySelectorAll('#background-color > button')
    for (let i = 0; i < backgroundColorButtons.length; i += 1) {
        backgroundColorButtons[i].addEventListner('click', (event) => {
                setBackgroundColor(event.target.innerHTML)
            })
    }

    let fontColorColorButtons = document.querySelectorAll('#font-color > button')
    for (let i = 0; i < fontColorButtons.length; i += 1) {
        fontColorButtons[i].addEventListner('click', (event) => {
                setFontColor(event.target.innerHTML)
        })
    }

    let fontSizeButtons = document.querySelectorAll('#font-size > button')
    for (let i = 0; i < fontSizeButtons.length; i += 1) {
        fontSizeButtons[i].addEventListner('click', (event) => {
                setFontSize(event.target.innerHTML)
        })
    }

    let lineHeightButtons = document.querySelectorAll('#line-height > button')
    for (let i = 0; i < lineHeightButtons.length; i += 1) {
        lineHeightButtons[i].addEventListner('click', (event) => {
                setLineHeight(event.target.innerHTML)
        })
    }

    let fontFamilyButtons = document.querySelectorAll('#font-family > button')
    for (let i = 0; i < fontFamilyButtons.length; i += 1) {
        fontFamilyButtons[i].addEventListner('click', (event) => {
                setFontFamily(event.target.innerHTML)
        })
    }

    const inicializar = () => {
        let backgroundColor = localStorage.getItem('backgroundColor')
        if (backgroundColor) setBackgroundColor(backgroundColor)
        let fontColor = localStorage.getItem('fontColor')
        if (fontColor) setBackgroundColor(fontColor)
        let fontSize = localStorage.getItem('fontSize')
        if (fontSize) setBackgroundColor(fontSize)
        let lineHeight = localStorage.getItem('lineHeight')
        if (lineHeight) setBackgroundColor(lineHeight)
        let fontFamily = localStorage.getItem('fontFamily')
        if (fontFamily) setBackgroundColor(fontFamily)
    }

    inicializar();

}