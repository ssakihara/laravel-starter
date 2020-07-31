<?php

use Illuminate\Routing\Router;

Route::group(
    [
        'domain' => config('admin.route.domain'),
    ],
    function () {
        Admin::routes();

        Route::group(
            [
                'namespace' => config('admin.route.namespace'),
                'middleware' => config('admin.route.middleware'),
                'as' => config('admin.route.prefix') . '.',
            ],
            function (Router $router) {
                $router->get('/', 'HomeController@index')->name('home');
            }
        );
    }
);
