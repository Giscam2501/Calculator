window.onload = function(){ 
pantalla=document.getElementById("textoPantalla");
document.onkeydown = teclado; 
}
x="0";
xi=1; 
coma=0; 
ni=0; 
op="no"; 

function numero(xx) { 
         if (x=="0" || xi==1  ) { 
            pantalla.innerHTML=xx; 
            x=xx; 
            if (xx==".") { 
               pantalla.innerHTML="0.";
               x=xx; 
               coma=1; 
               }
           }
           else { 
               if (xx=="." && coma==0) { 
                   pantalla.innerHTML+=xx;
                   x+=xx;
                   coma=1; 
               }
             
               else if (xx=="." && coma==1) {} 
                
               else {
                   pantalla.innerHTML+=xx;
                   x+=(x*10)+x
               }
            }
            xi=0 
         }

function operar(s) {
         igualar(); 
         ni=x; 
         op=s; 
         xi=1; 
         }  

function igualar() {
         if (op=="no") { 
            pantalla.innerHTML=x;    
            }
         else { 
            sl=ni+op+x; 
            sol=eval(sl) 
            pantalla.innerHTML=sol 
            x=sol; 
            op="no"; 
            xi=1; 
            }
        }

function porcent() { 
         x=x/100 
         pantalla.innerHTML=x; 
         igualar() 
         xi=1 
         }

function opuest() { 
            nx=Number(x); 
            nx=-nx; 
            x=String(nx); 
            pantalla.innerHTML=x; 
            }

function borradoTotal() {
         pantalla.innerHTML=0; 
         x="0"; 
         coma=0; 
         ni=0 
         op="no" 
         }
