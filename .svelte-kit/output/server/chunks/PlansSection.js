import{c as x,v as f,e as s,d as w,a as T,j as k}from"./index.js";import{M as C}from"./Modal.js";import{i as _,e as U}from"./store.js";const g=x((i,e,t,o)=>{let u={1:"bg-[rgb(244,77,77)]",2:"bg-[rgb(254,164,92)]",3:"bg-[rgb(45,165,214)]"},{btnColorHover:a=""}=e,{card:l}=e,{button:r}=e,d=!1,p="",v;e.btnColorHover===void 0&&t.btnColorHover&&a!==void 0&&t.btnColorHover(a),e.card===void 0&&t.card&&l!==void 0&&t.card(l),e.button===void 0&&t.button&&r!==void 0&&t.button(r);let c,m;do c=!0,m=`
${f(C,"Modal").$$render(i,{body:!0,bgTint:"bg-[rgba(0,0,0,0.1)]",showModal:d},{showModal:n=>{d=n,c=!1}},{default:()=>`<iframe title="Thinksolve Plans" class="${s(v,!0)+" opacity-0 fixed bottom-0 w-full md:w-[80%] h-[90%] md:-translate-y-5 backdrop-blur-3xl rounded-xl border-dotted border-gray-500"}"${w("src",p,0)}></iframe>`})}



<button class="${"hover:shadow-md hover:scale-105 duration-200 rounded-md hover:rounded-lg p-4 m-1 group-hover:bg-opacity-80 text-xl text-white "+s(u[l],!0)+" "+s(a,!0)+" "+s(r.opacityTW,!0)}">${o.buttonText?o.buttonText({}):`${s(r.text)}`}</button>`;while(!c);return m}),P=x((i,e,t,o)=>{let u,a,l,r;a=T(_,n=>u=n),r=T(U,n=>l=n);let{payNowUrl:d=""}=e,{payLaterUrl:p=""}=e;const v=[{resetter:!1,url:d,opacityTW:"bg-opacity-100",text:"Pay Now"},{resetter:!1,url:p,opacityTW:"bg-opacity-70",text:"Pay Later"}];let{btnColorHover:c=""}=e,{card:m}=e;return e.payNowUrl===void 0&&t.payNowUrl&&d!==void 0&&t.payNowUrl(d),e.payLaterUrl===void 0&&t.payLaterUrl&&p!==void 0&&t.payLaterUrl(p),e.btnColorHover===void 0&&t.btnColorHover&&c!==void 0&&t.btnColorHover(c),e.card===void 0&&t.card&&m!==void 0&&t.card(m),a(),r(),`<plans-card class="${"block shadow-md hover:scale-105 "+s(u?"hover:shadow-xl":"hover:shadow-lg",!0)+" rounded-xl m-1 p-7 text-center duration-300 group"}"${w("style",`background:${l}`,0)}><p class="text-4xl font-Poppins py-5 text-center">${o.cardTitle?o.cardTitle({}):"Classico"}</p>

  ${k(v,n=>`${f(g,"PlansButton").$$render(i,{button:n,btnColorHover:c,card:m},{},{})}`)}

  <div class="py-4">${o.cardText?o.cardText({}):"default cardText"}</div></plans-card>`}),y="https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9NU1ljQlpTa1hvSEhnNlkySjhrRmxRWVhQQmhrendpLDU0MTA5ODkz0200eSUPP97h?s=db",b={red:"f34d4e",yellow:"fea45c",blue:"2aa5d6"};function h(i,e,t){return`https://calendly.com/thinksolve/${i}-${e}?embed_domain=thinksolve.io&embed_type=PopupText&hide_gdpr_banner=1&primary_color=${t}`}const M=[{card:1,payNowUrl:h("classico","stripe",b.red),payLaterUrl:h("classico","invoice",b.red),buttonText:"Classico",cardTitle:"Classico",cardText:"Classic 1-on-1 session with smooth screen-sharing. Digital session notes available as a +1hr premium.",href:y},{card:3,payNowUrl:h("mock","stripe",b.blue),payLaterUrl:h("mock","invoice",b.blue),buttonText:"Mock",cardTitle:"Mock",cardText:" Get test ready. We provide a mock test session with live support/ answers to completed questions. Digital solution key available as a +2hr premium.",href:y},{card:2,payNowUrl:"https://calendly.com/thinksolve/custom?embed_domain=thinksolve.io&embed_type=PopupText&hide_gdpr_banner=1",payLaterUrl:"https://calendly.com/thinksolve/custom?embed_domain=thinksolve.io&embed_type=PopupText&hide_gdpr_banner=1",buttonText:"Custom",cardTitle:"Custom",cardText:"Pick the first session date/time. Describe the remaining quantity of sessions + desired times/dates (check the calendar for availability), and we will send you a custom invoice. ",href:y}],D=x((i,e,t,o)=>`

<plans-section class="grid grid-cols-1 sm:grid-cols-dynamic sm:px-4 px-[7%] md:m-7">
  

  ${k(M,({card:u,payNowUrl:a,payLaterUrl:l,cardTitle:r,cardText:d},p)=>`<div>${f(P,"PlansCard").$$render(i,{card:u,payNowUrl:a,payLaterUrl:l},{},{cardText:()=>`<span slot="cardText">${s(d)} </span>`,cardTitle:()=>`<span slot="cardTitle">${s(r)} </span>`})}
    </div>`)}
  </plans-section>





`);export{D as default};
