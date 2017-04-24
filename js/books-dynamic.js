/**
 * Chapter 5. Books dynamic.
 *
 * This script get the books data from the server and render in the DOM.
 */

/* global $ */
'use strict';

function onClickBook (evt) {
  var book = $(evt.currentTarget);

  var title  = book.find('.title');
  var author = book.find('.author');
  var cover  = book.find('.cover');

  $('#book-viewer .title').html(title.html());
  $('#book-viewer .author').html(author.html());
  $('#book-viewer .cover').attr('src', cover.attr('src'));
}

$(document).ready(function () {
  $('.book').on('click', onClickBook);
});
