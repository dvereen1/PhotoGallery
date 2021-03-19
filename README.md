# Photo Gallery

Take a stroll through the photo gallery.

Click an image to expand it into full screen view and expose before, after, and info buttons in the toolbar. Once in full screen view, cycle through the images by clicking the directional arrow buttons on either side of the screen.

[Demo here](https://darianvereen.com/HTML_PHP/projects/photoGallery/photoGallery.php)

## Includes and Other Links

In the [photoGallery.php file](https://github.com/dvereen1/PhotoGallery/blob/main/photoGallery.php), you'll notice some file includes and references which exist outside the current directory.

`<?php include_once("headNoNav.php"); 
       include_once("Classes/photoGalleryPhotos.php");
?>`

`<?php include_once("Classes/projectInfoModal.php");
       createProjectModal("Photo Gallery", $projectModalArr);
?>`

`<link rel = "stylesheet" href = "/CSS/allProjectsModal.css">`

`<script src = "/JS/allProjectsModal.js"></script>`

You can view these files at [PHP-JS-CSS-Includes](https://github.com/dvereen1/PHP-JS-CSS-Includes).