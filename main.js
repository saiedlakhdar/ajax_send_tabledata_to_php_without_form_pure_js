var data = {} ;

const thead = document.querySelector(".thead") ;
const tr = thead.children ;

  for( let tritem of tr){
      var tddata = {} ;
      for(let tditem of tritem.children){
          
          tddata[tditem.className] = tditem.innerText ;

      }
      data[(tritem.rowIndex)-1]  = tddata ;
    
  }
console.log(thead );
console.log(tr );

console.log(data);


function sendAjax() {
    var xhttp = new XMLHttpRequest() ;
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200  ){
            document.getElementById("data_result").innerHTML = this.responseText;
        }
    } ;
    xhttp.open("POST", "ajax.php", true) ;
    xhttp.onload = function(){
        console.log(this.response);
    }
    xhttp.setRequestHeader("Content-type", "application/json ; charset:utf8");
    xhttp.send(JSON.stringify(data)) ;

} ;


