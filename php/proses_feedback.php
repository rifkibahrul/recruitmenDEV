<?php
require_once('conndb3.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    if ($name == '' || $message == '' || $email == '') {
        echo json_encode(['status' => 'error', 'message' => 'Silahkan masukan semua data yakni data isi dan nama']);
        exit;
    } else {
        $conn = connection();
        $query = "INSERT INTO feedback (name, email, message) VALUES ('$name', '$email', '$message')";
        $result = mysqli_query($conn, $query);

        if ($result) {
            echo json_encode(['status' => 'success', 'message' => 'Data berhasil ditambahkan']);
            exit;
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Data gagal ditambahkan']);
        }
        exit;
    }
}
?>

