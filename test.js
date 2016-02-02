


$("#btnSubmit").button().click(function loadjson(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'boys.json', false);
    xhr.send();

        if (xhr.status != 200) {
    alert( xhr.status + ': ' + xhr.statusText );
}       else {
    alert( xhr.responseText );
}
});





