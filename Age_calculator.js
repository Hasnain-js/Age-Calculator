function ageCalculator() {
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);
    if (userinput == null || userinput == '') {
        document.getElementById("message").innerHTML = "Select date!";
        return false;
    } else {
        let age = (new Date().getFullYear()) - (dob.getFullYear());
        let month = age * 12;
        let days = age * 365;

        return document.getElementById("result").innerHTML =
            "Your Age is : " + age + " years , " + month + " months  and " + days + " Days old. <br>";
    }
}