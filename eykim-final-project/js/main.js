'use strict';

const myScript = {

    toggleButton : document.getElementById("toggle-button"),

    toggleMenu : document.getElementById("toggle-menu"),

    // reference to services section
    servicesArea : document.querySelector(".services"),

    // reference to gallery section
    galleryArea : document.querySelector(".gallery"),

    //runs media query min-width:768px to see if window screen size fits query and returns true or false 
    screensize : window.matchMedia ("(min-width: 768px)"),


    init : function(){

        this.toggleButton.addEventListener("click", myScript.toggle); //adds toggle function to toggle button with event handler

        // adds event listeners for rollover effects for services
        this.servicesArea.addEventListener("mouseover", myScript.servicesRollover);
        this.servicesArea.addEventListener("mouseout", myScript.servicesRevert);

        // adds event listeners for rollover effects for gallery
        this.galleryArea.addEventListener("mouseover", myScript.galleryRollover, false);
        this.galleryArea.addEventListener("mouseout", myScript.galleryRevert, false);

        
        if (matchMedia) {
            myScript.screensize.addListener(myScript.WidthChange); //adds listener function so that code reacts to changes in window
            }
    },

    servicesRollover : function(evt){

        const serviceBox = myScript.findTarget(evt, 'a', this);
        if (!serviceBox){ return; }

        const theIcon = serviceBox.firstElementChild.firstElementChild;
        if (!theIcon){ return; }

        switch (theIcon.id) {
            case 'globe':
                theIcon.style = "background-image: url(assets/icons/globe-white.png)";
                break;

            case 'sun':
                theIcon.style = "background-image: url(assets/icons/sun-white.png)";
                break;

            case 'network':
                theIcon.style = "background-image: url(assets/icons/network-white.png)";
                break;

            case 'medal':
                theIcon.style = "background-image: url(assets/icons/medal-white.png)";
                break;
        }

    },

    servicesRevert : function(evt){

        const serviceBox = myScript.findTarget(evt, 'a', this);
        if (!serviceBox){ return; }

        const theIcon = serviceBox.firstElementChild.firstElementChild;
        if (!theIcon){ return; }

        theIcon.style = "";
        
    },

    galleryRollover : function(evt){

        const galleryBox = myScript.findTarget(evt, 'a', this);
        if (!galleryBox) { return; }

        galleryBox.lastElementChild.style = "visibility: hidden;"

        const theImage = galleryBox.firstElementChild.firstElementChild;
        if (!theImage) { return; }

        switch (theImage.id) {
            case 'image2':
                theImage.style = "background-image: url(assets/images/golden-retrievers.gif)";
                break;

            case 'image3':
                theImage.style = "background-image: url(assets/images/beach-dog.gif)";
                break;

            case 'image4':
                theImage.style = "background-image: url(assets/images/sleeping-puppies.gif)";
                break;

            case 'image5':
                theImage.style = "background-image: url(assets/images/walking-dog.gif)";
                break;

            case 'image6':
                theImage.style = "background-image: url(assets/images/glasses-dog.gif)";
                break;


            case 'image7':
                theImage.style = "background-image: url(assets/images/yawning-dog.gif)";
                break;

        }

    },

    galleryRevert : function(evt){
        
        const galleryBox = myScript.findTarget(evt, 'a', this);
        if (!galleryBox) { return; }

        galleryBox.lastElementChild.style = "";

        const theImage = galleryBox.firstElementChild.firstElementChild;
        if (!theImage) { return; }

        theImage.style = "";

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

    findTarget : function(evt, targetNode, container) {
        let currentNode = evt.target;
        while (currentNode && currentNode !== container) {  
          if (currentNode.nodeName.toLowerCase() === targetNode.toLowerCase()) { return currentNode; }
          else { currentNode = currentNode.parentNode; }
        }
        return false;
    }

}

myScript.init();
