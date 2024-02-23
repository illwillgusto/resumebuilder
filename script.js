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

