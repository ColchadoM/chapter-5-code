/**
 * Chapter 5. Figures.
 *
 * This script interact with a mini api for calculate areas.
 */

/* global $ */
'use strict';

var figureSelected;

function onSelectFigure (event) {
  figureSelected = $(event.target).val();
  console.log('Se selecciono: ' + figureSelected);

  $('div.form-part').hide();
  $('div#' + figureSelected).show();
}

$(document).ready(function () {
  $('div.form-part').hide();
  $('div#square').show();

  $('select#select-figure').on('change', onSelectFigure);
});
