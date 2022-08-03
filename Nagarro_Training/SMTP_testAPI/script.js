$(document).ready(()=>{
  $('#send').click(()=>{
    let to = $('#mail').val()
    let txt = $('#msg').val()
    $('#msg').val('')
    Email.send({
      SecureToken:' 4c7bab12-6b64-4e87-b7da-e8dd238dfb58',
      To:`${to}`,
      From:'tavleenn15@gmail.com',
      Subject:'Simple Mail',
      Body:`${txt}`
    })
    .then(
      alert('message sent')
    )
  })
})