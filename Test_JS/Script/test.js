$(document).ready(function () {
    $('button.add').click(function () {
        $('#mytable tbody').append('<tr><td></td><td></td><td></td><th><button class="del">Delete</button></th></tr> ')
    })
    $(document).on('click', 'button.del', function () {
        alert("Do you want remove??");
        $(this).closest( 'tr').remove();
        return false;   
    })
    $("<span>Hello world!</span>").insertAfter("p");
    $("ul>li").first().css("color", "pink");
    //$("ul.2>li").children().first().css("color", "red");

    $('div').find('p').append(" THÊM Ở ĐÂY");


    $("ul.1>li").first().append(" THÊM 1");
    $("ul.2>li").eq(1).append(" THÊM 2");
});