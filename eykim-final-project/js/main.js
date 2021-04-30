myScript = {};
myScript.toggleButton;
myScript.toggleMenu;

myScript.init = function(){
    myScript.toggleMenu = document.getElementById("toggle-menu");     
    myScript.toggleButton = document.getElementById("toggle-button");
    myScript.toggleButton.addEventListener("click", myScript.toggle); //adds toggle function to toggle button with event handler
    var theServicesElements = document.querySelectorAll("a.box"); //creates nodelist of each box in services section and stores in theServicesElements variable
    for (var i=0; i< theServicesElements.length; i++){
        theServicesElements[i].addEventListener("mouseover", myScript.servicesRollover);//adds rollover function on mouseover to each box of services section
        theServicesElements[i].addEventListener("mouseout", myScript.servicesRevert);//adds revert function on mouseout to each box of services section
    }
    var theGalleryElements = document.querySelectorAll("a.galleryimage");//creates nodelist of each image in gallery section and stores in theGalleryElements variable
    for (var i=0; i < theGalleryElements.length; i++){
        theGalleryElements[i].addEventListener("mouseover", myScript.galleryRollover, false);//adds rollover function on mouseover to each image of gallery section
        theGalleryElements[i].addEventListener("mouseout", myScript.galleryRevert, false);//adds revert function on mouseout to each image of gallery section
    }
    var screensize = window.matchMedia ("(min-width: 768px)"); //runs media query min-width:768px to see if window screen size fits query and returns true or false 
    if (matchMedia) {
        screensize.addListener(myScript.WidthChange);//adds listener function so that code reacts to changes in window
        }
}

myScript.servicesRollover= function(){
    var theID = this.getAttribute('id');
    if (theID == "firstBox"){//adds styles through .setAttribute method for each element by their ID
        this.setAttribute("style", "background-color: #76c38f");//changes bg color
        document.getElementById("globe").setAttribute("style", "background-image: url(assets/icons/globe-white.png)");//changes icon   
    }
    else if (theID == "secondBox"){
        this.setAttribute("style", "background-color: #76c38f");
        document.getElementById("sun").setAttribute("style", "background-image: url(assets/icons/sun-white.png)");
    }
    else if (theID == "thirdBox"){
        this.setAttribute("style", "background-color: #76c38f");
        document.getElementById("network").setAttribute("style", "background-image: url(assets/icons/network-white.png)");
    }
    else if (theID == "fourthBox"){
        this.setAttribute("style", "background-color: #76c38f");
        document.getElementById("medal").setAttribute("style", "background-image: url(assets/icons/medal-white.png)");
    }
}

myScript.servicesRevert= function(){
    var theID = this.getAttribute('id');
    if (theID == "firstBox"){//removes styles through .removeAttribute method for each element by their ID
    this.removeAttribute("style");//reverts bg color to original external css
    document.getElementById("globe").removeAttribute("style");//reverts icon to original url in external css 
    }
    else if (theID == "secondBox"){
    this.removeAttribute("style");
    document.getElementById("sun").removeAttribute("style");
    }
    else if (theID == "thirdBox"){
    this.removeAttribute("style");
    document.getElementById("network").removeAttribute("style");
    }
    else if (theID == "fourthBox"){
    this.removeAttribute("style");
    document.getElementById("medal").removeAttribute("style");
    }
}

myScript.galleryRollover= function(){
    var theClass = this.getAttribute('class');
    if (theClass == "galleryimage first"){//adds styles through .setAttribute method for each element by their specific class
        document.getElementById("image2").setAttribute("style", "background-image: url(assets/images/golden-retrievers.gif)");
        document.getElementById("firstCaption").setAttribute("style", "visibility: hidden");   
    }
    else if (theClass == "galleryimage second"){
        document.getElementById("image3").setAttribute("style", "background-image: url(assets/images/beach-dog.gif)");
        document.getElementById("secondCaption").setAttribute("style", "visibility: hidden");
    }
    else if (theClass == "galleryimage third"){
        document.getElementById("image4").setAttribute("style", "background-image: url(assets/images/sleeping-puppies.gif)");
        document.getElementById("thirdCaption").setAttribute("style", "visibility: hidden");
    }
    else if (theClass == "galleryimage fourth"){
        document.getElementById("image5").setAttribute("style", "background-image: url(assets/images/walking-dog.gif)");
        document.getElementById("fourthCaption").setAttribute("style", "visibility: hidden");
    }
    else if (theClass == "galleryimage fifth"){
        document.getElementById("image6").setAttribute("style", "background-image: url(assets/images/glasses-dog.gif)");
        document.getElementById("fifthCaption").setAttribute("style", "visibility: hidden");
    }
    else if (theClass == "galleryimage sixth"){
        document.getElementById("image7").setAttribute("style", "background-image: url(assets/images/yawning-dog.gif)");
        document.getElementById("sixthCaption").setAttribute("style", "visibility: hidden");
    }
}

myScript.galleryRevert= function(){
    var theClass = this.getAttribute('class');
    if (theClass == "galleryimage first"){//removes styles through .removeAttribute method for each element by their ID
        document.getElementById("image2").removeAttribute("style");
        document.getElementById("firstCaption").removeAttribute("style");   
    }
    else if (theClass == "galleryimage second"){
        document.getElementById("image3").removeAttribute("style");
        document.getElementById("secondCaption").removeAttribute("style");
    }
    else if (theClass == "galleryimage third"){
        document.getElementById("image4").removeAttribute("style");
        document.getElementById("thirdCaption").removeAttribute("style");
    }
    else if (theClass == "galleryimage fourth"){
        document.getElementById("image5").removeAttribute("style");
        document.getElementById("fourthCaption").removeAttribute("style");
    }
    else if (theClass == "galleryimage fifth"){
        document.getElementById("image6").removeAttribute("style");
        document.getElementById("fifthCaption").removeAttribute("style");
    }
    else if (theClass == "galleryimage sixth"){
        document.getElementById("image7").removeAttribute("style");
        document.getElementById("sixthCaption").removeAttribute("style");
    }
}

myScript.WidthChange = function(screensize) {
    if (screensize.matches && myScript.toggleMenu.style.display == "none" == true) {//if screen size matches specified media query above and menu has a display:none style attribute, following code runs
        document.getElementById("toggle-menu").removeAttribute("style");//ensures nav menu displays properly
    }
}

myScript.toggle = function(){//function that toggles hamburger icon expanded/closed and opens/closes menu
    if (myScript.toggleMenu.style.display === "block") {//closes menu if already open
        myScript.toggleMenu.style.display = "none";
        myScript.toggleButton.removeAttribute("style");
        myScript.toggleButton.setAttribute("aria-expanded", "false");//adds accessibility
    } 
    else {
        myScript.toggleMenu.style.display = "block";//opens menu if not open
        myScript.toggleButton.setAttribute("style", "border-radius: 10px 10px 0 0;");
        myScript.toggleButton.setAttribute("aria-expanded", "true");//adds accessibility
        document.querySelectorAll("ul#mainnav>li>a")[5].setAttribute("style", "border-radius: 0 0 10px 10px;")
    }
}

myScript.init();
