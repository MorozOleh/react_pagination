(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(6),r=a.n(o),l=a(1),c=a(2),g=a(4),u=a(3),s=(a(13),a(7)),p=a.n(s);function h(e){var t=e.onChangeAmountOfPages,a=e.amountPage;return i.a.createElement("select",{onChange:t,className:"pagination__select",value:a},i.a.createElement("option",{value:3},"3"),i.a.createElement("option",{value:5},"5"),i.a.createElement("option",{value:10},"10"),i.a.createElement("option",{value:20},"20"))}function m(e){var t=e.onDisable,a=e.onChangeStep,n=e.text,o=e.name;return i.a.createElement("button",{type:"button",disabled:t,className:o,onClick:a},n)}a(14);var f=function(e){Object(g.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={currentPage:e.props.page,offsetPaginationRelativeToTheBeginning:0},e.onPageChange=function(t){var a=t.target.value;e.setState({currentPage:+a})},e.handleNextStep=function(){e.setState((function(e){return{offsetPaginationRelativeToTheBeginning:e.offsetPaginationRelativeToTheBeginning+1}}))},e.handlePrevStep=function(){e.setState((function(e){return{offsetPaginationRelativeToTheBeginning:e.offsetPaginationRelativeToTheBeginning-1}}))},e.handleChangeQuantityPerPage=function(t){var a=t.target.value;e.props.onChange(a)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.perPage,a=e.total,n=e.withInfo,o=this.state,r=o.currentPage,l=o.offsetPaginationRelativeToTheBeginning,c=Array.from({length:this.props.total},(function(e,t){return t+1})),g=this.onPageChange,u=this.handleChangeQuantityPerPage,s=this.handleNextStep,f=this.handlePrevStep,v=c.slice(l,l+t);return i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",{"aria-label":"pagination"},i.a.createElement("ul",{className:"pagination__list"},i.a.createElement("li",{className:"pagination__item"},i.a.createElement(m,{text:"Previous",onChangeStep:f,onDisable:v.includes(1),name:"pagination__previous"})),v.map((function(e){var t=r===e?"pagination__page_active":"";return i.a.createElement("li",{key:e},i.a.createElement("button",{type:"button",value:e,onClick:g,className:"pagination__page ".concat(t)},e))})),i.a.createElement("li",{className:"page-item"},i.a.createElement(m,{text:"Next",name:"pagination__next",onChangeStep:s,onDisable:v.includes(a)})))),i.a.createElement("div",{className:p()("withInfo",{"withInfo--active":r>n})},"You have lots of opportunities to make money together with us"),i.a.createElement(h,{onChangeAmountOfPages:u,amountPage:t}))}}]),a}(n.Component),v=function(e){Object(g.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={perPage:5},e.onChangePerPage=function(t){e.setState({perPage:+t})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.perPage,t=this.onChangePerPage;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"Pagination"),i.a.createElement(f,{total:42,perPage:e,page:1,withInfo:6,onChange:t}))}}]),a}(n.Component);r.a.render(i.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.0860e4a3.chunk.js.map