const kj=document.getElementById("button");
if(kj){

kj.style.backgroundColor="black";
kj.style.color="white";
 kj.addEventListener("click",function(){
    alert("Thank you for your submission!");
  });

}











const car=document.getElementById("ok");
if(car){
    car.addEventListener("click",function(){
        car.style.backgroundColor="black";
        car.style.padding="10px";
        car.style.borderRadius="5px";
        car.style.color="white";
        alert("Thank you for your submission!");
    });
}


const carTabel=document.getElementById("carTabel");
const carList=JSON.parse(localStorage.getItem("carList")) || [];
function renderCarTable(){
    carTabel.innerHTML="";
    carList.forEach((car,index)=>{
        carTabel.innerHTML+=`
        <tr>
        
        <td>${car.brand}</td>
        <td>${car.model}</td>
      <td>${car.year}</td>
        <td>
        <button class="btn btn-warning btn-sm" onclick="editCar(${index})">
        <button class="btn btn-danger btn-sm" onclick="deleteCar(${index})">
        </td>
        </tr>
        
        
        
        `
    });
}
    renderCarTable();

