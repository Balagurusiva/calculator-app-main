const textarea = document.getElementById('textArea')
    let a=""
    let b=""
    let op=""

    function operation(){
      switch(op){
        case '+':
           a = String(Number(a) + Number(b))
           textarea.innerHTML = a
           op = ""
           b = ""
           break
        
        case '-':
           a = String(Number(a) - Number(b))
           textarea.innerHTML = a
           op = ""
           b = ""
           break
        
        case '*':
           a = String(Number(a) * Number(b))
           textarea.innerHTML = a
           op = ""
           b = ""
           break

        case '/':
        if(b=="0"){
          alert("cannot divide by zero")
          a="";b="";op="";
        }else{
           a = String(Number(a) + Number(b))
           textarea.innerHTML = a
           op = ""
           b = ""
           break
        }   
      }
    }

    function perform(num){

      if(num == "=")
      {
        if(a != "" & b != ""){
          operation();
        }
      }
      else if((num == "+") || (num == "-") || (num == "/") || (num == "*"))
      {
        if((a != "") && (b == ""))
        {
          op = num
          textarea.innerHTML=a+op
        }
        else if((a != "") && (b != ""))
        {
          operation()
          op = num
          textarea.innerHTML = a + op
        } 
      }
      else
      {
        if(op == ""){
          a = a+num
          textarea.innerHTML= a
        }else{
          b = b+num
          textarea.innerHTML = a + op + b
        }
      }
    }

    function spclbtn(m){
     
        switch(m)
	{
		case 'reset':
			location.reload();
			break;
		case 'bs':
			if((a!="")&&(op!=""))
			{
				if(b=="")
				{
					op="";
					textarea.innerHTML=a;
				}
				else//b has some value
				{
					var bx= new Array();
					bx=b.split("");
					bx.pop();
					b=bx.join("");
					textarea.innerHTML=a+op+b;
				}
			}
			else if((a!="")&&(op==""))
			{
				var ax=new Array();
				ax=a.split("");
				ax.pop();
				a=ax.join("");
			  textarea.innerHTML=a;
			}
			break;
	}
      }
    