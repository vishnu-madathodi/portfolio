// jQuery for nav slide up and down animation
$("#menuToggle").on("click", ()=>{
    let $navOptions = $("#navOptions");
    if($navOptions.is(":hidden")){
        $navOptions.slideDown(200);
    }
    else{
        $navOptions.slideUp(200);
    }
});

// script to switch theme modes
function switchModes() {
  document.body.classList.toggle("theme-dark");
}
