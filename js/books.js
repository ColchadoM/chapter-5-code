/**
 * Chapter 5. Books.
 *
 * This script gives the logic to the book viewer using the data writed in the
 * HTML.
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
