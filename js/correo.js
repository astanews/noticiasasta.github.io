




(function(){
  emailjs.init("V_3_GfYgPSEy_mMHp"); // Reemplaza con tu Public Key
})();

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('correo');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('astanews', 'template_8hzemad', this)
      .then(function() {
        alert('✅ Mensaje enviado correctamente');
        form.reset();
      }, function(error) {
        alert('❌ Error al enviar el mensaje: ' + JSON.stringify(error));
      });
  });
});
