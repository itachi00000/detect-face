(this["webpackJsonpdetect-face-app"]=this["webpackJsonpdetect-face-app"]||[]).push([[0],{100:function(e,i,t){},101:function(e,i,t){"use strict";t.r(i);var a=t(0),n=t.n(a),o=t(19),r=t.n(o),s=t(18),I=t(21),l=t(8),c=t(9),m=t(4),u=t(11),h=t(10),p=t(49),g=t.n(p),d=t(103),b=t(105),f=t(106),v=t(104),E=t.p+"static/media/tachyons-logo.b92e61b2.jpg",w=function(e){Object(u.a)(t,e);var i=Object(h.a)(t);function t(){var e;return Object(l.a)(this,t),(e=i.call(this)).state={dropDownOpen:!1},e.toggle=e.toggle.bind(Object(m.a)(e)),e}return Object(c.a)(t,[{key:"toggle",value:function(){this.setState((function(e){return{dropDownOpen:!e.dropDownOpen}}))}},{key:"render",value:function(){var e=this.state.dropDownOpen,i=this.props,t=i.onRouteChange,a=(i.isSignedIn,i.toggleModal);return n.a.createElement("div",{className:"pa4 tc"},n.a.createElement(d.a,{isOpen:e,toggle:this.toggle},n.a.createElement(b.a,{tag:"span","data-toggle":"dropdown","aria-expanded":e},n.a.createElement("img",{src:"http://tachyons.io/img/logo.jpg",className:"br-100 ba h3 w3 dib",alt:"avatar"})),n.a.createElement(f.a,{className:"b--transparent shadow-5",style:{marginTop:"20px",backgroundColor:"rgba(255,255,255,0.5)"},right:!0},n.a.createElement(v.a,{onClick:a},"View Profile"),n.a.createElement(v.a,{onClick:function(){return t("signout")}},"Signout"))))}}]),t}(n.a.Component);function C(e){var i=e.onRouteChange,t=e.isSignedIn,a=e.toggleModal;return t?n.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},n.a.createElement(w,{onRouteChange:i,isSignedIn:t,toggleModal:a})):n.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},n.a.createElement("p",{role:"presentation",onClick:function(){return i("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),n.a.createElement("p",{role:"presentation",onClick:function(){return i("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))}var y=t(52),A=t.n(y);t(74);function k(){return n.a.createElement("div",{className:"ma4 mt0"},n.a.createElement(A.a,{className:"Tilt",options:{max:25},style:{height:150,width:150}},n.a.createElement("div",{className:"Tilt-inner"},n.a.createElement("img",{style:{paddingTop:"5px"},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAEsCAMAAADaaRXwAAADAFBMVEUAAACIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjl67K3AAABAHRSTlMAajBQWpz/bSQ2kQ/m4nMfOI/9q17biRo5pPH2NwfK3Jcbru2gVOeUKAEIPrHv7C8GwfmWNUe2i0WeRBFTvt2vXBZxyGYe6sN3IdTCBNei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",alt:"logo"}))))}function N(e){var i=e.onInputChange,t=e.onButtonSubmit;return n.a.createElement("div",null,n.a.createElement("p",{className:"f3"},"This is App will detect faces in your Pictures"),n.a.createElement("div",null,n.a.createElement("div",{className:"center"},n.a.createElement("div",{className:"center pa4 br3 shadow"},n.a.createElement("input",{type:"text",name:"input",onChange:i,className:"f4 pa2 w-70 center"}),n.a.createElement("button",{type:"button",onClick:t,className:"w-30 grow f4 link ph3 pv2"},"Detect")))))}function j(e){var i=e.name,t=e.entries;return n.a.createElement("div",null,n.a.createElement("div",{className:"white f3"},i,", your entry count is... "),n.a.createElement("div",{className:"white f1"},t))}t(75);function S(e){var i=e.imageUrl,t=e.box;return n.a.createElement("div",{className:"center ma"},n.a.createElement("div",{className:"absolute mt2"},n.a.createElement("img",{id:"inputimage",src:i,alt:"face",width:"500px",height:"auto"}),n.a.createElement("div",{className:"bounding-box",style:{top:t.topRow,right:t.rightCol,bottom:t.bottomRow,left:t.leftCol}})))}var O=t(53),B=t.n(O);t(94);var U="https://desolate-taiga-56372.herokuapp.com",x=function(e){Object(u.a)(t,e);var i=Object(h.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=i.call(this,e)).state={signInEmail:"",signInPassword:""},a.onEmailChange=a.onEmailChange.bind(Object(m.a)(a)),a.onPasswordChange=a.onPasswordChange.bind(Object(m.a)(a)),a.onSubmitSignIn=a.onSubmitSignIn.bind(Object(m.a)(a)),a.saveAuthTokenInSession=a.saveAuthTokenInSession.bind(Object(m.a)(a)),a}return Object(c.a)(t,[{key:"onEmailChange",value:function(e){this.setState({signInEmail:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({signInPassword:e.target.value})}},{key:"onSubmitSignIn",value:function(){var e=this,i=this.props,t=this.state,a=this.props,n=(a.loadUser,a.onRouteChange,this.state);n.signInEmail,n.signInPassword;fetch("".concat(U,"/signin"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.signInEmail,password:t.signInPassword})}).then((function(e){return e.json()})).then((function(t){if(t.userId&&!0===t.success)return console.log("data",t),e.saveAuthTokenInSession(t.token),B.a.get("".concat(U,"/profile/").concat(t.userId),{headers:{authorization:"Bearer ".concat(t.token)}}).then((function(e){var t=e.data.user;console.log("resp-data",e),t&&t.email&&(console.log("load-User",t),i.loadUser(t),i.onRouteChange("home"))})).catch((function(e){console.log(e),e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log("errorObj: -----"),console.dir(e),console.error(e),console.error(JSON.stringify(e,null,2))}));throw Error("no userid-signin")})).catch((function(e){return console.log("signin-error",e)}))}},{key:"saveAuthTokenInSession",value:function(e){window.sessionStorage&&window.sessionStorage.setItem("jwt",e)}},{key:"render",value:function(){var e=this.props.onRouteChange,i=this.state,t=i.signInPassword,a=i.signInEmail;return n.a.createElement("article",{className:"br3 ba dark-gray b--black-10 shadow-5 mv4 w-100 w-50-m w-25-l mw6 center"},n.a.createElement("main",{className:"pa4 black-80"},n.a.createElement("div",{className:"measure"},n.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},n.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In Edited"),n.a.createElement("div",{className:"mt3"},n.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email",n.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white hover-black2 w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange,value:a}))),n.a.createElement("div",{className:"mv3"},n.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password",n.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white hover-black2 w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange,value:t})))),n.a.createElement("div",{className:""},n.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),n.a.createElement("div",{className:"lh-copy mt3"},n.a.createElement("p",{role:"presentation",onClick:function(){return e("register")},className:"f6 link dim black db pointer"},"Register")))))}}]),t}(n.a.Component),F=function(e){Object(u.a)(t,e);var i=Object(h.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=i.call(this,e)).state={email:"",password:"",name:""},a.onEmailChange=a.onEmailChange.bind(Object(m.a)(a)),a.onPasswordChange=a.onPasswordChange.bind(Object(m.a)(a)),a.onNameChange=a.onNameChange.bind(Object(m.a)(a)),a.onSubmitSignIn=a.onSubmitSignIn.bind(Object(m.a)(a)),a}return Object(c.a)(t,[{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onSubmitSignIn",value:function(){var e=this.props,i=e.loadUser,t=e.onRouteChange,a=this.state,n=a.name,o=a.email,r=a.password;fetch("".concat("https://desolate-taiga-56372.herokuapp.com","/register"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,password:r,name:n})}).then((function(e){if(console.log(e),!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){i(e),t("home")})).catch((function(e){return console.log("Error at Register.jsx ,,",e)}))}},{key:"render",value:function(){var e=this.state,i=e.name,t=e.email,a=e.password;return n.a.createElement("article",{className:"br3 ba dark-gray b--black-10 shadow-5 mv4 w-100 w-50-m w-25-l mw6 center"},n.a.createElement("main",{className:"pa4 black-80"},n.a.createElement("div",{className:"measure"},n.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},n.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),n.a.createElement("div",{className:"mt3"},n.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name",n.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange,value:i}))),n.a.createElement("div",{className:"mt3"},n.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email",n.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange,value:t}))),n.a.createElement("div",{className:"mv3"},n.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password",n.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange,value:a})))),n.a.createElement("div",{className:""},n.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),t}(n.a.Component),Q=(t(95),document.getElementById("modal-root")),R=function(e){Object(u.a)(t,e);var i=Object(h.a)(t);function t(){var e;return Object(l.a)(this,t),(e=i.call(this)).el=document.createElement("div"),e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){Q.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){Q.removeChild(this.el)}},{key:"render",value:function(){var e=this.props;return r.a.createPortal(e.children,this.el)}}]),t}(n.a.Component),P=(t(96),function(e){Object(u.a)(t,e);var i=Object(h.a)(t);function t(e){var a;Object(l.a)(this,t);var n=(a=i.call(this,e)).props.user;return a.state={username:n.username,age:n.age,pet:n.pet},a.onFormChange=a.onFormChange.bind(Object(m.a)(a)),a.onProfileSaved=a.onProfileSaved.bind(Object(m.a)(a)),a}return Object(c.a)(t,[{key:"onFormChange",value:function(e){var i=e.target,t=i.name,a=i.value;this.setState(Object(I.a)({},t,a))}},{key:"onProfileSaved",value:function(e){var i=this.props,t=window.sessionStorage.getItem("jwt");fetch("".concat("https://desolate-taiga-56372.herokuapp.com","/profile/").concat(i.user.id),{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({formInput:e})}).then((function(e){i.toggleModal(),i.loadUser(Object(s.a)(Object(s.a)({},i.user),e))})).catch(console.error)}},{key:"render",value:function(){var e=this;console.log("this.state",this.state);var i=this.state,t=this.props;return n.a.createElement("div",{className:"profile-modal"},n.a.createElement("article",{className:"br3 ba dark-gray b--black-10 shadow-5 mv4 w-100 w-50-m w-25-l mw6 center bg-white"},n.a.createElement("main",{className:"pa4 black-80 w-80"},n.a.createElement("img",{src:E,className:"h3 w3 dib",alt:"avatar"}),n.a.createElement("h1",null,t.user.name.slice(0,1).toUpperCase()+t.user.name.slice(1)),n.a.createElement("p",{className:"lead"},"Image Submitted ",t.user.entries),n.a.createElement("p",null,"Member since: ",new Date(t.user.joined).toLocaleDateString()),n.a.createElement("hr",null),n.a.createElement("label",{className:"mt2 fw6",htmlFor:"username"},"UserName:",n.a.createElement("input",{className:"pa2 ba w-100",type:"text",name:"username",placeholder:"john",onChange:this.onFormChange,value:i.username})),n.a.createElement("label",{className:"mt2 fw6",htmlFor:"user-age"},"Age:",n.a.createElement("input",{className:"pa2 ba w-100",type:"text",name:"age",placeholder:"44",onChange:this.onFormChange,value:i.age})),n.a.createElement("label",{className:"mt2 fw6",htmlFor:"user-pet"},"Pet:",n.a.createElement("input",{className:"pa2 ba w-100",type:"text",name:"pet",placeholder:"dragon",onChange:this.onFormChange,value:i.pet})),n.a.createElement("div",{className:"mt4",style:{display:"flex",justifyContent:"space-evenly"}},n.a.createElement("button",{type:"button",className:"b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20",onClick:function(){return e.onProfileSaved(i)}},"Save"),n.a.createElement("button",{type:"button",className:"b pa2 grow pointer hover-white w-40 bg-light-red b--black-20",onClick:t.toggleModal},"Cancel"))),n.a.createElement("div",{tabIndex:"0",role:"button",className:"modal-close",onClick:t.toggleModal},"\xd7")))}}]),t}(n.a.Component)),H=(t(97),"https://desolate-taiga-56372.herokuapp.com"),Z={particles:{number:{value:150,density:{enable:!0,value_area:800}}}},M={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,isProfileOpen:!1,user:{id:"",name:"",email:"",entries:0,joined:"",age:"",pet:"",username:""}},D=function(e){Object(u.a)(t,e);var i=Object(h.a)(t);function t(){var e;return Object(l.a)(this,t),(e=i.call(this)).state=M,e.onInputChange=e.onInputChange.bind(Object(m.a)(e)),e.onButtonSubmit=e.onButtonSubmit.bind(Object(m.a)(e)),e.onRouteChange=e.onRouteChange.bind(Object(m.a)(e)),e.loadUser=e.loadUser.bind(Object(m.a)(e)),e.toggleModal=e.toggleModal.bind(Object(m.a)(e)),e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("mount");var i=window.sessionStorage.getItem("jwt");i&&fetch("".concat(H,"/signin"),{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i)}}).then((function(e){return e.json()})).then((function(t){if(t&&t.id)return console.log("data",t),fetch("".concat(H,"/profile/").concat(t.id),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i)}}).then((function(e){return e.json()})).then((function(i){i&&i.email&&(e.loadUser(i),e.onRouteChange("home"))})).catch((function(e){console.error(e)}));throw Error("no data")})).catch((function(e){console.error("mount, GET @ signin :",e)}))}},{key:"onInputChange",value:function(e){var i=e.target,t=i.name,a=i.value;this.setState(Object(I.a)({},t,a))}},{key:"onButtonSubmit",value:function(){var e=this,i=this.state,t=i.input,a=i.user,n=window.sessionStorage.getItem("jwt");this.setState({imageUrl:t}),fetch("".concat(H,"/imageurl"),{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({input:t})}).then((function(e){return e.json()})).then((function(i){i&&fetch("".concat(H,"/image"),{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({id:a.id,email:a.email})}).then((function(e){return e.json()})).then((function(i){e.setState((function(e){return{user:Object(s.a)(Object(s.a)({},e.user),{},{entries:i})}}))})).catch((function(){return console.log("error at clarifai fetcing")})),e.displayFaceBox(e.calculateFaceLocation(i))})).catch((function(){return console.log("Error at Clarifai")}))}},{key:"onRouteChange",value:function(e){return console.log("routechange"),"signout"===e?(window.sessionStorage.removeItem("jwt"),this.setState(M)):("home"===e&&this.setState({isSignedIn:!0}),this.setState({route:e}))}},{key:"calculateFaceLocation",value:function(e){if(!e&&e.outputs)return null;var i=e.outputs[0].data.regions[0].region_info.bounding_box,t=document.getElementById("inputimage"),a=parseInt(t.width,10),n=parseInt(t.height,10);return{leftCol:i.left_col*a,topRow:i.top_row*n,rightCol:a-i.right_col*a,bottomRow:n-i.bottom_row*n}}},{key:"displayFaceBox",value:function(e){e&&this.setState({box:e})}},{key:"loadUser",value:function(e){console.log("loaduser"),this.setState((function(i){return{user:Object(s.a)(Object(s.a)({},i.user),{},{id:e.id,name:e.name,email:e.email,entries:e.entries,joined:e.joined})}}))}},{key:"toggleModal",value:function(){this.setState((function(e){return{isProfileOpen:!e.isProfileOpen}}))}},{key:"render",value:function(){var e=this.state,i=e.imageUrl,t=e.box,a=e.route,o=e.isSignedIn,r=e.user,s=e.isProfileOpen;return n.a.createElement("div",{className:"App"},n.a.createElement(g.a,{className:"particles",params:Z}),n.a.createElement(C,{user:r,isSignedIn:o,onRouteChange:this.onRouteChange,toggleModal:this.toggleModal}),s&&n.a.createElement(R,null,n.a.createElement(P,{user:r,onSavedUserDataClick:this.onSavedUserDataClick,toggleModal:this.toggleModal,loadUser:this.loadUser})),"home"===a?n.a.createElement(n.a.Fragment,null,n.a.createElement(k,null),n.a.createElement(j,{entries:r.entries,name:r.name}),n.a.createElement(N,{onButtonSubmit:this.onButtonSubmit,onInputChange:this.onInputChange}),n.a.createElement(S,{box:t,imageUrl:i})):"register"===a?n.a.createElement(F,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):n.a.createElement(x,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),t}(n.a.Component);t(98),t(99),t(100);r.a.render(n.a.createElement(D,null),document.getElementById("root"))},74:function(e,i,t){},75:function(e,i,t){},94:function(e,i,t){},95:function(e,i,t){},96:function(e,i,t){},97:function(e,i,t){}},[[101,1,2]]]);
//# sourceMappingURL=main.6a41ac9b.chunk.js.map