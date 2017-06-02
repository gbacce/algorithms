
var phoneNumberArray = [
	"555-555-5555",
	"(555)555-5555",
	"555 555 5555",
	"555 555-555",
	"1-555-555-5555",
	"(1)555-555-5555",
	"5555555555",
	"555-five-55-aebdgtxi;;3tt4greqr6seven",
	"5-trumpsucks-555-5-5-5-5-5-5",
	"2798504trumpforprez23587928579428795458792",
	"1-800-ninjas-are-cool",
	"1900-acdc4life",
]



function convertPhone(userInput){

	t9Dict = "abcdefghijklmnopqrstuvwxyz"

	alphanumericInput = userInput.toString().match(/\w/g)

	if (alphanumericInput.indexOf("1") == 0) {
		alphanumericInput.splice(0, 1)
	}

	if (alphanumericInput.length != 10) {
		console.log("Error");
		return;
	} 
		
	for (let i = 0; i < alphanumericInput.length; i++) {

		if (alphanumericInput[i].match(/[a-z]/gi) != null) {

			letterIndex = t9Dict.indexOf(alphanumericInput[i])

			var returnNumber;
			for (j = 0; j < t9Dict.length; j++) {
				if (letterIndex <= 2) {
					returnNumber = 2
				}
				else if (letterIndex <= 5) {
					returnNumber = 3
				}
				else if (letterIndex <= 8) {
					returnNumber = 4
				}
				else if (letterIndex <= 11) {
					returnNumber = 5
				}
				else if (letterIndex <= 14) {
					returnNumber = 6
				}
				else if (letterIndex <= 18) {
					returnNumber = 7
				}
				else if (letterIndex <= 21) {
					returnNumber = 8
				}
				else if (letterIndex <= 25) {
					returnNumber = 9
				}
			}

			alphanumericInput.splice(i,1,returnNumber)
		}	
	}


	phoneNumber = alphanumericInput.join("")

	alphanumericInput.splice(3,0,"-")
	alphanumericInput.splice(7,0,"-")

	phoneNumber = alphanumericInput.join("")

	console.log(phoneNumber)
}



for (let i = 0; i < phoneNumberArray.length; i++) {
	convertPhone(phoneNumberArray[i])
}




