const API_URL = "https://fakestoreapi.com";    // url del api
const xhr = new XMLHttpRequest();              //consultamos con ajax

function onRequestHandler() {
    if(this.readyState == 4 && this.status ==200){
        // 0= USET, NOSE HA LLAMADO AL METODO OPEN
        //1= OPENED, SE HA LLAMADO AL METODO OPEN
        // 2= hEADERS_RECEIEVED, SE ESTA LLAMANDO AL METODO SEND()
        // 3= LOADING, ESTA CARGANDO, ES DECIR, ESTA RECIBIENDO LA RESPUESTA
        // 4 = DONE, se ha completado la operacion
        const data = JSON.parse(this.response); 
        console.log(data);
        const resultado = document.querySelector("#app");
        resultado.innerHTML = ``


        // Carga la informacion en un array nuevo
        const newArray_2 = data.map(item => item );
        console.log('new array_2', newArray_2);

        const Back_Packs = newArray_2.filter(item_Packs => item_Packs.id===1)
        for(let Packs of Back_Packs){
            resultado.innerHTML += `
            <img class="carousel-item__img" 
            src="${Packs.image}" 
            alt=""/>
            <h1> categoria: ${Packs.category}</h1>
            <h2> precio: ${Packs.price}</h2>
            `;
        }

        const men = newArray_2.filter(item_men => item_men.id > 1 && item_men.category==="men's clothing" )

        for(let item_2 of men){
            resultado.innerHTML += `
            <img class="carousel-item__img" 
            src="${item_2.image}" 
            alt=""/>
            <h1> categoria: ${item_2.category}</h1>
            <h2> precio: ${item_2.price}</h2>
            `;
        }

        const women = newArray_2.filter(item_men => item_men.category==="women's clothing")
        for(let item_2 of women){
            resultado.innerHTML += `
            <h1>women's clothing /// :3 </h1>
            <img class="carousel-item__img" 
            src="${item_2.image}" 
            alt=""/>
            <h1> categoria: ${item_2.category}</h1>
            <h2> precio: ${item_2.price}</h2>
            `;
        }



        
        // const newArray_1 = [];
        // for(let index = 0; index < data.length; index++){
        //     const element = data[index];
        //     newArray_1.push(element );
        //     }
        // console.log('new array_1', newArray_1);



        // <img src="${item.image}" width="100px">
        // <h1> categoria: ${item.catergories}</h1>
        // <h2> precio: ${item.price}</h2>
        // <p> Descripcion ${item.description}</p>
        //const tpl= data.map((products) => {products.image});
         // HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
        //const tpl= data.map((products) =>products.image);
        //HTMLResponse.innerHTML = `<img src="${tpl}" width="100px">`;

    }
}
xhr.addEventListener("load",onRequestHandler); // ejecuta la funcion
xhr.open('GET',`${API_URL}/products`);
xhr.send();
//https://fakestoreapi.com/products/1