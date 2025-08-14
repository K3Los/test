fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    let text =''
    data.map((item, index) => {
      text += `
      <div class="col-12 col-md-6 col-lg-3 p-3">
                <div class="card p-2">
                    <img src="${item.image}" alt=none image">
                    <div class="card-text pt-4">
                        <h4>${item.title}</h4>
                        <p>Price: <b>${item.price}</b></p>
                        <p>${item.description}</p>
                        <p>Rate : <b>${item.rating.rate}</b></p>
                        <p>Count : <b>${item.rating.count}</b></p>
      
                    </div>
                </div>
            </div>
      `
    });
    document.querySelector('#html').innerHTML += text

  })

  // fetch('https://dc00d5774b45.ngrok-free.app/api/products/')
  // .then(response => response.json())
  // .then(data => console.log(data))
  
 