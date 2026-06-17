function updateDashboard(){

document.getElementById(
"totalCustomer"
).innerText =
customers.length;

let aktif=0;
let menunggak=0;
let suspend=0;

customers.forEach(c=>{

const s=
customerStatus(c.dueDate);

if(s==="Aktif") aktif++;
if(s==="Menunggak") menunggak++;
if(s==="Suspend") suspend++;

});

document.getElementById(
"aktifCustomer"
).innerText=aktif;

document.getElementById(
"menunggakCustomer"
).innerText=menunggak;

document.getElementById(
"suspendCustomer"
).innerText=suspend;
}
