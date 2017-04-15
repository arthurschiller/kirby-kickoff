<nav class="navigation" role="navigation">
	<ul class="menu">
		<li class="main-menu__home-item <?php if($page->isHomePage()) { echo 'active'; } ?>">
			<a href="<?php echo url() ?>">Home</a>
		</li>
		<?php foreach($pages->visible() as $item): ?>
		<li class="menu-item<?= r($item->isOpen(), ' is-active') ?>">
			<a href="<?= $item->url() ?>"><?= $item->title()->html() ?></a>
		</li>
		<?php endforeach ?>
	</ul>
</nav>