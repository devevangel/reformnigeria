(this["webpackJsonpproject-endsars"]=this["webpackJsonpproject-endsars"]||[]).push([[0],{14:function(e,t,a){},38:function(e,t,a){e.exports=a(66)},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),l=a.n(c),o=a(4),s=a(1),i=(a(14),Object(s.g)((function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg navbar-dark",style:{backgroundColor:"#171718"}},r.a.createElement("div",{className:"container"},r.a.createElement(o.b,{className:"navbar-brand",to:"/"},r.a.createElement("img",{style:{width:"50px",height:"50px"},src:"https://res.cloudinary.com/devevangel/image/upload/v1602571512/LegacyEA/assets/WhatsApp_Image_2020-10-13_at_7.10.12_AM_kd8fco.jpg",alt:""})),r.a.createElement("p",{style:{color:"orange"}},"#TheNewNigerianCampaign"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/"},"Feeds",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/vote"},"Vote")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/pictures"},"Pictures")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/videos"},"Videos")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/contact"},"Contact")))))),r.a.createElement("center",null,r.a.createElement("div",{id:"carouselExampleControls",className:"carousel slide","data-ride":"carousel",style:{width:"90%",height:"100%",marginTop:"6rem"}},r.a.createElement("div",{className:"carousel-inner"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{width:"100%",height:"100%",src:"https://res.cloudinary.com/devevangel/image/upload/v1602686938/LegacyEA/assets/endsarsimg-legacy-3_glsqoz.jpg",className:"d-block w-100",alt:"..."})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{width:"100%",height:"100%",src:"https://res.cloudinary.com/devevangel/image/upload/v1602686938/LegacyEA/assets/endsarsimg-legacy-2_vh4yod.jpg",className:"d-block w-100",alt:"..."})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{width:"100%",height:"100%",src:"https://res.cloudinary.com/devevangel/image/upload/v1602686938/LegacyEA/assets/endsarsimg-legacy-1_hfuduv.jpg",className:"d-block w-100",alt:"..."})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{width:"100%",height:"100%",src:"https://res.cloudinary.com/devevangel/image/upload/v1602813746/LegacyEA/assets/asset4_qlrbec.jpg",className:"d-block w-100",alt:"..."}))),r.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleControls",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleControls",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next")))))}))),m=a(2),u=function(e){var t=e._id,a=e.caption,n=e.time,c=e.state,l=e.city,o=e.url,s=e.type,i=e.reference;return r.a.createElement("li",{ref:i,key:t,className:"list-group"},r.a.createElement("div",{className:"card mb-3",style:{border:"1px solid #171718",backgroundColor:"#171718"}},r.a.createElement("h5",{className:"card-header m-1",style:{border:"1px solid #171718",backgroundColor:"#ffb31f",color:"#171718"}},a),r.a.createElement("div",null,r.a.createElement("div",{style:{color:"#ffb31f"},className:"float-left ml-3 font-weight-normal"},n),r.a.createElement("div",{style:{color:"#ffb31f"},className:"float-right mr-3 font-weight-normal"},c,"/",l)),r.a.createElement("div",{className:"card-body text-dark"},"pic"===s?r.a.createElement("img",{src:o,alt:"",width:"100%",height:"100%"}):r.a.createElement("video",{controls:!0,width:"100%",height:"100%",controlsList:"download",src:o}))))},d=a(11),p=a.n(d),f=a(18),b=a(10),v=a.n(b);function E(e,t){var a=Object(n.useState)(!0),r=Object(m.a)(a,2),c=r[0],l=r[1],o=Object(n.useState)(!1),s=Object(m.a)(o,2),i=s[0],u=s[1],d=Object(n.useState)([]),p=Object(m.a)(d,2),b=p[0],E=p[1],g=Object(n.useState)(!1),h=Object(m.a)(g,2),y=h[0],N=h[1];return Object(n.useEffect)((function(){E([])}),[t]),Object(n.useEffect)((function(){l(!0),u(!1),v()({method:"GET",url:"https://afternoon-wave-69869.herokuapp.com/api/v1/".concat(t),params:{page:e}}).then((function(e){var t;E((function(t){var a;return Object(f.a)(new Set([].concat(Object(f.a)(t),Object(f.a)(null===(a=e.data)||void 0===a?void 0:a.data))))})),N((null===(t=e.data)||void 0===t?void 0:t.data.length)>0),l(!1)})).catch((function(e){return u(e)}))}),[e,t]),{loading:c,error:i,feeds:b,hasMore:y}}var g=function(){var e=Object(n.useState)("pic"),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("pictures"),s=Object(m.a)(l,2),i=s[0],d=s[1],f=Object(n.useState)(1),b=Object(m.a)(f,2),v=b[0],g=b[1],h=E(v,i),y=h.feeds,N=h.hasMore,x=h.loading,j=(h.error,Object(n.useRef)()),w=Object(n.useCallback)((function(e){x||(j.current&&j.current.disconnect(),j.current=new IntersectionObserver((function(e){e[0].isIntersecting&&N&&g((function(e){return e+1}))})),e&&j.current.observe(e))}),[x,N]);return r.a.createElement("div",null,r.a.createElement("div",{className:"mt-5"},r.a.createElement("center",null,r.a.createElement(o.b,{to:"/addPic",style:{color:"#ffb31f",border:"1px solid #ffb31f"},type:"button",className:"btn btn-outline-secondary mr-2"},"Share Picture"),r.a.createElement(o.b,{to:"/addVid",style:{color:"#ffb31f",border:"1px solid #ffb31f"},type:"button",className:"btn btn-outline-secondary ml-2"},"Share Video"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{style:{color:"#ffb31f"}},"Filter By"),r.a.createElement("select",{onChange:function(e){"pictures"===e.target.value?(c("pic"),d("pictures"),g(1)):"videos"===e.target.value&&(c("vid"),d("videos"),g(1))},className:"form-control",id:"exampleFormControlSelect1",style:{width:"8rem",color:"#171718",border:"1px solid #ffb31f"}},r.a.createElement("option",null,"pictures"),r.a.createElement("option",null,"videos"))))),r.a.createElement("div",{className:"d-flex justify-content-center",style:{marginTop:"1rem"}},r.a.createElement("div",{style:{width:"40rem"}},r.a.createElement("ul",{className:" card=body list-group"},y.map((function(e,t){return y.length===t+1?r.a.createElement(u,{reference:w,key:t,caption:e.caption,url:e.url,time:p()(e.createdAt).from(),city:e.city,state:e.state,type:a}):r.a.createElement(u,{key:t,caption:e.caption,url:e.url,time:p()(e.createdAt).fromNow(),city:e.city,state:e.state,type:a})}))))),r.a.createElement("center",null,function(){if(x)return r.a.createElement("div",{className:"spinner-border text-warning mt-3",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))}()))},h=function(){return r.a.createElement("div",null,r.a.createElement(g,null))},y=function(){var e=Object(n.useState)(1),t=Object(m.a)(e,2),a=t[0],c=t[1],l=E(a,"pictures"),s=l.feeds,i=l.hasMore,d=l.loading,f=(l.error,Object(n.useRef)()),b=Object(n.useCallback)((function(e){d||(f.current&&f.current.disconnect(),f.current=new IntersectionObserver((function(e){e[0].isIntersecting&&i&&c((function(e){return e+1}))})),e&&f.current.observe(e))}),[d,i]);return r.a.createElement("div",null,r.a.createElement("div",{className:"mt-5"},r.a.createElement("center",null,r.a.createElement(o.b,{to:"/addPic",style:{color:"#ffb31f",border:"1px solid #ffb31f"},type:"button",className:"btn btn-outline-secondary mr-2"},"Share Picture"))),r.a.createElement("div",{className:"d-flex justify-content-center",style:{marginTop:"1rem"}},r.a.createElement("div",{style:{width:"40rem"}},r.a.createElement("ul",{className:" card=body list-group"},s.map((function(e,t){return s.length===t+1?r.a.createElement(u,{reference:b,key:t,caption:e.caption,url:e.url,time:p()(e.createdAt).from(),city:e.city,state:e.state,type:"pic"}):r.a.createElement(u,{key:t,caption:e.caption,url:e.url,time:p()(e.createdAt).fromNow(),city:e.city,state:e.state,type:"pic"})}))))),r.a.createElement("center",null,function(){if(d)return r.a.createElement("div",{className:"spinner-border text-warning mt-3",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))}()))},N=function(){var e=Object(n.useState)(1),t=Object(m.a)(e,2),a=t[0],c=t[1],l=E(a,"videos"),s=l.feeds,i=l.hasMore,d=l.loading,f=(l.error,Object(n.useRef)()),b=Object(n.useCallback)((function(e){d||(f.current&&f.current.disconnect(),f.current=new IntersectionObserver((function(e){e[0].isIntersecting&&i&&c((function(e){return e+1}))})),e&&f.current.observe(e))}),[d,i]);return r.a.createElement("div",null,r.a.createElement("div",{className:"mt-5"},r.a.createElement("center",null,r.a.createElement(o.b,{to:"/addVid",style:{color:"#ffb31f",border:"1px solid #ffb31f"},type:"button",className:"btn btn-outline-secondary mr-2"},"Share Video"))),r.a.createElement("div",{className:"d-flex justify-content-center",style:{marginTop:"1rem"}},r.a.createElement("div",{style:{width:"40rem"}},r.a.createElement("ul",{className:" card=body list-group"},s.map((function(e,t){return s.length===t+1?r.a.createElement(u,{reference:b,key:t,caption:e.caption,url:e.url,time:p()(e.createdAt).from(),city:e.city,state:e.state,type:"video"}):r.a.createElement(u,{key:t,caption:e.caption,url:e.url,time:p()(e.createdAt).fromNow(),city:e.city,state:e.state,type:"video"})}))))),r.a.createElement("center",null,function(){if(d)return r.a.createElement("div",{className:"spinner-border text-warning mt-3",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))}()))},x=a(13),j=a(5),w=function(){var e=Object(n.useState)({caption:"",state:"",city:"",photo:"",formData:"",loading:!1,redirectTo:!1}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(0),o=Object(m.a)(l,2),i=o[0],u=o[1],d=a.caption,p=a.state,f=a.city,b=a.formData,E=a.loading,g=a.redirectTo;Object(n.useEffect)((function(){c(Object(j.a)(Object(j.a)({},a),{},{formData:new FormData}))}),[]);var h=function(e){return function(t){var n;"photo"===e?(n=t.target.files[0],u(t.target.files[0].size)):n=t.target.value,b.set(e,n),c(Object(j.a)(Object(j.a)({},a),{},Object(x.a)({},e,n)))}},y=function(e){e.preventDefault(),""!==d?""!==p?i<=0?alert("A picture is required"):(c(Object(j.a)(Object(j.a)({},a),{},{error:"",loading:!0})),v.a.post("https://afternoon-wave-69869.herokuapp.com/api/v1/pictures",b).then((function(e){"success"===e.data.status&&c(Object(j.a)(Object(j.a)({},a),{},{caption:"",state:"",city:"",photo:"",loading:!1,redirectTo:!0}))})).catch((function(e){console.log(e.message)}))):alert("State can not be empty"):alert("Caption can not be empty")};return r.a.createElement("div",{className:"mb-5 d-flex justify-content-center"},r.a.createElement("div",{className:"card mt-5 md-2",style:{width:"30rem",backgroundColor:"#171718"}},r.a.createElement("center",null,function(){if(E)return r.a.createElement("div",{className:"spinner-border text-warning mt-3",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))}()),r.a.createElement("h5",{className:"card-header text-center text"},"Share Picture"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text"},"Caption"),r.a.createElement("input",{type:"text",value:d,className:"form-control",placeholder:"your caption goes here...",onChange:h("caption"),required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text"},"State"),r.a.createElement("input",{type:"text",value:p,className:"form-control",placeholder:"enter state",onChange:h("state"),required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text"},"City"),r.a.createElement("input",{value:f,type:"text",className:"form-control",placeholder:"enter your city",onChange:h("city"),required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text"},"Picture file"),r.a.createElement("input",{onChange:h("photo"),accept:"image/*",type:"file",className:"form-control-file text"}))),r.a.createElement("center",null,r.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary text",style:{border:"1px solid  #ffb31f"},onClick:y},"Share")))),function(){if(g)return r.a.createElement(s.a,{to:"/pictures"})}())},O=function(){var e=Object(n.useState)({caption:"",state:"",city:"",clip:"",formData:"",loading:!1}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(0),o=Object(m.a)(l,2),i=o[0],u=o[1],d=a.caption,p=a.state,f=a.city,b=a.formData,E=a.loading,g=a.redirectTo;Object(n.useEffect)((function(){c(Object(j.a)(Object(j.a)({},a),{},{formData:new FormData}))}),[]);var h=function(e){return function(t){var n;"clip"===e?(n=t.target.files[0],u(t.target.files[0].size)):n=t.target.value,b.set(e,n),c(Object(j.a)(Object(j.a)({},a),{},Object(x.a)({},e,n)))}},y=function(e){e.preventDefault(),""!==d?""!==p?i>5e7?alert("File size should be less than 50mb"):i<=0?alert("A file is required"):(c(Object(j.a)(Object(j.a)({},a),{},{error:"",loading:!0})),v.a.post("https://afternoon-wave-69869.herokuapp.com/api/v1/videos",b).then((function(e){"success"===e.data.status&&c(Object(j.a)(Object(j.a)({},a),{},{caption:"",state:"",city:"",clip:"",loading:!1,redirectTo:!0}))}))):alert("State can not be empty"):alert("Caption can not be empty")};return r.a.createElement("div",{className:"mb-5 d-flex justify-content-center"},r.a.createElement("div",{className:"card mt-5",style:{width:"30rem",backgroundColor:"#171718"}},r.a.createElement("center",null,function(){if(E)return r.a.createElement("div",{className:"spinner-border text-warning mt-3",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))}()),r.a.createElement("h5",{className:"card-header text-center text"},"Share Video"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text"},"Caption"),r.a.createElement("input",{onChange:h("caption"),type:"text",className:"form-control",placeholder:"your caption goes here...",value:d})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text"},"State"),r.a.createElement("input",{onChange:h("state"),type:"text",className:"form-control",placeholder:"enter your state",value:p})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text"},"City"),r.a.createElement("input",{onChange:h("city"),type:"text",className:"form-control",placeholder:"enter your city",value:f})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text"},"Video file"),r.a.createElement("input",{onChange:h("clip"),accept:"video/*",type:"file",className:"form-control-file text",id:"exampleFormControlFile1"}))),r.a.createElement("center",null,r.a.createElement("button",{className:"btn btn-outline-secondary text",style:{border:"1px solid  #ffb31f"},onClick:y},"Share")))),function(){if(g)return r.a.createElement(s.a,{to:"/videos"})}())},k=a(34),S=a(35),C=a(37),V=a(36),A=function(e){Object(C.a)(a,e);var t=Object(V.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={upVotes:0,downVotes:0,warning:""},e.getVotes=function(){v.a.get("https://afternoon-wave-69869.herokuapp.com/api/v1/votes").then((function(t){"success"===t.data.status&&e.setState({upVotes:t.data.data.upVote,downVotes:t.data.data.downVote})})).catch((function(e){console.log(e)}))},e.handleUpVote=function(t){t.preventDefault(),console.log(localStorage.getItem("voteStatus")),v()({method:"PATCH",url:"https://afternoon-wave-69869.herokuapp.com/api/v1/votes/upVotes",headers:{ContentType:"application/json"},data:{voted:1*localStorage.getItem("voteStatus")}}).then((function(t){"success"===t.data.status&&(e.setState({upVotes:t.data.data.upVote,downVotes:t.data.data.downVote}),localStorage.setItem("voteStatus",t.data.voted))})).catch((function(e){console.log(e)}))},e.handleButtonDisable=function(){return 1*localStorage.getItem("voteStatus")===1},e.handleDownVote=function(t){t.preventDefault(),console.log(localStorage.getItem("voteStatus")),v()({method:"PATCH",url:"https://afternoon-wave-69869.herokuapp.com/api/v1/votes/downVotes",headers:{ContentType:"application/json"},data:{voted:1*localStorage.getItem("voteStatus")}}).then((function(t){"success"===t.data.status&&(e.setState({upVotes:t.data.data.upVote,downVotes:t.data.data.downVote}),localStorage.setItem("voteStatus",t.data.voted))})).catch((function(e){console.log(e)}))},e.handleCancel=function(){console.log("canceled"),window.location.reload()},e.thousands_separators=function(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")},e.form=function(){return r.a.createElement("div",{className:"card mt-5 md-2",style:{width:"30rem",backgroundColor:"#171718",border:"1px solid orange"}},r.a.createElement("h5",{className:"card-header text-center text m-1",style:{border:"1px solid orange"}},"Vote"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{style:{border:"1px solid orange"}},r.a.createElement("div",{className:"form-group"},r.a.createElement("h3",{className:"card-header text-center text"},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-arrow-up",fill:"green",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"}))," ",e.thousands_separators(e.state.upVotes)))),r.a.createElement("br",null),r.a.createElement("form",{style:{border:"1px solid orange"}},r.a.createElement("div",{className:"form-group"},r.a.createElement("h3",{className:"card-header text-center text"},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-arrow-down",fill:"red",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"}))," ",e.thousands_separators(e.state.downVotes)))),r.a.createElement("center",null,r.a.createElement("button",{disabled:e.handleButtonDisable(),onClick:e.handleUpVote,className:"btn btn-outline-secondary text mt-1 mr-2",style:{border:"1px solid  #ffb31f"}},"UpVote"),r.a.createElement("button",{disabled:e.handleButtonDisable(),onClick:e.handleDownVote,className:"btn btn-outline-secondary mt-1 ml-2",style:{border:"1px solid  red"}},"DownVote"))))},e}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getVotes(),this.interval=setInterval((function(){e.getVotes()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("div",{className:"mb-5 d-flex justify-content-center"},this.form())}}]),a}(n.Component),D=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:""},r.a.createElement("div",{className:"container py-5"},r.a.createElement("h2",{className:"display-4 font-weight-light text-center text"},"LegacyEA"),r.a.createElement("p",{style:{color:"#ffc44e"},className:"font-italic text-center"},"Cras ut volutpat est. Pellentesque quis sapien magna. Aenean eu nisl at est commodo molestie in volutpat nunc. Donec velit tortor, maximus convallis maximus vel, euismod et ipsum. Fusce euismod vitae quam id fermentum. Quisque in malesuada arcu. Suspendisse vitae sollicitudin sapien. Nulla et porta leo, vitae congue nunc. Donec orci dolor, cursus in tincidunt nec, aliquam quis eros. Proin in nunc eget metus fermentum pellentesque nec vitae nisl."),r.a.createElement("center",null,r.a.createElement("ul",{className:"social mb-0 list-inline mt-3"},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"#",className:"social-link"},r.a.createElement("i",{className:"fa fa-2x fa-facebook-f",style:{color:"orange"}}))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"#",className:"social-link"},r.a.createElement("i",{className:"fa fa-2x fa-twitter",style:{color:"orange"}}))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"#",className:"social-link"},r.a.createElement("i",{className:"fa fa-2x fa-instagram",style:{color:"orange"}}))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"#",className:"social-link"},r.a.createElement("i",{className:"fa fa-2x fa-linkedin",style:{color:"orange"}}))))))),r.a.createElement("footer",{className:""},r.a.createElement("div",{className:"container text-center"},r.a.createElement("p",{className:"font-italic text-muted mb-5"},"\xa9 Copyrights LegacyEA All rights reserved."))))};var I=function(){return r.a.createElement(o.a,null,r.a.createElement(i,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:h}),r.a.createElement(s.b,{exact:!0,path:"/pictures",component:y}),r.a.createElement(s.b,{exact:!0,path:"/videos",component:N}),r.a.createElement(s.b,{exact:!0,path:"/addPic",component:w}),r.a.createElement(s.b,{exact:!0,path:"/addVid",component:O}),r.a.createElement(s.b,{exact:!0,path:"/vote",component:A}),r.a.createElement(s.b,{exact:!0,path:"/contact",component:D})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.86913247.chunk.js.map