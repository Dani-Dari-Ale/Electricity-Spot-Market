(self.webpackChunklite=self.webpackChunklite||[]).push([[43346],{97433:(e,n,t)=>{"use strict";t.d(n,{i:()=>r});var a=t(319),i=t.n(a),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostResultError_postResult"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PostResult"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"UnavailableForLegalReasons"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UnavailableForLegalReasonsScreen_unavailableForLegalReasons"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"WithheldInCountry"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"WithheldInCountryScreen_withheldInCountry"}}]}}]}}].concat(i()([{kind:"FragmentDefinition",name:{kind:"Name",value:"UnavailableForLegalReasonsScreen_unavailableForLegalReasons"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"UnavailableForLegalReasons"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lumenId"}}]}}]),i()([{kind:"FragmentDefinition",name:{kind:"Name",value:"WithheldInCountryScreen_withheldInCountry"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"WithheldInCountry"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lumenId"}}]}}]))}},6672:(e,n,t)=>{"use strict";t.d(n,{Ij:()=>M,iT:()=>_,rK:()=>x});var a=t(28655),i=t.n(a),r=t(71439),l=t(67294),o=t(49768),d=t(34575),s=t.n(d),u=t(2205),m=t.n(u),c=t(78585),k=t.n(c),v=t(29754),p=t.n(v),f=t(65957);var h=function(e){m()(i,e);var n,t,a=(n=i,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=p()(n);if(t){var i=p()(this).constructor;e=Reflect.construct(a,arguments,i)}else e=a.apply(this,arguments);return k()(this,e)});function i(){return s()(this,i),a.call(this,"Expected postResult to exist.\n       For more detail, try checking for GraphQL server errors with the same x-request-id.")}return i}(t.n(f)()(Error)),N=t(41254),S=t(52383),y=t(80177),b=t(47266);function g(){var e=i()(["\n  fragment UnavailableForLegalReasonsScreen_unavailableForLegalReasons on UnavailableForLegalReasons {\n    lumenId\n  }\n"]);return g=function(){return e},e}function F(e){var n=e.errorData,t=e.showMetabar;return l.createElement(N.q,{code:451,title:"451 Not available — Medium",lumenId:n.lumenId,showMetabar:t},"This story is subject to a DMCA copyright or other legal or government claim.")}var w=(0,r.Ps)(g());function E(){var e=i()(["\n  fragment WithheldInCountryScreen_withheldInCountry on WithheldInCountry {\n    lumenId\n  }\n"]);return E=function(){return e},e}function I(e){var n=e.errorData,t=e.showMetabar;return l.createElement(N.q,{code:451,title:"451 Not available in your country — Medium",lumenId:n.lumenId,showMetabar:t},"This page is not available in your country.")}var C=(0,r.Ps)(E()),D=t(19732);function R(){var e=i()(["\n  fragment PostResultError_postResult on PostResult {\n    __typename\n    ... on Post {\n      id\n    }\n    ... on UnavailableForLegalReasons {\n      ...UnavailableForLegalReasonsScreen_unavailableForLegalReasons\n    }\n    ... on WithheldInCountry {\n      ...WithheldInCountryScreen_withheldInCountry\n    }\n  }\n  ","\n  ","\n"]);return R=function(){return e},e}var x=function(e){return!(0,D.f)(e)},M=function(e){var n=e.postResult,t=e.showMetabar;if(!n)return l.createElement(S.C,{error:new h});switch(n.__typename){case"Unauthorized":return l.createElement(o.N,{opt_isDraft:!0});case"NotFound":return l.createElement(y.$,{showMetabar:t});case"AccountDeleted":return l.createElement(N.q,{code:410,title:"410 Deleted by author — Medium",showMetabar:t},"User deactivated or deleted their account.");case"AccountSuspended":return l.createElement(b.y,{suspension:"account",showMetabar:t});case"PostSuspended":return l.createElement(b.y,{suspension:"post",showMetabar:t});case"Blocked":return l.createElement(N.q,{code:403,title:"403 Blocked — Medium",showMetabar:t},"This user had blocked you from following them or viewing their stories.");case"RemovedByUser":return l.createElement(N.q,{code:410,title:"410 Deleted by author — Medium",showMetabar:t},"The author deleted this Medium story.");case"UnavailableForLegalReasons":return l.createElement(F,{errorData:n,showMetabar:t});case"WithheldInCountry":return l.createElement(I,{errorData:n,showMetabar:t});default:return l.createElement(S.C,{error:new Error("Unsupported postResult: ".concat(n.__typename)),showMetabar:t})}},_=(0,r.Ps)(R(),w,C)},81663:(e,n,t)=>{"use strict";t.d(n,{DI:()=>r,nj:()=>l});var a=t(319),i=t.n(a),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"useNewsletterV3Subscription_newsletterV3"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NewsletterV3"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"}}]}},{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"newsletterV3"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]}}]},l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"useNewsletterV3Subscription_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"newsletterV3"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"useNewsletterV3Subscription_newsletterV3"}}]}}]}}].concat(i()(r.definitions))};[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useNewsletterV3Subscription_newsletterV3"}}]}}]}}].concat(i()(r.definitions))},49768:(e,n,t)=>{"use strict";t.d(n,{N:()=>u});var a=t(67294),i=t(42963),r=t(14414),l=t(51512),o=t(67297),d=t(96879),s=t(27952),u=function(e){var n=e.opt_isDraft,t=e.opt_params,u=e.operation,m=(0,o.v9)((function(e){return e.config.authDomain})),c=(0,o.v9)((function(e){return e.navigation.currentLocation})),k=(0,l.pK)(),v=(0,l.hp)(),p=(0,d.Rk)((0,s.Kkz)(m),{operation:u||"login",redirect:(0,r.hQ)(c,k,v,null,null,t),isDraft:n?"1":"0"});return a.createElement(i.l,{to:p,temporary:!0})}},6776:(e,n,t)=>{"use strict";t.d(n,{w:()=>o});var a=t(319),i=t.n(a),r=t(81663),l=t(61237),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserSubscribeButton_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isPartnerProgramEnrolled"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isFollowing"}},{kind:"Field",name:{kind:"Name",value:"isUser"}}]}},{kind:"Field",name:{kind:"Name",value:"viewerIsUser"}},{kind:"Field",name:{kind:"Name",value:"newsletterV3"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useNewsletterV3Subscription_newsletterV3"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"useNewsletterV3Subscription_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"MembershipUpsellModal_user"}}]}}].concat(i()(r.DI.definitions),i()(r.nj.definitions),i()(l.b.definitions))}},41254:(e,n,t)=>{"use strict";t.d(n,{q:()=>b});var a=t(67294),i=t(70405),r=t(5977),l=t(59713),o=t.n(l),d=t(42933),s=t(18579),u=t(6688),m=t(80637),c={fontSize:"20px",textTransform:"uppercase"},k=function(e){return o()({display:"block",fontSize:"192px",lineHeight:"200px"},m.sm(e),{fontSize:"150px"})},v=function(e){var n=e.errorCode,t=(0,u.I)(),i=(0,s.n)({name:"marketing",scale:"XXXL",color:"DARKER"});return a.createElement(d.x,{display:"flex",flexDirection:"column"},a.createElement("div",{className:t(c)},"Error"),a.createElement("div",{className:t([i,k])},n))},p=t(26463),f=t(30027),h=t(82318),N=t(44786),S=t(5955),y={fontSize:"24px"};function b(e){var n=e.code,t=e.title,l=e.children,o=e.lumenId,s=e.showMetabar,m=void 0===s||s,c=(0,u.I)();return(0,N.Nx)(new Error("[".concat(n,"]: ").concat(t)),{status:n}),a.createElement(r.AW,{render:function(e){var r=e.staticContext;return r&&(r.statusCode=n),a.createElement("div",null,a.createElement(i.q,null,a.createElement("title",null,t)),m&&a.createElement(p.kw,null),a.createElement(d.x,{tag:"section",paddingTop:"60px",paddingBottom:"60px"},a.createElement(f.P,{size:"inset"},a.createElement(d.x,{display:"flex",alignItems:"flex-start",flexWrap:"wrap"},a.createElement(v,{errorCode:n}),a.createElement("div",{className:c((0,S.rJ)())},a.createElement(d.x,{marginBottom:"28px"},a.createElement("div",{className:c(y)},l)),o?a.createElement("div",{className:c(y)},"A report is available on"," ",a.createElement(h.r,{href:"https://lumendatabase.org/notices/".concat(o),display:"inline-block",inline:!0,target:"_blank",linkStyle:"OBVIOUS"},"Lumen"),"."):null)))))}})}},47266:(e,n,t)=>{"use strict";t.d(n,{y:()=>u});var a=t(67294),i=t(42933),r=t(55099),l=t(87561),o=t(95760),d=t(41254),s=t(67297),u=function(e){var n=e.suspension,t=e.showMetabar,u=(0,o.Av)(),m=(0,s.v9)((function(e){return e.config.authDomain}));return a.createElement(d.q,{code:410,title:"410 ".concat(n," suspended — Medium"),showMetabar:t},a.createElement(i.x,{display:"flex",marginTop:"-30px"},a.createElement(l.QE,{scale:"S"},"This ",n," is under investigation or was found in violation of the Medium Rules."," ")),a.createElement(i.x,{display:"flex",marginTop:"80px"},a.createElement(l.QE,{color:"DARKER",scale:"M"},"There are thousands of stories to read on Medium. Visit our homepage ",a.createElement("br",null)," to find one that’s right for you.")),a.createElement(i.x,{display:"flex",marginTop:"15px"},a.createElement(r.z,{buttonStyle:"SUBTLE",href:"https://".concat(m),onClick:function(){u.event("suspendedPage.backToHomeClicked",{})}},"Take me to Medium")))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/43346.05d5a4e5.chunk.js.map