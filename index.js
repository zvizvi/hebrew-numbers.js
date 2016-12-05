hebrewNumbers = function(num,t){

	var string;
	
	heNumletters = [
		'',
		'א',
		'ב',
		'ג',
		'ד',
		'ה',
		'ו',
		'ז',
		'ח',
		'ט',
		'י'
	];
	heNumletters[20] = 'כ';
	heNumletters[30] = 'ל';
	heNumletters[40] = 'מ';
	heNumletters[50] = 'נ';
	heNumletters[60] = 'ס';
	heNumletters[70] = 'ע';
	heNumletters[80] = 'פ';
	heNumletters[90] = 'צ';
	heNumletters[100] = 'ק';
	heNumletters[200] = 'ר';
	heNumletters[300] = 'ש';
	heNumletters[400] = 'ת';
	heNumletters[500] = 'תק';
	heNumletters[600] = 'תר';
	heNumletters[700] = 'תש';
	heNumletters[800] = 'תת';
	heNumletters[900] = 'תתק';
	

	var numberToLetter = function(num){
		if (!window.heNumletters[num]){
			return '';
		}
		return heNumletters[num];
	}

	var calcHighNumber = function(num, t){
		var tempNum;
		var string;
		if(t == 'no-group' || t == 'ng'){
			return calculate(num);
		}else if(t == 'no-thousands' || t == 'nt'){
			num = num%1000;
		}
		
		tempNum = Math.floor(num/1000);
		string = calculate(tempNum);
		if (tempNum > 0) {
			string += "'";
		}
		tempNum = num%1000;
		string += calculate(tempNum)
		return string;
	};

	var calculate = function(num){
		var tempNum;
		var string;
		tempNum = Math.floor(num/400);
		string = new Array(tempNum+1).join('ת');

		string+= numberToLetter(num%400 - num%100);

		string+= numberToLetter(num%100 - num%10);

		string+= numberToLetter(num%10);
		
		return string.replace(/יה/g,'טו').replace(/יו/g,'טז');
	};

	return calcHighNumber(num, t);

}
