"use strict";(self.webpackChunkphonebook_app=self.webpackChunkphonebook_app||[]).push([[747],{747:function(e,n,r){r.r(n),r.d(n,{default:function(){return B}});var t=r(4164),a=r(9823),o="ModalWindow_modalBackdrop__ULw5N",s="ModalWindow_modalContent__9BhIB",i=r(7689),c=r(1087),u=r(2791),d=r(3329),l=document.querySelector("#modal-root"),m=function(e){var n=e.children,r=(0,i.s0)();(0,u.useEffect)((function(){var e=function(e){"Escape"===e.code&&r("/contacts")};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[r]);return(0,t.createPortal)((0,d.jsx)("div",{className:o,onClick:function(e){e.currentTarget===e.target&&r("/contacts")},children:(0,d.jsxs)("div",{className:s,children:[(0,d.jsx)(c.rU,{to:"/contacts",style:{textDecoration:"none"},children:(0,d.jsx)(a.Z,{color:"disabled"})}),n]})}),l)},h=r(5861),b=r(9439),x=r(4687),f=r.n(x),v=r(8308),p=r(4518),w=r(5218),j=r(5705),C=r(1599),k=r(9079),y=r(890),Z=r(501),_=r(2716),g="EditContact_title__2nHc5",E="EditContact_contactContainer__VwnRG",N=function(){var e=(0,i.UO)().contactId,n=(0,C.Jx)(),r=n.data,t=n.isLoading,a=(0,C.i)(),o=(0,b.Z)(a,1)[0],s=(0,i.s0)(),c=(0,j.TA)({initialValues:{name:"",number:""},validationSchema:k.K3,onSubmit:function(){var n=(0,h.Z)(f().mark((function n(t){var a;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==t.name.trim()||""!==t.number.trim()){n.next=2;break}return n.abrupt("return");case 2:if(a=r.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase().trim()})),!a){n.next=7;break}return c.resetForm(),w.ZP.error("".concat(t.name.trim()," is already in contacts")),n.abrupt("return");case 7:return n.next=9,o((0,k.$B)({name:t.name.trim(),number:t.number.trim(),id:e}));case 9:w.ZP.success("Contact successfully edited!"),c.resetForm(),setTimeout((function(){return s("/contacts")}),500);case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}),l=(0,u.useMemo)((function(){if(!t)return r.filter((function(n){return n.id===e}))}),[e,r,t]);return(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{className:g,children:"Edit contact"}),!t&&(0,d.jsxs)("div",{className:E,children:[(0,d.jsxs)(y.Z,{sx:{display:"flex",mb:1},variant:"body1",children:[(0,d.jsx)(Z.Z,{sx:{mr:2}}),l[0].name]}),(0,d.jsxs)(y.Z,{sx:{display:"flex"},variant:"body1",children:[(0,d.jsx)(_.Z,{sx:{mr:2}}),l[0].number]})]}),(0,d.jsxs)("form",{onSubmit:c.handleSubmit,children:[(0,d.jsx)(v.Z,{id:"name",label:"New name",variant:"outlined",sx:{width:1,mb:2},name:"name",type:"text",value:c.values.name,onChange:c.handleChange,error:c.touched.name&&Boolean(c.errors.name),helperText:c.touched.name&&c.errors.name}),(0,d.jsx)(v.Z,{id:"number",label:"New phone number",variant:"outlined",sx:{width:1,mb:2},name:"number",type:"tel",value:c.values.number,onChange:c.handleChange,error:c.touched.number&&Boolean(c.errors.number),helperText:c.touched.number&&c.errors.number}),(0,d.jsx)(p.Z,{sx:{width:1,color:"black"},type:"submit",disabled:!(c.values.name||c.values.number),children:"Save"})]})]})},B=function(){return(0,d.jsx)(m,{children:(0,d.jsx)(N,{})})}},9823:function(e,n,r){var t=r(4836);n.Z=void 0;var a=t(r(5649)),o=r(3329),s=(0,a.default)((0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");n.Z=s}}]);
//# sourceMappingURL=747.07859974.chunk.js.map