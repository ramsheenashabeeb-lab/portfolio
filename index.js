function sendMail() {
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };

const serviceID ="service_fxsxq0m";
const templateID ="template_737ph2q";

elsemailjs
.send(serviceID, templateID, params)
.then((res) => {
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";
    console.log(res);
    alert("your message sent successfully");

})
.catch((error) => console.log(err));
}

