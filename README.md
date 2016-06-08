OO6-autofiller
==============

Autofilling 课程调研 forms...

Why
------

OO6 is tooooooooo sloooooooow, and tooooooooooo much form to click

Getting Relaxed
-----------------

1. Ensure you're using a modern browser: latest version of Firefox or Chromium or equivalent.
2. Install a user script extension for your browser, GreasyMonkey for Firefox, TamperMonkey for Chromium or equivalent.
3. Install these two user script(just click to install):
    - [automanyi.user.js](https://github.com/frantic1048/OO6-autofiller/raw/master/automanyi.user.js)
    - [autoshenbao.user.js](https://github.com/frantic1048/OO6-autofiller/raw/master/autoshenbao.user.js)
4. Ensure above script are **enabled** in your user script extension.
5. Login onto OO6, goto `业务办公 -> 申报系统`
6. Ensure your browser **won't block pop-ups**. You may temporarily disable it. We're going to open many tabs, to submit many forms simultaneously XD.
7. Open your browser's console, `copy & paste` fellow code, then press `Enter` key to execute it:

```js
var diaoyan = /课程调研/;
Array.prototype.slice.call(document.getElementById('sysMain').contentDocument.querySelector('#tab_1_1 > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1)').children, 8).map(function (tr) {
  return tr.querySelector('a:only-child');
}).reduce(function (delay, a) {
  setTimeout(function () {
    if (diaoyan.test(a.textContent)) {
      a.setAttribute('target', '_blank');a.click();
    }
  }, delay);
  return delay + 999;
}, 0);
```

Then, take a drink and see magic happens \_(*′☉.̫☉)」∠)\_
