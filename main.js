const inputdata = document.getElementsByClassName(".inputdata");
inputdata.values = ["something", "ali","somedata"] ; 


window.addEventListener( "load", (e) =>{
    document.getElementById("inputname").values = ["something", "ali","somedata"];
  }) ;

var data = {} ;

const thead = document.querySelector(".thead") ;
const tr = thead.children ;

  for( let tritem of tr){
    //   console.log((tritem.id + '<br class="class'+tritem.rowIndex+'">')) ;
      var tddata = {} ;
      for(let tditem of tritem.children){
          
        //   console.log(tditem);
        //   tddata.push(tditem.innerText) ;
          tddata[tditem.className] = tditem.innerText ;

      }
    //   data.push([tritem.id , tddata]);
      data[(tritem.rowIndex)-1]  = tddata ;
    //   data[(tritem.rowIndex)-1] = tddata ;
    //   console.log(tritem.id) ;
    
  }
console.log(thead );
console.log(tr );

console.log(data);
// console.log(JSON.parse(data));


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


