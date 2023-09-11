 alert(window.innerWidth); 

 const mediaQuery = window.matchMedia('(min-width: 1800px) and (orientation:landscape');

 
 
 if ((mediaQuery.matches) && (document.querySelector(".ProductItem-nav-breadcrumb-link") && (document.querySelector(".ProductItem-nav-breadcrumb-separator"))) != null)
 {
    document.querySelector(".ProductItem-nav-breadcrumb-link").style.transform = "translateY(-30%) !important"; 

    document.querySelector(".ProductItem-nav-breadcrumb-separator").style.transform = "translateY(-30%) !important";
   alert('landscape');
 }

 //https://css-tricks.com/working-with-javascript-media-queries/
