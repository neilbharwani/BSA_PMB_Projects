const box = document.querySelector('#box')
const out = document.querySelector('#out')
const hint = document.querySelector('#hint')
function react(){
  const v = box.value.trim()
  if(!v){
    out.textContent = 'say something'
    hint.textContent = ''
    return
  }
  const n = Number(v)
  if(!Number.isNaN(n) && v.replaceAll(' ','') !== ''){
    out.textContent = '' + n + ' squared is ' + (n*n)
    hint.textContent = 'try a word next'
    return
  }
  const low = v.toLowerCase()
  if(low.includes('hello') || low.includes('hi')){
    out.textContent = 'hi there'
    hint.textContent = 'nice to meet you'
    return
  }
  out.textContent = 'you said: ' + v
  hint.textContent = 'length ' + v.length
}
document.querySelector('#go').addEventListener('click', react)
box.addEventListener('keydown', e => { if(e.key === 'Enter') react() })
