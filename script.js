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

    
}