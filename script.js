$(document).ready(function() {
    // Agregar evento submit al formulario
    $('#commentForm').submit(function(event) {
      event.preventDefault();
  
      // Obtener los valores de los campos del formulario
      var name = $('#name').val();
      var email = $('#email').val();
      var message = $('#message').val();
  
      // Agregar un nuevo comentario a #commentList
      var commentHTML = '<div><strong>' + name + '</strong> (' + email + '): ' + message + '</div>';
      $('#commentList').append(commentHTML);
  
      // Limpiar los campos del formulario
      $('#name').val('');
      $('#email').val('');
      $('#message').val('');
    });
  });
 
  $(document).ready(function() {
    // Vista previa para escritorio
    $('#desktop-preview').load(window.location.href);

    // Vista previa para dispositivo móvil
    var mobile_url = window.location.href;
    // Modifica la URL para la vista móvil (puedes usar un enfoque específico)
    // Por ejemplo, puedes añadir un parámetro ?mobile=true a la URL.
    // var mobile_url = window.location.href + '?mobile=true';
    $('#mobile-preview').load(mobile_url);
});
