(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),o=a.n(i),l=a(1),c=a(2),s=a(4),u=a(3),p=(a(13),a(7)),g=a.n(p),m=(a(14),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={currentPage:e.props.page,step:0},e.onPageChange=function(t){var a=t.target.value;e.setState({currentPage:+a})},e.handleNextStep=function(){e.setState((function(e){return{step:e.step+1}}))},e.handlePrevStep=function(){e.setState((function(e){return{step:e.step-1}}))},e.handleChangeQuantityPerPage=function(t){var a=t.target.value;e.props.onChange(a)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.perPage,a=e.total,n=this.state,i=n.currentPage,o=n.step,l=Array.from({length:this.props.total},(function(e,t){return t+1})),c=this.onPageChange,s=this.handleChangeQuantityPerPage,u=this.handleNextStep,p=this.handlePrevStep,m=l.slice(o,o+t);return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{"aria-label":"Pagination"},r.a.createElement("ul",{className:"Pagination__list"},r.a.createElement("li",{className:"Pagination__item"},r.a.createElement("button",{type:"button",disabled:m.includes(1),className:"Pagination__previous",onClick:p},"Previous")),m.map((function(e){var t=i===e?"Pagination__page_active":null;return r.a.createElement("li",{key:e},r.a.createElement("button",{type:"button",value:e,onClick:c,className:"Pagination__page ".concat(t)},e))})),r.a.createElement("li",{className:"page-item"},r.a.createElement("button",{disabled:m.includes(a),className:"Pagination__next",type:"button",onClick:u},"Next")))),r.a.createElement("div",{className:g()("Pagination__addition",{Pagination__addition_extra:i>5})},"You have lots of opportunities to make money together with us"),r.a.createElement("select",{onChange:s,className:"Pagination__select",value:t},r.a.createElement("option",{value:3},"3"),r.a.createElement("option",{value:5},"5"),r.a.createElement("option",{value:10},"10"),r.a.createElement("option",{value:20},"20")))}}]),a}(n.Component)),h=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={perPage:5,total:42,page:1},e.onChangePerPage=function(t){e.setState({perPage:+t})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.perPage,a=e.total,n=e.page,i=this.onChangePerPage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Pagination"),r.a.createElement(m,{total:a,perPage:t,page:n,onChange:i}))}}]),a}(n.Component);o.a.render(r.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.fb0ec339.chunk.js.map