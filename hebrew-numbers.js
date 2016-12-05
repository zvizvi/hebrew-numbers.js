var hebrewNumbers = function(num, t) {
	var string;

	var heNumletters = {
		'0': '',
		'1': 'א',
		'2': 'ב',
		'3': 'ג',
		'4': 'ד',
		'5': 'ה',
		'6': 'ו',
		'7': 'ז',
		'8': 'ח',
		'9': 'ט',
		'10': 'י',
		'20': 'כ',
		'30': 'ל',
		'40': 'מ',
		'50': 'נ',
		'60': 'ס',
		'70': 'ע',
		'80': 'פ',
		'90': 'צ',
		'100': 'ק',
		'200': 'ר',
		'300': 'ש'
	}

	var numberToLetter = function(num) {
		if (!heNumletters[num]) {
			return '';
		}
		return heNumletters[num];
	}

	var calculate = function(num) {
		var tempNum;
		var string;
		tempNum = Math.floor(num / 400);

		string = new Array(tempNum + 1).join('ת'); // repeat 'ת' character tempNum times

		string += numberToLetter(num % 400 - num % 100);

		string += numberToLetter(num % 100 - num % 10);

		string += numberToLetter(num % 10);

		return string.replace(/יה/g, 'טו').replace(/יו/g, 'טז');
	};

	var calcHighNumber = function(num, t) {
		var tempNum;
		var string;
		if (t == 'no-group' || t == 'ng') {
			return calculate(num);
		} else if (t == 'no-thousands' || t == 'nt') {
			num = num % 1000;
		}

		tempNum = Math.floor(num / 1000);
		string = calculate(tempNum);
		if (tempNum > 0) {
			string += "'";
		}
		tempNum = num % 1000;
		string += calculate(tempNum)
		return string;
	};

	return calcHighNumber(num, t);
}

module.exports = hebrewNumbers;
