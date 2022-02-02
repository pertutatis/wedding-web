<script setup lang="ts">
let ifr = document.getElementById("JotFormIFrame-220224174899360"); 
if (ifr) { 
  var src = ifr.src; 
  var iframeParams = []; 
  
  if (window.location.href && window.location.href.indexOf("?") > -1) { 
    iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&')); 
  } 
  
  if (src && src.indexOf("?") > -1) { 
    iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&")); 
    src = src.substr(0, src.indexOf("?")) 
  } 
  
  iframeParams.push("isIframeEmbed=1"); 
  ifr.src = src + "?" + iframeParams.join('&'); 
} 

window.handleIFrameMessage = function(e) { 
  if (typeof e.data === 'object') { return; } 
  
  var args = e.data.split(":"); 
  if (args.length > 2) { 
    iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); 
  } else { 
    iframe = document.getElementById("JotFormIFrame"); 
  } 
  if (!iframe) { return; } 
  
  switch (args[0]) { case "scrollIntoView": iframe.scrollIntoView(); break; case "setHeight": iframe.style.height = args[1] + "px"; break; case "collapseErrorPage": if (iframe.clientHeight > window.innerHeight) { iframe.style.height = window.innerHeight + "px"; } break; case "reloadPage": window.location.reload(); break; case "loadScript": if( !window.isPermitted(e.origin, ['jotform.com', 'jotform.pro']) ) { break; } var src = args[1]; if (args.length > 3) { src = args[1] + ':' + args[2]; } var script = document.createElement('script'); script.src = src; script.type = 'text/javascript'; document.body.appendChild(script); break; case "exitFullscreen": if (window.document.exitFullscreen) window.document.exitFullscreen(); else if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen(); else if (window.document.mozCancelFullscreen) window.document.mozCancelFullScreen(); else if (window.document.webkitExitFullscreen) window.document.webkitExitFullscreen(); else if (window.document.msExitFullscreen) window.document.msExitFullscreen(); break; } var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false; if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) { var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)}; iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*"); } }; window.isPermitted = function(originUrl, whitelisted_domains) { var url = document.createElement('a'); url.href = originUrl; var hostname = url.hostname; var result = false; if( typeof hostname !== 'undefined' ) { whitelisted_domains.forEach(function(element) { if( hostname.slice((-1 * element.length - 1)) === '.'.concat(element) || hostname === element ) { result = true; } }); return result; } }; if (window.addEventListener) { window.addEventListener("message", handleIFrameMessage, false); } else if (window.attachEvent) { window.attachEvent("onmessage", handleIFrameMessage); }
</script>

<template>
  <section class="section reservation">
    <div class="section__wrapper reservation__wrapper">
      <div class="reservation__head">
        <h3 class="reservation__title">¡Que no pare la fiesta!</h3>
      </div>
      <div class="reservation__form">
        <p class="reservation__text">¿Crees que hay alguna canción que no puede faltar y que tenemos que tenerla en cuenta si o si? ¿No concibes una boda sin paquito el chocolatero? ¿hay un temazo que nos quieres dedicar? No hay, problema, lo tendremos en cuenta, solo dinoslo. Tambien decirte que igual algo de filtro haremos... que nos conocemos.</p>
        <iframe id="JotFormIFrame-220224174899360" title="New Customer Registration Form" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allowfullscreen="true" allow="geolocation; microphone; camera" src="https://form.jotform.com/220224174899360" frameborder="0" style=" min-width: 100%; height:539px; border:none;" scrolling="no" > </iframe>  
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.reservation {
  margin-bottom: 0;
}

.reservation__wrapper {
  position: relative;
  bottom: -50px;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 2;
    width: 100%;
    background: var(--background-color);
    height: 54px;
  }
}

.reservation__head {
  position: relative;
  padding: 24px;
  background-image: url(../assets/bg.jpg);
  background-image: url(../assets/bg.webp);
  background-size: cover;

  @media (min-width: 1024px) {
    padding-bottom: 184px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: .4;
  }
}

.reservation__form {
  position: relative;
  z-index: 2;
  background-color: var(--background-color);

  @media (min-width: 1024px) {
    max-width: 80%;
    margin: -160px auto 0;
  }
}

.reservation__title {
  position: relative;
  width: 100%;
  font-family: var(--primary-font);
  font-size: 34px;
  font-weight: bold;
  text-align: center;
  color: #fff;

  @media (min-width: 768px) {
    padding-top: 96px;
    padding-bottom: 96px;
  }
}

.reservation__text {
  max-width: 752px;
  margin: 0 auto 8px;
  padding-top: 24px;
  font-family: var(--secondary-font);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.44;
  color: var(--text-color);

  @media (min-width: 768px) {
    padding-left: 38px;
    padding-right: 38px;
    font-size: 18px;
  }
}
</style>
