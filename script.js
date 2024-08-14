function carregar() {
var msg = window.document.getElementById('msg')
var img =window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
   msg.innerHTML = `Agora sao ${hora} horas.`
   if (hora >=0 && hora < 11) {
      img.src = 'manhã.jpg'

} else if(hora >=11 && hora <18) {
img.src = 'tarde.jpg'

} else {
img.src = 'noite.jpg'

}
