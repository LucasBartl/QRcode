const content = document.querySelector("#content");
const btn = document.querySelector("#btn");
const primary = document.querySelector("#primary");
const secondary = document.querySelector("#secondary");
const qrcode = document.querySelector("#qrcode");
const download = document.querySelector("#download");



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

download.addEventListener("click", (event)=>{

    event.preventDefault();

    const qrCanvas = document.querySelector("#qrcode canvas");
    const qrImage = qrCanvas.toDataURL("image/png");
    const link = document.createElement("a");

    link.href = qrImage;
    link.download = "meu-qrcode.png";
    
    link.click();
    link.remove();
})

