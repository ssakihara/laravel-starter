<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Title -->
    <title>{{ config('app.name') }}</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">

    <!-- Scripts -->
    <script>
        window.config = {!!
            json_encode([
                'app_name' => config('app.name'),
                'app_url' => config('app.url'),
                'consts' => \Config::get('consts')
            ])
        !!}

    </script>
    <script src="{{ mix('js/app.js') }}" defer></script>
</head>

<body>
    <div id="app"></div>
</body>

</html>
