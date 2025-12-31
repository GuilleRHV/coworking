<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods'   => ['*'],
    'allowed_origins'   => [
        env('FRONT_URL'),
        'http://localhost:5173',
        'https://zgz-coworking.vercel.app'
    ],
    'allowed_origins_patterns' => [
    ],
    'allowed_headers'   => ['*'],
    'exposed_headers'   => [],
    'max_age'           => 3600,
    //'supports_credentials' => true, 
];
