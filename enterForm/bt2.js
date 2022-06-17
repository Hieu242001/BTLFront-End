const ck_id = /[a-zA-Z0-9]{4,11}$/;
const ck_name = /[A-Za-z-]$/;
const ck_zip = /[\d]{5}$/;
const ck_email = /^[\w][\w-]+(?:\.[\w-]+)*@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
const ck_phone = /((09|03|04|07|08|05)+([0-9]{8}))$/;



let [idMatched, nameMatched, zipMatched, emailMatched, phoneMatch, genderMatched,languageMatched] = Array(7).fill(false)
let accept = false

const check = document.getElementsByClassName('check')

function checkAll() {
	accept = true

	if (!checkId()) accept = false
	if (!checkName()) accept = false
	if (!checkZip()) accept = false
	if (!checkEmail()) accept = false
	if (!checkPhone()) accept = false
	if (!checkGender()) accept = false
	if (!checkLanguage()) accept = false


	showCheck()
	setTimeout(() => {
		accept ? showAccept() : showDeny()
	}, 200)
}

function checkId() {
	if (ck_id.test(id.value)) {
		idMatched = true
		return true
	}

	idMatched = false
	return false
}
function checkName() {
	if (ck_name.test(tname.value)) {
		nameMatched = true
		return true
	}

	nameMatched = false
	return false
}


function checkZip() {
	if (ck_zip.test(zip.value)) {
		zipMatched = true
		return true
	}

	zipMatched = false
	return false
}

function checkEmail() {
	if (ck_email.test(email.value)) {
		emailMatched = true
		return true
	}

	emailMatched = false
	return false
}
function checkPhone() {
	if (ck_phone.test(phone.value)) {
		phoneMatched = true
		return true
	}

	phoneMatched = false
	return false
}
function checkGender(){
 var ele = document.getElementsByName('gender'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) {
                	genderMatched=true
                return true 
                 }
               
            } 
    genderMatched=false
    return false
}

	
function checkLanguage(){
	var ely = document.getElementsByName('language'); 
              
            for(i = 0; i < ely.length; i++) { 
                if(ely[i].checked) {
                	languageMatched=true
                	return true 
                }
            } 
    genderMatched=false
    return false

}



function showCheck() {
	let accept = [idMatched, nameMatched, zipMatched, emailMatched,phoneMatched, genderMatched,languageMatched]

	for (let i = 0; i < 7; i++) {
		if (accept[i]) {
			check[i].innerHTML = '<i class="fas fa-check" style="color: lime"></i>'
		}
		else {
			check[i].innerHTML = '<i class="fas fa-times" style="color: red"></i>'
		}
	}
}

function showAccept() {
	alert("Thành công!")

	window.location.assign('../examples/Home.html')
}

function showDeny() {
	alert("Vui lòng thử lại.")
}


