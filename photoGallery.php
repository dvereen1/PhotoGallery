<?php 
    include_once("Classes/photoGalleryPhotos.php");
    include_once("headNoNav.php");
?>
        <title>DJV Photo Gallery</title>
        <base href = "/portfolio/photoGallery/">
        <link rel = "stylesheet" href = "/CSS/allProjectsModal.css">
        <link rel = "stylesheet"  type = "text/css" href = "photoGallery.css">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    </head>
    <body class = "galleria">
         <?php include_once("Classes/projectInfoModal.php");
            createProjectModal("Photo Gallery", $projectModalArr);
        ?>
        <header>
            <nav>
                <a class = "nav-logo" href = "/#portfolio-">DJV</a>
                <ul class = "nav-menu" role = "menubar" aria-expanded ="false">
                    <li>
                        <a class = "nav-link" href = "/#portfolio-">Portfolio</a>
                    </li>
                    <li>
                        <a href = "https://github.com/dvereen1/PhotoGallery" class = "nav-link" >View Code</a>
                    </li>
                </ul>
                <div class = "navBtns">
                    <button class = "menu-open-btn active">
                        <i class="fas fa-bars"></i>
                    </button>
                    <button class = "menu-close-btn">
                            <i class="fas fa-times"></i>
                    </button>
            </div>
            </nav>  
        </header>
        <main class = "photos">
            <div class = "photo-content">
                <section class = "pdsc">
                    <div class = "title">
                        <h1>The Perfect Daily Shoe Collection</h1>
                    </div>
                    <div class = "photo-grid">
                    <?php 
                        $count = 0;
                        foreach($photoGalleryArray as $value){
                            createImgCard($value[0], $value[1], $count);
                            $count++;
                        };
                    ?>
                    </div>
                </section>
            </div>
        </main>
        <div class = "fs-photo-container">
            <div class="photo-zoomed-swiper hide-zoomed-swiper">
                <div class="swiper-toolbar">
                    <div class="img-count">
                        <span class = "img-num">1</span><p>/7</p>
                    </div>
                    <div class = "toolbar-btns">
                        <div class = "tb-btn">
                            <button class = "btns-ab before">
                                Before
                            </button>
                        </div>
                        <div class = "tb-btn">
                            <button class = "btns-ab after active">
                                After
                            </button>
                        </div>
                        <div class = "tb-btn info-btn-div">
                            <button class = "info-btn">
                                <i class="fas fa-info-circle"></i>
                            </button>
                            <div class = "info-triangle"></div>
                            <div class = "img-info">
                                <!--<p><b>Camera:</b> Panasonic G7</p>
                                <p><b>Focal Length:</b> 20 mm</p>
                                <p><b>F Number:</b> f5/6</p>
                                <p><b>Exposure Time:</b> 1/8s</p>
                                <p><b>Lens:</b> 14-35mm Kit Lens</p>-->
                            </div>
                        </div>
                        <div class = "tb-btn">
                            <button class = "cls-btn">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        
                    </div>
                    
                </div>
                <div class="swiper-container">
                    <img class ="fs-img" src = "" alt ="shoe image" draggable = "false" data_num="">
                </div>
                <div class = "pointer-right">
                    <i class="fas fa-chevron-right"></i>
                    <i class="fas fa-minus"></i>
                </div>
                <div class  = "pointer-left">
                    <i class="fas fa-chevron-left"></i>
                    <i class="fas fa-minus"></i>
                </div>
            </div>
        </div>
        <script src = "/JS/allProjectsModal.js"></script>
       <script src = "photoGallery.js"></script>
    </body>
</html>