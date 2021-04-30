'use strict';

const myScript = {

    toggleButton : document.getElementById("toggle-button"),

    toggleMenu : document.getElementById("toggle-menu"),

    // reference to each box in services section
    theServicesElements : document.querySelectorAll("a.box"),

    icons : document.querySelectorAll("div.icons span"),
    images : document.querySelectorAll("a.galleryimage span.background"),

    // reference to each image in gallery section
    theGalleryElements : document.querySelectorAll("a.galleryimage"),

    //runs media query min-width:768px to see if window screen size fits query and returns true or false 
    screensize : window.matchMedia ("(min-width: 768px)"),


    init : function(){

        this.toggleButton.addEventListener("click", myScript.toggle); //adds toggle function to toggle button with event handler
 
        for (var i=0; i< myScript.theServicesElements.length; i++){
            myScript.theServicesElements[i].addEventListener("mouseover", myScript.servicesRollover);//adds rollover function on mouseover to each box of services section
            myScript.theServicesElements[i].addEventListener("mouseout", myScript.servicesRevert);//adds revert function on mouseout to each box of services section
        }

        for (var i=0; i < myScript.theGalleryElements.length; i++){
            myScript.theGalleryElements[i].addEventListener("mouseover", myScript.galleryRollover, false);//adds rollover function on mouseover to each image of gallery section
            myScript.theGalleryElements[i].addEventListener("mouseout", myScript.galleryRevert, false);//adds revert function on mouseout to each image of gallery section
        }
        
        if (matchMedia) {
            myScript.screensize.addListener(myScript.WidthChange);//adds listener function so that code reacts to changes in window
            }
    },

    servicesRollover : function(){
    
        this.setAttribute("style", "background-color: #76c38f");

        switch (this.id) {
            case 'firstBox':
                myScript.icons[0].style = "background-image: url(assets/icons/globe-white.png)";
                break;

            case 'secondBox':
                myScript.icons[1].style = "background-image: url(assets/icons/sun-white.png)";
                break;

            case 'thirdBox':
                myScript.icons[2].style = "background-image: url(assets/icons/network-white.png)";
                break;

            case 'fourthBox':
                    myScript.icons[3].style = "background-image: url(assets/icons/medal-white.png)";
                    break;

        }

    },

    servicesRevert : function(){

        this.removeAttribute("style");

        switch (this.id) {
            case 'firstBox':
                myScript.icons[0].style = "";
                break;

            case 'secondBox':
                myScript.icons[1].style = "";
                break;

            case 'thirdBox':
                myScript.icons[2].style = "";
                break;

            case 'fourthBox':
                myScript.icons[3].style = "";
                break;

        }
        
    },

    galleryRollover : function(){
        this.lastElementChild.style = "visibility: hidden";
        
        switch (this.className) {
            case 'galleryimage first':
                myScript.images[0].style = "background-image: url(../assets/images/golden-retrievers.gif)";
                break;

            case 'galleryimage second':
                myScript.images[1].style = "background-image: url(../assets/images/beach-dog.gif)";
                break;

            case 'galleryimage third':
                myScript.images[2].style = "background-image: url(../assets/images/sleeping-puppies.gif)";
                break;

            case 'galleryimage fourth':
                myScript.images[3].style = "background-image: url(../assets/images/walking-dog.gif)";
                break;

            case 'galleryimage fifth':
                myScript.images[4].style = "background-image: url(../assets/images/glasses-dog.gif)";
                break;


            case 'galleryimage sixth':
                myScript.images[5].style = "background-image: url(../assets/images/yawning-dog.gif)";
                break;

        }

    },

    galleryRevert : function(){
        this.lastElementChild.style = "";
        
        switch (this.className) {
            case 'galleryimage first':
                myScript.images[0].style = "";
                break;

            case 'galleryimage second':
                myScript.images[1].style = "";
                break;

            case 'galleryimage third':
                myScript.images[2].style = "";
                break;

            case 'galleryimage fourth':
                myScript.images[3].style = "";
                break;

            case 'galleryimage fifth':
                myScript.images[4].style = "";
                break;


            case 'galleryimage sixth':
                myScript.images[5].style = "";
                break;
        }
    },

    WidthChange : function(screensize) {
        if (screensize.matches && myScript.toggleMenu.style.display == "none" == true) {//if screen size matches specified media query above and menu has a display:none style attribute, following code runs
            document.getElementById("toggle-menu").removeAttribute("style");//ensures nav menu displays properly
        }
    },

    toggle : function(){//function that toggles hamburger icon expanded/closed and opens/closes menu
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
    },

}

myScript.init();
