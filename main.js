document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contact-form")
  const status = document.getElementById("form-status")
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault()

    status.className = "form-status sending";
    status.style.display = "flex";
    status.textContent = " Enviando...";

    const data = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        status.className = "form-status success";
        status.textContent = "Mensaje enviado con éxito!";
        setTimeout(() => {
          status.className = "form-status hide";
        }, 3000);
        form.reset();
      } else {
        status.className = "form-status error";
        status.textContent = "Error al enviar. Intentelo otra vez.";
        setTimeout(() => {
          status.className = "form-status hide";
        }, 3000);
      }
    } catch (error) {
      status.className = "form-status error";
      status.textContent = "Error en la conexión"
      setTimeout(() => {
        status.className = "form-status hide";
      }, 3000);
    }
  })

});