function getAndupdate() {
    console.log("Updating list...");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonarray = [];
        itemJsonarray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonarray));
    }
    else {
        itemJsonarrayStr = localStorage.getItem('itemsJson');
        itemJsonarray = JSON.parse(itemJsonarrayStr);
        itemJsonarray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonarray));
    }
    update();
}


function update() {
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonarray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonarray));
    }
    else {
        itemJsonarrayStr = localStorage.getItem('itemsJson');
        itemJsonarray = JSON.parse(itemJsonarrayStr);
    }
    let TableBody = document.getElementById('TableBody');
    let str = "";
    itemJsonarray.forEach((element, index) => {
        str += `
<tr>
    <th scope="row">${index + 1}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td><button class="btn btn-secondary btn-sm" onclick="deleted(${index})">Delete</button></td>
  </tr>
`
    });

    TableBody.innerHTML = str;
}

add = document.getElementById('add');
add.addEventListener("click", getAndupdate);
update();

function deleted(itemIndex) {
    console.log('delete', itemIndex)
    itemJsonarrayStr = localStorage.getItem('itemsJson');
    itemJsonarray = JSON.parse(itemJsonarrayStr);
    //delete item index
    itemJsonarray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonarray));
    update();
}

function clearStorage() {
    if (confirm("Do you areally want to clear?")) {
        console.log('Clearing the storage')
        localStorage.clear();
        update()
    }
}

let a;
let time;
setInterval(() => {
    
a = new Date();
time = a.getHours() + ' : ' + a.getMinutes() + ' : ' + a.getSeconds();
console.log(time);

document.getElementById('time').innerHTML = time;

}, 1000);