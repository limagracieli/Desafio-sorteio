

function generateNumber(){
    const inpumin = Math.ceil(document.querySelector(".input-min").value)
    const inputmax= Math.floor(document.querySelector(".input-max").value)

    const result = Math.floor(Math.random() * (inputmax - inpumin + 1)) + inpumin;
    alert(result)
}