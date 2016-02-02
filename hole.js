/*
/!**
 * Created by parts7 on 27.01.2016.
 *!/
/!*

 $.ajax({
 url:"boys.json",
 type:"GET",
 dataType: 'json',
 success:function(result){
 console.log(result);
 var str = result;

 var event = JSON.parse(str, function(key, value) {
 console.log(key);
 console.log(value);

 });
 }
 });

 *!/



/!*

 $.ajax({
 url: "boys.json",
 type: "post",
 dataType: 'json',
 success: function (json) {
 var tr;
 for (var i = 0; i < json.length; i++) {
 tr = $('<tr/>');
 tr.append("<td>" + json [i].id + "</td>");
 tr.append("<td>" + json [i].name + "</td>");
 tr.append("<td>" + json [i].age + "</td>");
 $('table').append(tr);

 }
 }
 });
 *!/


$.ajax({
    url: 'boys.json',
    type: "post",
    dataType: "json",
    success: function(data, textStatus, jqXHR) {
        drawTable(data);
    }
});

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#boys").append(row);
    row.append($("<td>" + rowData.id + "</td>"));
    row.append($("<td>" + rowData.name + "</td>"));
    row.append($("<td>" + rowData.age + "</td>"));
    console.log(rowData)
}



 $(document).ready(function(){
 $ .getJSON ("boys.json", function (data) {


 for(var i=0;i<data.length;i++){
 $('#boys').append(
 '<tr><td>' + data.id + '</td><td>' + data.boys[i].name + '</td><td>' + data.boys[i].age +
 '</td><td>' + data.boys[i].car + '</td><td>' + data.boys[i].number + '</td></tr>'
 );
 }});
 });


*/
