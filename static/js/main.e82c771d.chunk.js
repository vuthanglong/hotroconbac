(this["webpackJsonptinh-tien"]=this["webpackJsonptinh-tien"]||[]).push([[0],{20:function(e,t,n){e.exports=n(41)},31:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),l=n.n(r),c=n(1),i=n(2),u=(n(30),n(31),n(3)),s=n(4),d=n(5),p=n(6),m=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={error:void 0},e.onAddOption=function(t){t.preventDefault();var n=e.props.onAddOption(t.target.elements.option.value.trim());e.setState((function(){return{error:n}})),n||(t.target.elements.option.value="")},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,this.state.error&&o.a.createElement("p",{className:"add-option-error"},this.state.error),o.a.createElement("form",{className:"add-option",onSubmit:this.onAddOption},o.a.createElement("input",{className:"add-option__input",type:"text",name:"option"}),o.a.createElement("button",{className:"button"},"+")))}}]),n}(o.a.Component),E=function(e){return o.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)},b=Object(c.b)(null,{incrementValue:function(e){return{type:"INCREMENT",payload:{id:e}}},decrementValue:function(e){return{type:"DECREMENT",payload:{id:e}}},changeValue:function(e,t){return{type:"CHANGE",payload:{id:e,value:t}}}})((function(e){return o.a.createElement("div",{className:"option"},o.a.createElement("p",{className:"option__text"},e.count,". ",e.optionText),o.a.createElement("div",{className:"option__action"},o.a.createElement("input",{onChange:function(t){0!==e.currentValue&&/^([+-]?[1-9]\d*|0|-)$/.test(t.target.value)&&Math.abs(t.target.value).toString().length<3&&e.changeValue(e.id,parseInt(t.target.value)?parseInt(t.target.value):"-"),t.target.value?e.changeValue(e.id,parseInt(t.target.value)?parseInt(t.target.value):"-"):e.changeValue(e.id,0)},type:"text",value:e.currentValue,style:{color:e.currentValue>0?"#86c232":e.currentValue<0?"#c70000":"white"}}),o.a.createElement("button",{className:"button minus",onClick:function(){e.decrementValue(e.id)}},"-"),o.a.createElement("button",{className:"button",onClick:function(){return e.incrementValue(e.id)}},"+")))})),h=Object(c.b)((function(e){return{options:e.options}}),{deleteOptions:function(){return{type:"DELETE_OPTIONS"}}})((function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"widget-header"},o.a.createElement("h3",{className:"widget-header__title"},o.a.createElement(E,{symbol:"\ud83d\ude0e"})," C\xe1c con b\u1ea1c:"),o.a.createElement("button",{className:"button button--link",onClick:e.deleteOptions},"Xo\xe1 h\u1ebftttt!!! ",o.a.createElement(E,{symbol:"\ud83d\ude31"}))),0===e.options.length&&o.a.createElement("p",{className:"widget-message"},"\u0110i\u1ec1n t\xean ng\u01b0\u1eddi anh em v\xe0o d\u01b0\u1edbi kia ",o.a.createElement(E,{symbol:"\ud83d\ude0f"})),e.options.map((function(e,t){return o.a.createElement(b,{id:e.id,key:t,count:t+1,currentValue:e.currentValue,optionText:e.id})})))})),O=Object(c.b)(null,{openModal:function(){return{type:"OPEN_MODAL"}}})((function(e){return o.a.createElement("div",null,o.a.createElement("button",{className:"big-button",disabled:!e.hasOptions,onClick:e.openModal},"T\xednh ti\u1ec1n! ",o.a.createElement(E,{symbol:"\ud83d\udcb8\ud83d\udcb8\ud83d\udcb8"})))})),f=function(e){return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"header__title"},e.title),o.a.createElement("p",{className:"header__subtitle"},e.subtitle)))};f.defaultProps={title:"H\u1ed7 tr\u1ee3 con b\u1ea1c",subtitle:'"C\u1edd b\u1ea1c ng\u01b0\u1eddi ch\u01a1i l\xe0 ng\u01b0\u1eddi thua, ng\u01b0\u1eddi kh\xf4ng ch\u01a1i kh\xf4ng bao gi\u1edd th\u1eafng"'};var v=f,y=n(14),g=n.n(y),N=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).componentDidMount=function(){g.a.setAppElement("body")},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement(g.a,{isOpen:!!this.props.openingModal,contentLabel:"Show Results",onRequestClose:this.props.closeModal,closeTimeoutMS:200,className:"modal"},o.a.createElement("h3",{className:"modal__title"},"T\u1ed5ng k\u1ebft"),o.a.createElement("div",{className:"modal__body"},this.props.options.map((function(e,t){return o.a.createElement("div",{className:"option modal-child",key:t},o.a.createElement("p",{className:"option__text"},e.id),o.a.createElement("div",{className:"option__action"},o.a.createElement("div",{style:{color:e.totalValue.reduce((function(e,t){return e+t}),0)>0?"#86c232":e.totalValue.reduce((function(e,t){return e+t}),0)<0?"#c70000":"white"}},o.a.createElement("span",null,e.totalValue.reduce((function(e,t){return e+t}),0)))))}))),o.a.createElement("button",{className:"button",onClick:this.props.closeModal},"Okay"))}}]),n}(o.a.Component),V=Object(c.b)((function(e){return{options:e.options,openingModal:e.openingModal}}),{closeModal:function(){return{type:"CLOSE_MODAL"}}})(N),_=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onAddOption=function(t){return""===t?"\u0110i\u1ec1n t\xean ng\u01b0\u1eddi anh em v\xe0o \u0111\xe2y~":e.props.options.map((function(e){return e.id})).indexOf(t)>-1?"Ng\u01b0\u1eddi anh em n\xe0y xu\u1ea5t hi\u1ec7n r\u1ed3i~~":void e.props.addOption(t)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){try{var e=localStorage.getItem("options"),t=JSON.parse(e);t&&this.props.addOptions(t)}catch(n){}}},{key:"componentDidUpdate",value:function(){var e=JSON.stringify(this.props.options);localStorage.setItem("options",e)}},{key:"render",value:function(){var e=this.props.options.map((function(e){return e.currentValue})).reduce((function(e,t){return e+t}),0);return o.a.createElement("div",null,o.a.createElement(v,null),o.a.createElement("div",{className:"container"},o.a.createElement(O,{hasOptions:this.props.options.length>0}),o.a.createElement("div",{className:"widget"},o.a.createElement(h,null),o.a.createElement("button",{className:"big-button end-round",disabled:0!==e,onClick:this.props.endRound},"Ch\u1ed1t! ",o.a.createElement(E,{symbol:"\ud83e\udd11"})),o.a.createElement(m,{onAddOption:this.onAddOption}))),o.a.createElement(V,null))}}]),n}(o.a.Component),j=Object(c.b)((function(e){return{options:e.options}}),{addOption:function(e){return{type:"ADD_OPTION",payload:{id:e,currentValue:0,totalValue:[]}}},addOptions:function(e){return{type:"ADD_OPTIONS",payload:e}},endRound:function(){return{type:"END_ROUND"}}})(_),D=n(8),C=Object(i.b)({options:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_OPTION":return[].concat(Object(D.a)(e),[t.payload]);case"ADD_OPTIONS":return[].concat(Object(D.a)(e),Object(D.a)(t.payload));case"DELETE_OPTIONS":return[];case"INCREMENT":return e.map((function(e){return e.id===t.payload.id?{id:t.payload.id,currentValue:e.currentValue+1,totalValue:e.totalValue}:e}));case"DECREMENT":return e.map((function(e){return e.id===t.payload.id?{id:t.payload.id,currentValue:e.currentValue-1,totalValue:e.totalValue}:e}));case"CHANGE":return e.map((function(e){return e.id===t.payload.id?{id:t.payload.id,currentValue:t.payload.value,totalValue:e.totalValue}:e}));case"END_ROUND":return e.map((function(e){return{id:e.id,currentValue:0,totalValue:[].concat(Object(D.a)(e.totalValue),[e.currentValue])}}));default:return e}},openingModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_MODAL":return!0;case"CLOSE_MODAL":return!1;default:return e}}});l.a.render(o.a.createElement(c.a,{store:Object(i.c)(C)},o.a.createElement(j,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.e82c771d.chunk.js.map