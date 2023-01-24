
async function CEP(){
    var cep =document.getElementById('cep').value


    let req = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

    let json = await req.json()

    document.getElementById("rua").value = (json.logradouro)
    document.getElementById("bairro").value = (json.bairro)
    document.getElementById("cidade").value = (json.localidade)
    
}
document.getElementById('cep').addEventListener('focusout',CEP)