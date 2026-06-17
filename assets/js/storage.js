function loadData(){
return JSON.parse(
localStorage.getItem("netland")
|| "[]"
);
}

function saveData(data){
localStorage.setItem(
"netland",
JSON.stringify(data)
);
}
