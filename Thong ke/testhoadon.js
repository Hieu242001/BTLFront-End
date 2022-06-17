let button=document.getElementsByClassName('fa-times');
		for(let i=0;i<button.length;i++)
		{
			button[i].addEventListener('click',function(){
				// console.log(this)
				// console.log(this.parentElement.parentElement.childNodes[11].childNodes[1]);
				this.parentElement.parentElement.childNodes[11].childNodes[1].value=0;
				this.parentElement.parentElement.style.display='none';
				
			})
				
			
		}
increaseValue()
increaseValue1()
increaseValue2()
increaseValue3()
increaseValue4()
increaseValue5()
increaseValue6()
function increaseValue()
{
	var value = parseInt(document.getElementById('number').value, 10);
	 price = parseInt(document.getElementById('price').value, 10);
	
	
	value = isNaN(value) ? 0 : value;
	value = value + 1;
	document.getElementById('number').value = value;
	document.getElementById('giatri').value = value  * price+" VNĐ";
	

}
function reduceValue()
{
	var value = parseInt(document.getElementById('number').value, 10);

	value = isNaN(value) ? 0 : value;
	value = value - 1;
	 if(value<0)
	{
		value=0;
	}
	document.getElementById('number').value = value;
	 document.getElementById('giatri').value = value  * (price=isNaN(price)?0:price)+" VNĐ";
}
function increaseValue1()
{
	var value = parseInt(document.getElementById('number1').value, 10);
	 price1 = parseInt(document.getElementById('price1').value, 10);
	value = isNaN(value) ? 0 : value;
	value = value + 1;
	document.getElementById('number1').value = value;
	 document.getElementById('giatri1').value = value  * price1+" VNĐ";
}
function reduceValue1()
{
	var value = parseInt(document.getElementById('number1').value, 10);
	value = isNaN(value) ? 0 : value;
	value = value - 1;
	 if(value<0)
	{
		value=0;
	}
	document.getElementById('number1').value = value;
	 document.getElementById('giatri1').value = value  * (price1=isNaN(price1)?0:price1)+" VNĐ";
}
function increaseValue2()
{
	var value = parseInt(document.getElementById('number2').value, 10);
	 price2 = parseInt(document.getElementById('price2').value, 10);
	value = isNaN(value) ? 0 : value;
	value = value + 1;
	console.log(price2);
	document.getElementById('number2').value = value;
	 document.getElementById('giatri2').value = value  * price2+" VNĐ";
}
function reduceValue2()
{
	var value = parseInt(document.getElementById('number2').value, 10);
	value = isNaN(value) ? 0 : value;
	value = value - 1;
	 if(value<0)
	{
		value=0;
	}
	document.getElementById('number2').value = value;
	 document.getElementById('giatri2').value = value  * (price2=isNaN(price2)?0:price2)+" VNĐ";
}
function increaseValue3()
{
	var value = parseInt(document.getElementById('number3').value, 10);
	 price3 = parseInt(document.getElementById('price3').value, 10);
	value = isNaN(value) ? 0 : value;
	value = value + 1;
	document.getElementById('number3').value = value;
	 document.getElementById('giatri3').value = value  * price3+" VNĐ";
}
function increaseValue3()
{
	var value = parseInt(document.getElementById('number3').value, 10);
	 price3 = parseInt(document.getElementById('price3').value, 10);
	value = isNaN(value) ? 0 : value;
	value = value + 1;
	document.getElementById('number3').value = value;
	 document.getElementById('giatri3').value = value  * price3+" VNĐ";
}
function reduceValue3()
{
	var value = parseInt(document.getElementById('number3').value, 10);
	value = isNaN(value) ? 0 : value;
	value = value - 1;
	 if(value<0)
	{
		value=0;
	}
	document.getElementById('number3').value = value;
	 document.getElementById('giatri3').value = value  * (price3=isNaN(price3)?0:price3)+" VNĐ";
}	
	function increaseValue6()
{
	var value = parseInt(document.getElementById('number6').value, 10);
	 price6 = parseInt(document.getElementById('price6').value, 10);
	value = isNaN(value) ? 0 : value;
	value = value + 1;
	document.getElementById('number6').value = value;
	 document.getElementById('giatri6').value = value  * price6+" VNĐ";
}
function reduceValue6()
{
	var value = parseInt(document.getElementById('number6').value, 10);
	value = isNaN(value) ? 0 : value;
	value = value - 1;	
	 if(value<0)
	{
		value=0;
	}
	
	document.getElementById('number6').value = value;
	 document.getElementById('giatri6').value = value  * (price6=isNaN(price6)?0:price6)+" VNĐ";
}
function increaseValue4()
{
	var value = parseInt(document.getElementById('number4').value, 10);
	 price4 = parseInt(document.getElementById('price4').value, 10);
	value = isNaN(value) ? 0 : value;
	value = value + 1;
	document.getElementById('number4').value = value;
	 document.getElementById('giatri4').value = value  * price4+" VNĐ";
}
function reduceValue4()
{
	var value = parseInt(document.getElementById('number4').value, 10);
	value = isNaN(value) ? 0 : value;
	value = value - 1;
	 if(value<0)
	{
		value=0;
	}
	document.getElementById('number4').value = value;
	 document.getElementById('giatri4').value = value  * (price4=isNaN(price4)?0:price4)+" VNĐ";
}
function increaseValue5()
{
	var value = parseInt(document.getElementById('number5').value, 10);
	 price5 = parseInt(document.getElementById('price5').value, 10);
	value = isNaN(value) ? 0 : value;
	value = value + 1;
	
	document.getElementById('number5').value = value;
	 document.getElementById('giatri5').value = value  * price5+" VNĐ";
}
function reduceValue5()
{
	var value = parseInt(document.getElementById('number5').value, 10);
		//console.log(value);
	value = isNaN(value) ? 0 : value;
	
	value = value - 1;
	 if(value<0)
	{
		value=0;
	}
	
	document.getElementById('number5').value = value;
	console.log(price5)
	 document.getElementById('giatri5').value = value  * (price5=isNaN(price5)?0:price5)+" VNĐ";
}

	function tinh(){
		
	var vaue = parseInt(document.getElementById('giatri').value);
	
	var vaue1 = parseInt(document.getElementById('giatri1').value);
	var vaue2 =parseInt(document.getElementById('giatri2').value);
	var vaue3 = parseInt(document.getElementById('giatri3').value);
	var vaue4 =parseInt(document.getElementById('giatri4').value);
	var vaue5 = parseInt(document.getElementById('giatri5').value);
	var vaue6 = parseInt(document.getElementById('giatri6').value);
	var sum=vaue+vaue1+vaue2+vaue3+vaue4+vaue5+vaue6;
	sum=sum+sum*0.08;
	
	document.getElementById('tonggiatri').value =sum+" VNĐ";
	}
	
		
		
		
	