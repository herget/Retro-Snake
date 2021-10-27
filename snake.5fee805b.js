parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"S95d":[function(require,module,exports) {
var e=e||{};window.SNAKE=e,e.addEventListener=window.addEventListener?function(e,t,n,a){e.addEventListener(t,n,a)}:window.attachEvent?function(e,t,n){e.attachEvent("on"+t,n)}:void 0,e.removeEventListener=window.removeEventListener?function(e,t,n,a){e.removeEventListener(t,n,a)}:window.detachEvent?function(e,t,n){e.detachEvent("on"+t,n)}:void 0,e.Snake=e.Snake||function(){var e=[],t=function(){this.elm=null,this.elmStyle=null,this.row=-1,this.col=-1,this.xPos=-1e3,this.yPos=-1e3,this.next=null,this.prev=null};return function(n){if(n&&n.playingBoard){void 0===localStorage.jsSnakeHighScore&&localStorage.setItem("jsSnakeHighScore",0);var a=this,o=n.playingBoard,l=(0,1),d=-1,i=!0,s=!0,r=-1,c=[0,1,0,-1],u=[-1,0,1,0],h=[],g=[],m=80,k=!1,p=!1,y=document.getElementById("selectMode");y&&y.addEventListener("change",function(e){var t=(e=e||{}).target?parseInt(e.target.value):75;isNaN(t)?t=75:t<50&&(t=75),m=t,setTimeout(function(){document.getElementById("game-area").focus()},10)}),a.snakeBody={},a.snakeBody.b0=new t,a.snakeBody.b0.row=n.startRow||1,a.snakeBody.b0.col=n.startCol||1,a.snakeBody.b0.xPos=a.snakeBody.b0.row*o.getBlockWidth(),a.snakeBody.b0.yPos=a.snakeBody.b0.col*o.getBlockHeight(),a.snakeBody.b0.elm=f(),a.snakeBody.b0.elmStyle=a.snakeBody.b0.elm.style,o.getBoardContainer().appendChild(a.snakeBody.b0.elm),a.snakeBody.b0.elm.style.left=a.snakeBody.b0.xPos+"px",a.snakeBody.b0.elm.style.top=a.snakeBody.b0.yPos+"px",a.snakeBody.b0.next=a.snakeBody.b0,a.snakeBody.b0.prev=a.snakeBody.b0,a.snakeLength=1,a.snakeHead=a.snakeBody.b0,a.snakeTail=a.snakeBody.b0,a.snakeHead.elm.className=a.snakeHead.elm.className.replace(/\bsnake-snakebody-dead\b/,""),a.snakeHead.elm.className+=" snake-snakebody-alive",a.setPaused=function(e){p=e},a.getPaused=function(){return p},a.handleArrowKeys=function(e){if(!k&&!p){a.snakeLength;var t=-1;switch(e){case 37:case 65:t=3;break;case 38:case 87:t=0;break;case 39:case 68:t=1;break;case 40:case 83:t=2}r!==l&&(d=t),(2!==Math.abs(t-l)&&i||s)&&(r=t,i=!1,s=!1)}},a.go=function(){var e=a.snakeHead,t=a.snakeTail,n=o.grid;if(!0!==p){a.snakeTail=t.prev,a.snakeHead=t,n[t.row]&&n[t.row][t.col]&&(n[t.row][t.col]=0),-1!==r&&(l=r,-1!==d&&(r=d,d=-1)),i=!0,t.col=e.col+c[l],t.row=e.row+u[l],t.xPos=e.xPos+h[l],t.yPos=e.yPos+g[l],t.elmStyle||(t.elmStyle=t.elm.style),t.elmStyle.left=t.xPos+"px",t.elmStyle.top=t.yPos+"px",t.elm.classList.remove("snake-snakebody-block","snake-snakebody-alive"),e.elm.classList.add("snake-snakebody-block","snake-snakebody-alive");var s=document.getElementById("snakehead"),k=s.getBoundingClientRect().width,y=s.getBoundingClientRect().height,f=k/2-o.getBlockWidth()/2,v=y/2-o.getBlockHeight()/2;switch(-1!=r?r:l){case 0:s.style.transform="rotate(180deg)",s.style.left=t.xPos-f+"px",s.style.top=t.yPos-v+"px";break;case 1:s.style.transform="rotate(270deg)",s.style.left=t.xPos+"px",s.style.top=t.yPos-v+"px";break;case 2:s.style.transform="",s.style.left=t.xPos-f+"px",s.style.top=t.yPos+"px";break;case 3:s.style.transform="rotate(90deg)",s.style.left=t.xPos-f+"px",s.style.top=t.yPos-v+"px"}if(0===n[t.row][t.col])n[t.row][t.col]=1,setTimeout(function(){a.go()},m);else if(n[t.row][t.col]>0)a.handleDeath();else if(n[t.row][t.col]===o.getGridFoodValue()){if(n[t.row][t.col]=1,!a.eatFood())return void a.handleWin();setTimeout(function(){a.go()},m)}}else setTimeout(function(){a.go()},m)},a.eatFood=function(){e.length<=5&&v(10);for(var t,n=e.splice(0,5),l=n.length,d=a.snakeTail;l--;)t="b"+a.snakeLength++,a.snakeBody[t]=n[l],a.snakeBody[t].prev=d,a.snakeBody[t].elm.className=a.snakeHead.elm.className.replace(/\bsnake-snakebody-dead\b/,""),a.snakeBody[t].elm.className+=" snake-snakebody-alive",d.next=a.snakeBody[t],d=a.snakeBody[t];return a.snakeTail=a.snakeBody[t],a.snakeTail.next=a.snakeHead,a.snakeHead.prev=a.snakeTail,!!o.foodEaten()},a.handleDeath=function(){w(o.handleDeath)},a.handleWin=function(){w(o.handleWin)},a.rebirth=function(){k=!1,i=!0,s=!0,d=-1,a.eatFood()},a.reset=function(){if(!1!==k){for(var t,l=[],d=a.snakeHead.next;d!==a.snakeHead;)t=d.next,d.prev=null,d.next=null,l.push(d),d=t;a.snakeHead.next=a.snakeHead,a.snakeHead.prev=a.snakeHead,a.snakeTail=a.snakeHead,a.snakeLength=1;for(var i=0;i<l.length;i++)l[i].elm.style.left="-1000px",l[i].elm.style.top="-1000px",l[i].elm.className=a.snakeHead.elm.className.replace(/\bsnake-snakebody-dead\b/,""),l[i].elm.className+=" snake-snakebody-alive";e.concat(l),a.snakeHead.elm.className=a.snakeHead.elm.className.replace(/\bsnake-snakebody-dead\b/,""),a.snakeHead.elm.className+=" snake-snakebody-alive",a.snakeHead.row=n.startRow||1,a.snakeHead.col=n.startCol||1,a.snakeHead.xPos=a.snakeHead.row*o.getBlockWidth(),a.snakeHead.yPos=a.snakeHead.col*o.getBlockHeight(),a.snakeHead.elm.style.left=a.snakeHead.xPos+"px",a.snakeHead.elm.style.top=a.snakeHead.yPos+"px"}},v(10),h[0]=0,h[1]=o.getBlockWidth(),h[2]=0,h[3]=-1*o.getBlockWidth(),g[0]=-1*o.getBlockHeight(),g[1]=0,g[2]=o.getBlockHeight(),g[3]=0}function f(){var e=document.createElement("div");return e.className="snake-snakebody-block",e.style.left="-1000px",e.style.top="-1000px",e.style.width=o.getBlockWidth()+"px",e.style.height=o.getBlockHeight()+"px",e}function v(n){for(var a,l=f(),d=1;d<n;d++)(a=new t).elm=l.cloneNode(!0),a.elmStyle=a.elm.style,o.getBoardContainer().appendChild(a.elm),e[e.length]=a;(a=new t).elm=l,o.getBoardContainer().appendChild(a.elm),e[e.length]=a}function w(e){var t;t=localStorage.jsSnakeHighScore,a.snakeLength>t&&(alert("Congratulations! You have beaten your previous high score, which was "+t+"."),localStorage.setItem("jsSnakeHighScore",a.snakeLength)),a.snakeHead.elm.style.zIndex=function(e){var t,n=0,a=0;for(t in e)e[t].elm.currentStyle?a=parseFloat(e[t].elm.style["z-index"],10):window.getComputedStyle&&(a=parseFloat(document.defaultView.getComputedStyle(e[t].elm,null).getPropertyValue("z-index"),10)),!isNaN(a)&&a>n&&(n=a);return n+1}(a.snakeBody),a.snakeHead.elm.className=a.snakeHead.elm.className.replace(/\bsnake-snakebody-alive\b/,""),a.snakeHead.elm.className+=" snake-snakebody-dead",k=!0,e()}}}(),e.Food=e.Food||function(){var e=0;function t(e,t){return Math.floor(Math.random()*(t+1-e))+e}return function(n){if(n&&n.playingBoard){var a,o,l=n.playingBoard,d=e++,i=document.createElement("div");i.setAttribute("id","snake-food-"+d),i.className="snake-food-block",i.style.width=l.getBlockWidth()+"px",i.style.height=l.getBlockHeight()+"px",i.style.left="-1000px",i.style.top="-1000px",l.getBoardContainer().appendChild(i),this.getFoodElement=function(){return i},this.randomlyPlaceFood=function(){l.grid[a]&&l.grid[a][o]===l.getGridFoodValue()&&(l.grid[a][o]=0);for(var e=0,n=0,d=0,s=l.grid.length-1,r=l.grid[0].length-1;0!==l.grid[e][n];)if(e=t(1,s),n=t(1,r),++d>2e4)return!1;return l.grid[e][n]=l.getGridFoodValue(),a=e,o=n,i.style.top=e*l.getBlockHeight()+"px",i.style.left=n*l.getBlockWidth()+"px",!0}}}}(),e.Board=e.Board||function(){var t=0;function n(e){var t,n=0,a=0;for(t in e)e[t].elm.currentStyle?a=parseFloat(e[t].elm.style["z-index"],10):window.getComputedStyle&&(a=parseFloat(document.defaultView.getComputedStyle(e[t].elm,null).getPropertyValue("z-index"),10)),!isNaN(a)&&a>n&&(n=a);return n+1}return function(a){var o,l,d,i,s,r,c,u,h,g,m,k=this,p=t++,y=a||{},f=250,v=250,w=1,B=!1;function b(){(s=document.createElement("div")).setAttribute("id","playingField"),s.className="snake-playing-field",e.addEventListener(s,"click",function(){i.focus()},!1),(m=document.createElement("div")).className="modal-wrapper",m.innerHTML="<div class='modal'><div class='snake-pause-screen'><div>[Paused]</div> <p>Press [space] to unpause.</p></div></div>",(r=document.createElement("div")).className="snake-panel-component",r.innerHTML="Length: 1",(c=document.createElement("div")).className="snake-panel-component",c.innerHTML="Highscore: "+(localStorage.jsSnakeHighScore||0),u=function(){var t=document.createElement("div");t.id="sbWelcome"+p,t.className="modal-wrapper";var n=document.createElement("div");n.className="modal";y.fullScreen&&"On Windows, press F11 to play in Full Screen mode.";n.innerHTML='<div class="snake-welcome-dialog"><h1>Retro Snake</h1><p class="instructions">Swipe <svg viewBox="0 0 24 24" height="24" width="24" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-ea9ulj-0 bWRyML"><title>Swipe icon</title><rect width="16" height="16" fill="none"></rect><path d="M18.89 14.75l-4.09-2.04c-.28-.14-.58-.21-.89-.21H13v-6c0-.83-.67-1.5-1.5-1.5S10 5.67 10 6.5v10.74l-3.25-.74a.99.99 0 00-.92.28l-.83.84 4.54 4.79c.38.38 1.14.59 1.67.59h6.16c1 0 1.84-.73 1.98-1.72l.63-4.46c.12-.85-.32-1.68-1.09-2.07z"></path><path d="M20.13 3.87C18.69 2.17 15.6 1 12 1S5.31 2.17 3.87 3.87L2 2v5h5L4.93 4.93c1-1.29 3.7-2.43 7.07-2.43s6.07 1.14 7.07 2.43L17 7h5V2l-1.87 1.87z"></path></svg> or use the <strong>arrow keys </strong><svg viewBox="0 0 16 16" height="20" width="20" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-ea9ulj-0 bWRyML"><title>ArrowRightSquareFill icon</title><path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"></path></svg> on your keyboard to play the game.</p></div>';var a=document.createElement("button");a.appendChild(document.createTextNode("Play Game"));var o=function(){e.removeEventListener(window,"keyup",l,!1),t.style.display="none",k.setBoardState(1),k.getBoardContainer().focus()},l=function(e){if(!e)var e=window.event;var t=e.which?e.which:e.keyCode;32!==t&&13!==t||o()};return e.addEventListener(window,"keyup",l,!1),e.addEventListener(a,"click",o,!1),n.appendChild(a),t.appendChild(n),t}(),h=H("You died :(","sbTryAgain","snake-try-again-dialog"),g=H("You win! :D","sbWin","snake-win-dialog"),e.addEventListener(i,"keyup",function(e){if(!e)e=window.event;return e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),!1},!1),i.className="snake-game-container",elmFooter=document.querySelector(".snake-footer"),elmFooter.appendChild(r),i.appendChild(m),i.appendChild(s),i.appendChild(u),i.appendChild(h),i.appendChild(g),l=new e.Snake({playingBoard:k,startRow:20,startCol:20}),o=new e.Food({playingBoard:k}),u.style.display="block";var t=new Hammer.Manager(i),n=new Hammer.Swipe,a=function(e){1===w?(l.rebirth(),l.handleArrowKeys(e),k.setBoardState(2),l.go()):l.handleArrowKeys(e)};t.add(n),t.on("swipeleft",function(){a(37)}),t.on("swiperight",function(){a(39)}),t.on("swipeup",function(){a(38)}),t.on("swipedown",function(){a(40)})}function H(t,n,a){var o=document.createElement("div");o.id=n+p,o.className="modal-wrapper";var l=document.createElement("div");l.className="modal",l.innerHTML="<div class='"+a+"'>Retro Snake <p>"+t+"</p></div>";var d=document.createElement("button");d.appendChild(document.createTextNode("Play Again?"));var i=function(){o.style.display="none",k.resetBoard(),k.setBoardState(1),k.getBoardContainer().focus()};return e.addEventListener(window,"keyup",function(e){if(0===w&&"block"===o.style.display){e||(e=window.event);var t=e.which?e.which:e.keyCode;32!==t&&13!==t||i()}},!0),e.addEventListener(d,"click",i,!1),l.appendChild(d),o.appendChild(l),o}function S(e){Math.max(n(l.snakeBody),n({tmp:{elm:o.getFoodElement()}}));i.removeChild(e),i.appendChild(e),e.style.display="block",k.setBoardState(0)}k.grid=[],k.setPaused=function(e){B=e,l.setPaused(e),m.style.display=B?"block":"none"},k.getPaused=function(){return B},k.resetBoard=function(){e.removeEventListener(i,"keydown",d,!1),l.reset(),r.innerHTML="Length: 1",k.setupPlayingField()},k.getBoardState=function(){return w},k.setBoardState=function(e){w=e},k.getGridFoodValue=function(){return-1},k.getPlayingFieldElement=function(){return s},k.setBoardContainer=function(e){"string"==typeof e&&(e=document.getElementById(e)),e!==i&&(i=e,s=null,k.setupPlayingField())},k.getBoardContainer=function(){return i},k.getBlockWidth=function(){return 10},k.getBlockHeight=function(){return 10},k.setupPlayingField=function(){var t,n,a,r;s||b(),!0===y.fullScreen?(0,0,r=0,"number"==typeof window.innerWidth?r=window.innerWidth:document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?r=document.documentElement.clientWidth:document.body&&(document.body.clientWidth||document.body.clientHeight)&&(r=document.body.clientWidth),t=r,a=0,"number"==typeof window.innerHeight?a=window.innerHeight:document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?a=document.documentElement.clientHeight:document.body&&(document.body.clientWidth||document.body.clientHeight)&&(a=document.body.clientHeight),n=a):(y.top,y.left,t=y.width,n=y.height);var c=k.getBlockWidth()+t%k.getBlockWidth(),u=Math.min(f*k.getBlockWidth()-c,t-c),h=k.getBlockHeight()+n%k.getBlockHeight(),g=Math.min(v*k.getBlockHeight()-h,n-h);s.style.left=k.getBlockWidth()+"px",s.style.top=k.getBlockHeight()+"px",s.style.width=u+"px",s.style.height=g+"px";var m=h-k.getBlockHeight();k.getBlockHeight(),Math.round((m-30)/2);k.grid=[];for(var p=u/k.getBlockWidth()+2,w=g/k.getBlockHeight()+2,B=0;B<w;B++){k.grid[B]=[];for(var H=0;H<p;H++)k.grid[B][H]=0===H||0===B||H===p-1||B===w-1?1:0}o.randomlyPlaceFood(),d=function(t){if(!t)t=window.event;var n=t.which?t.which:t.keyCode;if(1===k.getBoardState()){if(!(n>=37&&n<=40)&&87!==n&&65!==n&&83!==n&&68!==n)return;e.removeEventListener(i,"keydown",d,!1),d=function(e){if(!e)e=window.event;var t=e.which?e.which:e.keyCode;return 32===t&&0!=k.getBoardState()&&k.setPaused(!k.getPaused()),l.handleArrowKeys(t),e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),!1},e.addEventListener(i,"keydown",d,!1),l.rebirth(),l.handleArrowKeys(n),k.setBoardState(2),l.go()}return t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),!1},e.addEventListener(i,"keydown",d,!1)},k.foodEaten=function(){return r.innerHTML="Length: "+l.snakeLength,l.snakeLength>localStorage.jsSnakeHighScore&&(localStorage.setItem("jsSnakeHighScore",l.snakeLength),c.innerHTML="Highscore: "+localStorage.jsSnakeHighScore),!!o.randomlyPlaceFood()},k.handleDeath=function(){S(h)},k.handleWin=function(){S(g)},y.fullScreen=void 0!==y.fullScreen&&y.fullScreen,y.top=void 0===y.top?0:y.top,y.left=void 0===y.left?0:y.left,y.width=void 0===y.width?400:y.width,y.height=void 0===y.height?400:y.height,y.fullScreen&&e.addEventListener(window,"resize",function(){k.setupPlayingField()},!1),k.setBoardState(0),y.boardContainer&&k.setBoardContainer(y.boardContainer)}}();
},{}]},{},["S95d"], null)
//# sourceMappingURL=/snake.5fee805b.js.map