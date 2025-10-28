<?php 
include './db/index.php';
?>

<div class="profile-card">
    <h2>Crew:</h2>
    <div>
        <?php 
            $query = mysqli_query($conn, "SELECT * FROM admins");
            if (mysqli_num_rows($query) > 0): 
        ?>
            <div class="profiles-container">
                <?php while ($row = mysqli_fetch_assoc($query)): ?>
                    <div class="profile">
                        <img alt="<?= htmlspecialchars($row['name']) ?>">
                        <h3><?= htmlspecialchars($row['name']); ?></h3>
                        <p class="position"><?= htmlspecialchars($row['position']); ?></p>
                    </div>
                <?php endwhile; ?>
            </div>
        <?php else: ?>
            <p class="no-profiles">No crew members found.</p>
        <?php endif; ?>
    </div>
</div>