var MIN_LENGTH=1;$(document).ready(function(){$("#keyword").keyup(function(){var e=$("#keyword").val();e.length>=MIN_LENGTH?$.get("auto-complete.php",{keyword:e}).done(function(e){$("#results").html("");var s=jQuery.parseJSON(e);$(s).each(function(e,s){"Cell Phone"==s.pcname&&$("#results").append('<div class="item"><a href="cellphone.php?model='+s.pid+'" class="a">'+s.Description+"</a></div>"),"Cell Phone"==s.pcname&&$("#results").append('<div class="item"><a href="cellphone.php?model='+s.pid+'" class="a">'+s.Description+"</a></div>"),"Computers"==s.pcname&&$("#results").append('<div class="item"><a href="computers.php?model='+s.pid+'" class="a">'+s.Description+"</a></div>"),"Tablets"==s.pcname&&$("#results").append('<div class="item"><a href="tablets.php?model='+s.pid+'" class="a">'+s.Description+"</a></div>"),"TV"==s.pcname&&$("#results").append('<div class="item"><a href="Tv.php?model='+s.pid+'" class="a">'+s.Description+"</a></div>"),"Watches"==s.pcname&&$("#results").append('<div class="item"><a href="watch.php?model='+s.pid+'" class="a">'+s.Description+"</a></div>"),"Other Gadgets"==s.pcname&&$("#results").append('<div class="item"><a href="gadgets.php?model='+s.pid+'" class="a">'+s.Description+"</a></div>")}),$(".item").click(function(){$(this).html();$("#keyword").val()})}):$("#results").html("")}),$("#keyword").blur(function(){$("#results").fadeOut(100)}),$("#keyword").keypress(function(){$("#results").show()})});