(self.webpackChunklite=self.webpackChunklite||[]).push([[39152],{76668:(n,e,t)=>{"use strict";t.r(e),t.d(e,{NavigationTimingReporter:()=>v});var r=t(67294),a=t(36511),i=t(39050),o=t(72351),u=t(39582),l=t(61250),m=t(67297),c=t(67616),f=function(n){return Math.round(1e3*n)};function v(n){var e=n.to,t=n.from,v=(0,r.useRef)(null),d=(0,o.Av)(),g=(0,l.dh)(),p=(0,m.v9)((function(n){return n.debug.originalSpanCarrier})),s=(0,m.v9)((function(n){return n.tracing})),h=s.originalSpan,k=s.tracer,w=(0,a.r)(),b=w.loading,C=w.viewerId;return(0,r.useEffect)((function(){if(!b&&C)if(v.current||e.pathname===t.pathname){if(v.current){var n=v.current.pathname,r=v.current.time;requestAnimationFrame((function(){setTimeout((function(){var t,a,o,l,m=Date.now();v.current=null;var s={to:null!==(t=null===(a=g(e.pathname))||void 0===a?void 0:a.route.name)&&void 0!==t?t:"unknown",from:null!==(o=null===(l=g(n))||void 0===l?void 0:l.route.name)&&void 0!==o?o:"unknown",loggedIn:(0,i.Q)(C)},w={tags:s};p&&(w.childOf=h),k&&k.startSpan("client.navigation",w).setBeginMicros(f(r)).setEndMicros(f(m)).finish(),d&&d.reportClientNav(s,new c.jb(r,m)),u.k.debug("client navigation",{duration:m-r,to:e.pathname,toRouteName:s.to,from:n,fromRouteName:s.from,loggedIn:s.loggedIn})}),0)}))}}else v.current={pathname:t.pathname,time:Date.now()},performance.mark("nav-start")}),[k,e.pathname,t.pathname,b,C]),null}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/reporting.7ffdf826.chunk.js.map