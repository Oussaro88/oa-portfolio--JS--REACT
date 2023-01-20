<?php

$db_host = "localhost";
$db_username = "user";
$db_password = "";
$db_name = "db_oaportfolio";

$query = "INSERT * INTO $db_name() VALUES()";

$conn = mysqli_connect($query, $db_name);

if (!$conn) {
    die('Connction to database has failed: ' . mysqli_connect_error());
}

echo "Connected successfully";

mysqli_close($conn);
