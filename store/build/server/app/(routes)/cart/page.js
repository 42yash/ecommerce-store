(()=>{var e={};e.id=631,e.ids=[631],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},10467:e=>{"use strict";e.exports=require("next/dist/compiled/@vercel/og/index.node.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},87503:e=>{"use strict";e.exports=require("node:net")},49411:e=>{"use strict";e.exports=require("node:path")},97742:e=>{"use strict";e.exports=require("node:process")},84492:e=>{"use strict";e.exports=require("node:stream")},72477:e=>{"use strict";e.exports=require("node:stream/web")},41041:e=>{"use strict";e.exports=require("node:url")},47261:e=>{"use strict";e.exports=require("node:util")},65628:e=>{"use strict";e.exports=require("node:zlib")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},71267:e=>{"use strict";e.exports=require("worker_threads")},59796:e=>{"use strict";e.exports=require("zlib")},71754:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>h,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var r=a(67096),s=a(16132),i=a(37284),n=a.n(i),o=a(32564),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);a.d(t,l);let d=["",{children:["(routes)",{children:["cart",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,91496)),"/home/duorp/Github/github.com/shaman-ent/website/store/app/(routes)/cart/page.tsx"]}]},{}]},{loading:[()=>Promise.resolve().then(a.bind(a,4612)),"/home/duorp/Github/github.com/shaman-ent/website/store/app/(routes)/loading.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,41377)),"/home/duorp/Github/github.com/shaman-ent/website/store/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/home/duorp/Github/github.com/shaman-ent/website/store/app/(routes)/cart/page.tsx"],u="/(routes)/cart/page",h={require:a,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(routes)/cart/page",pathname:"/cart",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},55153:(e,t,a)=>{Promise.resolve().then(a.bind(a,82771))},82771:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>page,revalidate:()=>g});var r=a(30784),s=a(9885),i=a.n(s);let container=({children:e})=>r.jsx("div",{className:"mx-auto max-w-7xl",children:e});var n=a(29097),o=a(54997),l=a(57114);let d=i().createContext({totalPrice:0,setTotalPrice:e=>{}}),delivery_info=({formData:e,setFormData:t})=>{let{totalPrice:a}=i().useContext(d),handleChange=a=>{t({...e,[a.target.name]:a.target.value})};return(0,r.jsxs)("form",{className:"flex flex-col ",children:[(0,r.jsxs)("div",{className:"flex flex-row gap-4",children:[r.jsx("input",{type:"text",className:"w-1/2 h-10 items-center text-center",placeholder:"First Name",name:"firstName",value:e.firstName,onChange:handleChange,required:!0}),r.jsx("input",{type:"text",className:"w-1/2 h-10 items-center text-center",placeholder:"Last Name",name:"lastName",value:e.lastName,onChange:handleChange,required:!0})]}),r.jsx("input",{type:"tel",className:"w-1/2 h-10 items-center text-center mt-4 mx-auto",placeholder:"Phone Number",name:"phone",value:e.phone,onChange:handleChange,required:!0}),r.jsx("label",{className:"items-center  mt-4 mx-auto",children:"- - - - - - - -Address Information- - - - - - - -"}),r.jsx("input",{type:"text",className:"w-full h-10  mt-4 text-center ",placeholder:"Floor/Building Name",name:"floor",value:e.floor,onChange:handleChange,required:!0}),r.jsx("input",{type:"text",name:"streetAddress",className:"w-full h-10 mt-4 text-center",placeholder:"Street Address",value:e.streetAddress,onChange:handleChange,required:!0}),(0,r.jsxs)("div",{className:"flex flex-row gap-4 h-10 mt-4",children:[r.jsx("input",{type:"text",placeholder:"City",name:"city",className:"w-1/2 text-center",value:e.city,onChange:handleChange,required:!0}),r.jsx("input",{type:"text",className:"w-1/2 text-center",placeholder:"Pincode",name:"pincode",value:e.pincode,onChange:handleChange,required:!0})]}),(0,r.jsxs)("select",{name:"state",value:e.state,className:"w-1/2 h-10 items-center text-center mt-4 mb-6 mx-auto",onChange:handleChange,required:!0,children:[r.jsx("option",{value:"",children:"Select a state"}),r.jsx("option",{value:"Andhra Pradesh",children:"Andhra Pradesh"}),r.jsx("option",{value:"Arunachal Pradesh",children:"Arunachal Pradesh"}),r.jsx("option",{value:"Assam",children:"Assam"}),r.jsx("option",{value:"Bihar",children:"Bihar"}),r.jsx("option",{value:"Chhattisgarh",children:"Chhattisgarh"}),r.jsx("option",{value:"Goa",children:"Goa"}),r.jsx("option",{value:"Gujarat",children:"Gujarat"}),r.jsx("option",{value:"Haryana",children:"Haryana"}),r.jsx("option",{value:"Himachal Pradesh",children:"Himachal Pradesh"}),r.jsx("option",{value:"Jharkhand",children:"Jharkhand"}),r.jsx("option",{value:"Karnataka",children:"Karnataka"}),r.jsx("option",{value:"Kerala",children:"Kerala"}),r.jsx("option",{value:"Madhya Pradesh",children:"Madhya Pradesh"}),r.jsx("option",{value:"Maharashtra",children:"Maharashtra"}),r.jsx("option",{value:"Manipur",children:"Manipur"}),r.jsx("option",{value:"Meghalaya",children:"Meghalaya"}),r.jsx("option",{value:"Mizoram",children:"Mizoram"}),r.jsx("option",{value:"Nagaland",children:"Nagaland"}),r.jsx("option",{value:"Odisha",children:"Odisha"}),r.jsx("option",{value:"Punjab",children:"Punjab"}),r.jsx("option",{value:"Rajasthan",children:"Rajasthan"}),r.jsx("option",{value:"Sikkim",children:"Sikkim"}),r.jsx("option",{value:"Tamil Nadu",children:"Tamil Nadu"}),r.jsx("option",{value:"Telangana",children:"Telangana"}),r.jsx("option",{value:"Tripura",children:"Tripura"}),r.jsx("option",{value:"Uttar Pradesh",children:"Uttar Pradesh"}),r.jsx("option",{value:"Uttarakhand",children:"Uttarakhand"}),r.jsx("option",{value:"West Bengal",children:"West Bengal"}),r.jsx("option",{value:"Andaman and Nicobar Islands",children:"Andaman and Nicobar Islands"}),r.jsx("option",{value:"Chandigarh",children:"Chandigarh"}),r.jsx("option",{value:"Dadra and Nagar Haveli and Daman and Diu",children:"Dadra and Nagar Haveli and Daman and Diu"}),r.jsx("option",{value:"The Government of NCT of Delhi",children:"Delhi"}),r.jsx("option",{value:"Lakshadweep",children:"Lakshadweep"}),r.jsx("option",{value:"Puducherry",children:"Puducherry"}),r.jsx("option",{value:"Ladakh",children:"Ladakh"})]})]})};var c=a(95555),u=a(52713),h=a(10345);let summary=()=>{let e=(0,l.useSearchParams)(),t=(0,n.Z)(e=>e.items),a=(0,n.Z)(e=>e.removeAll),[i,d]=(0,s.useState)({firstName:"",lastName:"",phone:"",floor:"",buildingName:"",streetAddress:"",city:"",state:"",pincode:""});(0,s.useEffect)(()=>{e.get("success")&&(h.toast.success("Payment completed."),a()),e.get("canceled")&&h.toast.error("Something went wrong.")},[e,a]);let p=t.reduce((e,t)=>e+Number(t.price)*t.quantity,0),onCheckout=async()=>{let e=await o.Z.post("http://localhost:3000/api/5f33eb48-56b8-4445-bbfb-f89665ea1307/checkout",{productIds:t.map(e=>e.id),orderData:i,totalPrice:p}).catch(e=>{console.log("Error in axios post request"),console.log(e)});e?window.location.href=e.data.linkUrl:console.log("No response from server")};return(0,r.jsxs)("div",{className:"mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8",children:[r.jsx(delivery_info,{formData:i,setFormData:d}),r.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Order summary"}),r.jsx("div",{className:"mt-6 space-y-4",children:(0,r.jsxs)("div",{className:"flex items-center justify-between border-t border-gray-200 pt-4",children:[r.jsx("div",{className:"text-base font-medium text-gray-900",children:"Order total"}),r.jsx(u.Z,{value:p})]})}),r.jsx(c.Z,{onClick:onCheckout,disabled:0===t.length,className:"w-full mt-6",children:"Proceed to Payment"})]})};var p=a(52451),x=a.n(p),m=a(56206),v=a(78124);let cart_item=({data:e})=>{let t=(0,n.Z)();return(0,r.jsxs)("li",{className:"flex py-6 border-b",children:[r.jsx("div",{className:"relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48",children:r.jsx(x(),{fill:!0,src:e.images[0].url,alt:"",className:"object-cover object-center"})}),(0,r.jsxs)("div",{className:"relative ml-4 flex flex-1 flex-col justify-between sm:ml-6",children:[r.jsx("div",{className:"absolute z-10 right-0 top-0",children:r.jsx(v.Z,{onClick:()=>{t.removeItem(e.id)},icon:r.jsx(m.Z,{size:15})})}),(0,r.jsxs)("div",{className:"relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0",children:[r.jsx("div",{className:"flex justify-between",children:(0,r.jsxs)("p",{className:" text-lg font-semibold text-black",children:[e.name," (Quantity: ",e.quantity,")"]})}),(0,r.jsxs)("div",{className:"mt-1 flex text-sm",children:[r.jsx("p",{className:"text-gray-500",children:e.color.name}),r.jsx("p",{className:"ml-4 border-l border-gray-200 pl-4 text-gray-500",children:e.size.name})]}),r.jsx(u.Z,{value:e.price})]})]})]})},g=0,page=()=>{let[e,t]=(0,s.useState)(!1),a=(0,n.Z)();(0,s.useEffect)(()=>{t(!0)},[]);let[o,l]=i().useState(0),handleRemoveItem=e=>{a.removeItem(e)};return e?r.jsx(d.Provider,{value:{totalPrice:o,setTotalPrice:l},children:r.jsx("div",{className:"bg-white",children:r.jsx(container,{children:(0,r.jsxs)("div",{className:"px-4 py-16 sm:px-6 lg:px-8",children:[r.jsx("h1",{className:"text-3xl font-bold text-black",children:"Shopping Cart"}),(0,r.jsxs)("div",{className:"mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12",children:[(0,r.jsxs)("div",{className:"lg:col-span-7",children:[0===a.items.length&&r.jsx("p",{className:"text-neutral-500",children:"No items added to cart."}),r.jsx("ul",{children:a.items.map(e=>r.jsx(cart_item,{data:e,onRemove:()=>handleRemoveItem(e.id)},e.id))})]}),r.jsx(summary,{})]})]})})})}):null}},91496:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>d,revalidate:()=>l});var r=a(95153);let s=(0,r.createProxy)(String.raw`/home/duorp/Github/github.com/shaman-ent/website/store/app/(routes)/cart/page.tsx`),{__esModule:i,$$typeof:n}=s,o=s.default,l=s.revalidate,d=o}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[169,744,997,582,199],()=>__webpack_exec__(71754));module.exports=a})();