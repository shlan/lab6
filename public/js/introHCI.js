'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	var websiteURL = "/project/" + idNumber

	console.log("User clicked on " + websiteURL);

	console.log(websiteURL)

	$.get(websiteURL, getURL);

}
 
function getURL(result){
	console.log(result);
	var projectdetail = "#project" + result.id + " .details";

	var projectHTML= '<a href="#">' +
	'<img src=' + result['image'] + ' class="detailsImage">' +
	'<p><small>' + result['date'] + '</small></p></a>' +
	'<p><small>' + result['summary'] + '</small></p></a>';
	$(projectdetail).html(projectHTML);
}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
function randomizeColors(e) {
	console.log("User clicked on color button");

	var paletteURL = "/palette";
	$.get(paletteURL, getpaletteURL);

}

function getpaletteURL(colorResult){
	console.log(colorResult);

	var colorPalette = "#palette" + colorResult.id + " .colors"; 

	$(colorPalette).html(colorResult);

	var colors = colorResult.colors.hex;

	$('body').css('background-color', colors[0]);
	$('.thumbnail').css('background-color', colors[1]);
	$('h1, h2, h3, h4, h5, h5').css('color', colors[2]);
	$('p').css('color', colors[3]);
	$('.project img').css('opacity', .75);
}






