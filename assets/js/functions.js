!function(a){function u(){this.nextSibling.style.opacity=1}function v(){this.nextSibling.style.opacity=0}var b=document.getElementById("mobile-toggle"),c=document.getElementById("fun1"),d=c.children[0],e=d.children,f="50px",g=window.getComputedStyle(e[1]).height,h=parseInt(g.slice(0,g.length-2),10),i=h*e.length,j=i+"px",k=!1;c.style.maxHeight=f,b.addEventListener("click",function(){k=!k,c.style.maxHeight=k?j:f}),a("#mobile-toggle").click(function(){a(this).toggleClass("on")});for(var l=document.getElementsByClassName("tooltip"),m=l.length;m--;){var n=l[m],o=n.title,p=n.coords.split(",").map(parseFloat),q=p[2],r=p[0]-q+"px",s=p[1]-q-30+"px",t=document.createElement("span");t.classList.add("tooltiptoggle"),t.style.top=s,t.style.left=r,t.textContent=o,n.parentElement.insertBefore(t,n.nextSibling),t.style.left=p[0]-t.getBoundingClientRect().width/2+"px",n.addEventListener("mouseover",u),n.addEventListener("mouseout",v)}a(window).scroll(function(){a(this).scrollTop()>1?a("header.fancy").addClass("sticky"):a("header.fancy").removeClass("sticky")})}(jQuery);
