async function getData(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/123456789");
        const data = await response.json()
        if(Object.keys(data).length === 0) {
            throw new Error("Respone is empty")
        }
    } catch (error) {
        console.log(error);
    }
}

getData()