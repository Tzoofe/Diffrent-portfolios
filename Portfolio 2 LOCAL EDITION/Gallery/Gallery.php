<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" type="text/css" href="gallery.css">
    <link href="https://fonts.googleapis.com/css?family=Amatic+SC" rel="stylesheet">

</head>

<body>
    <h1 class="title">Gallery</h1>
    <span class="responsive">
    <?php
        foreach (glob('/Gallery/img/*.jpg' as $imageloc) {
//            echo $imageloc;
            echo "<a target='_blank' href='#img'>";
            echo "<img class='img' src='{$imageloc}' width='300' height='200' />";
            echo "</a";
        }
    ?>

  </span>


</body>

</html>
