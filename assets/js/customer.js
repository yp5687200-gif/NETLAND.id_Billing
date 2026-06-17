let customers = loadData();

function customerStatus(dueDate){

const today = new Date().getDate();

if(today <= dueDate){
return "Aktif";
}

if(today <= dueDate + 7){
return "Menunggak";
}

return "Suspend";
}

function addCustomer(){

const paket =
document.getElementById("paket");

const price =
Number(paket.value);

customers.push({

id:
"NTL"+
String(customers.length+1)
.padStart(4,"0"),

nama:
document.getElementById("nama").value,

wa:
document.getElementById("wa").value,

paket:
paket.options[paket.selectedIndex].text,

harga:
price,

dueDate:
Number(
document.getElementById("dueDate").value
)

});

saveData(customers);

renderCustomer();
updateDashboard();
}
