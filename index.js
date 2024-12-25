 function runCode() {
    console.log("clicked")
    console.log(getData())
    getData()
    console.log("end")
}
function getData(){
    setTimeout(()=>{
    for(let i=0;i<1000000000;i++){

    }
    // console.log("Long data received")
    return "racecar"
},3000)
}