// ==UserScript==
// @name        autoshenbao
// @namespace   autoshenbao
// @include     *quanquan6.com/adminmetro/declaration/ShowApplySubject.aspx*
// @version     2
// @grant       none
// ==/UserScript==

window.addEventListener('load', function () {
  document.querySelector('#lbnApply').click();
});
