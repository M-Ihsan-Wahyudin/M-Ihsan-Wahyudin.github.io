const formLogin = document.getElementById('form-login')

formLogin.addEventListener('submit', function(e) {
  e.preventDefault()
  clearErrors()
  const data = new FormData(this)
  const validated = validation(data)
  if(validated.length > 0) return showErrors(validated)
  const dataUser = {
    id: Math.floor(Math.random() * 1000),
    name: data.get('name'),
  }
  localStorage.setItem('DataUser', JSON.stringify(dataUser))
  setTimeout(() => window.location.href = './lobby.html', 1000)
})

function validation(data) {
  const errors = []
  for (const key of data) {
    if(key[1] === '') {
      errors.push({
        name: key[0],
        message: 'This field is required'
      })
    }
  }
  return errors
}

function showErrors(errors) {
  errors.map((item, index) => {
    const input = formLogin.querySelector(`[name=${item.name}]`)
    input.classList.add('border-red-500')
    input.parentElement.querySelector('.error').innerHTML = item.message
  })
}

function clearErrors() {
  formLogin.querySelectorAll('input').forEach(item => {
    item.classList.remove('border-red-500')
  })
  formLogin.querySelectorAll('.error').forEach(item => {
    item.innerHTML = ''
  })
}