
async function login() {
  const inptEmail = document.getElementById('email').value
  const inptPassword = document.getElementById('password').value

  const credentials = {
    "email": inptEmail,
    "password": inptPassword,
  }
  if (inptEmail && inptPassword) {
    const res = await window.authAPI.login(credentials)
    if (res.error) alert('credênciais inválidas')

  }
}

async function register() {
  const inptName = document.getElementById('name').value
  const inptEmail = document.getElementById('email').value
  const inptPassword = document.getElementById('password').value

  const user = {
    "name": inptName,
    "email": inptEmail,
    "password": inptPassword
  }

  if(inptName && inptEmail && inptPassword){
    const response = window.authAPI.register(user)
    if(response.error){
      alert("Erro ao cadastrar")
    }
  }
}
