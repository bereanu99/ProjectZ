<?php 
header('Content-Type: application/json');

$con = mysqli_connect("localhost","admin","admin","projectz") or die( 'Connection failed:'.mysql_error());
$form_data = json_decode(file_get_contents("pgp://input"),true);
$data=array();
$error=array();

if(empty($form_data->fname)){
$error["fname"] = "Trebuie sa completati cu prenume";
}

if(empty($form_data->lname)){

    $error["lname"] = "Trebuie sa completati cu nume";
    
    };
    
if(!empty($error)){
    $data["error"]= $error;
}
else{
    $fname= mysqli_real_escape_string ( $con,$form_data->fname);
    $lname= mysqli_real_escape_string ( $con,$form_data->lname);
    $query="INSERT INTO `roombook`(`Title`, `FName`, `LName`, `Email`, `National`, `Country`, `Phone`, `TRoom`, `Bed`, `NRoom`, `Meal`, `cin`, `cout`,`stat`,`nodays`) VALUES ('$title','$fname','$lname','$email','$nation','$country','$phone','$troom','$bed','$nroom','$meal','$cin','$cout','$new',datediff('$cout','$cin'))";
if(mysqli_query($con,$query)){
    $data["message"] = "Data inserted.."
}
}
echo json_encode($_POST);
echo json_encode($data);

?>