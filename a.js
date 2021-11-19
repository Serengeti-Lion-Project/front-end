


function a(){
    console.log("hey");  
    // var none = document.getElementById('table')


    var num1=txt1.value;         // txt1의 값을 num1에 초기화 시킨다.
    var num2=txt2.value;         // txt2의 값을 num2에 초기화 시킨다. 
    var count=1;
    for(var i=0;i<num1;i++){
     var trObj=document.createElement("tr");     //txt1에 입력된 값만큼 for문을 돌려 tr태그를 생성
     for(var j=0;j<num2;j++){
      var tdObj=document.createElement("td");  //txt2에 입력된 값만큼 for문을 돌려 td태그를 생성
      trObj.appendChild(tdObj);
      tdObj.innerHTML=count;                 //생성된 td에 count를 innerHTML로 집어 넣는다.
      count++;
      trObj.style.background = "pink"  ;                          //count를  for문을 돌리는 만큼 증가시킨다. 
     }
     divObj.appendChild(trObj);    //div 태그에 tr태그를 붙여넣는다.
    }  

    for(var i=0;i<num1;i++){
        // trObj.style.background = "pink";
        for(var j=0;j<num2;j++){
            if(j%2 == 0)
                trObj.style.background = "orange"  ;     
                console.log("hi");                     //count를  for문을 돌리는 만큼 증가시킨다. 

        }                          //count를  for문을 돌리는 만큼 증가시킨다. 

    }

   }

   function b(){
    var num1=txt1.value;         // txt1의 값을 num1에 초기화 시킨다.
    var num2=txt2.value;    
    
}