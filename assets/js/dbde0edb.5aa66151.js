"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[2353],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=l,k=u["".concat(o,".").concat(c)]||u[c]||y[c]||r;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},32174:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=a(87462),l=(a(67294),a(3905));const r={},i="Put Message Tree State",s={type:"api",id:"put-message-tree-state",unversionedId:"put-message-tree-state",title:"Put Message Tree State",description:"",slug:"/put-message-tree-state",frontMatter:{},api:{tags:["messages"],operationId:"put_message_tree_state_api_v1_messages__message_id__tree_state_put",parameters:[{required:!0,schema:{title:"Message Id",type:"string",format:"uuid"},name:"message_id",in:"path"},{required:!0,schema:{title:"Halt",type:"boolean"},name:"halt",in:"query"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"MessageTreeStateResponse",required:["message_tree_id","state","goal_tree_size","max_depth","max_children_count","active"],type:"object",properties:{message_tree_id:{title:"Message Tree Id",type:"string",format:"uuid"},state:{title:"State",enum:["initial_prompt_review","growing","ranking","ready_for_scoring","ready_for_export","scoring_failed","aborted_low_grade","halted_by_moderator","backlog_ranking","prompt_lottery_waiting"],type:"string",description:"States of the Open-Assistant message tree state machine."},goal_tree_size:{title:"Goal Tree Size",type:"integer"},max_depth:{title:"Max Depth",type:"integer"},max_children_count:{title:"Max Children Count",type:"integer"},active:{title:"Active",type:"boolean"},origin:{title:"Origin",type:"string"}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{"oasst-user":[]},{"oasst-user":[]},{"api-key":[]},{"api-key":[]}],description:"Put Message Tree State",method:"put",path:"/api/v1/messages/{message_id}/tree/state",securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Put Message Tree State",description:{type:"text/plain"},url:{path:["api","v1","messages",":message_id","tree","state"],host:["{{baseUrl}}"],query:[{description:{content:"(Required) ",type:"text/plain"},key:"halt",value:"<boolean>"}],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<uuid>",key:"message_id"}]},method:"PUT",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/backend-openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/put-message-tree-state",previous:{title:"Get Message Tree State",permalink:"/Open-Assistant/api/get-message-tree-state"},next:{title:"Get Children",permalink:"/Open-Assistant/api/get-children"}},o=[],p={toc:o},d="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"put-message-tree-state"},"Put Message Tree State"),(0,l.kt)("p",null,"Put Message Tree State"),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"message_id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"halt"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Halt"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"200")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Successful Response"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"message_tree_id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"state"),(0,l.kt)("span",{style:{opacity:"0.6"}}," State"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,l.kt)("inlineCode",{parentName:"p"},"initial_prompt_review"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"growing"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ranking"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ready_for_scoring"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ready_for_export"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"scoring_failed"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"aborted_low_grade"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"halted_by_moderator"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"backlog_ranking"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"prompt_lottery_waiting"),"]")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"States of the Open-Assistant message tree state machine.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"goal_tree_size"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Goal Tree Size"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"max_depth"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Max Depth"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"max_children_count"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Max Children Count"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"active"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Active"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"origin"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Origin"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL")))))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"422")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Validation Error"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"detail"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"loc"),(0,l.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"msg"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Message"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"type"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Error Type")))))))))))))))}u.isMDXComponent=!0}}]);