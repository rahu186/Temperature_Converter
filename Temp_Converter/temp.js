
        function convert()
        {
        var d = document.getElementById("degree").value;
        var e = document.getElementById("ddl");
        var strUser = e.options[e.selectedIndex].value;
        
          if(strUser=='C')
          {
            var result = (d * 9/5) + 32;
            
            document.getElementById("result").value = result +" "+"F";
          }
          else
          {
            var result = [(d - 32)*5]/9;
            document.getElementById("result").value = result +" "+"C";
          }
        }
      