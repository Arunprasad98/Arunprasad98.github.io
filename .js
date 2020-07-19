<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>X-Frame-Bypass For Global CI calendar</title>
    <style>
        html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
        }
        iframe {
            display: block;
            width: calc(100% - 40px);
            height: calc(100% - 40px);
            margin: 20px;
            border: 0;
        }

    </style>

    <!-- To bypass the CROSS ORIGIN Resource issue -->
        <script src="x-frame-bypass.js" type="module"></script>

    <!-- Support Customized built-in elements for Safari-->
        <script src="https://unpkg.com/@ungap/custom-elements-builtin"></script>

</head>
<body>
    <iframe is="x-frame-bypass" src="https://github.com/Arunprasad98/Arunprasad98.github.io/blob/master/XR%20Animation.2.html"></iframe>
</body>
</html>
