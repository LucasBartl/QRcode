const content = document.querySelector("#content");
const btn = document.querySelector("#btn");
const primary = document.querySelector("#primary");
const secondary = document.querySelector("#secondary");
const qrcode = document.querySelector("#qrcode");
 
content.oninput  = ()=>{

 
    
}


function createQR(){

     const generateCode = new QRCode (document.querySelector("#qrcode"),{

        text: content.value,
        with: 250,
        height: 250


     })

}


btn.addEventListener("click",(event)=>{
    
    event.preventDefault();  

    if(content.value === ""){
       return alert("Campo deve estar preenchido!");
        
    }else{
        primary.classList.add("transparent");  
        secondary.classList.remove("transparent");
        qrcode.classList.add("qr");
        createQR()
    }
    
    
    


})

