window.onload = function(){

     /////////////////////////////////
    ////////// Navigation ///////////
   /////////////////////////////////

   const navOpenBtn = document.querySelector(".menu-open-btn");
   const navCloseBtn = document.querySelector(".menu-close-btn");
   const navBtnDiv = document.querySelector(".navBtns");
   const navMenu = document.querySelector(".nav-menu");

   //the div is a the button essentially
   navBtnDiv.addEventListener("click", function(){
       //get the div element children i.e.
       //determine if the nav menu is expanded
        let expanded = navMenu.getAttribute("aria-expanded") === "true" || false;
        navMenu.classList.toggle("active");
        //hide the navOpenBtn, display navCloseBtn and vice versa
        if(navOpenBtn.classList.contains("active")){
            navOpenBtn.classList.remove("active","show");
            navOpenBtn.classList.add("hide");
            navCloseBtn.classList.remove("hide");
            navCloseBtn.classList.add("show","active");
            
        }else if(navCloseBtn.classList.contains("active")){
            navCloseBtn.classList.remove("show", "active");
            navCloseBtn.classList.add("hide");
            navOpenBtn.classList.remove("hide");
            navOpenBtn.classList.add("show", "active"); 
        }
        //nav menu expands to specified height
        if(expanded){
            navMenu.style.height = 0;
        }else if(!expanded){
            navMenu.style.height = navMenu.scrollHeight + "px";
        }
        navMenu.setAttribute("aria-expanded", !expanded);
   });


      ///////////////////////////////////////
     ///// Full-Scale Image Container //////
    ///////////////////////////////////////

    //reference to the before and after buttons, info button, info box, and the image in full view, and the img count
    const mainGallery = document.querySelector(".galleria");
    ////console.log(mainGallery);
    const baBtns = document.querySelectorAll(".btns-ab");
    const infoBtn = document.querySelector(".info-btn");
    const imgInfoTri = document.querySelector(".info-triangle");
    const imgInfo = document.querySelector(".img-info");
    const imgCount = document.querySelector(".img-num");
    let open = false;
    let imgIndex = 0;
   
    //Creating references to the standard sized images, the container which holds the full-scale image and the full scale image itself
    //const expandImgBtns  = document.querySelectorAll(".expand-img-btn");
    const expandImgBtns = document.querySelectorAll(".photo");
    const photoSwiper = document.querySelector(".photo-zoomed-swiper");
    const zoomedImg = document.querySelector(".swiper-container img");

    /**
     * Sets the active state to the after button or if clicked is true sets the active state to whichever button is clicked.
     * 
     * @param {boolean} clicked - true or false whether button was clicked
     */
    function resetBaBtn(clicked){
        if(baBtns[0].classList.contains("active")){
            baBtns[0].classList.remove("active");
            baBtns[1].classList.add("active");
        }else if(clicked && baBtns[1].classList.contains("active")){
            baBtns[1].classList.remove("active");
            baBtns[0].classList.add("active");
        }
    }
    /**
     * Opens the full-screen image viewer
     * @param {string} imgSrc  - the path of the image to be displayed
     */
    function openImgViewer(imgSrc){
        mainGallery.classList.add("no-scroll");
        zoomedImg.attributes.src.value = imgSrc.src.value;
        //console.log("zoomed image src: ", imgSrc.src.value);
        //The numerical order 1,2,3...etc of the image is held in an attribute of the image element which is adjacent to the parent of the button clicked. 
        imgIndex = parseInt(imgSrc.data_num.value);
        //update the count in the full scaled image tool bar
        imgCount.innerHTML = imgIndex  + 1;
        zoomedImg.attributes.data_num.value = imgIndex;
        //Display or hide the full-scale image container based on a whether a class is in its classlist
            switch(photoSwiper.classList.contains("hide-zoomed-swiper")){
                case true: 
                    photoSwiper.classList.remove("hide-zoomed-swiper");
                    photoSwiper.classList.add("display-zoomed-swiper");
                    break;
                case false:
                    photoSwiper.classList.remove("display-zoomed-swiper");
                    photoSwiper.classList.add("hide-zoomed-swiper");
                    break;
            }
   }
   //======================FULL-SCALE IMAGE BUTTON BEHAVIOR=====================//
    expandImgBtns.forEach( btn => {
       btn.addEventListener("click", function(){
            //The button that is clicked is located in an element adjacent to the image element, which is where we pull the image path from.
           // let imgSrc = this.parentElement.previousElementSibling.attributes;
            let imgSrc = this.firstElementChild.attributes;
            ////console.log(imgSrc);
            openImgViewer(imgSrc);
        });
    });

  /**
   * Closes full scale image viewer
   */
   function closeImgViewer (){
        mainGallery.classList.remove("no-scroll");
        photoSwiper.classList.remove("display-zoomed-swiper");
        photoSwiper.classList.add("hide-zoomed-swiper");
        //Close image info box
        closeImgInfo();
        //Remove active class from before button and add active class to after buttons
        resetBaBtn(false);
        open = false;
   }

   const closeBtn = document.querySelector(".cls-btn");
   closeBtn.addEventListener("click", function(){
        closeImgViewer();  
   });
    ///////////////////////////////////////////////
    ////////////Image Info for pop-up/////////////
    //////////////////////////////////////////////
    const imgInfoArray = [
        [   
            "imgs/P1010430.jpg",
            "Panasonic G7",
            "20 mm",
            "f/5.6",
            "1/8s",
            "14-35 mm kit lens"
        ],
        [   
            "imgs/P1010327.jpg",
            "Panasonic G7",
            "42 mm",
            "f/5.6",
            "1/8s",
            "14-35 mm kit lens"
        ],
        [
            "imgs/P1010415.jpg",
            "Panasonic G7",
            "20 mm",
            "f/5.6",
            "1/8s",
            "14-35 mm kit lens"
        ],
        [
            "imgs/P1010428.jpg",
            "Panasonic G7",
            "20 mm",
            "f/5.6",
            "1/8s",
            "14-35 mm kit lens"
        ],
        [
            "imgs/P1010425.jpg",
            "Panasonic G7",
            "20 mm",
            "f/5.6",
            "1/8s",
            "14-35 mm kit lens"
        ],
        [
            "imgs/P1010436.jpg",
            "Panasonic G7",
            "27 mm",
            "f/5.6",
            "1/8s",
            "14-35 mm kit lens"
        ],
        [
            "imgs/P1010324.jpg",
            "Panasonic G7",
            "33 mm",
            "f/5.6",
            "1/8s",
            "14-35 mm kit lens"
        ]
    ];


    //===============BEFORE/AFTER BUTTON BEHAVIOR======================//
    /**
     * 
     *Displays pre-edit or post-edit image based on the active before or after button. In this case the filenames of the pre-edit and post-edit image are the same but are located in different directories to prevent duplication issues.
     *
     * @param {HTMLButtonElement} btn - the button with the current active state.  
     * @param {HTMLImageElement} curImg - the img element which contains the current image path
     */

    function beforeAfterImg(btn, curImg){
        //Get path of the currently displayed image
        let curImgSrc = curImg.attributes.src.value;
        //Split the path into an array. The post and pre edited imgs share the same names but live in adjacent directories. Swap the directory name when setting the src attribute of the image element depending on before or after button press.
        let imgPathArr = curImgSrc.split("/");

        //Only change to post-edit image if the after button was clicked and pre-edit image is currenlty displayed
       if(btn.classList.contains("after")){
            curImg.attributes.src.value =  "imgs/"+imgPathArr[1];
        }else if(btn.classList.contains("before") /*&& imgPathArr.length == 1*/){
           //only change to pre-edit if the before button was clicked and the post-edit ( default ) image is currently displayed
           curImg.attributes.src.value = "preEdits/"+imgPathArr[1];
        }
    }
  
    baBtns.forEach(btn => {
        btn.addEventListener("click", function(){
            //because the baBtns array contains only two buttons, cycle through array and remove active class from each button
            resetBaBtn(true);
            beforeAfterImg(this, zoomedImg);
    
        })
    });

    //==================== IMAGE INFO BUTTON BEHAVIOR =======================//
    /**
     * Hides the image info box
     */
    function closeImgInfo(){
        imgInfoTri.classList.remove("showInfo");
        imgInfo.classList.remove("showInfo");
        open = false;
    }
    /**
     * Display or hides an image's info.
     * 
     * @param {Number} index - the numerical order of the currently displayed image.
     * @param {Array} imgArray - the array containing all image information.
     * @param {HTMLDivElement} infoBox - the html element that will contain the image information
     * @param {HTMLDivElement} infoTri - triangle shaped html element that appears atop the baox
     * @param {Boolean} isOpen - boolean denoting whether image information is display or not
     */

    function getImInfo(index, imgArray, infoBox, infoTri, isOpen){
        if(!isOpen){
             //create the html element containing image info
             infoBox.innerHTML =
             `
                 <p><b>Camera: </b> ${imgArray[index][1]}</p>
                 <p><b>Focal Length: </b>${imgArray[index][2]}</p>
                 <p><b>F Number: </b> ${imgArray[index][3]}</p>
                 <p><b>Exposure Time: </b> ${imgArray[index][4]}</p>
                 <p><b>Lens: </b> ${imgArray[index][5]}</p>
             `;
 
            ////console.log("The index of the inner array: ", index);
             infoTri.classList.add("showInfo");
             infoBox.classList.add("showInfo");
             open = true;
         }else if(isOpen){
            closeImgInfo();
        }
    }
    infoBtn.addEventListener("click", () =>{
        //The image that is currently full-scale
       // //console.log("is image info open ? ", open);
        let imgNum = zoomedImg.attributes.data_num.value;
        getImInfo(imgNum, imgInfoArray, imgInfo, imgInfoTri , open);
    });
    //============== DIRECTIONAL ARROW (PREVIOUS IMAGE AND NEXT IMAGE) BUTTON BEHAVIOR ===========//
    let previousImgBtn = document.querySelector(".pointer-left");
    let nextImgBtn = document.querySelector(".pointer-right");
    let prevNextBtns = [ previousImgBtn, nextImgBtn ];

    prevNextBtns.forEach(btn => {
        btn.addEventListener("click", function(){
            resetBaBtn(false);
            closeImgInfo();    
            //image paths are held in imgInfoArray[i][0] where i is 0 <= i <= imgInfoArray.length. The index of the current displayed image is the data_num attribute value minus 1. 
            //console.log("previous or next button clicked");
            //Determine if previous or next button clicked
            switch(this.classList.contains("pointer-left")){
                case true:
                    //the previous button was clicked
                    //set the zoomedImg source attribute to the path of the previous img in the imgInfoArray only while the index is larger than 0
                    if(imgIndex > 0){
                        zoomedImg.attributes.src.value = imgInfoArray[imgIndex - 1][0];
                        zoomedImg.attributes.data_num.value = (imgIndex - 1).toString();
                        imgIndex -= 1;
                    }
                    break;
                case false:
                    //the next button was clicked
                    //set the zoomedImg source attribute to the path of the next image in imgInfoArray and update its data_num attribute to data_num + 1
                    if(imgIndex < imgInfoArray.length - 1){
                        zoomedImg.attributes.src.value = imgInfoArray[imgIndex + 1][0];
                        zoomedImg.attributes.data_num.value =(imgIndex + 1).toString();
                        imgIndex += 1;
                    }
                    break;
            }
          
          imgCount.innerHTML = parseInt(zoomedImg.attributes.data_num.value ) +1;
        });
    });



}//EOF