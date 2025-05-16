
async function login() {
  const inptEmailLogin = document.getElementById('email').value
  const inptPasswordLogin = document.getElementById('password').value

  const credentials = {
    "email": inptEmailLogin,
    "password": inptPasswordLogin,
  }
  if (inptEmailLogin && inptPasswordLogin) {
    const res = await window.authAPI.login(credentials)
    if (res.error) alert('credênciais inválidas')

  }
}

async function register(){
}
