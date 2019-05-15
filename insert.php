
<?php
header('Content-Type: application/json');
$conn = mysqli_connect("localhost", "root", "", "projectz");
$info = json_decode(file_get_contents("php://input"));
if (count($info) > 0) {
    $name     = mysqli_real_escape_string($conn, $info->name);
    $email    = mysqli_real_escape_string($conn, $info->email);
    $age      = mysqli_real_escape_string($conn, $info->age);
    $btn_name = $info->btnName;
    if ($btn_name == "Trimite") {
        $query = "INSERT INTO insert_emp_info(name, email, age) VALUES ('$name', '$email', '$age')";
        if (mysqli_query($conn, $query)) {
            echo "Data Inserted Successfully...";
        } else {
            echo 'Failed';
        }
    }
    if ($btn_name == 'Update') {
        $id    = $info->id;
        $query = "UPDATE insert_emp_info SET name = '$name', email = '$email', age = '$age' WHERE id = '$id'";
        if (mysqli_query($conn, $query)) {
            echo 'Data Updated Successfully...';
        } else {
            echo 'Failed';
        }
    }
}
echo json_encode($_POST);
?>