

 /* AJAX
http://restclass.azurewebsites.net/api/points
http: verbs;
POST: create/send data;
GET: get info;
PUT: Update some existing elements;
PATCH: Update part of an existing element;
DELETE: remove any existing element;
*/


// Session 2 Challenge
 
// object constructor for Item
class Item{

    constructor(code, title, price, category, image) {
        this.code=code;
        this.title=title;
        this.price=price;
        this.category=category;
        this.image=image;
        this.user="Ingrid"; // SESSION 3
        
    }
}


function register(){ // SESSION 2 , use jq

    // get values from the inputs 
    // save those inputs in variables
    // display the values on the console
    var code=$('#code').val();
    var title=$('#title').val();
    var price=$('#price').val();
    var category=$('#category').val();
    var image=$('#image').val();

    var item=new Item(code, title, price, category, image);
    console.log(item);
    
    console.log(JSON.stringify(item));// SESSION 3: Sends as a string the servor

    // Send an alert if field if is empty 
    var codeText=$('#code').val();
    var titleText=$('#title').val();
    var priceText=$('#title').val();
    var categoryText=$('#title').val();
    var imageText=$('#title').val();
   
     if(codeText==="" || 
        titleText==="" || 
        priceText==="" ||
        categoryText==="" ||
        imageText===""){
         alert("Fill in empty fields");
     };
    // Create ajax request  // SESSION 3
    $.ajax({
        url: 'http://restclass.azurewebsites.net/api/points',
        type: 'POST',
        data: JSON.stringify(item),
        contentType:'application/json',
        success:function(response){
            console.log('Yay!', response);
        },
        error:function(errorDetails){
            console.log('Ouch', errorDetails);
        }
    });
}

function init(){ //SESSION 2


    console.log('Admin Page')
    //Add click & keypress events for register function
    $('#btn-register').on('click', register);
}
window.onload=init;

