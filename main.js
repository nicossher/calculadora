const pantalla = document.querySelector('.mostrar')
const botones = document.querySelectorAll('.btn')


botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.textContent
        console.log(botonApretado)

        if (botonApretado === 'C') {
            pantalla.textContent = '0'
            return;
        }
        if (botonApretado === 'DEL') {
            if (pantalla.textContent.length === 1 || pantalla.textContent === 'Error!'){
                pantalla.textContent = '0'
                return;
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1)
                return;
            }
        }
        if (botonApretado === '%') {
            if (pantalla.textContent !== 'Error!') {
                    pantalla.textContent = pantalla.textContent / 100 
                } else {
                    pantalla.textContent = 'Error!'
                }
            return;
        }

        if (botonApretado === '=') {
            try {
                pantalla.textContent = eval(pantalla.textContent)
            } catch {
                pantalla.textContent = 'Error!'
            }

            return;
        }

        if (pantalla.textContent === '0' || pantalla.textContent === 'Error!'){
            pantalla.textContent = botonApretado
        } else {
            pantalla.textContent += botonApretado
        }
    })
})