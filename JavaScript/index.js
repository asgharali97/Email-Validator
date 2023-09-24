console.log("included")

let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "ali",
    "email": "asgharali@gmail.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}
if(email.value.length !== 0 ){
btn.addEventListener("click",async (e)=>{
    e.preventDefault(e)
    console.log("Clicked")
    let key = 'ema_live_JMiikRQl9m7d9XW3LeiRbRHPtdkwVBczTRAxm4cX'
    let email = document.getElementById('email').value
    let url =`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    // loading.innerHTML = `<img width="43" src="loading.gif" alt="">`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    
    for(key of Object.keys(result)){
        if(result[key] !== "" && result[key] !== " "){
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }
    console.log(str)
    
    resultCont.innerHTML= str
})
}





