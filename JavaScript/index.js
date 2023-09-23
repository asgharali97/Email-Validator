console.log("This is my script")

let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "akshaykumar",
    "email": "akshaykumar@codewithharry.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "codewithharry.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}

btn.addEventListener("click",async (e)=>{
    e.preventDefault(e)
    console.log("Clicked")
    // loading.innerHTML = `<img width="43" src="loading.gif" alt="">`
    let key = 'ema_live_JMiikRQl9m7d9XW3LeiRbRHPtdkwVBczTRAxm4cX'
    let email = document.getElementById('email').value
    let url =`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
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





