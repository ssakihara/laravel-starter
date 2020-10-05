<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

class AdminMenuSeeder extends Seeder
{
    const DEFAULT_ICON = 'fa-bars';

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $currentId = DB::table(config('admin.database.menu_table'))->max('id');

        $routes = Route::getRoutes();
        foreach ($routes as $route) {
            // Indexルート以外は無視する
            if (! preg_match('/index/', $route->getName())) {
                continue;
            }

            // 管理画面ルート以外は無視する
            if (! preg_match('/'.config('admin.route.domain').'/', $route->domain())) {
                continue;
            }

            // 自動で作られるルートは無視する
            if (preg_match('/^(\/|auth|_handle)/', $route->uri())) {
                continue;
            }

            DB::table(config('admin.database.menu_table'))->insert([
                'order' => ++$currentId,
                'title' => Str::ucfirst(Str::singular($route->uri())),
                'icon' => self::DEFAULT_ICON,
                'uri' => $route->uri(),
            ]);
        }
    }
}
