(this["webpackJsonpthe-bs-game"]=this["webpackJsonpthe-bs-game"]||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n.n(a),o=n(32),r=n.n(o),c=n(0),s=n(2),l=n(3),d=n(26),h=n(10),u=n(4),m=n(1),p=n(8),v=n(13),b=n(34),f=n(33),g=function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";Object(c.a)(this,e),this.baseUrl=void 0,this.gltfLoader=void 0,this.dracoLoader=void 0,this.loadedModels=void 0,this.initialize=function(){},this.loadModels=function(e,n){var a=0;e.forEach((function(i){t.loadModel(i,(function(o){t.loadedModels=Object(v.a)(Object(v.a)({},t.loadedModels),{},Object(p.a)({},o.name,o)),a+=1,i.onLoaded&&i.onLoaded(o),a===e.length&&n(t.loadedModels)}))}))},this.loadModel=function(e,n){t.gltfLoader.load("".concat(t.baseUrl).concat(e.path),(function(t){n(Object(v.a)(Object(v.a)({},e),{},{object:t.scene}))}))},this.baseUrl=n,this.gltfLoader=new f.a,this.dracoLoader=new b.a,this.loadedModels={}},O=n(6),w=n(5),y=n(25),j=n(21),E=n(22),S=(n(42),function e(){Object(c.a)(this,e)});S.shallowEqual=function(e,t){if(void 0===e&&void 0===t)return!0;if(void 0===e||void 0===t)return!1;var n=Object.keys(e),a=Object.keys(t);return n.length===a.length&&!(n.filter((function(n){return e[n]!==t[n]})).length>0)};var D,M,x,T,C,k,z,L,P,A,R,N=S;function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"normal";return function(t,n){var a="_".concat(n.toString());return Object.defineProperty(t,n,{set:function(t){var i=this[a];("normal"===e&&i!==t||"shalowCompare"===e&&!N.shallowEqual(i,t))&&(this.isDirty||(this.isDirty={}),this.isDirty[n]=!0,this.isAnyDirty=!0,this[a]=t)},get:function(){return this[a]},enumerable:!0,configurable:!0})}}var G,U=(D=H("shalowCompare"),M=H("shalowCompare"),x=H("shalowCompare"),T=H(),C=H(),k=function e(){var t=this;Object(c.a)(this,e),this.isAnyDirty=!1,this.isDirty=void 0,this.clearDirty=function(){t.isDirty={},t.isAnyDirty=!1},Object(j.a)(this,"position",z,this),Object(j.a)(this,"rotation",L,this),Object(j.a)(this,"destination",P,this),Object(j.a)(this,"selected",A,this),Object(j.a)(this,"highlighted",R,this),this.isDirty={},this.position={x:0,y:0,z:0},this.rotation={x:0,y:0,z:0},this.destination={x:0,y:0,z:0},this.selected=!1,this.highlighted=!1},z=Object(E.a)(k.prototype,"position",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=Object(E.a)(k.prototype,"rotation",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=Object(E.a)(k.prototype,"destination",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=Object(E.a)(k.prototype,"selected",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=Object(E.a)(k.prototype,"highlighted",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k),W=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).movementSpeed=5,e.destinationReached=void 0,e}return Object(u.a)(n,[{key:"update",value:function(e,t){var a=this.worldData;a.position.x===a.destination.x&&a.position.z===a.destination.z||(a.position=this.move(a.position,a.destination,t),a.position.x===a.destination.x&&a.position.z===a.destination.z&&this.destinationReached&&this.destinationReached(this)),Object(O.a)(Object(w.a)(n.prototype),"update",this).call(this,e,t)}},{key:"move",value:function(e,t,n){var a=t.x-e.x,i=t.y-e.y,o=t.z-e.z,r=Math.sqrt(a*a+i*i+o*o);if(0===r)return e;var c=a/r*n*this.movementSpeed,s=i/r*n*this.movementSpeed,l=o/r*n*this.movementSpeed;return r<Math.sqrt(c*c+s*s+l*l)?t:{x:c+e.x,y:s+e.y,z:l+e.z}}}]),n}(function(){function e(t,n){var a=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;Object(c.a)(this,e),this.key=void 0,this.model=void 0,this.textContainer=void 0,this.lastTextUpdate=0,this.selectedCircleMesh=void 0,this.worldData=void 0,this.circle=function(e,t){var n=a.selectedCircleMesh,i=n.material.color.getHex(),o=i;"highlighted"===t?o=3355443:"selected"===t&&(o=3368601),n.visible===e&&o===i||(n.visible=e,n.material.color.setHex(o))},this.key=t,this.worldData=i||new U;var o=new m.ib(3.5,3.6,32),r=new m.M({color:53700249});this.selectedCircleMesh=new m.L(o,r),this.selectedCircleMesh.rotation.x=-Math.PI/2,this.selectedCircleMesh.position.y=0,this.selectedCircleMesh.visible=!1,this.textContainer=document.createElement("div"),this.textContainer.className="text-label",this.textContainer.style.marginTop="-1em";var s=new y.a(this.textContainer);s.position.set(0,13,0);var l=new m.r;l.add(s),l.add(this.selectedCircleMesh),l.add(n.clone()),l.userData={gameObjectKey:t},this.model=l}return Object(u.a)(e,[{key:"update",value:function(e,t){if(this.worldData.isAnyDirty){var n=this.worldData,a=n.position,i=n.selected,o=n.rotation,r=n.highlighted,c=n.isDirty,s=n.clearDirty;if(c.position&&(this.model.position.x=a.x,this.model.position.y=a.y,this.model.position.z=a.z),c.rotation&&(this.model.rotation.x=o.x,this.model.rotation.y=o.y,this.model.rotation.z=o.z),(c.selected||c.highlighted)&&(this.circle(i,"selected"),i||this.circle(r,"highlighted")),this.lastTextUpdate+100<=e||0===this.lastTextUpdate){var l=a.x,d=a.z,h=Math.round(e).toString(),u=l.toFixed(2).toString(),m=d.toFixed(2).toString();l>0&&(u="&nbsp;".concat(u)),d>0&&(m="&nbsp;".concat(m)),this.textContainer.innerHTML="x: ".concat(u," <br />z: ").concat(m,"<br />update: ").concat(h,"<br />"),this.lastTextUpdate=e}s()}}}]),e}()),I=n(17),Y=function(){(new Date).getTime();var e=function(e){};return e},F=Y("server_"),_=function e(){var t=this;Object(c.a)(this,e),this.apiUri=void 0,this.wsUri=void 0,this.socket=void 0,this.messageHandlers=void 0,this.connectToWebsocket=function(e){return new Promise((function(n,a){fetch("".concat(t.apiUri,"/register"),{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({user_id:e})}).then((function(e){return e.json()})).then((function(e){return e.url})).then((function(e){var a=new WebSocket("".concat(t.wsUri,"/").concat(e));a.onopen=function(){a.onmessage=t.onMessageRecived,t.socket=a,n(!0)}})).catch((function(){return a()}))}))},this.createUnit=function(e,n){var a;null===(a=t.socket)||void 0===a||a.send(JSON.stringify({CreateUnit:{position:[e,n]}}))},this.setUnitPosition=function(e,n,a){var i;null===(i=t.socket)||void 0===i||i.send(JSON.stringify({SetUnitPosition:{position:[n,a],id:e}}))},this.setUnitDestination=function(e,n,a){var i;null===(i=t.socket)||void 0===i||i.send(JSON.stringify({SetUnitDestination:{destination:[n,a],id:e}}))},this.fetchInitialGameState=function(){return new Promise((function(e,n){fetch("".concat(t.apiUri,"/game")).then((function(e){return e.json()})).then((function(t){return e(t)})).catch((function(){return n()}))}))},this.addMessageHandler=function(e,n){t.messageHandlers=[].concat(Object(I.a)(t.messageHandlers),[{type:e,handler:n}])},this.notifyHandlers=function(e,n){t.messageHandlers.filter((function(t){return t.type===e})).forEach((function(e){return e.handler(n)}))},this.onMessageRecived=function(e){var n=JSON.parse(e.data);F("message",n),n.CreateUnit&&t.notifyHandlers("CreateUnit",n),n.SetUnitDestination&&t.notifyHandlers("SetUnitDestination",n),n.SetUnitPosition&&t.notifyHandlers("SetUnitPosition",n)},this.apiUri="https://thebsgame.developer.dk",this.wsUri="wss://thebsgame.developer.dk",this.messageHandlers=[]};!function(e){e[e.ShowSmallGrid=0]="ShowSmallGrid",e[e.ShowMediumGrid=1]="ShowMediumGrid",e[e.ShowLargeGrid=2]="ShowLargeGrid"}(G||(G={}));var B=function e(t){var n=this;Object(c.a)(this,e),this.scene=void 0,this.debugOptions=void 0,this.initialize=function(){var e=new m.a(6710886,.6);n.scene.add(e);var t=new m.k(14674943,.7);t.position.set(500,800,500),t.castShadow=!0,t.shadow.bias=-1e-4,t.shadow.mapSize.width=1e4,t.shadow.mapSize.height=1e4;var a=500;t.shadow.camera.left=-a,t.shadow.camera.right=a,t.shadow.camera.top=a,t.shadow.camera.bottom=-a,t.shadow.camera.far=2e3,n.scene.add(t);var i=(new m.rb).load("assets/textures/terrain/grasslight-big.jpg");i.wrapS=m.hb,i.wrapT=m.hb,i.repeat.set(200,200),i.anisotropy=16,i.encoding=m.yb;var o=new m.N({map:i}),r=new m.L(new m.Y(1e3,1e3),o);r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.scene.add(r),n.scene.background=new m.j(13426943),n.scene.fog=new m.o(13426943,75,150),n.initializeDebug()},this.setDebug=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];t.forEach((function(e){n.debugOptions=Object(v.a)(Object(v.a)({},n.debugOptions),{},Object(p.a)({},G[e],!0))}))},this.initializeDebug=function(){if(n.debugOptions.ShowSmallGrid){var e=new m.q(1e3,1e3,13421772,13421772);n.scene.add(e)}if(n.debugOptions.ShowMediumGrid){var t=new m.q(1e3,100,3355443,3355443);t.material.linewidth=3,n.scene.add(t)}if(n.debugOptions.ShowLargeGrid){var a=new m.q(1e3,10,10066329,10066329);a.material.linewidth=5,n.scene.add(a)}},this.scene=t,this.debugOptions={}},X=function e(t){var n=this;Object(c.a)(this,e),this.setGameObjectWorldDataListeners=void 0,this.scene=void 0,this.gameObjects=void 0,this.worldEnviroment=void 0,this.initialize=function(){n.worldEnviroment.setDebug(G.ShowMediumGrid,G.ShowLargeGrid),n.worldEnviroment.initialize()},this.update=function(e,t){n.gameObjects.forEach((function(n){return n.update(e,t)}))},this.addGameObject=function(e){n.scene.add(e.model),n.gameObjects=[].concat(Object(I.a)(n.gameObjects),[e])},this.addSetGameObjectWorldDataListener=function(e,t){n.setGameObjectWorldDataListeners=[].concat(Object(I.a)(n.setGameObjectWorldDataListeners),[{type:e,handler:t}])},this.notifySetGameObjectWorldDataListener=function(e,t,a){n.setGameObjectWorldDataListeners.filter((function(e){return e.type===t})).forEach((function(t){t.handler(e,a)}))},this.setGameObjectWorldData=function(e,t,a){n.gameObjects.filter((function(t){return t.key===e})).forEach((function(i){var o=i;!N.shallowEqual(o.worldData[t],a)&&(o.worldData[t]=a,n.notifySetGameObjectWorldDataListener(e,t,o.worldData))}))},this.setSelectedGameObjectsWorldData=function(e,t){n.forEachSelectedGameObject((function(a){n.setGameObjectWorldData(a.key,e,t)}))},this.forEachSelectedGameObject=function(e){n.gameObjects.filter((function(e){return e.worldData.selected})).forEach(e)},this.setSelectedGameObjectsDestination=function(e){n.forEachSelectedGameObject((function(t){n.setGameObjectWorldData(t.key,"destination",Object(v.a)(Object(v.a)({},t.worldData.destination),{},{x:e.x,z:e.z}))}))},this.getSceneIntersection=function(e){return e.intersectObject(n.scene,!0)},this.getGameObjectIntersection=function(e){var t=e.intersectObjects(n.gameObjects.map((function(e){return e.model})),!0),a=null;return t.forEach((function(e){var t=n.getGameObjectRoot(e.object);!a&&t&&(a=t)})),a},this.hoverGameObject=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=n.gameObjects.find((function(t){return t.worldData.highlighted||null!==e&&t.key===e.key}));if(t){var a=t.worldData;null!==e&&t.key===e.key?a.highlighted=!0:a.highlighted=!1}},this.selectGameObject=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;n.gameObjects.filter((function(t){return t.worldData.selected||null!==e&&t.key===e.key})).forEach((function(n){var a=n.worldData;null!==e&&n.key===e.key?a.selected=!0:t&&(a.selected=!1)}))},this.getGameObjectByKey=function(e){var t=n.gameObjects.filter((function(t){return t.key===e}));return t.length>0?t[0]:null},this.getGameObjectRoot=function(e){return e.userData.gameObjectKey?n.getGameObjectByKey(e.userData.gameObjectKey):e.parent?n.getGameObjectRoot(e.parent):null},this.setGameObjectWorldDataListeners=[],this.scene=t,this.worldEnviroment=new B(t),this.gameObjects=[]},V=n(35),Z=function e(t,n,a){var i=this;Object(c.a)(this,e),this.camera=void 0,this.scene=void 0,this.container=void 0,this.renderer=void 0,this.labelRenderer=void 0,this.clock=void 0,this.stats=void 0,this.fps=200,this.lastRender=Date.now(),this.updateTargets=void 0,this.initialize=function(){i.renderer.setPixelRatio(window.devicePixelRatio),i.renderer.setSize(window.innerWidth,window.innerHeight),i.renderer.outputEncoding=m.yb,i.renderer.shadowMap.enabled=!0,i.labelRenderer.setSize(window.innerWidth,window.innerHeight),i.labelRenderer.domElement.style.position="absolute",i.labelRenderer.domElement.style.top="0px",window.addEventListener("resize",i.handleWindowResize),i.container.appendChild(i.renderer.domElement),i.container.appendChild(i.labelRenderer.domElement),i.container.appendChild(i.stats.dom)},this.handleWindowResize=function(){i.camera.aspect=window.innerWidth/window.innerHeight,i.camera.updateProjectionMatrix(),i.renderer.setSize(window.innerWidth,window.innerHeight),i.labelRenderer.setSize(window.innerWidth,window.innerHeight)},this.addUpdateTarget=function(e){i.updateTargets=[].concat(Object(I.a)(i.updateTargets),[e])},this.start=function(){requestAnimationFrame(i.renderLoop)},this.renderLoop=function(e){var t=Date.now(),n=t-i.lastRender,a=1e3/i.fps;if(n>a){var o=i.clock.getDelta();i.updateTargets.forEach((function(t){return t.update(e,o)})),i.stats.update(),i.lastRender=t-n%a,i.renderer.render(i.scene,i.camera),i.labelRenderer.render(i.scene,i.camera)}requestAnimationFrame(i.renderLoop)},this.container=t,this.scene=n,this.camera=a,this.renderer=new m.xb({antialias:!0}),this.clock=new m.i,this.updateTargets=[],this.labelRenderer=new y.b,this.stats=Object(V.a)()},K=n(11),q={type:"change"},J={type:"start"},Q={type:"end"},$=Y("camControls_","warn"),ee=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e,a){var i;return Object(c.a)(this,n),(i=t.call(this,e,a)).screenSpacePanning=!1,i.mouseButtons.LEFT=m.H.PAN,i.mouseButtons.RIGHT=m.H.ROTATE,i.touches.ONE=m.pb.PAN,i.touches.TWO=m.pb.DOLLY_ROTATE,i}return n}(function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e,a){var i;Object(c.a)(this,n),(i=t.call(this)).camera=void 0,i.domElement=void 0,i.enabled=void 0,i.target=void 0,i.minDistance=void 0,i.maxDistance=void 0,i.minZoom=void 0,i.maxZoom=void 0,i.minPolarAngle=void 0,i.maxPolarAngle=void 0,i.minAzimuthAngle=void 0,i.maxAzimuthAngle=void 0,i.enableDamping=void 0,i.dampingFactor=void 0,i.enableZoom=void 0,i.zoomSpeed=void 0,i.enableRotate=void 0,i.rotateSpeed=void 0,i.enablePan=void 0,i.panSpeed=void 0,i.screenSpacePanning=void 0,i.keyPanSpeed=void 0,i.autoRotate=void 0,i.autoRotateSpeed=void 0,i.keys=void 0,i.mouseButtons=void 0,i.touches=void 0,i.target0=void 0,i.position0=void 0,i.zoom0=void 0,i.domElementKeyEvents=void 0,i.getPolarAngle=void 0,i.getAzimuthalAngle=void 0,i.listenToKeyEvents=void 0,i.saveState=void 0,i.reset=void 0,i.dispose=void 0,i.update=function(){return!0},void 0===a&&$('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),i.camera=e,i.domElement=a,i.enabled=!0,i.target=new m.vb,i.minDistance=0,i.maxDistance=1/0,i.minZoom=0,i.maxZoom=1/0,i.minPolarAngle=0,i.maxPolarAngle=Math.PI,i.minAzimuthAngle=-1/0,i.maxAzimuthAngle=1/0,i.enableDamping=!1,i.dampingFactor=.05,i.enableZoom=!0,i.zoomSpeed=1,i.enableRotate=!0,i.rotateSpeed=1,i.enablePan=!0,i.panSpeed=1,i.screenSpacePanning=!0,i.keyPanSpeed=7,i.autoRotate=!1,i.autoRotateSpeed=2,i.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},i.mouseButtons={LEFT:m.H.ROTATE,MIDDLE:m.H.DOLLY,RIGHT:m.H.PAN},i.touches={ONE:m.pb.ROTATE,TWO:m.pb.DOLLY_PAN},i.target0=i.target.clone(),i.position0=i.camera.position.clone(),i.zoom0=i.camera.zoom,i.domElementKeyEvents=null,i.getPolarAngle=function(){return d.phi},i.getAzimuthalAngle=function(){return d.theta},i.listenToKeyEvents=function(e){e.addEventListener("keydown",B),i.domElementKeyEvents=e},i.saveState=function(){o.target0.copy(o.target),o.position0.copy(o.camera.position),o.zoom0=o.camera.zoom},i.reset=function(){o.target.copy(o.target0),o.camera.position.copy(o.position0),o.camera.zoom=o.zoom0,o.camera.updateProjectionMatrix(),o.dispatchEvent(q),o.update(),s=r.NONE},i.update=function(){var t=new m.vb,n=(new m.db).setFromUnitVectors(e.up,new m.vb(0,1,0)),a=n.clone().invert(),i=new m.vb,c=new m.db,b=2*Math.PI;return function(){var e=o.camera.position;t.copy(e).sub(o.target),t.applyQuaternion(n),d.setFromVector3(t),o.autoRotate&&s===r.NONE&&M(2*Math.PI/60/60*o.autoRotateSpeed),o.enableDamping?(d.theta+=h.theta*o.dampingFactor,d.phi+=h.phi*o.dampingFactor):(d.theta+=h.theta,d.phi+=h.phi);var m=o.minAzimuthAngle,f=o.maxAzimuthAngle;return Number.isFinite(m)&&Number.isFinite(f)&&(m<-Math.PI?m+=b:m>Math.PI&&(m-=b),f<-Math.PI?f+=b:f>Math.PI&&(f-=b),d.theta=m<=f?Math.max(m,Math.min(f,d.theta)):d.theta>(m+f)/2?Math.max(m,d.theta):Math.min(f,d.theta)),d.phi=Math.max(o.minPolarAngle,Math.min(o.maxPolarAngle,d.phi)),d.makeSafe(),d.radius*=u,d.radius=Math.max(o.minDistance,Math.min(o.maxDistance,d.radius)),!0===o.enableDamping?o.target.addScaledVector(p,o.dampingFactor):o.target.add(p),t.setFromSpherical(d),t.applyQuaternion(a),e.copy(o.target).add(t),o.camera.lookAt(o.target),!0===o.enableDamping?(h.theta*=1-o.dampingFactor,h.phi*=1-o.dampingFactor,p.multiplyScalar(1-o.dampingFactor)):(h.set(0,0,0),p.set(0,0,0)),u=1,!!(v||i.distanceToSquared(o.camera.position)>l||8*(1-c.dot(o.camera.quaternion))>l)&&(o.dispatchEvent(q),i.copy(o.camera.position),c.copy(o.camera.quaternion),v=!1,!0)}}(),i.dispose=function(){o.domElement.removeEventListener("contextmenu",ee),o.domElement.removeEventListener("pointerdown",I),o.domElement.removeEventListener("wheel",_),o.domElement.removeEventListener("touchstart",X),o.domElement.removeEventListener("touchend",Z),o.domElement.removeEventListener("touchmove",V),o.domElement.ownerDocument.removeEventListener("pointermove",Y),o.domElement.ownerDocument.removeEventListener("pointerup",F),null!==o.domElementKeyEvents&&o.domElementKeyEvents.removeEventListener("keydown",B)};var o=Object(K.a)(i),r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=r.NONE,l=1e-6,d=new m.nb,h=new m.nb,u=1,p=new m.vb,v=!1,b=new m.ub,f=new m.ub,g=new m.ub,O=new m.ub,w=new m.ub,y=new m.ub,j=new m.ub,E=new m.ub,S=new m.ub;function D(){return Math.pow(.95,o.zoomSpeed)}function M(e){h.theta-=e}function x(e){h.phi-=e}var T=function(){var e=new m.vb;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),p.add(e)}}(),C=function(){var e=new m.vb;return function(t,n){!0===o.screenSpacePanning?e.setFromMatrixColumn(n,1):(e.setFromMatrixColumn(n,0),e.crossVectors(o.camera.up,e)),e.multiplyScalar(t),p.add(e)}}(),k=function(){var e=new m.vb;return function(t,n){var a=o.domElement;if(o.camera.isPerspectiveCamera){var i=o.camera.position;e.copy(i).sub(o.target);var r=e.length();r*=Math.tan(o.camera.fov/2*Math.PI/180),T(2*t*r/a.clientHeight,o.camera.matrix),C(2*n*r/a.clientHeight,o.camera.matrix)}else $("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),o.enablePan=!1}}();function z(e){o.camera.isPerspectiveCamera?u/=e:($("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),o.enableZoom=!1)}function L(e){o.camera.isPerspectiveCamera?u*=e:($("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),o.enableZoom=!1)}function P(e){b.set(e.clientX,e.clientY)}function A(e){O.set(e.clientX,e.clientY)}function R(e){if(1===e.touches.length)b.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);b.set(t,n)}}function N(e){if(1===e.touches.length)O.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);O.set(t,n)}}function H(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,a=Math.sqrt(t*t+n*n);j.set(0,a)}function G(e){if(1===e.touches.length)f.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);f.set(t,n)}g.subVectors(f,b).multiplyScalar(o.rotateSpeed);var a=o.domElement;M(2*Math.PI*g.x/a.clientHeight),x(2*Math.PI*g.y/a.clientHeight),b.copy(f)}function U(e){if(1===e.touches.length)w.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);w.set(t,n)}y.subVectors(w,O).multiplyScalar(o.panSpeed),k(y.x,y.y),O.copy(w)}function W(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,a=Math.sqrt(t*t+n*n);E.set(0,a),S.set(0,Math.pow(E.y/j.y,o.zoomSpeed)),z(S.y),j.copy(E)}function I(e){if(!1!==o.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){e.preventDefault(),o.domElement.focus?o.domElement.focus():window.focus();var t;switch(e.button){case 0:t=o.mouseButtons.LEFT;break;case 1:t=o.mouseButtons.MIDDLE;break;case 2:t=o.mouseButtons.RIGHT;break;default:t=-1}switch(t){case m.H.DOLLY:if(!1===o.enableZoom)return;!function(e){j.set(e.clientX,e.clientY)}(e),s=r.DOLLY;break;case m.H.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===o.enablePan)return;A(e),s=r.PAN}else{if(!1===o.enableRotate)return;P(e),s=r.ROTATE}break;case m.H.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===o.enableRotate)return;P(e),s=r.ROTATE}else{if(!1===o.enablePan)return;A(e),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&(o.domElement.ownerDocument.addEventListener("pointermove",Y),o.domElement.ownerDocument.addEventListener("pointerup",F),o.dispatchEvent(J))}(e)}}function Y(e){if(!1!==o.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){if(!1===o.enabled)return;switch(e.preventDefault(),s){case r.ROTATE:if(!1===o.enableRotate)return;!function(e){f.set(e.clientX,e.clientY),g.subVectors(f,b).multiplyScalar(o.rotateSpeed);var t=o.domElement;M(2*Math.PI*g.x/t.clientHeight),x(2*Math.PI*g.y/t.clientHeight),b.copy(f),o.update()}(e);break;case r.DOLLY:if(!1===o.enableZoom)return;!function(e){E.set(e.clientX,e.clientY),S.subVectors(E,j),S.y>0?z(D()):S.y<0&&L(D()),j.copy(E),o.update()}(e);break;case r.PAN:if(!1===o.enablePan)return;!function(e){w.set(e.clientX,e.clientY),y.subVectors(w,O).multiplyScalar(o.panSpeed),k(y.x,y.y),O.copy(w),o.update()}(e)}}(e)}}function F(e){switch(e.pointerType){case"mouse":case"pen":!function(e){if(o.domElement.ownerDocument.removeEventListener("pointermove",Y),o.domElement.ownerDocument.removeEventListener("pointerup",F),!1===o.enabled)return;o.dispatchEvent(Q),s=r.NONE}()}}function _(e){!1===o.enabled||!1===o.enableZoom||s!==r.NONE&&s!==r.ROTATE||(e.preventDefault(),o.dispatchEvent(J),function(e){e.deltaY<0?L(D()):e.deltaY>0&&z(D()),o.update()}(e),o.dispatchEvent(Q))}function B(e){!1!==o.enabled&&!1!==o.enablePan&&function(e){var t=!1;switch(e.code){case o.keys.UP:k(0,o.keyPanSpeed),t=!0;break;case o.keys.BOTTOM:k(0,-o.keyPanSpeed),t=!0;break;case o.keys.LEFT:k(o.keyPanSpeed,0),t=!0;break;case o.keys.RIGHT:k(-o.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),o.update())}(e)}function X(e){if(!1!==o.enabled){switch(e.preventDefault(),e.touches.length){case 1:switch(o.touches.ONE){case m.pb.ROTATE:if(!1===o.enableRotate)return;R(e),s=r.TOUCH_ROTATE;break;case m.pb.PAN:if(!1===o.enablePan)return;N(e),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(o.touches.TWO){case m.pb.DOLLY_PAN:if(!1===o.enableZoom&&!1===o.enablePan)return;!function(e){o.enableZoom&&H(e),o.enablePan&&N(e)}(e),s=r.TOUCH_DOLLY_PAN;break;case m.pb.DOLLY_ROTATE:if(!1===o.enableZoom&&!1===o.enableRotate)return;!function(e){o.enableZoom&&H(e),o.enableRotate&&R(e)}(e),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&o.dispatchEvent(J)}}function V(e){if(!1!==o.enabled)switch(e.preventDefault(),s){case r.TOUCH_ROTATE:if(!1===o.enableRotate)return;G(e),o.update();break;case r.TOUCH_PAN:if(!1===o.enablePan)return;U(e),o.update();break;case r.TOUCH_DOLLY_PAN:if(!1===o.enableZoom&&!1===o.enablePan)return;!function(e){o.enableZoom&&W(e),o.enablePan&&U(e)}(e),o.update();break;case r.TOUCH_DOLLY_ROTATE:if(!1===o.enableZoom&&!1===o.enableRotate)return;!function(e){o.enableZoom&&W(e),o.enableRotate&&G(e)}(e),o.update();break;default:s=r.NONE}}function Z(e){!1!==o.enabled&&(o.dispatchEvent(Q),s=r.NONE)}function ee(e){!1!==o.enabled&&e.preventDefault()}return o.domElement.addEventListener("contextmenu",ee),o.domElement.addEventListener("pointerdown",I),o.domElement.addEventListener("wheel",_,{passive:!1}),o.domElement.addEventListener("touchstart",X,{passive:!1}),o.domElement.addEventListener("touchend",Z),o.domElement.addEventListener("touchmove",V,{passive:!1}),i.update(),i}return n}(m.m)),te=function e(t,n,a){var i=this;Object(c.a)(this,e),this.camera=void 0,this.container=void 0,this.gameWorld=void 0,this.initialize=function(){i.container.addEventListener("click",i.handleClick,!1),i.container.addEventListener("contextmenu",i.handleClick,!1),i.container.addEventListener("mousemove",i.handleMouseMove,!1)},this.getMouseRaycaster=function(e){var t=new m.gb,n=new m.ub;return n.x=e.clientX/window.innerWidth*2-1,n.y=-e.clientY/window.innerHeight*2+1,t.setFromCamera(n,i.camera),t},this.handleMouseMove=function(e){e.preventDefault();var t=i.getMouseRaycaster(e),n=i.gameWorld.getGameObjectIntersection(t);i.gameWorld.hoverGameObject(n)},this.handleClick=function(e){e.preventDefault(),0===e.button&&i.handleLeftClick(e),2===e.button&&i.handleRightClick(e)},this.handleLeftClick=function(e){var t=i.getMouseRaycaster(e),n=i.gameWorld.getGameObjectIntersection(t);i.gameWorld.selectGameObject(n,!0)},this.handleRightClick=function(e){var t=i.getMouseRaycaster(e),n=i.gameWorld.getSceneIntersection(t);if(n&&n.length>0){var a={x:n[0].point.x,y:n[0].point.y,z:n[0].point.z};i.gameWorld.setSelectedGameObjectsDestination(a)}},this.container=t,this.camera=n,this.gameWorld=a},ne=function e(t,n,a){var i=this;Object(c.a)(this,e),this.camera=void 0,this.cameraMapControls=void 0,this.worldInteractionControls=void 0,this.initialize=function(){i.worldInteractionControls.initialize(),i.cameraMapControls.screenSpacePanning=!1,i.cameraMapControls.minDistance=20,i.cameraMapControls.maxDistance=75,i.cameraMapControls.minPolarAngle=Math.PI/99,i.cameraMapControls.maxPolarAngle=Math.PI/2.5,i.cameraMapControls.target.set(0,0,0),i.camera.position.set(32,68,0),i.camera.rotation.set(-1.5,0,1.5)},this.update=function(e,t){i.cameraMapControls.update()},this.camera=n,this.worldInteractionControls=new te(t,n,a),this.cameraMapControls=new ee(n,t)},ae=function e(){Object(c.a)(this,e)};ae.cloneObject3D=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=e.clone(!0);return t&&a.traverse((function(e){var t=e;t.isMesh&&n&&(t.material=ae.cloneMaterial(t.material))})),a},ae.setShadows=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return e.traverse((function(e){var a=e;a.castShadow=t,a.receiveShadow=n})),e},ae.cloneMaterial=function(e){var t=e;return Array.isArray(t)?t=t.filter((function(e){return e.isMaterial})).map((function(e){return e.clone()})):t.isMaterial&&(t=t.clone()),t};var ie,oe,re,ce=ae,se=function e(t){var n=this;Object(c.a)(this,e),this.scene=void 0,this.camera=void 0,this.gameRenderer=void 0,this.gameControls=void 0,this.modelLoader=void 0,this.gameWorld=void 0,this.gameStateDataService=void 0,this.initialize=function(){n.gameRenderer.initialize(),n.gameControls.initialize(),n.modelLoader.initialize(),n.gameWorld.initialize(),n.gameRenderer.addUpdateTarget(n.gameWorld),n.gameRenderer.addUpdateTarget(n.gameControls),n.gameWorld.addSetGameObjectWorldDataListener("destination",(function(e,t){var a=t.destination;n.gameStateDataService.setUnitDestination(e,a.x,a.z)})),n.loadModels()},this.connectToServer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;n.gameStateDataService.connectToWebsocket(1).then((function(){return n.handleConnectedToServer(!0,e+1)})).catch((function(){return n.handleConnectedToServer(!1,e+1)}))},this.handleConnectedToServer=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e?(n.gameStateDataService.addMessageHandler("CreateUnit",n.handleServerCreateUnit),n.gameStateDataService.addMessageHandler("SetUnitDestination",n.handleServerSetUnitDestination),n.gameRenderer.start()):setTimeout((function(){n.connectToServer(t)}),5e3*t)},this.handleServerCreateUnit=function(e){var t=e.CreateUnit,a=t.position,i=t.id;a.length>=2&&n.gameWorld.addGameObject(n.createMoveableTower(i,a[0],a[1],a[0],a[1]))},this.handleServerSetUnitDestination=function(e){var t=e.SetUnitDestination,a=t.destination,i=t.id;a.length>=2&&n.gameWorld.setGameObjectWorldData(i,"destination",{x:a[0],z:a[1],y:.1})},this.handleLoadModelsCompleted=function(){n.gameStateDataService.fetchInitialGameState().then((function(e){n.connectToServer(),Object.keys(e).forEach((function(t){var a=e[t];a.position.length>=2&&n.gameWorld.addGameObject(n.createMoveableTower(a.id,a.position[0],a.position[1],a.destination[0],a.destination[1]))}))}))},this.handleActionbarButtonClicked=function(e){n.gameStateDataService.createUnit(10,10)},this.loadModels=function(){n.modelLoader.loadModels([{name:"tower",path:"/tower/scene.gltf",onLoaded:function(e){return e.object.scale.setScalar(.03)}},{name:"well",path:"/well/scene.gltf",onLoaded:function(e){return e.object.scale.setScalar(.3)}}],(function(){n.handleLoadModelsCompleted()}))},this.createMoveableTower=function(e,t,a,i,o){return n.createMoveableGameObject("tower",e,t,a,i,o)},this.createMoveableWell=function(e,t,a,i,o){return n.createMoveableGameObject("well",e,t,a,i,o)},this.createMoveableGameObject=function(e,t,a,i,o,r){var c=n.modelLoader.loadedModels[e],s=new W(t,ce.setShadows(c.object));return s.worldData.position.y=.1,s.worldData.position.x=a,s.worldData.position.z=i,s.worldData.destination.y=.1,s.worldData.destination.x=o,s.worldData.destination.z=r,s},this.scene=new m.jb,this.camera=new m.X(75,window.innerWidth/window.innerHeight,.1,200),this.gameWorld=new X(this.scene),this.gameRenderer=new Z(t,this.scene,this.camera),this.gameControls=new ne(t,this.camera,this.gameWorld),this.modelLoader=new g("assets/models/"),this.gameStateDataService=new _},le=(n(43),n(44),n(9)),de=function(e,t){return function(n){Object(s.a)(i,n);var a=Object(l.a)(i);function i(){var e;Object(c.a)(this,i);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).defaultPropValues=Object(v.a)({fill:"#336699"},t),e}return Object(u.a)(i,[{key:"render",value:function(){var t=this.props,n=Object(v.a)(Object(v.a)(Object(v.a)({},this.defaultPropValues),t),{},{className:"with-svg-icon ".concat(t.className)}),a=Object.assign({},n);return Object(le.jsx)(e,Object(v.a)({},a))}}]),i}(a.PureComponent)},he=["title","titleId"];function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function me(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function pe(e,t){var n=e.title,i=e.titleId,o=me(e,he);return a.createElement("svg",ue({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",xmlSpace:"preserve",ref:t,"aria-labelledby":i},o),n?a.createElement("title",{id:i},n):null,ie||(ie=a.createElement("path",{d:"M323.84 452.267c-5.12 0-8.533 3.413-8.533 8.533 0 5.12 3.413 8.533 8.533 8.533s8.533-3.413 8.533-8.533c0-5.12-3.413-8.533-8.533-8.533z"})),oe||(oe=a.createElement("path",{d:"M372.48 129.707 264.107 38.006V8.533c0-5.12-3.413-8.533-8.533-8.533-5.12 0-8.533 3.413-8.533 8.533v30.195l-107.52 90.978c-2.56 2.56-3.413 5.973-2.56 9.387s4.267 5.973 7.68 5.973h8.533v25.6c0 5.12 3.413 8.533 8.533 8.533h8.533v230.4h-8.533c-4.267 0-7.68 3.413-8.533 7.68l-8.533 85.333c0 2.56.853 5.12 2.56 6.827.853 1.707 3.413 2.56 5.973 2.56h204.8c2.56 0 5.12-.853 5.973-2.56 1.707-1.707 2.56-4.267 2.56-6.827l-8.533-85.333c-.853-4.267-4.267-7.68-8.533-7.68h-8.533V179.2h8.533c5.12 0 8.533-3.413 8.533-8.533v-25.6h8.533c3.413 0 6.827-2.56 8.533-5.973.853-3.414 0-6.827-2.56-9.387zM255.573 53.76l87.04 74.24H167.68l87.893-74.24zm93.014 441.173H162.56l6.827-68.267h172.374l6.826 68.267zm-24.747-204.8h-17.067c-5.12 0-8.533 3.413-8.533 8.533s3.413 8.533 8.533 8.533h17.067v102.4H187.307V384h17.067c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.533-8.533-8.533h-17.067V221.867h17.067c5.12 0 8.533-3.413 8.533-8.533 0-5.12-3.413-8.533-8.533-8.533h-17.067v-25.6H323.84v110.932zm17.067-128H170.241v-17.067h170.667v17.067z"})),re||(re=a.createElement("path",{d:"M289.707 452.267h-51.2c-5.12 0-8.533 3.413-8.533 8.533 0 5.12 3.413 8.533 8.533 8.533h51.2c5.12 0 8.533-3.413 8.533-8.533 0-5.12-3.413-8.533-8.533-8.533zM204.373 452.267h-17.067c-5.12 0-8.533 3.413-8.533 8.533 0 5.12 3.413 8.533 8.533 8.533h17.067c5.12 0 8.533-3.413 8.533-8.533.001-5.12-3.413-8.533-8.533-8.533zM238.507 281.6h34.133c5.12 0 8.533-3.413 8.533-8.533V230.4c0-14.507-11.093-25.6-25.6-25.6-14.507 0-25.6 11.093-25.6 25.6v42.667c0 5.12 3.414 8.533 8.534 8.533zm8.533-51.2c0-5.12 3.413-8.533 8.533-8.533 5.12 0 8.533 3.413 8.533 8.533v34.133H247.04V230.4zM238.507 384h34.133c5.12 0 8.533-3.413 8.533-8.533V332.8c0-14.507-11.093-25.6-25.6-25.6-14.507 0-25.6 11.093-25.6 25.6v42.667c0 5.12 3.414 8.533 8.534 8.533zm8.533-51.2c0-5.12 3.413-8.533 8.533-8.533 5.12 0 8.533 3.413 8.533 8.533v34.133H247.04V332.8z"})))}var ve,be,fe,ge=a.forwardRef(pe),Oe=(n.p,["title","titleId"]);function we(){return(we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ye(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function je(e,t){var n=e.title,i=e.titleId,o=ye(e,Oe);return a.createElement("svg",we({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 280.667 280.667",xmlSpace:"preserve",ref:t,"aria-labelledby":i},o),n?a.createElement("title",{id:i},n):null,ve||(ve=a.createElement("path",{d:"M52.544 280.667h174.424c12.169 0 22.595-7.706 26.65-18.46H25.892c4.057 10.754 14.482 18.46 26.652 18.46zM24.069 231.035h231.374v19.172H24.069zM25.078 219.035h229.357c-3.298-12.057-14.368-20.985-27.467-20.985H52.544c-13.098 0-24.17 8.929-27.466 20.985zM197.552 0H83.332L6.334 87.92h267.999v-.238zM63.06 94.662v97.54h19.491l.01-54.073H129.745a13.715 13.715 0 0 0 10.187 4.521c4.033 0 7.671-1.744 10.187-4.521h47.33v54.073h19.649v-97.54h-19.671l-.023 26.074h-46.446c-2.504-3.366-6.505-5.552-11.025-5.552-4.521 0-8.522 2.186-11.026 5.552H82.595V94.662H63.06zm76.872 26.244c4.419 0 8.011 3.592 8.011 8.011 0 4.418-3.592 8.01-8.011 8.01-4.42 0-8.012-3.592-8.012-8.01 0-4.419 3.592-8.011 8.012-8.011z"})),be||(be=a.createElement("path",{d:"m125.269 171.636 4.033 20.612h20.883l3.751-20.612h-11.534v1.271a2.487 2.487 0 0 1-2.483 2.48h-.022a2.487 2.487 0 0 1-2.481-2.48v-1.271h-12.147z"})),fe||(fe=a.createElement("path",{d:"M139.909 174.73a2.004 2.004 0 0 0 2.005-2.005v-24.262a2.005 2.005 0 1 0-4.011 0v24.262c0 1.107.898 2.005 2.006 2.005z"})))}var Ee=a.forwardRef(je),Se=(n.p,de(ge)),De=de(Ee),Me=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).handleButtonClick=function(t){return function(n){n.preventDefault(),(0,e.props.onClickButton)(n.nativeEvent,t)}},e.render=function(){return Object(le.jsxs)("div",{className:"ui-actionbar",children:[Object(le.jsx)("button",{type:"button",onClick:e.handleButtonClick("tower"),children:Object(le.jsx)(Se,{})}),Object(le.jsx)("button",{type:"button",onClick:e.handleButtonClick("well"),children:Object(le.jsx)(De,{})})]})},e}return n}(a.PureComponent),xe=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).initialized=!1,e.game=void 0,e.gameContainer=null,e.initGame=function(){e.gameContainer&&!e.initialized&&(e.game=new se(e.gameContainer),e.game.initialize(),e.initialized=!0)},e.handleActionbarButtonClicked=function(t,n){e.game&&e.game.handleActionbarButtonClicked(n)},e.render=function(){return Object(le.jsxs)("div",{className:"game",children:[Object(le.jsx)("div",{id:"game-container",ref:function(t){e.gameContainer=t}}),Object(le.jsx)(Me,{onClickButton:e.handleActionbarButtonClicked})]})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.initGame()}}]),n}(a.PureComponent),Te=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).render=function(){return Object(le.jsx)("div",{className:"home",style:{padding:100},children:Object(le.jsx)(d.b,{to:"/game",style:{fontSize:50},children:"Game"})})},e}return n}(a.PureComponent),Ce=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).render=function(){return Object(le.jsx)("div",{className:"App",children:Object(le.jsxs)(d.a,{basename:"/Codename.TheBsGame",children:[Object(le.jsx)(h.a,{path:"/",exact:!0,children:Object(le.jsx)(Te,{})}),Object(le.jsx)(h.a,{path:"/game",children:Object(le.jsx)(xe,{})})]})})},e}return n}(a.PureComponent);n(54);r.a.render(Object(le.jsx)(i.a.StrictMode,{children:Object(le.jsx)(Ce,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.03239393.chunk.js.map