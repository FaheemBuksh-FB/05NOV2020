var cnt = 0;
$(document).ready(()=> {
    
    $("button").click(function(){
        var limit = $("p").length
        console.log(limit)
        if(cnt==limit){
            cnt=0
        }
        else{
            $("p:eq("+(cnt-1)+")").css("border","5px none")
            $("p:eq("+cnt+")").css("border","5px solid green")
            cnt++
        }
        // cnt++
    });
});