﻿# Protocol Redirect
Use JS to change the URL protocol from HTTP to HTTPS.

## How To Use - Download
This script uses the class Swal from [Sweet Alerts 2](https://sweetalert2.github.io/). So you need to dowload that
files or use its CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
```
Now you need to download this files or our CDN. You can choose between .js or .min.js.
```html
<script src="https://cdn.jsdelivr.net/gh/jebbarbas/protocolredirect@v1.0.0/protocolredirect.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/jebbarbas/protocolredirect@v1.0.0/protocolredirect.js"></script>
```

## How To Use - Quick Start
Put the `<script>` in your `<head>` and it will works, the script uses Sweet Alerts 2 to warn you that you are 
in a insecure page (HTTP), and with a button you'll go to the same page, but in HTTPS.
The script asks you because if you are working in a localhost, there will not be a HTTPS server.
