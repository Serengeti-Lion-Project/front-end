 
window.addEventListener('load' ,function

         loadteam(num){

                for (var i = 0; i< num; i++) {
                              //div 객체 생성

                              var div = parent.document.createElement("div");
                              
                              div.innerText= i;
                              //css설정

                              div.style.backgroundImage = "url('img/detailSchedule.png')";
                              div.style.margin= "30px";
                              div.style.width= "497px";
                              div.style.height= "68px";
                              div.style.float= "left";
                              
                              //** 바디의 마지막 자식으로 div 객체 추가
                                parent.document.getElementById("detailSchedule").appendChild(div);

                       }


        });
