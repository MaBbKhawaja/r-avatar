import{d as O,b as f,o as R,e as D,f as s,n as g,t as P}from"./vue.esm-bundler-d27f2d57.js";const T=["title"],F=O({__name:"Avatar",props:{name:{type:String,default:""},size:{type:Number,default:48},radius:{type:Number,default:50,validator:a=>a>=0&&a<=50},color:{type:String,default:""},image:{type:String,default:""},fontColor:{type:String},fontSize:{type:Number}},setup(a){const e=a;function n(r){let o=0;if(!r)return"black";for(const E of r.split(""))o=(o<<8-o)+E.charCodeAt(0);return"#"+Math.abs(o).toString(16).substr(0,6)}const t=f(()=>e.name.split(/[\s-]+/).map(o=>o.substr(0,1)).join("").substr(0,4).toUpperCase()),p=f(()=>{const r=t.value.length>2?e.size/4:e.size/3;return{width:e.size+"px",height:e.size+"px","border-radius":e.radius+"%","font-size":e.fontSize?e.fontSize+"px":r+"px","background-color":e.color===""?n(e.name):e.color,"background-image":j?'url("'+e.image+'")':"none",color:e.fontColor,"font-weight":"700","font-family":'"Poppins", sans-serif'}}),j=f(()=>e.image!=="");return(r,o)=>(R(),D("div",{style:g(p.value),class:"avatar"},[s("table",null,[s("tbody",null,[s("tr",null,[s("td",{title:a.name,style:g(a.fontColor?"color:"+a.fontColor:"color: rgb(255, 255, 255);mix-blend-mode: difference")},P(t.value),13,T)])])])],4))}});const U=(a,e)=>{const n=a.__vccOpts||a;for(const[t,p]of e)n[t]=p;return n},q=U(F,[["__scopeId","data-v-48c3fc71"]]);F.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"name",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"48"}},{name:"radius",type:{name:"number"},defaultValue:{func:!1,value:"50"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"image",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"fontColor",type:{name:"string"}},{name:"fontSize",type:{name:"number"}}],sourceFiles:["/home/mabb/projects/avatar-vue3/src/components/Avatar.vue"]};const H={title:"Avatar",component:q,tags:["autodocs"],argTypes:{image:{control:"text"},fontColor:{control:"color"},name:{control:"text"},size:{control:"number"},color:{control:"color"},fontSize:{control:"number"}},args:{name:"Mirza",size:200}},c={args:{image:"https://amymhaddad.s3.amazonaws.com/morocco-blue.png",name:"Mirza",size:200,color:"orange",fontSize:90}},i={args:{name:"Mirza",size:200,color:"orange",fontSize:90}},l={args:{fontColor:"red",name:"Mirza",size:200,color:"#000",fontSize:90}},m={args:{fontColor:"red",name:"Mirza",size:200,color:"#000",fontSize:20}},u={args:{fontColor:"red",name:"Mirza",size:100,color:"#000"}},d={args:{fontColor:"red",name:"Mirza Anees baig Barlas",size:100,radius:20}};var z,S,y;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    image: "https://amymhaddad.s3.amazonaws.com/morocco-blue.png",
    name: "Mirza",
    size: 200,
    color: "orange",
    fontSize: 90
  }
}`,...(y=(S=c.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var b,v,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: "Mirza",
    size: 200,
    color: "orange",
    fontSize: 90
  }
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var _,C,M;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    fontColor: "red",
    name: "Mirza",
    size: 200,
    color: "#000",
    fontSize: 90
  }
}`,...(M=(C=l.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var x,A,B;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    fontColor: "red",
    name: "Mirza",
    size: 200,
    color: "#000",
    fontSize: 20
  }
}`,...(B=(A=m.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var k,I,w;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    fontColor: "red",
    name: "Mirza",
    size: 100,
    color: "#000"
  }
}`,...(w=(I=u.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var N,V,W;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    fontColor: "red",
    name: "Mirza Anees baig Barlas",
    size: 100,
    radius: 20
  }
}`,...(W=(V=d.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const J=["WithBackgroundImage","WithoutBackgroundImage","WithFontColor","fontSize","AvatarSize","BorderRadius"];export{u as AvatarSize,d as BorderRadius,c as WithBackgroundImage,l as WithFontColor,i as WithoutBackgroundImage,J as __namedExportsOrder,H as default,m as fontSize};
