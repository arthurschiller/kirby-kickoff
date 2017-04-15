<?php 

$kirby = kirby();
$mainFolder  = 'main';

/*
// change site directory
$kirby->roots->site = $kirby->roots()->index() . DS . $mainFolder . DS . 'site';

// change content directory & url
$kirby->roots->content = $kirby->roots()->index() . DS . $mainFolder . DS . 'content';
$kirby->urls->content = $kirby->urls()->index() . DS . $mainFolder . DS . 'content';

// change thumbs directory
$kirby->roots->thumbs = $kirby->roots()->index() . DS . $mainFolder . DS . 'thumbs';
$kirby->urls->thumbs = $kirby->urls()->index() . DS . $mainFolder . DS . 'thumbs';
*/

$kirby->roots->accounts = $kirby->roots->index() . DS . 'accounts';
$kirby->roots->cache = $kirby->roots->index() . DS . 'cache';
$kirby->roots->config = $kirby->roots->index() . DS . 'config';
$kirby->roots->plugins = $kirby->roots->index() . DS . 'plugins';

$kirby->roots->snippets = $kirby->roots->index() . DS . 'resources' . DS . 'snippets';
$kirby->roots->templates = $kirby->roots->index() . DS . 'resources' . DS . 'templates';

$kirby->roots->assets = $kirby->roots->index() . DS . 'public';
$kirby->urls->assets = $kirby->urls->index();

$kirby->roots->avatars = $kirby->roots->assets() . DS . 'avatars';
$kirby->urls->avatars = $kirby->urls->assets() . '/avatars';

$kirby->urls->content = $kirby->urls->index() . '/uploads';

$kirby->roots->thumbs = $kirby->roots->assets() . DS . 'thumbs';
$kirby->urls->thumbs = $kirby->urls->assets() . '/thumbs';