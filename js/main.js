var siteName = document.getElementById("name")
var siteUrl = document.getElementById("url")
var table = document.getElementById ("table")
var index ;

var siteList = []
if (siteList.length == 0 && localStorage.getItem("siteList") == null) {
    var siteList = []
}else {
    siteList = JSON.parse(localStorage.getItem("siteList"))
    displaySite()
}
// if (condition) {
    
// }


function addSite() {
    var x = false 
   if (vaildinputs( siteName , "name") && vaildinputs( siteUrl , "url") ) {
    for (var i = 0; i < siteList.length; i++) {
        if (siteName.value.toUpperCase() == siteList[i].name.toUpperCase() || siteUrl.value == siteList[i].url ) {
             Swal.fire({
        icon: "error",
        title: `Rule 1 : dont enter same website Rule 2 : Enter vaild data `,
        confirmButtonColor : "#d33"
      });
      x = true
        }
        
    }
    if (x == false) {
        siteName.classList.remove("is-valid")
    siteUrl.classList.remove("is-valid")
    site = {
        name : siteName.value ,
        url : siteUrl.value
    }
    siteList.push(site)
    localStorage.setItem("siteList" , JSON.stringify(siteList))
    displaySite()
    clearData()
    }
}
}
function displaySite() {
    var container = ""
    for (var i = 0; i < siteList.length; i++) {
                        container = container + `<tr class="border border-bottom-1 "><td>${i+1}</td>
                        <td>${siteList[i].name}</td>
                        <td><a target="_blank" class="text-decoration-none btn btn-primary text-white" href="${siteList[i].url}"><i class="fa-solid fa-eye text-white"></i> Visit</a></td>
                        <td><button type="button" onclick="DeleteSite(${i})" class="btn btn-danger text-white"><i class="fa-solid fa-trash"></i> Delete</button></td></tr> `
                        index = i ;
    }
    table.innerHTML = container ;
    }

function clearData() {
    siteName.value = "" ;
    siteUrl.value = "" ;
}
function DeleteSite(index) {
    siteList.splice(index , 1)
    localStorage.setItem("siteList" , JSON.stringify(siteList))
    displaySite()
}
function vaildinputs(input , error ) {
    var text = document.getElementById(error).value
    regex = {
        name : /^[A-Z]{3,}$/i ,
        url : /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)$/
    }
    if (regex[input.id].test(text)) {
        input.classList.remove("is-invalid")
        input.classList.add("is-valid")
        input.nextElementSibling.classList.add("d-none")   
           return true
    }
    
    else{
        input.classList.add("is-invalid")
        input.classList.remove("is-valid")
        input.nextElementSibling.classList.remove("d-none")
        return false
    }
}



    