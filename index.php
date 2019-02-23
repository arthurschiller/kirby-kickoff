<?php

require __DIR__ . '/kirbycore/bootstrap.php';

$kirby = new Kirby([
    'roots' => [
        'index'     => __DIR__,
        'site'      => __DIR__ . '/project',
        'snippets'  => __DIR__ . '/project/snippets',
        'templates' => __DIR__ . '/project/templates',
        'assets'    => __DIR__ . '/assets',
        'cache'   => __DIR__ . '/cache'
    ]
]);

echo $kirby->render();