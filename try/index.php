<?php
include './db/index.php';

$route = $_GET['route'] ?? '';

switch ($route) {
    case '':
        include './src/main.php';
        break;

    case 'products':
        include './src/products.php';
        break;

    case 'about':
        include './src/about.php';
        break;

    case 'contact':
        include './src/contact.php';
        break;

    default:
        http_response_code(404);
        echo "404 Not Found";
        break;
}
