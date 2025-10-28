<?php
$name = "test";
$host = "localhost";
$root = "root";
$pass = "";

$conn = mysqli_connect($host, $root, $pass, $name);
if (!$conn) {
    session_destroy();
}