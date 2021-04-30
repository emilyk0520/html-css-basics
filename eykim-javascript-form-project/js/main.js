myScript = {};
myScript.mainForm;
myScript.searchBox;

myScript.init = function(){
    myScript.mainForm = document.getElementById("mainform");
    myScript.searchBox = document.getElementById("searchbar");
    myScript.searchBox.addEventListener("submit", function(){if(document.getElementById("txtbox").value !== ""){myScript.searchBox.submit();}}); 
    myScript.searchBox.addEventListener("submit", myScript.noDefault);
    myScript.mainForm.addEventListener("submit", myScript.noDefault);
    myScript.mainForm.addEventListener("submit", myScript.requiredFields);
    document.getElementsByTagName("body")[0].addEventListener("mouseover", myScript.addHighlight); //runs highlight function once body is moused over
}

myScript.noDefault = function(e){
    e.preventDefault();
}

myScript.originalLabels = []; //empty array to house the original form labels
var len = document.getElementsByClassName("label").length;
    for (var i = 0; i < len; i++){
        myScript.originalLabels[i] = document.getElementsByClassName("label")[i].innerHTML;
    } //creates an element for each original label and places in array
    //outside the scope of requiredFields function so that the original labels remain unchanged

myScript.requiredFields = function(){
    let fields = []; //empty array to house answer fields
    let labels = []; //empty array to house labels
    for (var i = 0; i < len; i++){
        fields[i] = document.getElementsByClassName("fields")[i]; //creates an element for each answer field and places in according array
        labels[i] = document.getElementsByClassName("label")[i]; //creates an element for each label and places in according array
        if(fields[i].value == ""){
            labels[i].innerHTML = myScript.originalLabels[i] + '<p style="display: inline; color: red; font-size: 0.7em; padding-left: 4px;">Required</p>';
        } //adds a styled "Required" to the original label 
        else{
            labels[i].innerHTML = myScript.originalLabels[i];  
        } //recreates the original label if input exists, effectively removing the styled "Required"
    }
    if(fields[0].value!== "" && fields[1].value!== "" && fields[2].value!== "" && fields[3].value!== "" && fields[4].value!== "" && fields[5].value!== "" && fields[6].value!== "" == true){  
        myScript.mainForm.submit();
        }//submits form if all fields have some input
}

myScript.addHighlight = function(){
    let fields = [];
    for (var i = 0; i < len; i++){
        fields[i] = document.getElementsByClassName("fields")[i];
        //redefines fields
    }
    fields[0].addEventListener("click",function(){fields[0].setAttribute("style", "background-color: #0FF");}); //adds background color when clicked
    fields[1].addEventListener("click",function(){fields[1].setAttribute("style", "background-color: #0FF");});
    fields[2].addEventListener("click",function(){fields[2].setAttribute("style", "background-color: #0FF");});
    fields[3].addEventListener("click",function(){fields[3].setAttribute("style", "background-color: #0FF");});
    fields[4].addEventListener("click",function(){fields[4].setAttribute("style", "background-color: #0FF");});
    fields[5].addEventListener("click",function(){fields[5].setAttribute("style", "background-color: #0FF");});
    fields[6].addEventListener("click",function(){fields[6].setAttribute("style", "background-color: #0FF");});
    fields[0].addEventListener("blur",function(){fields[0].setAttribute("style", "background-color: #fff");}); //changes background color back to white when not clicked
    fields[1].addEventListener("blur",function(){fields[1].setAttribute("style", "background-color: #fff");});
    fields[2].addEventListener("blur",function(){fields[2].setAttribute("style", "background-color: #fff");});
    fields[3].addEventListener("blur",function(){fields[3].setAttribute("style", "background-color: #fff");});
    fields[4].addEventListener("blur",function(){fields[4].setAttribute("style", "background-color: #fff");});
    fields[5].addEventListener("blur",function(){fields[5].setAttribute("style", "background-color: #fff");});
    fields[6].addEventListener("blur",function(){fields[6].setAttribute("style", "background-color: #fff");});
}

myScript.init();

    







