
function pow1(a,b)
{
  var p=1;

  while(b!=0)
  {
    p=p*a;
    b--;
  }

  return p;
}


//for negative power
function pow2(a,b)
{
    var q;
    q=pow1(a,-b);
    q=1/q;

    return q;
}

//calculation function
var a=0,b=0,operator;
function calculate(a,b,operator)
{
    switch(operator)
    {
        case '+':
            return a+b;

        case '-':
            return a-b;
        
        case '*':
            return a*b;

        case '/':
            return a/b;
    }
}




/* //adding event listeners to all buttons click */

var n=document.querySelectorAll(".button").length;

for(var i=0;i<n;i++)
{
    document.querySelectorAll(".button")[i].addEventListener("click",ButtonClick);
}

var decPow=-1;
var isDecimalStarted=0;
var isOperatorClicked=0;
var textPrint="";  //changing text

//changing text function
function print1(textPrint){
document.querySelector("#input").textContent=textPrint;
}



function ButtonClick()
{
      //this will convert character to integer for calclulate function
    var numberClicked=parseInt(this.innerHTML); 
   
    
    //checking if operator clicked after first operand or not
    if(!numberClicked && a==0 && this.innerHTML!='.')
    {
       ans="enter first operand!";
       print1(ans);
       setTimeout(function(){ans="0";
       print1(ans);},500);
       
    }


    //getting if decimal pressed or not
    if(this.innerHTML=='.')
        {
            isDecimalStarted=1; 
            textPrint=textPrint+this.innerHTML;
            print1(textPrint);
        }


    //getting first operand
    if(numberClicked>=0 && isOperatorClicked==0)  
    {
        //output string
        textPrint=textPrint+this.innerHTML;
        print1(textPrint);

        if(isDecimalStarted==0)
        {
           a=(a*10)+numberClicked;
        }

        if(isDecimalStarted==1 && numberClicked)
        {
            a=a+(pow2(10,decPow)*numberClicked);
            decPow=decPow-1;
             ///adding more than two decimal
        }
         console.log(a);
    }


    //getting operator after first operand
    if((this.innerHTML=='*' || this.innerHTML=='-'||this.innerHTML=='+'||this.innerHTML=='/') && a>0 && b==0 && isOperatorClicked==0)
    {
        textPrint=textPrint+" "+this.innerHTML;
        print1(textPrint);

        isOperatorClicked=1;
        isDecimalStarted=0;
        decPow=-1;
        operator=this.innerHTML;
        console.log(this.innerHTML);
    }

    //getting second operand
    if(numberClicked && isOperatorClicked==1)
    {
        //output string
        textPrint=textPrint+" "+this.innerHTML;
        print1(textPrint);

        if(isDecimalStarted==0)
        {
          b=(b*10)+numberClicked;

          if(numberClicked==0)
          b=b*10;
         
        }

        if(isDecimalStarted==1 && numberClicked)
        {
            b=b+(pow2(10,decPow)*numberClicked);
            decPow=decPow-1;
             ///adding more than two decimal
        }

        console.log(b);
    }

    //getting final result
    if(a>0 && b>0 && isOperatorClicked==1 && this.innerHTML=="=")
    {
        var ans=calculate(a,b,operator);
        console.log(ans);
         //output string
         print1(ans.toString());

        //restoring initial values
        decPow=1;
        isDecimalStarted=0;
        isOperatorClicked=0;
        operator=null;
        a=0;
        b=0;
        textPrint="";

        return;
    }

    //getting click of AC/DEL
    if(this.innerHTML=="AC" || this.innerHTML=="DEL")
    {

        print1("0");
        decPow=1;
        isDecimalStarted=0;
        isOperatorClicked=0;
        operator=null;
        a=0;
        b=0;
        textPrint="";

        return;
    }



}
