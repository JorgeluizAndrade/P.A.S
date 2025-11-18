const form       = document.getElementById('form');
const campos     = document.querySelectorAll('.required');
const spans      = document.querySelectorAll('.span-required');
const emailRegex = /^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

function setError(index){
  campos[index].style.border = '5px solid #e63636';
  spans[index].style.display = 'block';
}

function removeError(index){
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}

function emailValido(){
  const email = campos[0].value.trim();

  if (email === "") {
    removeError(0);
    return;
  }

  if(!emailRegex.test(campos[0].value))
  {setError(0);}
  else{removeError(0);}
}
//------------------------------------------------------------------------
const forms = document.querySelector('form');

forms.addEventListener('submit', (e) => {
  e.preventDefault();

  emailjs.init("sUtuqL_B0tgWO3q0W");
  
  emailjs.sendForm('service_tkzrspf', 'template_kzlvc73', forms)
    .then(() => {
      alert('Inscrição realizada com sucesso!');
      forms.reset();
    }, (error) => {
      alert('Ocorreu um erro ao enviar o formulário: ' + JSON.stringify(error));
    }); 
});

//------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("form");
  const alerta = document.getElementById("alertaEmail");
  const fecharBtn = document.getElementById("fecharAlerta");
  const emailInput = document.getElementById("user_email");
  const spanReq = document.querySelector(".span-required");

  // Validação simples de e-mail (retorna true se válido)
  function emailValido() {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const ok = re.test(emailInput.value.trim());
    spanReq.style.display = ok ? "none" : "block";
    return ok;
  }

  // Tornar disponível globalmente para o oninput inline (se quiser manter oninput)
  window.emailValido = emailValido;

  // Exibe o alerta ao enviar — só se o e-mail for válido
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!emailValido()) {
      // opcional: foco no input se inválido
      emailInput.focus();
      return;
    }
    alerta.style.display = "block";
  });

  // Fecha o alerta ao clicar no X
  fecharBtn.addEventListener("click", function () {
    alerta.style.display = "none";
  });
});