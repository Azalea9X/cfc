 alert(window.innerWidth); 

 const mediaQuery = window.matchMedia('(min-width: 1800px) and (orientation:landscape');
 if (mediaQuery.matches) {
   alert('landscape');
 }