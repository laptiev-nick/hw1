function multiplication(num){
  
    const table = document.createElement("table");
    document.body.append(table);
  
    for(let i = 1; i <= num; i++){
      const tr = document.createElement('tr');
      table.appendChild(tr);
  
      for(let j = 1; j <= num; j++){
        let td = document.createElement('td');
        td.innerText = i * j;
        tr.appendChild(td);
      }
    }
  }
  
  multiplication(10);