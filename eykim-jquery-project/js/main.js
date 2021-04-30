$(document).ready(function(){
    var mainArr = [];
    $('#addname').on('click', addName);
    function addName(){
        let name, tempArr;
        name = $('#name').val();
        tempArr = name.split(" ");
        name = tempArr[1] + ", " + tempArr[0];
        mainArr.push(name);
        mainArr.sort(alphaSort);
        $('#namelist').val(mainArr.join("\n"));
        $('#name').val("");
    }

    $('#clearname').on('click', clearNames);
    function clearNames(){
        $('#namelist').val("");
        mainArr = [];
    }

    function alphaSort(a, b){
        var n1 = a.toLowerCase();
        var n2 = b.toLowerCase();
        if(n1 < n2){return -1;}
        else if(n1 > n2){return 1;}
        else{return 0;}
    }
});

