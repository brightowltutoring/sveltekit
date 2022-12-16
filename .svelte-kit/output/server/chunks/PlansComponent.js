import{c as C,a as w,e as a,d as k,j as _,v as g,q as D}from"./index.js";import{M as L}from"./Modal.js";import{i as H,e as W}from"./store.js";const R=C((d,e,t,r)=>{let o,l,p,u;l=w(H,s=>o=s),u=w(W,s=>p=s);let{payNowUrl:i=""}=e,{payLaterUrl:n=""}=e;const v=[{resetter:!1,url:i,opacityTW:"bg-opacity-100",text:"Pay Now"},{resetter:!1,url:n,opacityTW:"bg-opacity-70",text:"Pay Later"}];let{btnColorHover:c=""}=e,{card:m}=e,U={1:"bg-[rgb(244,77,77)]",2:"bg-[rgb(254,164,92)]",3:"bg-[rgb(45,165,214)]"},T=!1,M="",P;e.payNowUrl===void 0&&t.payNowUrl&&i!==void 0&&t.payNowUrl(i),e.payLaterUrl===void 0&&t.payLaterUrl&&n!==void 0&&t.payLaterUrl(n),e.btnColorHover===void 0&&t.btnColorHover&&c!==void 0&&t.btnColorHover(c),e.card===void 0&&t.card&&m!==void 0&&t.card(m);let b,f;do b=!0,f=`<plans-card class="${"cardIdentifier block shadow-md hover:scale-105 "+a(o?"hover:shadow-xl":"hover:shadow-lg",!0)+" rounded-xl m-1 p-7 text-center duration-300 group"}"${k("style",`background:${p}`,0)}><p class="text-4xl font-Poppins py-5 text-center">${r.cardTitle?r.cardTitle({}):"Classico"}</p>

  ${_(v,s=>`
    
    
    ${g(L,"Modal").$$render(d,{bgTint:"bg-[rgba(0,0,0,0.1)]",showModal:T},{showModal:N=>{T=N,b=!1}},{default:()=>`<iframe title="Thinksolve Plans" class="${a(P,!0)+" opacity-0 fixed bottom-0 w-full md:w-[80%] h-[90%] md:-translate-y-5 backdrop-blur-3xl rounded-xl border-dotted border-gray-500"}"${k("src",M,0)}></iframe>
    `})}

    <button class="${""+a(U[m],!0)+" "+a(c,!0)+" "+a(s.opacityTW,!0)+" hover:shadow-md hover:scale-105 duration-200 rounded-md hover:rounded-lg p-4 m-1 group-hover:bg-opacity-80 text-xl text-white"}">${r.buttonText?r.buttonText({}):`${a(s.text)}`}</button>
    `)}

  <div class="py-4">${r.cardText?r.cardText({}):"default cardText"}</div></plans-card>


`;while(!b);return l(),u(),f}),x="https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9NU1ljQlpTa1hvSEhnNlkySjhrRmxRWVhQQmhrendpLDU0MTA5ODkz0200eSUPP97h?s=db",h={red:"f34d4e",yellow:"fea45c",blue:"2aa5d6"};function y(d,e,t){return`https://calendly.com/thinksolve/${d}-${e}?embed_domain=thinksolve.io&embed_type=PopupText&hide_gdpr_banner=1&primary_color=${t}`}const j=[{card:1,payNowUrl:y("classico","stripe",h.red),payLaterUrl:y("classico","invoice",h.red),buttonText:"Classico",cardTitle:"Classico",cardText:"Classic 1-on-1 session with smooth screen-sharing. Digital session notes available as a +1hr premium.",href:x},{card:3,payNowUrl:y("mock","stripe",h.blue),payLaterUrl:y("mock","invoice",h.blue),buttonText:"Mock",cardTitle:"Mock",cardText:" Get test ready. We provide a mock test session with live support/ answers to completed questions. Digital solution key available as a +2hr premium.",href:x},{card:2,payNowUrl:"https://calendly.com/thinksolve/custom?embed_domain=thinksolve.io&embed_type=PopupText&hide_gdpr_banner=1",payLaterUrl:"https://calendly.com/thinksolve/custom?embed_domain=thinksolve.io&embed_type=PopupText&hide_gdpr_banner=1",buttonText:"Custom",cardTitle:"Custom",cardText:"Pick the first session date/time. Describe the remaining quantity of sessions + desired times/dates (check the calendar for availability), and we will send you a custom invoice. ",href:x}],Q=C((d,e,t,r)=>{D();let{plansCards:o=j}=e,{noTransition:l=!1}=e,p=l;return e.plansCards===void 0&&t.plansCards&&o!==void 0&&t.plansCards(o),e.noTransition===void 0&&t.noTransition&&l!==void 0&&t.noTransition(l),`
<plans-section class="grid grid-cols-1 sm:grid-cols-dynamic sm:px-4 px-[7%] md:m-7">
  ${p?`${_(o,({card:u,payNowUrl:i,payLaterUrl:n,cardTitle:v,cardText:c},m)=>`<div>${g(R,"PlansCard").$$render(d,{card:u,payNowUrl:i,payLaterUrl:n},{},{cardText:()=>`<span slot="cardText">${a(c)} </span>`,cardTitle:()=>`<span slot="cardTitle">${a(v)} </span>`,default:()=>`
          
          
        `})}
      </div>`)}`:""}</plans-section>





`});export{Q as default};
