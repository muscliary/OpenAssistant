"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[1574],{3905:(t,e,l)=>{l.d(e,{Zo:()=>d,kt:()=>k});var n=l(67294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function o(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?o(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function r(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},y="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,d=r(t,["components","mdxType","originalType","parentName"]),y=s(l),u=a,k=y["".concat(p,".").concat(u)]||y[u]||c[u]||o;return l?n.createElement(k,i(i({ref:e},d),{},{components:l})):n.createElement(k,i({ref:e},d))}));function k(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=l.length,i=new Array(o);i[0]=u;var r={};for(var p in e)hasOwnProperty.call(e,p)&&(r[p]=e[p]);r.originalType=t,r[y]="string"==typeof t?t:a,i[1]=r;for(var s=2;s<o;s++)i[s]=l[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}u.displayName="MDXCreateElement"},37381:(t,e,l)=>{l.r(e),l.d(e,{contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=l(87462),a=(l(67294),l(3905));const o={},i="Get Trollboard",r={type:"api",id:"get-trollboard",unversionedId:"get-trollboard",title:"Get Trollboard",description:"",slug:"/get-trollboard",frontMatter:{},api:{tags:["trollboards"],operationId:"get_trollboard_api_v1_trollboards__time_frame__get",parameters:[{required:!0,schema:{title:"UserStatsTimeFrame",enum:["day","week","month","total"],type:"string",description:"An enumeration."},name:"time_frame",in:"path"},{required:!1,schema:{title:"Max Count",maximum:1e4,exclusiveMinimum:0,type:"integer",default:100},name:"max_count",in:"query"},{required:!1,schema:{title:"Enabled",type:"boolean"},name:"enabled",in:"query"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"TrollboardStats",required:["time_frame","last_updated","trollboard"],type:"object",properties:{time_frame:{title:"Time Frame",type:"string"},last_updated:{title:"Last Updated",type:"string",format:"date-time"},trollboard:{title:"Trollboard",type:"array",items:{title:"TrollScore",required:["user_id","username","auth_method","display_name","enabled","deleted","show_on_leaderboard"],type:"object",properties:{rank:{title:"Rank",type:"integer"},user_id:{title:"User Id",type:"string",format:"uuid"},highlighted:{title:"Highlighted",type:"boolean",default:!1},username:{title:"Username",type:"string"},auth_method:{title:"Auth Method",type:"string"},display_name:{title:"Display Name",type:"string"},last_activity_date:{title:"Last Activity Date",type:"string",format:"date-time"},enabled:{title:"Enabled",type:"boolean"},deleted:{title:"Deleted",type:"boolean"},show_on_leaderboard:{title:"Show On Leaderboard",type:"boolean"},troll_score:{title:"Troll Score",type:"integer",default:0},base_date:{title:"Base Date",type:"string",format:"date-time"},modified_date:{title:"Modified Date",type:"string",format:"date-time"},red_flags:{title:"Red Flags",type:"integer",default:0},upvotes:{title:"Upvotes",type:"integer",default:0},downvotes:{title:"Downvotes",type:"integer",default:0},spam_prompts:{title:"Spam Prompts",type:"integer",default:0},quality:{title:"Quality",type:"number"},humor:{title:"Humor",type:"number"},toxicity:{title:"Toxicity",type:"number"},violence:{title:"Violence",type:"number"},helpfulness:{title:"Helpfulness",type:"number"},spam:{title:"Spam",type:"integer",default:0},lang_mismach:{title:"Lang Mismach",type:"integer",default:0},not_appropriate:{title:"Not Appropriate",type:"integer",default:0},pii:{title:"Pii",type:"integer",default:0},hate_speech:{title:"Hate Speech",type:"integer",default:0},sexual_content:{title:"Sexual Content",type:"integer",default:0},political_content:{title:"Political Content",type:"integer",default:0}}}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{"api-key":[]},{"api-key":[]}],description:"Get Trollboard",method:"get",path:"/api/v1/trollboards/{time_frame}",securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Get Trollboard",description:{type:"text/plain"},url:{path:["api","v1","trollboards",":time_frame"],host:["{{baseUrl}}"],query:[{description:{content:"",type:"text/plain"},key:"max_count",value:"100"},{description:{content:"",type:"text/plain"},key:"enabled",value:"<boolean>"}],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"time_frame"}]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/backend-openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/get-trollboard",previous:{title:"Update Leaderboards All",permalink:"/Open-Assistant/api/update-leaderboards-all"},next:{title:"Get Text Toxicity",permalink:"/Open-Assistant/api/get-text-toxicity"}},p=[],s={toc:p},d="wrapper";function y(t){let{components:e,...l}=t;return(0,a.kt)(d,(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-trollboard"},"Get Trollboard"),(0,a.kt)("p",null,"Get Trollboard"),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"time_frame"),(0,a.kt)("span",{style:{opacity:"0.6"}}," UserStatsTimeFrame"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,a.kt)("inlineCode",{parentName:"p"},"day"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"week"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"month"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"total"),"]")),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"An enumeration.")))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"max_count"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Max Count"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," 0 < value \u2264 10000")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"enabled"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Enabled"))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Successful Response"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"time_frame"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Time Frame"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"last_updated"),(0,a.kt)("span",{style:{opacity:"0.6"}}," date-time"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"trollboard"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"rank"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Rank"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"user_id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"highlighted"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Highlighted"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"username"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Username"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"auth_method"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Auth Method"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"display_name"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Display Name"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"last_activity_date"),(0,a.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"enabled"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Enabled"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"deleted"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Deleted"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"show_on_leaderboard"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Show On Leaderboard"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"troll_score"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Troll Score"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"base_date"),(0,a.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"modified_date"),(0,a.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"red_flags"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Red Flags"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"upvotes"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Upvotes"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"downvotes"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Downvotes"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"spam_prompts"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Spam Prompts"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"quality"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Quality"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"humor"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Humor"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"toxicity"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Toxicity"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"violence"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Violence"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"helpfulness"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Helpfulness"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"spam"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Spam"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"lang_mismach"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Lang Mismach"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"not_appropriate"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Not Appropriate"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"pii"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Pii"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"hate_speech"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Hate Speech"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sexual_content"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Sexual Content"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"political_content"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Political Content"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL")))))))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"422")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Validation Error"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"detail"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"loc"),(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"msg"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Message"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Error Type")))))))))))))))}y.isMDXComponent=!0}}]);