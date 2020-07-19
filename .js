<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="X-Frame-Bypass: Web Component extending IFrame to bypass X-Frame-Options: deny/sameorigin">
	<title>X-Frame-Bypass Web Component Demo</title>
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
		}
		img {
			position: absolute;
			top: 0;
			right: 0;
		}
	</style>
	<script src="https://unpkg.com/@ungap/custom-elements-builtin"></script>
	<script src="x-frame-bypass.js" type="module"></script>
</head>
<body>
	<iframe is="x-frame-bypass" src="https://news.ycombinator.com/"></iframe>
	<a href="https://github.com/Arunprasad98/Arunprasad98.github.io/blob/master/X%20Frame%20bypass.js"><img src="https://github.com/Arunprasad98/Arunprasad98.github.io/blob/master/XR%20Animation.2.html" alt="Fork me on GitHub"></a>
</body>
</html>
