(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[161],{3505:function(n,a,f){"use strict";f.d(a,{Z:function(){return v}});var m=f(2898);let v=(0,m.Z)("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]])},2888:function(n,a,f){Promise.resolve().then(f.bind(f,2599)),Promise.resolve().then(f.bind(f,42)),Promise.resolve().then(f.bind(f,3867))},2599:function(n,a,f){"use strict";f.r(a),f.d(a,{default:function(){return gallery}});var m=f(7437),v=f(6691),b=f.n(v),x=f(5456),E=f(1628),gallery_tab=n=>{let{image:a}=n;return(0,m.jsx)(x.O,{className:"relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white",children:n=>{let{selected:f}=n;return(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{className:"absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md",children:(0,m.jsx)(b(),{fill:!0,src:a.url,alt:"",className:"object-cover object-center"})}),(0,m.jsx)("span",{className:(0,E.cn)("absolute inset-0 rounded-md ring-2 ring-offset-2",f?"ring-black":"ring-transparent")})]})}})},gallery=n=>{let{images:a=[]}=n;return(0,m.jsxs)(x.O.Group,{as:"div",className:"flex flex-col-reverse",children:[(0,m.jsx)("div",{className:"mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none",children:(0,m.jsx)(x.O.List,{className:"grid grid-cols-4 gap-6",children:a.map(n=>(0,m.jsx)(gallery_tab,{image:n},n.id))})}),(0,m.jsx)(x.O.Panels,{className:"aspect-square w-full",children:a.map(n=>(0,m.jsx)(x.O.Panel,{children:(0,m.jsx)("div",{className:"aspect-square relative h-full w-full sm:rounded-lg overflow-hidden",children:(0,m.jsx)(b(),{fill:!0,src:n.url,alt:"Image",className:"object-cover object-center"})})},n.id))})]})}},42:function(n,a,f){"use strict";f.r(a);var m=f(7437),v=f(3505),b=f(234),x=f(3611),E=f(9375);a.default=n=>{var a,f;let{data:w}=n,j=(0,E.Z)();return(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{className:"text-3xl font-bold text-gray-900",children:w.name}),(0,m.jsx)("div",{className:"mt-3 flex items-end justify-between",children:(0,m.jsx)("p",{className:"text-2xl text-gray-900",children:(0,m.jsx)(b.Z,{value:null==w?void 0:w.price})})}),(0,m.jsx)("hr",{className:"my-4"}),(0,m.jsxs)("div",{className:"flex flex-col gap-y-6",children:[(0,m.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,m.jsx)("h3",{className:"font-semibold text-black",children:"Size:"}),(0,m.jsx)("div",{children:null==w?void 0:null===(a=w.size)||void 0===a?void 0:a.value})]}),(0,m.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,m.jsx)("h3",{className:"font-semibold text-black",children:"Color:"}),(0,m.jsx)("div",{className:"h-6 w-6 rounded-full border border-gray-600",style:{backgroundColor:null==w?void 0:null===(f=w.color)||void 0===f?void 0:f.value}})]})]}),(0,m.jsx)("div",{className:"mt-10 flex items-center gap-x-3",children:(0,m.jsxs)(x.Z,{onClick:()=>{j.addItem(w)},className:"flex items-center gap-x-2",children:["Add To Cart",(0,m.jsx)(v.Z,{size:20})]})}),(0,m.jsx)("p",{className:"text-xl mt-10 justify-between font-italics text-gray-900",children:w.description})]})}},3611:function(n,a,f){"use strict";var m=f(7437),v=f(2265),b=f(1628);let x=(0,v.forwardRef)((n,a)=>{let{className:f,children:v,disabled:x,type:E="button",...w}=n;return(0,m.jsx)("button",{type:E,className:(0,b.cn)("\n        w-auto \n        rounded-full \n        bg-black\n        border\n        border-transparent\n        px-5 \n        py-3 \n        disabled:cursor-not-allowed \n        disabled:opacity-50\n        text-white\n        font-semibold\n        hover:opacity-75\n        transition\n      ",x&&"opacity-75 cursor-not-allowed",f),disabled:x,ref:a,...w,children:v})});x.displayName="Button",a.Z=x},234:function(n,a,f){"use strict";var m=f(7437),v=f(2265);let b=new Intl.NumberFormat("en-US",{style:"currency",currency:"INR"});a.Z=n=>{let{value:a=0}=n,[f,x]=(0,v.useState)(!1);return((0,v.useEffect)(()=>{x(!0)},[]),f)?(0,m.jsx)("div",{className:"font-semibold",children:b.format(Number(a))}):null}},1477:function(n,a,f){"use strict";var m=f(7437),v=f(1628);a.Z=n=>{let{onClick:a,icon:f,className:b}=n;return(0,m.jsx)("button",{onClick:a,className:(0,v.cn)("rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",b),children:f})}},3867:function(n,a,f){"use strict";f.r(a),f.d(a,{default:function(){return product_card}});var m=f(7437),v=f(6691),b=f.n(v),x=f(2898);let E=(0,x.Z)("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);var w=f(3505),j=f(4033),P=f(234),A=f(1477),S=f(4947),k=f(9375),product_card=n=>{var a,f,v;let{data:x}=n,_=(0,S.Z)(),F=(0,k.Z)(),C=(0,j.useRouter)();return(0,m.jsxs)("div",{onClick:()=>{C.push("/product/".concat(null==x?void 0:x.id))},className:"bg-white group cursor-pointer rounded-xl border p-3 space-y-4",children:[(0,m.jsxs)("div",{className:"aspect-square rounded-xl bg-gray-100 relative",children:[(0,m.jsx)(b(),{src:null===(f=x.images)||void 0===f?void 0:null===(a=f[0])||void 0===a?void 0:a.url,alt:"",fill:!0,className:"aspect-square object-cover rounded-md"}),(0,m.jsx)("div",{className:"opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5",children:(0,m.jsxs)("div",{className:"flex gap-x-6 justify-center",children:[(0,m.jsx)(A.Z,{onClick:n=>{n.stopPropagation(),_.onOpen(x)},icon:(0,m.jsx)(E,{size:20,className:"text-gray-600"})}),(0,m.jsx)(A.Z,{onClick:n=>{n.stopPropagation(),F.addItem(x)},icon:(0,m.jsx)(w.Z,{size:20,className:"text-gray-600"})})]})})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"font-semibold text-lg",children:x.name}),(0,m.jsx)("p",{className:"text-sm text-gray-500",children:null===(v=x.category)||void 0===v?void 0:v.name})]}),(0,m.jsx)("div",{className:"flex items-center justify-between",children:(0,m.jsx)(P.Z,{value:null==x?void 0:x.price})})]})}},9375:function(n,a,f){"use strict";var m=f(4660),v=f(5925),b=f(4810);let x=(0,m.Ue)((0,b.tJ)((n,a)=>({items:[],addItem:f=>{let m=a().items,b=m.find(n=>n.id===f.id);b?b.quantity+=1:m.push({...f,quantity:1}),n({items:[...m]}),v.toast.success("Item added to cart.")},removeItem:f=>{let m=a().items,b=m.findIndex(n=>n.id===f);if(-1!==b){let n=m[b];n.quantity>1?m[b]={...n,quantity:n.quantity-1}:m.splice(b,1)}n({items:[...m]}),v.toast.success("Item removed from cart.")},removeAll:()=>n({items:[]}),getTotalItems:()=>a().items.reduce((n,a)=>n+a.quantity,0)}),{name:"cart-storage",storage:(0,b.FL)(()=>localStorage)}));a.Z=x},4947:function(n,a,f){"use strict";var m=f(4660);let v=(0,m.Ue)(n=>({isOpen:!1,data:void 0,onOpen:a=>n({isOpen:!0,data:a}),onClose:()=>n({isOpen:!1})}));a.Z=v},1628:function(n,a,f){"use strict";f.d(a,{cn:function(){return cn}});var m=f(348),v=f(3986);function cn(){for(var n=arguments.length,a=Array(n),f=0;f<n;f++)a[f]=arguments[f];return(0,v.m)((0,m.W)(a))}},3850:function(n,a,f){"use strict";f.d(a,{R:function(){return v}});var m,v=((m=v||{}).Space=" ",m.Enter="Enter",m.Escape="Escape",m.Backspace="Backspace",m.Delete="Delete",m.ArrowLeft="ArrowLeft",m.ArrowUp="ArrowUp",m.ArrowRight="ArrowRight",m.ArrowDown="ArrowDown",m.Home="Home",m.End="End",m.PageUp="PageUp",m.PageDown="PageDown",m.Tab="Tab",m)},5456:function(n,a,f){"use strict";f.d(a,{O:function(){return K}});var m,v,b,x=f(2265),E=f(1931),w=f(5606),j=f(597),P=f(3850),A=f(5410),S=f(2600),k=f(6618);function i(n){var a;if(n.type)return n.type;let f=null!=(a=n.as)?a:"button";if("string"==typeof f&&"button"===f.toLowerCase())return"button"}var _=f(1858),F=f(8227);function p({onFocus:n}){let[a,f]=(0,x.useState)(!0);return a?x.createElement(F._,{as:"button",type:"button",features:F.A.Focusable,onFocus:a=>{a.preventDefault();let m,v=50;m=requestAnimationFrame(function t(){if(v--<=0){m&&cancelAnimationFrame(m);return}if(n()){f(!1),cancelAnimationFrame(m);return}m=requestAnimationFrame(t)})}}):null}var C=f(2950),L=f(5195),z=f(4851);let U=x.createContext(null);function stable_collection_C({children:n}){let a=x.useRef({groups:new Map,get(n,a){var f;let m=this.groups.get(n);m||(m=new Map,this.groups.set(n,m));let v=null!=(f=m.get(a))?f:0;return m.set(a,v+1),[Array.from(m.keys()).indexOf(a),function(){let n=m.get(a);n>1?m.set(a,n-1):m.delete(a)}]}});return x.createElement(U.Provider,{value:a},n)}function stable_collection_d(n){let a=x.useContext(U);if(!a)throw Error("You must wrap your component in a <StableCollection>");let f=function(){var n,a,f;let m=null!=(f=null==(a=null==(n=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:n.ReactCurrentOwner)?void 0:a.current)?f:null;if(!m)return Symbol();let v=[],b=m;for(;b;)v.push(b.index),b=b.return;return"$."+v.join(".")}(),[m,v]=a.current.get(n,f);return x.useEffect(()=>v,[]),m}var Z=((m=Z||{})[m.Forwards=0]="Forwards",m[m.Backwards=1]="Backwards",m),H=((v=H||{})[v.Less=-1]="Less",v[v.Equal=0]="Equal",v[v.Greater=1]="Greater",v),V=((b=V||{})[b.SetSelectedIndex=0]="SetSelectedIndex",b[b.RegisterTab=1]="RegisterTab",b[b.UnregisterTab=2]="UnregisterTab",b[b.RegisterPanel=3]="RegisterPanel",b[b.UnregisterPanel=4]="UnregisterPanel",b);let Y={0(n,a){var f;let m=(0,A.z2)(n.tabs,n=>n.current),v=(0,A.z2)(n.panels,n=>n.current),b=m.filter(n=>{var a;return!(null!=(a=n.current)&&a.hasAttribute("disabled"))}),x={...n,tabs:m,panels:v};if(a.index<0||a.index>m.length-1){let f=(0,j.E)(Math.sign(a.index-n.selectedIndex),{[-1]:()=>1,0:()=>(0,j.E)(Math.sign(a.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});return 0===b.length?x:{...x,selectedIndex:(0,j.E)(f,{0:()=>m.indexOf(b[0]),1:()=>m.indexOf(b[b.length-1])})}}let E=m.slice(0,a.index),w=[...m.slice(a.index),...E].find(n=>b.includes(n));if(!w)return x;let P=null!=(f=m.indexOf(w))?f:n.selectedIndex;return -1===P&&(P=n.selectedIndex),{...x,selectedIndex:P}},1(n,a){var f;if(n.tabs.includes(a.tab))return n;let m=n.tabs[n.selectedIndex],v=(0,A.z2)([...n.tabs,a.tab],n=>n.current),b=null!=(f=v.indexOf(m))?f:n.selectedIndex;return -1===b&&(b=n.selectedIndex),{...n,tabs:v,selectedIndex:b}},2:(n,a)=>({...n,tabs:n.tabs.filter(n=>n!==a.tab)}),3:(n,a)=>n.panels.includes(a.panel)?n:{...n,panels:(0,A.z2)([...n.panels,a.panel],n=>n.current)},4:(n,a)=>({...n,panels:n.panels.filter(n=>n!==a.panel)})},$=(0,x.createContext)(null);function M(n){let a=(0,x.useContext)($);if(null===a){let a=Error(`<${n} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,M),a}return a}$.displayName="TabsDataContext";let W=(0,x.createContext)(null);function q(n){let a=(0,x.useContext)(W);if(null===a){let a=Error(`<${n} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,q),a}return a}function fe(n,a){return(0,j.E)(a.type,Y,n,a)}W.displayName="TabsActionsContext";let G=x.Fragment,B=E.AN.RenderStrategy|E.AN.Static,K=Object.assign((0,E.yV)(function(n,a){var f,m;let v=(0,w.M)(),{id:b=`headlessui-tabs-tab-${v}`,..._}=n,{orientation:F,activation:U,selectedIndex:Z,tabs:H,panels:V}=M("Tab"),Y=q("Tab"),$=M("Tab"),W=(0,x.useRef)(null),G=(0,k.T)(W,a);(0,S.e)(()=>Y.registerTab(W),[Y,W]);let B=stable_collection_d("tabs"),K=H.indexOf(W);-1===K&&(K=B);let J=K===Z,Q=(0,C.z)(n=>{var a;let f=n();if(f===A.fE.Success&&"auto"===U){let n=null==(a=(0,z.r)(W))?void 0:a.activeElement,f=$.tabs.findIndex(a=>a.current===n);-1!==f&&Y.change(f)}return f}),ee=(0,C.z)(n=>{let a=H.map(n=>n.current).filter(Boolean);if(n.key===P.R.Space||n.key===P.R.Enter){n.preventDefault(),n.stopPropagation(),Y.change(K);return}switch(n.key){case P.R.Home:case P.R.PageUp:return n.preventDefault(),n.stopPropagation(),Q(()=>(0,A.jA)(a,A.TO.First));case P.R.End:case P.R.PageDown:return n.preventDefault(),n.stopPropagation(),Q(()=>(0,A.jA)(a,A.TO.Last))}if(Q(()=>(0,j.E)(F,{vertical:()=>n.key===P.R.ArrowUp?(0,A.jA)(a,A.TO.Previous|A.TO.WrapAround):n.key===P.R.ArrowDown?(0,A.jA)(a,A.TO.Next|A.TO.WrapAround):A.fE.Error,horizontal:()=>n.key===P.R.ArrowLeft?(0,A.jA)(a,A.TO.Previous|A.TO.WrapAround):n.key===P.R.ArrowRight?(0,A.jA)(a,A.TO.Next|A.TO.WrapAround):A.fE.Error}))===A.fE.Success)return n.preventDefault()}),et=(0,x.useRef)(!1),en=(0,C.z)(()=>{var n;et.current||(et.current=!0,null==(n=W.current)||n.focus(),Y.change(K),(0,L.Y)(()=>{et.current=!1}))}),er=(0,C.z)(n=>{n.preventDefault()}),ea=(0,x.useMemo)(()=>({selected:J}),[J]),el={ref:G,onKeyDown:ee,onMouseDown:er,onClick:en,id:b,role:"tab",type:function(n,a){let[f,m]=(0,x.useState)(()=>i(n));return(0,S.e)(()=>{m(i(n))},[n.type,n.as]),(0,S.e)(()=>{f||a.current&&a.current instanceof HTMLButtonElement&&!a.current.hasAttribute("type")&&m("button")},[f,a]),f}(n,W),"aria-controls":null==(m=null==(f=V[K])?void 0:f.current)?void 0:m.id,"aria-selected":J,tabIndex:J?0:-1};return(0,E.sY)({ourProps:el,theirProps:_,slot:ea,defaultTag:"button",name:"Tabs.Tab"})}),{Group:(0,E.yV)(function(n,a){let{defaultIndex:f=0,vertical:m=!1,manual:v=!1,onChange:b,selectedIndex:w=null,...j}=n,P=m?"vertical":"horizontal",F=v?"manual":"auto",L=null!==w,z=(0,k.T)(a),[U,Z]=(0,x.useReducer)(fe,{selectedIndex:null!=w?w:f,tabs:[],panels:[]}),H=(0,x.useMemo)(()=>({selectedIndex:U.selectedIndex}),[U.selectedIndex]),V=(0,_.E)(b||(()=>{})),Y=(0,_.E)(U.tabs),B=(0,x.useMemo)(()=>({orientation:P,activation:F,...U}),[P,F,U]),K=(0,C.z)(n=>(Z({type:1,tab:n}),()=>Z({type:2,tab:n}))),J=(0,C.z)(n=>(Z({type:3,panel:n}),()=>Z({type:4,panel:n}))),Q=(0,C.z)(n=>{ee.current!==n&&V.current(n),L||Z({type:0,index:n})}),ee=(0,_.E)(L?n.selectedIndex:U.selectedIndex),et=(0,x.useMemo)(()=>({registerTab:K,registerPanel:J,change:Q}),[]);return(0,S.e)(()=>{Z({type:0,index:null!=w?w:f})},[w]),(0,S.e)(()=>{if(void 0===ee.current||U.tabs.length<=0)return;let n=(0,A.z2)(U.tabs,n=>n.current);n.some((n,a)=>U.tabs[a]!==n)&&Q(n.indexOf(U.tabs[ee.current]))}),x.createElement(stable_collection_C,null,x.createElement(W.Provider,{value:et},x.createElement($.Provider,{value:B},B.tabs.length<=0&&x.createElement(p,{onFocus:()=>{var n,a;for(let f of Y.current)if((null==(n=f.current)?void 0:n.tabIndex)===0)return null==(a=f.current)||a.focus(),!0;return!1}}),(0,E.sY)({ourProps:{ref:z},theirProps:j,slot:H,defaultTag:G,name:"Tabs"}))))}),List:(0,E.yV)(function(n,a){let{orientation:f,selectedIndex:m}=M("Tab.List"),v=(0,k.T)(a);return(0,E.sY)({ourProps:{ref:v,role:"tablist","aria-orientation":f},theirProps:n,slot:{selectedIndex:m},defaultTag:"div",name:"Tabs.List"})}),Panels:(0,E.yV)(function(n,a){let{selectedIndex:f}=M("Tab.Panels"),m=(0,k.T)(a),v=(0,x.useMemo)(()=>({selectedIndex:f}),[f]);return(0,E.sY)({ourProps:{ref:m},theirProps:n,slot:v,defaultTag:"div",name:"Tabs.Panels"})}),Panel:(0,E.yV)(function(n,a){var f,m,v,b;let j=(0,w.M)(),{id:P=`headlessui-tabs-panel-${j}`,tabIndex:A=0,..._}=n,{selectedIndex:C,tabs:L,panels:z}=M("Tab.Panel"),U=q("Tab.Panel"),Z=(0,x.useRef)(null),H=(0,k.T)(Z,a);(0,S.e)(()=>U.registerPanel(Z),[U,Z]);let V=stable_collection_d("panels"),Y=z.indexOf(Z);-1===Y&&(Y=V);let $=Y===C,W=(0,x.useMemo)(()=>({selected:$}),[$]),G={ref:H,id:P,role:"tabpanel","aria-labelledby":null==(m=null==(f=L[Y])?void 0:f.current)?void 0:m.id,tabIndex:$?A:-1};return $||null!=(v=_.unmount)&&!v||null!=(b=_.static)&&b?(0,E.sY)({ourProps:G,theirProps:_,slot:W,defaultTag:"div",features:B,visible:$,name:"Tabs.Panel"}):x.createElement(F._,{as:"span",...G})})})},2950:function(n,a,f){"use strict";f.d(a,{z:function(){return o}});var m=f(2265),v=f(1858);let o=function(n){let a=(0,v.E)(n);return m.useCallback((...n)=>a.current(...n),[a])}},5606:function(n,a,f){"use strict";f.d(a,{M:function(){return w}});var m,v=f(2265),b=f(2600),x=f(8957),E=f(2057);let w=null!=(m=v.useId)?m:function(){let n=(0,x.H)(),[a,f]=v.useState(n?()=>E.O.nextId():null);return(0,b.e)(()=>{null===a&&f(E.O.nextId())},[a]),null!=a?""+a:void 0}},2600:function(n,a,f){"use strict";f.d(a,{e:function(){return l}});var m=f(2265),v=f(2057);let l=(n,a)=>{v.O.isServer?(0,m.useEffect)(n,a):(0,m.useLayoutEffect)(n,a)}},1858:function(n,a,f){"use strict";f.d(a,{E:function(){return s}});var m=f(2265),v=f(2600);function s(n){let a=(0,m.useRef)(n);return(0,v.e)(()=>{a.current=n},[n]),a}},8957:function(n,a,f){"use strict";f.d(a,{H:function(){return l}});var m=f(2265),v=f(2057);function l(){let[n,a]=(0,m.useState)(v.O.isHandoffComplete);return n&&!1===v.O.isHandoffComplete&&a(!1),(0,m.useEffect)(()=>{!0!==n&&a(!0)},[n]),(0,m.useEffect)(()=>v.O.handoff(),[]),n}},6618:function(n,a,f){"use strict";f.d(a,{T:function(){return y},h:function(){return T}});var m=f(2265),v=f(2950);let b=Symbol();function T(n,a=!0){return Object.assign(n,{[b]:a})}function y(...n){let a=(0,m.useRef)(n);(0,m.useEffect)(()=>{a.current=n},[n]);let f=(0,v.z)(n=>{for(let f of a.current)null!=f&&("function"==typeof f?f(n):f.current=n)});return n.every(n=>null==n||(null==n?void 0:n[b]))?void 0:f}},8227:function(n,a,f){"use strict";f.d(a,{A:function(){return b},_:function(){return x}});var m,v=f(1931),b=((m=b||{})[m.None=1]="None",m[m.Focusable=2]="Focusable",m[m.Hidden=4]="Hidden",m);let x=(0,v.yV)(function(n,a){let{features:f=1,...m}=n,b={ref:a,"aria-hidden":(2&f)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&f)==4&&(2&f)!=2&&{display:"none"}}};return(0,v.sY)({ourProps:b,theirProps:m,slot:{},defaultTag:"div",name:"Hidden"})})},3960:function(n,a,f){"use strict";function e(...n){return n.filter(Boolean).join(" ")}f.d(a,{A:function(){return e}})},2057:function(n,a,f){"use strict";f.d(a,{O:function(){return v}});var m=Object.defineProperty,d=(n,a,f)=>a in n?m(n,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):n[a]=f,r=(n,a,f)=>(d(n,"symbol"!=typeof a?a+"":a,f),f);let v=new class{constructor(){r(this,"current",this.detect()),r(this,"handoffState","pending"),r(this,"currentId",0)}set(n){this.current!==n&&(this.handoffState="pending",this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},5410:function(n,a,f){"use strict";f.d(a,{C5:function(){return y},TO:function(){return A},fE:function(){return S},jA:function(){return O},sP:function(){return h},tJ:function(){return _},z2:function(){return I}});var m,v,b,x,E,w=f(597),j=f(4851);let P=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(n=>`${n}:not([tabindex='-1'])`).join(",");var A=((m=A||{})[m.First=1]="First",m[m.Previous=2]="Previous",m[m.Next=4]="Next",m[m.Last=8]="Last",m[m.WrapAround=16]="WrapAround",m[m.NoScroll=32]="NoScroll",m),S=((v=S||{})[v.Error=0]="Error",v[v.Overflow=1]="Overflow",v[v.Success=2]="Success",v[v.Underflow=3]="Underflow",v),k=((b=k||{})[b.Previous=-1]="Previous",b[b.Next=1]="Next",b),_=((x=_||{})[x.Strict=0]="Strict",x[x.Loose=1]="Loose",x);function h(n,a=0){var f;return n!==(null==(f=(0,j.r)(n))?void 0:f.body)&&(0,w.E)(a,{0:()=>n.matches(P),1(){let a=n;for(;null!==a;){if(a.matches(P))return!0;a=a.parentElement}return!1}})}var F=((E=F||{})[E.Keyboard=0]="Keyboard",E[E.Mouse=1]="Mouse",E);function y(n){null==n||n.focus({preventScroll:!0})}function I(n,a=n=>n){return n.slice().sort((n,f)=>{let m=a(n),v=a(f);if(null===m||null===v)return 0;let b=m.compareDocumentPosition(v);return b&Node.DOCUMENT_POSITION_FOLLOWING?-1:b&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function O(n,a,{sorted:f=!0,relativeTo:m=null,skipElements:v=[]}={}){var b,x,E;let w=Array.isArray(n)?n.length>0?n[0].ownerDocument:document:n.ownerDocument,j=Array.isArray(n)?f?I(n):n:function(n=document.body){return null==n?[]:Array.from(n.querySelectorAll(P)).sort((n,a)=>Math.sign((n.tabIndex||Number.MAX_SAFE_INTEGER)-(a.tabIndex||Number.MAX_SAFE_INTEGER)))}(n);v.length>0&&j.length>1&&(j=j.filter(n=>!v.includes(n))),m=null!=m?m:w.activeElement;let A=(()=>{if(5&a)return 1;if(10&a)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),S=(()=>{if(1&a)return 0;if(2&a)return Math.max(0,j.indexOf(m))-1;if(4&a)return Math.max(0,j.indexOf(m))+1;if(8&a)return j.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),k=32&a?{preventScroll:!0}:{},_=0,F=j.length,C;do{if(_>=F||_+F<=0)return 0;let n=S+_;if(16&a)n=(n+F)%F;else{if(n<0)return 3;if(n>=F)return 1}null==(C=j[n])||C.focus(k),_+=A}while(C!==w.activeElement);return 6&a&&null!=(E=null==(x=null==(b=C)?void 0:b.matches)?void 0:x.call(b,"textarea,input"))&&E&&C.select(),2}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",n=>{n.metaKey||n.altKey||n.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",n=>{1===n.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===n.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0))},597:function(n,a,f){"use strict";function u(n,a,...f){if(n in a){let m=a[n];return"function"==typeof m?m(...f):m}let m=Error(`Tried to handle "${n}" but there is no handler defined. Only defined handlers are: ${Object.keys(a).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(m,u),m}f.d(a,{E:function(){return u}})},5195:function(n,a,f){"use strict";function t(n){"function"==typeof queueMicrotask?queueMicrotask(n):Promise.resolve().then(n).catch(n=>setTimeout(()=>{throw n}))}f.d(a,{Y:function(){return t}})},4851:function(n,a,f){"use strict";f.d(a,{r:function(){return e}});var m=f(2057);function e(n){return m.O.isServer?null:n instanceof Node?n.ownerDocument:null!=n&&n.hasOwnProperty("current")&&n.current instanceof Node?n.current.ownerDocument:document}},1931:function(n,a,f){"use strict";f.d(a,{AN:function(){return w},l4:function(){return j},sY:function(){return X},yV:function(){return D}});var m,v,b=f(2265),x=f(3960),E=f(597),w=((m=w||{})[m.None=0]="None",m[m.RenderStrategy=1]="RenderStrategy",m[m.Static=2]="Static",m),j=((v=j||{})[v.Unmount=0]="Unmount",v[v.Hidden=1]="Hidden",v);function X({ourProps:n,theirProps:a,slot:f,defaultTag:m,features:v,visible:b=!0,name:x}){let w=N(a,n);if(b)return c(w,f,m,x);let j=null!=v?v:0;if(2&j){let{static:n=!1,...a}=w;if(n)return c(a,f,m,x)}if(1&j){let{unmount:n=!0,...a}=w;return(0,E.E)(n?0:1,{0:()=>null,1:()=>c({...a,hidden:!0,style:{display:"none"}},f,m,x)})}return c(w,f,m,x)}function c(n,a={},f,m){let{as:v=f,children:E,refName:w="ref",...j}=g(n,["unmount","static"]),P=void 0!==n.ref?{[w]:n.ref}:{},A="function"==typeof E?E(a):E;"className"in j&&j.className&&"function"==typeof j.className&&(j.className=j.className(a));let S={};if(a){let n=!1,f=[];for(let[m,v]of Object.entries(a))"boolean"==typeof v&&(n=!0),!0===v&&f.push(m);n&&(S["data-headlessui-state"]=f.join(" "))}if(v===b.Fragment&&Object.keys(R(j)).length>0){if(!(0,b.isValidElement)(A)||Array.isArray(A)&&A.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${m} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(j).map(n=>`  - ${n}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(n=>`  - ${n}`).join(`
`)].join(`
`));let n=A.props,a="function"==typeof(null==n?void 0:n.className)?(...a)=>(0,x.A)(null==n?void 0:n.className(...a),j.className):(0,x.A)(null==n?void 0:n.className,j.className),f=a?{className:a}:{};return(0,b.cloneElement)(A,Object.assign({},N(A.props,R(g(j,["ref"]))),S,P,function(...n){return{ref:n.every(n=>null==n)?void 0:a=>{for(let f of n)null!=f&&("function"==typeof f?f(a):f.current=a)}}}(A.ref,P.ref),f))}return(0,b.createElement)(v,Object.assign({},g(j,["ref"]),v!==b.Fragment&&P,v!==b.Fragment&&S),A)}function N(...n){if(0===n.length)return{};if(1===n.length)return n[0];let a={},f={};for(let m of n)for(let n in m)n.startsWith("on")&&"function"==typeof m[n]?(null!=f[n]||(f[n]=[]),f[n].push(m[n])):a[n]=m[n];if(a.disabled||a["aria-disabled"])return Object.assign(a,Object.fromEntries(Object.keys(f).map(n=>[n,void 0])));for(let n in f)Object.assign(a,{[n](a,...m){for(let v of f[n]){if((a instanceof Event||(null==a?void 0:a.nativeEvent)instanceof Event)&&a.defaultPrevented)return;v(a,...m)}}});return a}function D(n){var a;return Object.assign((0,b.forwardRef)(n),{displayName:null!=(a=n.displayName)?a:n.name})}function R(n){let a=Object.assign({},n);for(let n in a)void 0===a[n]&&delete a[n];return a}function g(n,a=[]){let f=Object.assign({},n);for(let n of a)n in f&&delete f[n];return f}}},function(n){n.O(0,[798,971,472,744],function(){return n(n.s=2888)}),_N_E=n.O()}]);