!function(e,t){"use strict";var n="AxmTYklsjo190QW",i="sans-serif",o="serif",s={normal:"400",bold:"700"},a={tolerance:2,delay:100,glyphs:"",success:function(){},error:function(){},timeout:5e3,weight:"400",style:"normal"},r=["display:block","position:absolute","top:-999px","left:-999px","font-size:48px","width:auto","height:auto","line-height:normal","margin:0","padding:0","font-variant:normal","white-space:nowrap"],c='<div style="%s">'+n+"</div>",f=function(){this.fontFamily="",this.appended=!1,this.serif=void 0,this.sansSerif=void 0,this.parent=void 0,this.options={}};f.prototype.getMeasurements=function(){return{sansSerif:{width:this.sansSerif.offsetWidth,height:this.sansSerif.offsetHeight},serif:{width:this.serif.offsetWidth,height:this.serif.offsetHeight}}},f.prototype.load=function(){function n(e){return r.concat(["font-weight:"+m.weight,"font-style:"+m.style]).concat("font-family:"+e).join(";")}function s(e,t,n){return Math.abs(e.width-t.offsetWidth)>n||Math.abs(e.height-t.offsetHeight)>n}function a(){return(new Date).getTime()-h.getTime()>m.timeout}var f,h=new Date,l=this,d=l.serif,p=l.sansSerif,u=l.parent,y=l.appended,m=this.options,g=m.reference,F=c.replace(/\%s/,n(i)),v=c.replace(/\%s/,n(o));u||(u=l.parent=t.createElement("div")),u.innerHTML=F+v,p=l.sansSerif=u.firstChild,d=l.serif=p.nextSibling,m.glyphs&&(p.innerHTML+=m.glyphs,d.innerHTML+=m.glyphs),function w(){g||(g=t.body),!y&&g&&(g.appendChild(u),y=l.appended=!0,f=l.getMeasurements(),p.style.fontFamily=l.fontFamily+", "+i,d.style.fontFamily=l.fontFamily+", "+o),y&&f&&(s(f.sansSerif,p,m.tolerance)||s(f.serif,d,m.tolerance))?m.success():a()?m.error():!y&&"requestAnimationFrame"in window?e.requestAnimationFrame(w):e.setTimeout(w,m.delay)}()},f.prototype.checkFontFaces=function(n){var i=this;t.fonts.forEach(function(t){t.family.toLowerCase()===i.fontFamily.toLowerCase()&&(s[t.weight]||t.weight)===""+i.options.weight&&t.style===i.options.style&&t.load().then(function(){i.options.success(),e.clearTimeout(n)})})},f.prototype.init=function(n,i){var o;for(var s in a)i.hasOwnProperty(s)||(i[s]=a[s]);this.options=i,this.fontFamily=n,!i.glyphs&&"fonts"in t?(i.timeout&&(o=e.setTimeout(function(){i.error()},i.timeout)),this.checkFontFaces(o)):this.load()};var h=function(e,t){var n=new f;return n.init(e,t),n};e.FontFaceOnload=h}(this,this.document),function(e){function t(t,n){return"addEventListener"in e?e.addEventListener(t,n,!1):"attachEvent"in e?e.attachEvent("on"+t,n):void 0}var n,i=e.document,o=[".FONT_NAME.generatedcontent .icon-fallback-text .icon { display: inline-block; }",".FONT_NAME.generatedcontent .icon-fallback-text .text { clip: rect(0 0 0 0); overflow: hidden; position: absolute; height: 1px; width: 1px; }",".FONT_NAME .icon-fallback-glyph .icon:before { font-size: 1em; font-size: inherit; line-height: 1; line-height: inherit; }"];AFontGarde=function(e,s){function a(){if(!c){if(c=!0,"undefined"==typeof FontFaceOnload)throw"FontFaceOnload is a prerequisite.";n||(n=i.getElementsByTagName("script")[0]);var t=i.createElement("style"),a=o.join("\n").replace(/FONT_NAME/gi,r);t.setAttribute("type","text/css"),t.styleSheet?t.styleSheet.cssText=a:t.appendChild(i.createTextNode(a)),n.parentNode.insertBefore(t,n);var f={timeout:5e3,success:function(){i.documentElement.className+=" "+r,s&&s.success&&s.success()}};if("string"==typeof s)f.glyphs=s;else for(var h in s)s.hasOwnProperty(h)&&"success"!==h&&(f[h]=s[h]);FontFaceOnload(e,f)}}var r=e.toLowerCase().replace(/\s/g,""),c=!1;t("DOMContentLoaded",a),t("readystatechange",a),t("load",a),"complete"===i.readyState&&a()}}(this);