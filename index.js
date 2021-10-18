
    $("li").on("click",function (){
        $(this).remove();
    });
    function myfun(){
        var s=$("#item").val();
        
        if(s.trim()==""){
            alert("enter the value");
        }
        else{
            var a =$("#item").val();
            $("#unorder").append("<li>"+a+"</li>");
        }
        $("li").on("click",function (){
            $(this).remove();
        });
    };
    


    