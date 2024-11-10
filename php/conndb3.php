<?php

function connection()
{

	$dbHost = 'localhost';
	$dbUsername = 'root';
	$dbPassword = '';
	$dbName = 'feedback';

	$conn = mysqli_connect($dbHost, $dbUsername, $dbPassword);

	if (!$conn) {
		die('Koneksi gagal terhubung :' . mysqli_error());
	}

	mysqli_select_db($conn, $dbName);

	return $conn;
}
