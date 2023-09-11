 alert(window.innerWidth); 

 const mediaQuery = window.matchMedia('(min-width: 1800px) and (orientation:landscape');

 const breadcrumb = document.querySelector(".ProductItem-nav-breadcrumb-link, .ProductItem-nav-breadcrumb-separator");
 
 
 if ((mediaQuery.matches) && (breadcrumb != null))
 {
    breadcrumb.style.transform = "translateY(-30%) !important"; 
   alert('landscape');
 }