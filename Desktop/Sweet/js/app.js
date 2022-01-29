// nomenglatura class para Programacion orientada a objectos
class Product{
    // el constructor es un metodo o funcion para construir objectos con sus propiedaddes pasadas con parametros
    constructor(name,price,many){
        // "this" se utliza para llamar la informacion almacenada en los parametros
        this.name = name;
        this.price = price;
        this.many = many;
        this.subtotal = this.price*this.many;
        this.taxes = this.subtotal*0.13;
        this.total = this.subtotal+this.taxes;
    }
}
class UI{
    addProduct(product){
        const tbody = document.getElementById('tbody');
        const element = document.createElement('tr');
        element.innerHTML = ` 
        <td>2</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.many}</td>
            <td>${product.subtotal}</td>
        `;
        // <a href="#" class="btn btn-danger" name="delete">Delete</a>
        tbody.appendChild(element);
        document.getElementById('subtotal').value = product.subtotal;
        document.getElementById('iva').value = product.taxes;
        document.getElementById('total').value = product.total;
        this.resetForm();
        // this.enviarProducto(subtotal,iva,total);
    }
    // enviarProducto(subtotal,iva,total){
    //     document.getElementById('subtotal').value = subtotal;
    //     document.getElementById('iva').value = iva;
    //     document.getElementById('total').value = total;
    // }
    resetForm(){
        document.getElementById('product-form').reset();
    }
    deleteProduct(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Succesfully', 'danger');
        }
    }
    showMessage(message, cssClass){
        const div = document.createElement('div');
        // las medidads de espaciado en bootstrap son en base a la medida rem
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Mostrar dentro del DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div,app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);
    }
}
// class Calculos{
//     subTotal(product){
//         const subtotal = product.price * product.many;
//         return subtotal;
//     }
//     taxes(product){
//         const impuesto = product.price * 0.13;
//         return impuesto;
//     }
//     // objeto y variable global
//     total(product, impuesto){
//         const total = product.subtotal * impuesto;
//         return total;
//     }
// }
// DOM Events
document.getElementById('product-form').addEventListener('submit', 
function(e){
    // declaracion  e inicializacion de constantes
    const ui = new UI();
    // const c = new Calculos();
    // entrada de datos
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const many = document.getElementById('many').value;
    console.log(name,price,many);
    // condiciones a constantes pasadas luego como parametros
    if(name === ''){
        document.getElementById('name').focus();
        return ui.showMessage('Complete the name field, please');
    }
    if(price === ''){
        document.getElementById('price').focus();
        return ui.showMessage('Complete the price field, please');
    }
    if(many === ''){
        document.getElementById('many').focus();
        return ui.showMessage('Complete the many field, please');
    }
    
    // salida de datos
    const product = new Product(name,price,many);
    // const subtotal = c.subTotal(product);
    // const iva = c.taxes(product);
    // const total = c.total(product,iva);
    // ui.enviarProducto(subtotal,iva,total);
    ui.addProduct(product);
    ui.showMessage('Product Added Succesfully', 'success');
    console.log(ui);
    console.log(product);
    e.preventDefault();
});
document.getElementById('product-list').addEventListener('click',
    function(e){
        // e.target selecciona el elemento con la propiedad de accion 'click
        // console.log(e.target);
        const ui = new UI();
        ui.deleteProduct(e.target);
})


