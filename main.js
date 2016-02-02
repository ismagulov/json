






$.ajax({
    url: "boys.json",
    type: "GET",
    dataType: 'json',
    success: function (json) {

        for (var i = 0; i < json.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + json [i].id + "</td>");
            tr.append("<td>" + json [i].name + "</td>");
            tr.append("<td>" + json [i].age + "</td>");
            tr.append("<td>" + json [i].car + "</td>");
            tr.append("<td>" + json [i].number + "</td>");
            tr.append("<td>"+'<input type="checkbox" />'+ "</td>");

            $('table').append(tr);

        }
    },
    error:function(){
        alert("Ошибка")
    }
});

$(function() {
    $('#text_search').bind('keyup change', function(ev) {
        // вставка нового искомого значения
        var searchTerm = $(this).val();

        $('body').removeHighlight();
        // отключить подсвечивание, если переменная посиска пуста
        if ( searchTerm ) {
            // подсветить, если введено новое слово или значение
            $('body').highlight( searchTerm );
        }
    });
});

























/*
    function e () {
    $('input').value()
    console.log()
}


$(document).ready('button').click(function() {
    alert('button clicked');

    $('table').append("<tr>"+"</tr>");
    $('checkbox').css({

        'color':'green',
        'background-color':'#000'


    })

});*/



/*
$(document).ready("checkbox").click().css({
    'color':'green',
    'background-color':'#000'
})









*/












/*$(document.getElementById("btn3")).click(function(){
    console.log("hello");

    $('table').append("<tr>"+"</tr>");

});*/



/*$("checkbox").click().css({
    'color':'green',
    'background-color':'#000'
});*/




/*

$('input[type=text]').val()
*/


/*
$(function(){
    $("button").click(function () {
        $('#my_table').find('input[type=checkbox]').each(function(){
            if (! $(this).is(':checked'))
                $(this).closest('tr').hide();
        })
    });
});*/


/*
$("checkbox").click(function () {

    if (!$(this).is(':checked'))
        $(this).closest('tr').hide();
    else
        console.log("dsdf");
});





$("#btn2").click(function() {
    alert("hello")
    $('table').append("<tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>");
});





 $(function (search_txt) {
 var minlength = 3;

 $("#search").keyup(function () {
 var that = this,
 value = $(this).val();
 });
 });
*/
