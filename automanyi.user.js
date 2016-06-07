// ==UserScript==
// @name        automanyi
// @namespace   automanyi
// @include     */quanquan6.com/adminmetro/declaration/UserApplySubject.aspx*
// @version     1
// @grant       none
// ==/UserScript==

window.addEventListener('load', () => {
  window.confirm = () => true;
  Array.prototype.slice.call(document.querySelectorAll('input[type="radio"]:nth-of-type(3)')).forEach(b => b.click());
  document.querySelector('#btnSubmit').click();
});
