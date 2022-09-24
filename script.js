const wrapper =document.querySelector(".wrapper"),
qrInput=wrapper.querySelector(".form input"),
generateBtn=wrapper.querySelector(".form button"),
qrImg=wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () =>{
    let qrValue=qrInput.value;
    if(!qrValue) return; 
    generateBtn.innerText="Generating QR Code...";
    // console.log(qrValue);
    // getting a Qr code of user value using QR Server api and passing the api returned img src to qrImg
    qrImg.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue} `;
    qrImg.addEventListener("load",() =>{ //once QR code img loaded
        wrapper.classList.add("active");
        generateBtn.innerText="Generate QR Code"
    });
    

});
