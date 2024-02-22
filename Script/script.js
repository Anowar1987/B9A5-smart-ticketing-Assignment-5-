const allBtn = document.getElementsByClassName('btn');
console.log(allBtn);

for(const btn of allBtn){
btn.addEventListener('click', function(event){
    const name = event.target.parentNode.childNodes[1].innerText;
    
    const selectedPrice =document.getElementById('selected-ticket-price');

    const div = document.createElement('div');
    div.classList.add.('selected-sest');
    
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = seat;
    p2.innerText = class;
    p3.innerText = price;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    selectedPric.appendChild(div);
})    
}



function getConvertedValue(id){
 const price = document.getElementById(id).innerText;
 const convertPrice = parseInt(price);
 return convertPrice;    
}
const result = getConvertedValue("per-seat-price");