@php
    $cwd = getcwd();
    $css = asset('build/assets/app-N3kH314z'. '.css');
    $js = asset('build/assets/app-CLOnlpSS'. '.js');
@endphp
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', '0xLancerLab App') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        <!-- @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx", "resources/js/Context/index.jsx"]) -->
        <!-- add this code -->
        <link rel="stylesheet" href="{{ $css }}" id="css">
        <script  type="module" src="{{ $js }}" id="js"></script>
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
