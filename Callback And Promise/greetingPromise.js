function greetingPromise(input){
    return new Promise((reslove)=>{
        setTimeout(()=>{
            reslove(`Hello ${input}!`)
        },2000)
    })
}

greetingPromise("Mithun").then((result)=> console.log(result))