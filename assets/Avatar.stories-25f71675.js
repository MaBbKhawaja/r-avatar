import{d as O,b as s,o as R,e as D,f as l,n as g,t as P}from"./vue.esm-bundler-d27f2d57.js";const U=["title"],T=O({__name:"Avatar",props:{name:{type:String,default:""},size:{type:Number,default:48},radius:{type:Number,default:50,validator:a=>a>=0&&a<=50},color:{type:String,default:""},image:{type:String,default:""},fontColor:{type:String,default:"rgb(255, 255, 255)"},fontSize:{type:Number},blend:{type:Boolean,default:!0},splitTo:{type:Number,default:4}},setup(a){const e=a;function n(r){let o=0;if(!r)return"black";for(const E of r.split(""))o=(o<<8-o)+E.charCodeAt(0);return"#"+Math.abs(o).toString(16).substr(0,6)}const t=s(()=>e.name.split(/[\s-]+/).map(o=>o.substr(0,1)).join("").substr(0,e.splitTo).toUpperCase()),f=s(()=>{const r=t.value.length>2?e.size/4:e.size/3;return{width:e.size+"px",height:e.size+"px","border-radius":e.radius+"%","font-size":e.fontSize?e.fontSize+"px":r+"px","background-color":e.color===""?n(e.name):e.color,"background-image":F?'url("'+e.image+'")':"none",color:e.fontColor,"font-weight":"700","font-family":'"Poppins", sans-serif'}}),F=s(()=>e.image!==""),j=s(()=>({color:e.fontColor,"mix-blend-mode":e.blend?"difference":""}));return(r,o)=>(R(),D("div",{style:g(f.value),class:"avatar"},[l("table",null,[l("tbody",null,[l("tr",null,[l("td",{title:a.name,style:g(j.value)},P(t.value),13,U)])])])],4))}});const q=(a,e)=>{const n=a.__vccOpts||a;for(const[t,f]of e)n[t]=f;return n},G=q(T,[["__scopeId","data-v-a8d0f631"]]);T.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"name",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"48"}},{name:"radius",type:{name:"number"},defaultValue:{func:!1,value:"50"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"image",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"fontColor",type:{name:"string"},defaultValue:{func:!1,value:'"rgb(255, 255, 255)"'}},{name:"fontSize",type:{name:"number"}},{name:"blend",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"splitTo",type:{name:"number"},defaultValue:{func:!1,value:"4"}}],sourceFiles:["/home/mabb/projects/avatar-vue3/src/components/Avatar.vue"]};const J={title:"Avatar",component:G,tags:["autodocs"],argTypes:{image:{control:"text"},fontColor:{control:"color"},name:{control:"text"},size:{control:"number"},color:{control:"color"},fontSize:{control:"number"}},args:{name:"Mirza",size:200}},i={args:{image:"https://amymhaddad.s3.amazonaws.com/morocco-blue.png",name:"Mirza",size:200,color:"orange",fontSize:90}},c={args:{name:"Mirza",size:200,color:"orange",fontSize:90}},u={args:{fontColor:"red",name:"Mirza",size:200,color:"#000",fontSize:90}},m={args:{fontColor:"red",name:"Mirza",size:200,color:"#000",fontSize:20}},d={args:{fontColor:"red",name:"Mirza",size:100,color:"#000"}},p={args:{fontColor:"red",name:"Mirza Anees baig Barlas",size:100,radius:20}};var z,b,y;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    image: "https://amymhaddad.s3.amazonaws.com/morocco-blue.png",
    name: "Mirza",
    size: 200,
    color: "orange",
    fontSize: 90
  }
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var S,v,_;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: "Mirza",
    size: 200,
    color: "orange",
    fontSize: 90
  }
}`,...(_=(v=c.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var h,C,M;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    fontColor: "red",
    name: "Mirza",
    size: 200,
    color: "#000",
    fontSize: 90
  }
}`,...(M=(C=u.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var x,B,A;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    fontColor: "red",
    name: "Mirza",
    size: 200,
    color: "#000",
    fontSize: 20
  }
}`,...(A=(B=m.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var k,V,I;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    fontColor: "red",
    name: "Mirza",
    size: 100,
    color: "#000"
  }
}`,...(I=(V=d.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var N,w,W;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    fontColor: "red",
    name: "Mirza Anees baig Barlas",
    size: 100,
    radius: 20
  }
}`,...(W=(w=p.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};const K=["WithBackgroundImage","WithoutBackgroundImage","WithFontColor","fontSize","AvatarSize","BorderRadius"];export{d as AvatarSize,p as BorderRadius,i as WithBackgroundImage,u as WithFontColor,c as WithoutBackgroundImage,K as __namedExportsOrder,J as default,m as fontSize};
