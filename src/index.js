
module.exports = function toReadable (number) {
	let digits={
		0:  "zero",
		1:  "one",
		2:  "two",
		3:  "three",
		4:  "four",
		5:  "five",
		6:  "six",
		7:  "seven",
		8:  "eight",
		9:  "nine",
		10:  "ten",
		11:  "eleven",
		12:  "twelve",
		13:  "thirteen",
		14:  "fourteen",
		15:  "fifteen",
		16:  "sixteen",
		17:  "seventeen",
		18:  "eighteen",
		19:  "nineteen",
		20:  "twenty",
		30:  "thirty",
		40:  "forty",
		50:  "fifty",
		60:  "sixty",
		70:  "seventy",
		80:  "eighty",
		90:  "ninety",
	   };
	   let value=number;
	   let meaning;
         if( value<=20 || value==30||value==40||value==50||value==60||value==70||value==80||value==90) {
			   meaning= digits[value] ;
				 return meaning;
				}
	else if( value.toString().length==2 && value.toString().slice(-1)!='0' && value>20 ) {
		  meaning= digits[+((value+'')[0])*10]+' '+ digits[+((value+'')[1])];
		    return meaning;
		 }
	else if (value.toString().length==3 && value.toString().slice(-2)=='00') {
		meaning= digits[+((value+'')[0])]+' '+'hundred';
		return meaning;
	}	
	else if (value.toString().length==3 && value.toString().slice(-1)=='0' && value.toString().slice(1,2)!='0') {
		return digits[+((value+'')[0])]+' hundred '+digits[+(value.toString().slice(1))];
	}
	else if (value.toString().length==3 && value.toString().slice(1,2)=='0' && value.toString().slice(-1)!='0') {
		return digits[+((value+'')[0])]+' hundred '+digits[+(value.toString().slice(-1))];
	}
	else if (value.toString().length==3 && value.toString().slice(-2)!='00' && value.toString().slice(-2)<'20' && value.toString().slice(-2)>'10') {
		return digits[+((value+'')[0])]+' hundred '+digits[value.toString().slice(-2)];
	}
	else if (value.toString().length==3 && value.toString().slice(-2)!='00') {
		return digits[+((value+'')[0])]+' hundred '+digits[+((value+'')[1])*10]+' '+digits[+(value.toString().slice(-1))];
	}

	}

	