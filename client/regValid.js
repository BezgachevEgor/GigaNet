let spans = []

spans.push(document.getElementById("name-error"))
spans.push(document.getElementById("family-error"))
spans.push(document.getElementById("surname-error"))
spans.push(document.getElementById("phone-error"))
spans.push(document.getElementById("password-error"))
spans.push(document.getElementById("repeat-error"))

for (let errorSpan of spans){
    errorSpan.setAttribute('hidden', 'hidden')
}
for (let errorSpan of spans){
    if(errorSpan.innerText !== ''){
        errorSpan.removeAttribute('hidden')
        break
    }
}