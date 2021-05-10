"use strict";

const formEffects = {

    // references to search box and text
    searchBox : document.getElementById("searchbar"),
    searchText : document.getElementById("txtbox"),

    // reference to main form
    mainForm : document.getElementById("mainform"),

    // references to the labels and textfields in form
    fields : document.querySelectorAll("fieldset input.fields"),
    labels : document.querySelectorAll("fieldset label.label"),

    // empty array to house the original form labels
    originalLabels : [], 

    init : function(){
        this.trackOriginalLabels();
        this.searchBox.addEventListener("submit", this.searchSubmit); 
        this.mainForm.addEventListener("submit", this.requiredFields);
    },

    trackOriginalLabels : function() {

        formEffects.len = formEffects.labels.length;

        for (let i = 0; i < formEffects.len; i++){
            formEffects.originalLabels[i] = formEffects.labels[i].innerHTML;
        }

    },

    searchSubmit : function(evt) {
        if (formEffects.searchText.value === ""){
            evt.preventDefault();
        }
    },

    requiredFields : function(evt) {

        let errorCount = 0;
        for (let i=0; i < formEffects.len; i++) {
            if (formEffects.fields[i].value === ""){
                formEffects.labels[i].innerHTML = formEffects.originalLabels[i] + '<p class="warning">Required</p>';
                errorCount++;
            }
            else {
                formEffects.labels[i].innerHTML = formEffects.originalLabels[i];  
            }
        }

        if (errorCount > 0){
            evt.preventDefault();
        }

    },

}

formEffects.init();

    







