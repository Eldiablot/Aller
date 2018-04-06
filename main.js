let monBouton = document.getElementById("bouton");
let block = document.getElementById("corps_page")

monBouton.onclick = function () {

   if (corps_page.style.display = "none")
   { 
        monBouton.style.display = "none";
        corps_page.style.display = "block";
    } else {
        block.display = "block";
    }
}


let maPageWeb = document.querySelector('html')

maPageWeb.onclick = function () {
   setTimeout(function(){alert("Salut voici mon site "); }, 10000);
}
let monImage = FIREFOX.querySelector('img');

monImage.onclick = function() {
    let maSrc = monImage.getAttribute('src');
    if(maSrc === 'images/firefox-icon.png') {
      monImage.setAttribute ('src','images/firefox2.png');
    } else {
      monImage.setAttribute ('src','images/firefox-icon.png');
    }
}
<form method="post" action="www.google.com">
<input type="text" name="q">
<input type="submit" value="Rechercher"> 




<script>
  (function() {
    var cx = '002987498994089218550:6irzm1z-jkc';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<gcse:search></gcse:search>