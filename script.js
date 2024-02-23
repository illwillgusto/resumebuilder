function formValidation() {
    //setting these variables at 'var' so they can be accessed on the global scope
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var unumber = document.registration.phonenumber;
    var usex = document.registration.sex;
    var ulang = document.registration.language;
    var uabout = document.registration.desc;
    var uinsti = document.registration.institution;
    var udegree = document.registration.degree;
    var uyear = document.registration.year;
    var ures = document.registration.result;
    var upname = document.registration.pname;
    var upabout = document.registration.upabout;
    var upos = document.registration.position;
    var udur = document.registration.duration;
    var ucomp = document.registration.company;

    // if statements for personal details

    if (allLetter(uname)) {
        if (alphanumeric(uadd)) {
            if (countryselect(ucountry)) {
                if (allnumeric(uzip)) {
                    if (ValidateEmail(uemail, mail)) {
                        if (validsex(usex)) {
                            if (allnumeric(uyear)) {
                                checkAbout(uabout),
                                    lang(ulang),
                                    education(uyear, udegree, uinsti, ures),
                                    address(uadd, ucountry, uzip),
                                    project(upname, upabout),
                                    experience(ucomp, udur, upos);
                                    alert('Form Successfully Submitted');
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}

function experience(ucomp, udur, upos) {

    if (ucomp.value == "" || udur.value == "" || upos.value == "") {
        document.getElementById("expinfo").remove()
    }
    else {
        document.getElementsByClassName("company")[0].innerHTML = ucomp.value
        document.getElementsByClassName("duration")[0].innerHTML = udur.value
        document.getElementsByClassName("position")[0].innerHTML = upos.value
    }
}

function education(uyear, udegree, uinsti, ures) {

    document.getElementsByClassName("yr")[0].innerHTML = uyear.value
    document.getElementsByClassName("deg")[0].innerHTML = udegree.value
    document.getElementsByClassName("insti")[0].innerHTML = uinsti.value
    document.getElementsByClassName("res")[0].innerHTML = ures.value

}

function project(upname, upabout) {
    if (upname.value !== "" || upabout.value !== "") {
        document.getElementsByClassName("pname")[0].innerHTML = upname.value
        document.getElementsByClassName("upabout")[0].innerHTML = upabout.value
    }
    else {
        document.getElementById("pinfo").remove()
    }
}

function checkAbout(uabout) {
    if (uabout.value.trim() !== "")
        document.getElementById("about").innerHTML = uabout.value.trim()
    else
        document.getElementById("about").parentElement.remove()
}

function address(uadd, ucountry, uzip) {
    var address = ""
    if (uadd.value.trim() !== "")
        address += uadd.value.trim() + "<br>"
    address += ucountry.value + "<br>"
    if (uzip.value)
        address += uzip.value
    document.getElementById("address").innerHTML = address
}

function lang(ulang) {
    var lang = ""

    for (var i of ulang) {
        if (i.checked)
            lang += i.value + "<br>"
    }
    document.getElementById("lang").innerHTML = lang
}

function allLetter(uname) {
    var letters = /^[A-Za-z ]+$; //Regex
    if (uname.value.trim().match(letters)) {
        document.getElementById("name").innerHTML = uname.value.toUpperCase()
        return true;
    }
    else {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}

function alphanumeric(uadd) {
    var letters = /^[0-9a-zA-Z ]+$/; //Regex
    if (uadd.value.trim().match(letters) || uadd.value.trim() === "") {
        return true;
    }
    else {
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}

function countryselect(ucountry) {
    if (ucountry.value == "Default") {
        alert('Select your country from the list');
        ucountry.focus();
        return false;
    }
    else {
        return true;
    }
}

function allnumeric(uzip) {
    var numbers = /^[0-9]+$/;
    if (uzip.value.trim().match(numbers) || uzip.value.trim() === "") {
        return true;
    }
    else {
        alert('Zip code must have numeric characters only');
        unzip.focus();
        return false;
    }
}

function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        document.getElementById("mail").href = "mailto:" + uemail.value
        document.getElementById("mail").innerHTML = uemail.value
        return true;
    }
    else {
        alert("You have entered an invalid email address, please try again!")
        uemail.focus();
        return false;
    }
}


