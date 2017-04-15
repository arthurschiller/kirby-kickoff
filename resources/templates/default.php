<?php snippet('header') ?>

	<main class="main" role="main">

		<section class="content">
			<h1><?= $page->title()->html() ?></h1>
			<?= $page->text()->kirbytext() ?>
		</section>

	</main>

<?php snippet('footer') ?>