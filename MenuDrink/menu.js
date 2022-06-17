
let items = []
let table = document.querySelector('tbody')

init()

function init() {
  
  createItem('Trà sen', "Trà", "25000")
  createItem('Trà đào', "Trà", "30000")
   createItem('Nước dứa', "Nước trái cây", "20000")
   createItem('Sinh tố mãng cầu', "Sinh tố", "35000")
   createItem('Sinh tố bơ', "Sinh tố", "30000")
  update()
  reset()
}

function check(ten, loai, gia) {
  if(ten==''||loai==''||gia==''||gia===NaN)
  {
    if(ten=='')
    {
      alert('Vui lòng nhập tên!');
    }
    else if(loai=='')
    {
      alert('Vui lòng nhập loại')
    }
    else if(gia=='')
    {
        alert('Vui lòng nhập giá')
    }
    return false;
  }
  return true;
}

function createItem(ten, loai, gia) {
let tr=document.createElement('tr');
 let td1=document.createElement('td');
 tr.appendChild(td1);
 let td2=document.createElement('td');
 tr.appendChild(td2);
 let td3=document.createElement('td');
 tr.appendChild(td3);
 let td4=document.createElement('td');
 tr.appendChild(td4);
 let td5=document.createElement('td');
 td1.classList.add('text-center')
 td4.classList.add('text-right')
 td5.classList.add('text-right')
 td5.classList.add('td-actions')
 td5.innerHTML='<button type="button" rel="tooltip" class="btn btn-danger close1" id="close2"><i class="material-icons">close</i></button>'
 tr.appendChild(td5);
 let t1 = document.createTextNode(items.length + 1)
  td1.appendChild(t1)
  let t2 = document.createTextNode(ten)
  td2.appendChild(t2)
  let t3 = document.createTextNode(loai)
  td3.appendChild(t3)
  let t4 = document.createTextNode(gia)
  td4.appendChild(t4)
  console.log(tr);
  items.push(tr);
  let btn=td5.childNodes[0]
  btn.onclick= function()
  {
    removeItem(tr)
  }
  
}

function newElement() {
 let ten = document.getElementById('name').value
  let loai = document.getElementById('drink').value
  let gia = document.getElementById('price').value
  if(check(ten,loai,gia))
  {
    createItem(ten,loai,gia)
    update()
    reset()
  }
 
}

function update() {
 table.innerHTML=''
 items.forEach((item,index)=>{
   item.childNodes[0].innerHTML=index+1;
   table.appendChild(item);
 })
  
}

function reset() {
 document.getElementById('drink').selectedIndex='0';
 document.querySelectorAll('input').forEach(item=>{
   item.value=''
 }); 
}

function removeItem(itemNeedToRemove) {
  let index=items.indexOf(itemNeedToRemove);
  items.splice(index,1);
  update();
}