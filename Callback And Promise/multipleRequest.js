async function getData(){
    const api1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const todo = await api1.json();
    const api2 = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const post = await api2.json()
    const multipleAPI = {todo,post};
    console.log(multipleAPI);
}

getData()