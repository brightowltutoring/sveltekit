import{c as C,a as T,e as r,d as k,j as w,q as U,v as f}from"./index.js";import{i as g,e as _}from"./store.js";import{I as N,j as D,c as L}from"./utils.js";const P=C((c,e,t,a)=>{let o,s,u,m;s=T(g,l=>o=l),m=T(_,l=>u=l);let{payNowUrl:i=""}=e,{payLaterUrl:n=""}=e;const v=[{resetter:!1,url:i,opacityTW:"bg-opacity-100",text:"Pay Now"},{resetter:!1,url:n,opacityTW:"bg-opacity-70",text:"Pay Later"}];let{btnColorHover:d=""}=e,{card:p}=e,b={1:"bg-[rgb(244,77,77)]",2:"bg-[rgb(254,164,92)]",3:"bg-[rgb(45,165,214)]"};return e.payNowUrl===void 0&&t.payNowUrl&&i!==void 0&&t.payNowUrl(i),e.payLaterUrl===void 0&&t.payLaterUrl&&n!==void 0&&t.payLaterUrl(n),e.btnColorHover===void 0&&t.btnColorHover&&d!==void 0&&t.btnColorHover(d),e.card===void 0&&t.card&&p!==void 0&&t.card(p),s(),m(),`<plans-card class="${"cardIdentifier block shadow-md hover:scale-105 "+r(o?"hover:shadow-xl":"hover:shadow-lg",!0)+" rounded-xl m-1 p-7 text-center duration-300 group"}"${k("style",`background:${u}`,0)}><p class="text-4xl font-Poppins py-5 text-center">${a.cardTitle?a.cardTitle({}):"Classico"}</p>

  ${w(v,l=>`<button class="${""+r(b[p],!0)+" "+r(d,!0)+" "+r(l.opacityTW,!0)+" hover:shadow-md hover:scale-105 duration-200 rounded-md hover:rounded-lg p-4 m-1 group-hover:bg-opacity-80 text-xl text-white"}">${a.buttonText?a.buttonText({}):`${r(l.text)}`}
      </button>`)}

  <div class="py-4">${a.cardText?a.cardText({}):"default cardText"}</div></plans-card>`}),x="https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9NU1ljQlpTa1hvSEhnNlkySjhrRmxRWVhQQmhrendpLDU0MTA5ODkz0200eSUPP97h?s=db",y={red:"f34d4e",yellow:"fea45c",blue:"2aa5d6"};function h(c,e,t){return`https://calendly.com/thinksolve/${c}-${e}?hide_gdpr_banner=1&primary_color=${t}`}const H=[{card:1,payNowUrl:h("classico","stripe",y.red),payLaterUrl:h("classico","invoice",y.red),buttonText:"Classico",cardTitle:"Classico",cardText:"Classic 1-on-1 session with smooth screen-sharing. Digital session notes available as a +1hr premium.",href:x},{card:3,payNowUrl:h("mock","stripe",y.blue),payLaterUrl:h("mock","invoice",y.blue),buttonText:"Mock",cardTitle:"Mock",cardText:" Get test ready. We provide a mock test session with live support/ answers to completed questions. Digital solution key available as a +2hr premium.",href:x},{card:2,payNowUrl:"https://calendly.com/thinksolve/custom?hide_gdpr_banner=1",payLaterUrl:"https://calendly.com/thinksolve/custom?hide_gdpr_banner=1",buttonText:"Custom",cardTitle:"Custom",cardText:"Pick the first session date/time. Describe the remaining quantity of sessions + desired times/dates (check the calendar for availability), and we will send you a custom invoice. ",href:x}],W=C((c,e,t,a)=>{U();let{plansCards:o=H}=e,{noTransition:s=!1}=e,u=s;function m(){console.log("\u{1F4C5}"),D("calendlyJS","https://assets.calendly.com/assets/external/widget.js"),L("calendlyCSS","https://assets.calendly.com/assets/external/widget.css")}return e.plansCards===void 0&&t.plansCards&&o!==void 0&&t.plansCards(o),e.noTransition===void 0&&t.noTransition&&s!==void 0&&t.noTransition(s),`${f(N,"InView").$$render(c,{once:!0,margin:"200px",onview:m},{},{default:()=>`<plans-section class="grid grid-cols-1 sm:grid-cols-dynamic sm:px-4 px-[7%] md:m-7">
    ${u?`${w(o,({card:i,payNowUrl:n,payLaterUrl:v,cardTitle:d,cardText:p},b)=>`<div>${f(P,"PlansCard").$$render(c,{card:i,payNowUrl:n,payLaterUrl:v},{},{cardText:()=>`<span slot="cardText">${r(p)} </span>`,cardTitle:()=>`<span slot="cardTitle">${r(d)} </span>`,default:()=>`
            
            
          `})}
        </div>`)}`:""}</plans-section>`})}


`});export{W as P};
