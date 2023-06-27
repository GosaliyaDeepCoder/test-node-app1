(()=>{"use strict";var e={908:(e,n,t)=>{var o=t(963),a=t(252),l=t(577);const r=(0,a._)("h1",null,"User profile",-1),i=["src"],s=(0,a._)("span",null,"Name: ",-1),A={id:"name"},p=(0,a._)("hr",null,null,-1),f=(0,a._)("span",null,"Email: ",-1),d={id:"email"},u=(0,a._)("hr",null,null,-1),O=(0,a._)("span",null,"Interests: ",-1),h={id:"interests"},c=(0,a._)("hr",null,null,-1),j=(0,a._)("h1",null,"User profile",-1),v=["src"],m=(0,a._)("span",null,"Name: ",-1),y=(0,a._)("hr",null,null,-1),H=(0,a._)("span",null,"Email: ",-1),N=(0,a._)("hr",null,null,-1),E=(0,a._)("span",null,"Interests: ",-1),I=(0,a._)("hr",null,null,-1);function b(e,n,t,b,g,P){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.wy)((0,a._)("div",null,[r,(0,a._)("img",{src:g.image},null,8,i),s,(0,a._)("b",A,(0,l.zw)(g.name),1),p,f,(0,a._)("b",d,(0,l.zw)(g.email),1),u,O,(0,a._)("b",h,(0,l.zw)(g.interests),1),c,(0,a._)("button",{onClick:n[0]||(n[0]=(...e)=>P.handleEditProfile&&P.handleEditProfile(...e))},"Edit Profile")],512),[[o.F8,!g.isEditMode]]),(0,a.wy)((0,a._)("div",null,[j,(0,a._)("img",{src:g.image},null,8,v),m,(0,a.wy)((0,a._)("input",{type:"text",id:"input-name","onUpdate:modelValue":n[1]||(n[1]=e=>g.name=e)},null,512),[[o.nr,g.name]]),y,H,(0,a.wy)((0,a._)("input",{type:"text",id:"input-email","onUpdate:modelValue":n[2]||(n[2]=e=>g.email=e)},null,512),[[o.nr,g.email]]),N,E,(0,a.wy)((0,a._)("input",{type:"text",id:"input-interests","onUpdate:modelValue":n[3]||(n[3]=e=>g.interests=e)},null,512),[[o.nr,g.interests]]),I,(0,a._)("button",{onClick:n[4]||(n[4]=(...e)=>P.handleUpdateProfile&&P.handleUpdateProfile(...e))},"Update Profile")],512),[[o.F8,g.isEditMode]])],64)}const g="data:image/png;base64,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",P={name:"App",data(){return{image:g,name:"",email:"",interests:"",isEditMode:!1}},async created(){const e=await this.fetchUserProfile();this.name=e.name,this.email=e.email,this.interests=e.interests},methods:{handleEditProfile(){this.isEditMode=!0},async handleUpdateProfile(){const e={name:this.name,email:this.email,interests:this.interests},n=await this.updateUserProfile(e);console.log(n),this.isEditMode=!1},async fetchUserProfile(){const e=await fetch("get-profile");return await e.json()},async updateUserProfile(e){const n=await fetch("update-profile",{method:"POST",headers:{Accept:"application/jason","Content-Type":"application/json"},body:JSON.stringify(e)});return await n.json()}}};var w=t(744);const z=(0,w.Z)(P,[["render",b]]),B=z;(0,o.ri)(B).mount("#app")}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var l=n[o]={exports:{}};return e[o](l,l.exports,t),l.exports}t.m=e,(()=>{var e=[];t.O=(n,o,a,l)=>{if(!o){var r=1/0;for(p=0;p<e.length;p++){for(var[o,a,l]=e[p],i=!0,s=0;s<o.length;s++)(!1&l||r>=l)&&Object.keys(t.O).every((e=>t.O[e](o[s])))?o.splice(s--,1):(i=!1,l<r&&(r=l));if(i){e.splice(p--,1);var A=a();void 0!==A&&(n=A)}}return n}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[o,a,l]}})(),(()=>{t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={143:0};t.O.j=n=>0===e[n];var n=(n,o)=>{var a,l,[r,i,s]=o,A=0;if(r.some((n=>0!==e[n]))){for(a in i)t.o(i,a)&&(t.m[a]=i[a]);if(s)var p=s(t)}for(n&&n(o);A<r.length;A++)l=r[A],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(p)},o=self["webpackChunkteamable"]=self["webpackChunkteamable"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))})();var o=t.O(void 0,[998],(()=>t(908)));o=t.O(o)})();
//# sourceMappingURL=app.5df16990.js.map