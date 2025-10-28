<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Comfort Blend</title>
    <link rel="icon" href="/asset/8.svg" style="border-radius:50%">
    <link rel="stylesheet" href="/style/index.css">
    <link rel="stylesheet" href="/style/carousel.css">
</head>

<body>
    <header>
        <nav>
            <h1><a href="/">The Comfort Blend</a></h1>
            <ul>
                <li><a href="/" <?= ($GLOBALS['route'] ?? '') === '' ? 'class="active"' : '' ?>>Home</a></li>
                <li><a href="/products" <?= ($GLOBALS['route'] ?? '') === 'products' ? 'class="active"' : '' ?>>Products</a></li>
                <li><a href="/about" <?= ($GLOBALS['route'] ?? '') === 'about' ? 'class="active"' : '' ?>>About Us</a></li>
                <li><a href="/contact" <?= ($GLOBALS['route'] ?? '') === 'contact' ? 'class="active"' : '' ?>>Contact Us</a></li>
            </ul>
        </nav>
    </header>
    <main>