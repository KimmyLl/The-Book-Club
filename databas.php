<!DOCTYPE html>
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="js/script.js"></script>
    <link rel="stylesheet" type="text/css" href="style/style.css">
  </head>
  <body id = "image">
    <div id = "temp">
      <h1 id="title">Stockholms temperatur är:</h1>
      <div id = "border">
        <h1 id="weather"></h1>
      </div>
    </div>
    <script>

      function changeImage(type){

        var weatherBackground = {
          sunny: "https://images.pexels.com/photos/314831/pexels-photo-314831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          rainy: "https://images.pexels.com/photos/1028600/pexels-photo-1028600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          storm: "https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        };

        $("body").css("background-image", ("url(" + weatherBackground[type] + ")"));
      }

    </script>
  </body>
</html>
