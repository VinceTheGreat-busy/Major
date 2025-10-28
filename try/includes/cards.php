<?php
include './db/index.php';

$query = mysqli_query($conn, "SELECT * FROM products ORDER BY id DESC");
?>

<section class="product-list">
    <h2>Coffee Products</h2>
    <?php 
        $query = mysqli_query($conn, "SELECT * FROM products WHERE type = 'coffee' ORDER BY id DESC");
        if (mysqli_num_rows($query) > 0): 
            ?>
        <div class="cards-container">
            <?php while ($row = mysqli_fetch_assoc($query)): ?>
                <div class="card">
                    <img src="/<?= $row['image_path'];?>" alt="<?= htmlspecialchars($row['name']) ?>">
                    <h2><?= htmlspecialchars($row['name']); ?></h2>
                    <h3 class="price">₱<?= number_format($row['price'], 2); ?></h3>
                </div>
            <?php endwhile; ?>
        </div>
    <?php else: ?>
        <p class="no-products">No products found.</p>
    <?php endif; ?>
</section>

<section class="product-list">
    <h2>Biscoff Products</h2>
    <?php 
        $query = mysqli_query($conn, "SELECT * FROM products WHERE type = 'biscoff' ORDER BY id DESC");
        if (mysqli_num_rows($query) > 0): 
            ?>
        <div class="cards-container">
            <?php while ($row = mysqli_fetch_assoc($query)): ?>
                <div class="card">
                    <img src="/<?= $row['image_path'];?>" alt="<?= htmlspecialchars($row['name']) ?>">
                    <h2><?= htmlspecialchars($row['name']); ?></h2>
                    <h3 class="price">₱<?= number_format($row['price'], 2); ?></h3>
                </div>
            <?php endwhile; ?>
        </div>
    <?php else: ?>
        <p class="no-products">No products found.</p>
    <?php endif; ?>
</section>

<section class="product-list">
    <h2>Milk Shake Products</h2>
    <?php 
        $query = mysqli_query($conn, "SELECT * FROM products WHERE type = 'milkshake' ORDER BY id DESC");
        if (mysqli_num_rows($query) > 0): 
    ?>
        <div class="cards-container">
            <?php while ($row = mysqli_fetch_assoc($query)): ?>
                <div class="card">
                    <img src="/<?= $row['image_path'];?>" alt="<?= htmlspecialchars($row['name']) ?>">
                    <h2><?= htmlspecialchars($row['name']); ?></h2>
                    <h3 class="price">₱<?= number_format($row['price'], 2); ?></h3>
                </div>
            <?php endwhile; ?>
        </div>
    <?php else: ?>
        <p class="no-products">No products found.</p>
    <?php endif; ?>
</section>