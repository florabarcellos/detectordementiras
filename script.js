alert('Oii, trabalhe duro !! *-* <3')
function verificar () {
    var res = document.getElementById('resultado')
    var fatoss = document.getElementsByName('fato')
    var img = document.createElement('img')
    if (fatoss[0].checked) {
        resultado.innerHTML = 'Se vc não for o Guilherme vc esta MENTINDO'
        img.setAttribute('src', 'vcgui copy.jpg')
    } else if (fatoss[1].checked) {
        resultado.innerHTML = 'Se vc não for little Tata vc esta MENTINDO'
        img.setAttribute('src', 'vctat copy.jpg')
    } else if (fatoss[2].checked) {
        resultado.innerHTML = 'Se vc não for a Iana vc esta MENTINDO'
        img.setAttribute('src', 'vcian copy.jpg')
    } else if (fatoss[3].checked) {
        resultado.innerHTML = 'Se vc não for a Flora vc esta MENTINDO'
        img.setAttribute('src', 'vcflo copy.jpg')
    } else if (fatoss[4].checked) {
        resultado.innerHTML = 'Se vc não for o Gabriel vc esta MENTINDO'
        img.setAttribute('src', '???.jpg')
    }
    resultado.style.textAlign = 'center'
    resultado.appendChild(img)
}