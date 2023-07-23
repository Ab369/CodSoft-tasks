document.querySelector(".toggle").addEventListener("click",function()
{
   var element=document.querySelector(".links");

   if(element.style.display=="none")
   element.style.display="inline";

   else
   element.style.display="none";
});

let text=document.querySelector(".text");
let laptop=document.querySelector("#laptop");
let boy=document.querySelector("#boy");
let icons=document.querySelector(".tsi1");

window.addEventListener("scroll",()=>{
   let value=window.scrollY;
   console.log(value);
   laptop.style.bottom=value*1.5-625 +'px';
   icons.style.bottom=value+180+'px';
   boy.style.bottom=value*2-700+'px';
})


//typing text//////////////////////////////////
const t1="Hi I am Abhinav";
const t2="CSE undegrad, coder,web developer and tech enthusiast!"
const t3="MY SKILLS";
const t4="PROJECTS";
const t5="CONTACT";

setInterval(typing1,50);
var i=0;
var typing2check=0;

function typing1()
{
   if(i==t1.length)
   {
      clearInterval(typing1); 
      typing2check=1;
   }

   else
   {
   document.querySelector(".typing1").innerHTML+=t1[i];
   i++;
   }
}

 
   setInterval(typing2,30);

   var j=0;
  function typing2()
  {

   if(j==t2.length)
   clearInterval(typing2);

  else
  {
   document.querySelector(".typing2").innerHTML+=t2[j];
   j++;
  }
}

var z=0;
function typing3()
{
   if(z==t3.length)
   clearInterval(typing3);

   else
   {
      document.querySelector(".typing3").innerHTML+=t3[z];
      z++;
   }
}

var k=0;
function typing4()
{
   if(k==t4.length)
   clearInterval(typing4);

   else
   {
      document.querySelector(".typing4").innerHTML+=t4[k];
      k++;
   }
}

var s=0;
function typing5()
{
   if(s==t5.length)
   clearInterval(typing5);

   else
   {
      document.querySelector(".typing5").innerHTML+=t5[s];
      s++;
   }
}


//for scroll triggers
var called=0;
var called2=0;
var callp1=0;
var callp2=0;
var callp3=0;
var callp4=0;
var callp5=0;
var called3=0;
window.addEventListener("scroll",function()
{
   let value=window.scrollY;
   console.log(value);
   if(value>231 && called==0)
   {
      called=1;
      setInterval(typing3,100);
      fillbar(".typing3",25);
      fillbar(".skill1",70);
      fillbar(".skill2",60);
      fillbar(".skill3",55);
      fillbar(".skill4",75);
      fillbar(".skill5",80);
      fillbar(".skill6",50);
      fillbar(".skill7",30);
      fillbar(".skill8",60);
      

   }

   if(value>710 && called2==0 )
   {
      called2=1;
      setInterval(typing4,150);
      fillbar(".typing4",20);
   }

   if(value>770 && callp1==0)
   {
      callp1=1;
      reveal("project1");
   }

   if(value>1425 && callp2==0)
   {
      callp2=1;
      reveal("project2");
   }

   if(value>1890 && callp3==0)
   {
      callp3=1;
      reveal("project3");
   }

   if(value>2310 && callp4==0)
   {
      callp4=1;
      reveal("project4");
   }

   if(value>2710 && callp5==0)
   {
      callp5=1;
      reveal("project5");
   }

   if(value>3140 && called3==0)
   {
      called3=1;
      setInterval(typing5,150);
      fillbar(".typing5",70);
   }
})




/////////skill bar////////////////////////////



function fillbar(classname,maxwidth)
{
   var ele=document.querySelector(classname);
   var width=0;
   var fill=setInterval(bar,20);

   function bar()
   {
      if(width>=maxwidth)
      clearInterval(fill);

      else
      {
         width++;
         ele.style.width=width+"%";
      }
   }
}


/////////////////////////projects/////////////////////////////////////

  
 function reveal(id)
 {
    var ele=document.getElementById(id);
    var op=0;
    var show=setInterval(reveal,10);

    function reveal()
    {
      if(op==1)
      clearInterval(show);

      else
      {
         ele.style.opacity=op;
         op=op+0.01;
      }
    }
 }