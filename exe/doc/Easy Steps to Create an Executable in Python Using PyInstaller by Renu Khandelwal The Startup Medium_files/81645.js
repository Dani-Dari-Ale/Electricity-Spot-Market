(self.webpackChunklite=self.webpackChunklite||[]).push([[81645],{353:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var a=t(67294);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var r=a.createElement("path",{d:"M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z",fill:"#292929"});const i=function(e){return a.createElement("svg",o({width:25,height:25,viewBox:"0 0 25 25",fill:"none"},e),r)}},81645:(e,n,t)=>{"use strict";t.d(n,{aR:()=>ne,Gm:()=>te,_C:()=>ae});var a=t(28655),o=t.n(a),r=t(67154),i=t.n(r),l=t(6479),d=t.n(l),c=t(63038),s=t.n(c),g=t(71439),u=t(67294),f=t(59713),p=t.n(f),v=t(319),m=t.n(v),I=t(46829),C=t(16084),h=t(42933),b=t(82318),E=t(98024),P=t(6688),y=t(85277),O=t(21552);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){p()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var k={maxHeight:"240px",overflowY:"auto",padding:"24px 20px 16px 24px"};function _(e){var n,t,a,o=e.target,r=e.kind,i=e.showCreateModal,l=e.hidePanel,d=e.viewer,c=u.useRef(null),s=(0,P.I)(),g=(0,C.Ln)({limit:C.W,userId:d.id}),f=(0,y.w)(),p=(0,I.useQuery)(C.Dk,{variables:g}),v=p.data,w=p.error,_=p.loading,j=p.fetchMore;u.useEffect((function(){w&&f({toastStyle:"RETRYABLE_ERROR",duration:4e3})}),[w]);var A,V=u.useCallback((function(){i(),l()}),[i,l]),S=null==v?void 0:v.catalogsByUser.catalogs;return S&&"Catalog"===(null==v||null===(n=v.readingList)||void 0===n?void 0:n.__typename)&&(S=[v.readingList].concat(m()(S))),null!=v&&null!==(t=v.catalogsByUser)&&void 0!==t&&null!==(a=t.paging)&&void 0!==a&&a.nextPageCursor&&(A=function(){return j({variables:T(T({},g),{},{pagingOptions:T(T({},g.pagingOptions),{},{cursor:{id:v.catalogsByUser.paging.nextPageCursor.id}})})})}),u.createElement(h.x,{width:"300px"},u.createElement("div",{className:s(k),ref:c},u.createElement(O.n,{target:o,kind:r,viewer:d,catalogs:S,isLoading:_,fetchMore:A,scrollableEl:c.current})),!_&&u.createElement(h.x,{borderTop:"BASE_LIGHTER",padding:"20px 24px 24px"},u.createElement(E.F,{color:"ACCENT",scale:"L"},u.createElement(b.r,{onClick:V},"Create new list"))))}var j=t(24821),A=t(80122),V=t(50361),S=t.n(V),x=t(46282),B=t(57768),D=t(95760),L=t(14391),R=t(6304),M=t(94945);function H(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?H(Object(t),!0).forEach((function(n){p()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function F(){var e=o()(["\n  fragment useAddItemToPredefinedCatalog_postViewerEdge on PostViewerEdge {\n    id\n    catalogsConnection {\n      predefinedContainingThis {\n        catalogId\n        version\n        predefined\n        catalogItemIds\n      }\n    }\n  }\n"]);return F=function(){return e},e}function G(){var e=o()(["\n  fragment useAddItemToPredefinedCatalog_bookEditionViewerEdge on BookEditionViewerEdge {\n    id\n    catalogsConnection {\n      predefinedContainingThis {\n        catalogId\n        version\n        predefined\n        catalogItemIds\n      }\n    }\n  }\n"]);return G=function(){return e},e}function U(){var e=o()(["\n  mutation AddToPredefinedCatalog(\n    $type: PredefinedCatalogType!\n    $operation: PredefinedCatalogAddOperationInput!\n  ) {\n    addToPredefinedCatalog(type: $type, operation: $operation) {\n      __typename\n      ... on AddToPredefinedCatalogSucces {\n        version\n        insertedItem {\n          __typename\n          catalogItemId\n          catalogId\n        }\n      }\n    }\n  }\n"]);return U=function(){return e},e}var W="temp-catalog-id",$=(0,g.Ps)(U()),z=(0,g.Ps)(G()),K=(0,g.Ps)(F()),Q=t(80362),Y=t(19464),Z=t(51064),J=t(46101);function q(){var e=o()(["\n  fragment AddToCatalogBase_post on Post {\n    id\n    viewerEdge {\n      catalogsConnection {\n        catalogsContainingThis(type: LISTS) {\n          catalogId\n          catalogItemIds\n        }\n        predefinedContainingThis {\n          catalogId\n          predefined\n          catalogItemIds\n        }\n      }\n      ...editCatalogItemsMutation_postViewerEdge\n      ...useAddItemToPredefinedCatalog_postViewerEdge\n    }\n    ...WithToggleInsideCatalog_post\n  }\n  ","\n  ","\n  ","\n"]);return q=function(){return e},e}function X(){var e=o()(["\n  fragment AddToCatalogBase_bookEdition on BookEdition {\n    id\n    book {\n      id\n    }\n    viewerEdge {\n      catalogsConnection {\n        catalogsContainingThis(type: LISTS) {\n          catalogId\n        }\n        predefinedContainingThis {\n          predefined\n        }\n      }\n      ...editCatalogItemsMutation_bookEditionViewerEdge\n      ...useAddItemToPredefinedCatalog_bookEditionViewerEdge\n    }\n    ...WithToggleInsideCatalog_bookEdition\n  }\n  ","\n  ","\n  ","\n"]);return X=function(){return e},e}function ee(e){var n=e.children,t=e.isPanelVisible,a=e.hidePanel,o=e.togglePanel,r=e.target,i=e.kind,l=e.viewer,d=e.bookmarkIcon,c=e.isInACatalog,g=e.isInReadingList,f=e.catalogsCount,p=e.popoverDisplay,v=(0,Z.O)(!1),m=s()(v,3),C=m[0],h=m[1],b=m[2],E=function(e,n,t,a){var o=(0,D.Av)(),r=(0,I.useMutation)($,{variables:{type:n,operation:{preprend:{type:a,id:t}}},optimisticResponse:{addToPredefinedCatalog:{__typename:"AddToPredefinedCatalogSucces",version:B.xt,insertedItem:{__typename:"CatalogItemV2",catalogId:W,catalogItemId:B.PH}}},onCompleted:function(e){if("AddToPredefinedCatalogSucces"===e.addToPredefinedCatalog.__typename&&a===L.ej.POST){var n=e.addToPredefinedCatalog.insertedItem;o.event("post.addToList",{listId:n.catalogId,postId:n.catalogItemId})}},update:function(o,r){var i,l=null===(i=r.data)||void 0===i?void 0:i.addToPredefinedCatalog;if("AddToPredefinedCatalogSucces"===(null==l?void 0:l.__typename)){var d,c,s=l.insertedItem,g=l.version;if(s.catalogId!==W&&(0,x.UV)(o,s.catalogId,g),a===L.ej.BOOK_EDITION)d="BookEditionViewerEdge:".concat((0,R.j)(t,e)),c=z;else{if(a!==L.ej.POST)return;d="PostViewerEdge:".concat((0,M.Q)(t,e)),c=K}var u=o.readFragment({id:d,fragment:c});if(null!=u&&u.catalogsConnection){var f=S()(u.catalogsConnection.predefinedContainingThis),p=f.findIndex((function(e){return e.predefined===n}));if(-1!==p)f[p].catalogItemIds.push(s.catalogItemId);else{var v={catalogId:s.catalogId,predefined:n,version:g,catalogItemIds:[s.catalogItemId]};f.push(v)}o.writeFragment({id:d,fragment:c,data:N(N({},u),{},{catalogsConnection:N(N({},u.catalogsConnection),{},{predefinedContainingThis:f})})})}}}});return s()(r,1)[0]}(l.id,L.l8.READING_LIST,r.id,i),P=u.useCallback((function(){o(),g||c||E()}),[o,c,g,E]);return u.createElement(Q.J,{isVisible:t,popoverRenderFn:function(){return u.createElement(_,{showCreateModal:h,hidePanel:a,target:r,kind:i,viewer:l})},hide:a,targetDistance:15,referenceWidth:"100%",display:p},u.createElement(A.a,{isVisible:C,hide:b,target:r,kind:i,viewer:l}),n({onClick:P,bookmarkIcon:d,catalogsCount:f,isPanelVisible:t}))}function ne(e){var n=e.viewer,t=d()(e,["viewer"]),a=t.target.viewerEdge.catalogsConnection,o=(null==a?void 0:a.catalogsContainingThis)&&a.catalogsContainingThis.length>0,r=u.useMemo((function(){var e;return!!(null==a||null===(e=a.predefinedContainingThis)||void 0===e?void 0:e.find((function(e){return e.predefined===L.l8.READING_LIST})))}),[a]),l=u.useMemo((function(){return((null==a?void 0:a.catalogsContainingThis.length)||0)+(r?1:0)}),[null==a?void 0:a.catalogsContainingThis.length,r]),c=u.createElement(J.l,{insideACatalog:!!o||r});return n?u.createElement(Y.B,null,(function(e){var a=e.isVisible,d=e.toggle,s=e.hide;return u.createElement(ee,i()({},t,{viewer:n,isPanelVisible:a,togglePanel:d,hidePanel:s,bookmarkIcon:c,isInACatalog:!!o,isInReadingList:r,catalogsCount:l}))})):c}var te=(0,g.Ps)(X(),z,B.T_,j.tA),ae=(0,g.Ps)(q(),K,B.ST,j.m7)},46101:(e,n,t)=>{"use strict";t.d(n,{l:()=>f,K:()=>c});var a=t(67294),o=t(6688),r=t(353);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var l=a.createElement("path",{d:"M8 5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4V7a2 2 0 0 0-2-2H8z",fill:"#292929"});const d=function(e){return a.createElement("svg",i({width:25,height:25,viewBox:"0 0 25 25",fill:"none"},e),l)};var c=function(e){return{"& path":{fill:e.baseColor.border.darker}}},s=function(e){return{"& path":{fill:e.baseColor.fill.darker}}},g=function(){var e=(0,o.I)();return a.createElement(r.Z,{className:e(c)})},u=function(){var e=(0,o.I)();return a.createElement(d,{className:e(s)})};function f(e){return e.insideACatalog?a.createElement(u,null):a.createElement(g,null)}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/81645.745db6d0.chunk.js.map