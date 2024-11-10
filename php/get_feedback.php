<?php
require_once('conndb3.php');

$conn = connection();
if (!$conn) {
    echo json_encode(['status' => 'error', 'message' => 'Failed to connect to database']);
    exit;
}

$query = "SELECT name, message FROM feedback ORDER BY id DESC";
$result = mysqli_query($conn, $query);
$feedbacks = [];

while ($row = mysqli_fetch_assoc($result)) {
    $feedbacks[] = [
        'name' => $row['name'],
        'message' => $row['message'],
        'image' => 'https://picsum.photos/50', // Random image from Lorem Picsum
    ];
}

mysqli_close($conn);
echo json_encode($feedbacks);