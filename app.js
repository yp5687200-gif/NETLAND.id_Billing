
let db=JSON.parse(localStorage.getItem('netland_v2')||'[]');
function save(){localStorage.setItem('netland_v2',JSON.stringify(db));}
function addCustomer(){
 const n=document.getElementById('nama').value.trim();
 if(!n){alert('Nama wajib diisi');return;}
 const p=document.getElementById('paket');
 db.push({
  id:'NTL'+String(db.length+1).padStart(4,'0'),
  nama:n,
  paket:p.options[p.selectedIndex].text,
  harga:Number(p.value)
 });
 save(); render();
 document.getElementById('nama').value='';
}
function del(i){db.splice(i,1);save();render();}
function render(){
 let income=0;
 document.getElementById('list').innerHTML=db.map((x,i)=>{
 income+=x.harga;
 return `<div class="row">
 <div><b>${x.id}</b> - ${x.nama}<br>${x.paket}</div>
 <div>
 <a target="_blank" href="https://wa.me/6285780088227">WA</a>
 <button onclick="del(${i})">Hapus</button>
 </div></div>`;
 }).join('');
 document.getElementById('total').textContent=db.length;
 document.getElementById('income').textContent='Rp '+income.toLocaleString('id-ID');
}
render();
