<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" value="{{ csrf_token() }}"/>
        <title>Laravel</title>
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet"/>

        <link rel="stylesheet" href="{{ asset('asset/fonts/styles.css') }}">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&amp;display=swap" rel="stylesheet">

        <link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('asset/css/app.min.css') }}">
        <link rel="stylesheet" href="{{ asset('asset/css/slick.css') }}">
        <link rel="stylesheet" href="{{ asset('asset/css/main.new.css') }}">
    </head>
    <body class="page-inner">
        <div id="app">
        </div>
        <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
        <script src="{{asset('asset/js/app.min.js')}}"></script>
        <script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
        <script src="{{ asset('asset/js/slick.js') }}"></script>
        <script src="{{asset('asset/js/main.new.js')}}"></script>

    </body>
</html>
