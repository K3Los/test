async function api() {
    try{
        let data = await fetch ('https://fakestoreapi.com/products')
        let response = await data.json()
        console.log(response)
    }catch{
        console.log('error data api')
    }  
}
 api() 