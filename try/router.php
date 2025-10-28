<?php
if (file_exists(__DIR__ . '/' . $_SERVER['REQUEST_URI'])) {
    return false; // serve the requested file directly
}

$_GET['route'] = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
include __DIR__ . '/index.php';