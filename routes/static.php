<?php

/*
|--------------------------------------------------------------------------
| Static Routes
|--------------------------------------------------------------------------
|
| Here is where you can register static routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "static" middleware group. Now create something great!
| The cache is enabled for this route.
| Use it to route pages where it doesn't matter if the page is cached
*/

Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');
