# Protocol Redirect
Use JS to change the URL protocol from http to https.

---

[![Build Status](https://app.travis-ci.com/JebBarbas/protocolredirect.svg?branch=main)](https://app.travis-ci.com/JebBarbas/protocolredirect)
[![dependencies Status](https://status.david-dm.org/gh/jebbarbas/protocolredirect.svg)](https://david-dm.org/jebbarbas/protocolredirect)
![npm](https://img.shields.io/npm/v/protocolredirect)
![npm](https://img.shields.io/npm/dt/protocolredirect)
![GitHub top language](https://img.shields.io/github/languages/top/jebbarbas/protocolredirect)
![GitHub Repo stars](https://img.shields.io/github/stars/jebbarbas/protocolredirect?style=social)

## How To Use - Download
Just add a `script` tag in your `head` pointing the file, you can use the [jsdelivr](https://www.jsdelivr.com/) CDN.
```html
<script src="https://cdn.jsdelivr.net/npm/protocolredirect@2.1.0"></script>
```

## How To Use - Quick Start
When the file runs, it checks if you are in http, if not, It will redirect you to the same page, but in https.
Don't worry, if you are in localhost or 127.0.0.1 this will not do anything.
