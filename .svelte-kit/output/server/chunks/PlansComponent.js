import{c as g,a as C,v as U,e as r,d as k,j as _,q as D}from"./index.js";import{M as L}from"./Modal.js";import{i as P,e as H}from"./store.js";const W=g((d,e,t,o)=>{let l,s,c,n;s=C(P,a=>l=a),n=C(H,a=>c=a);let u=!1,v,y,{payNowUrl:i=""}=e,{payLaterUrl:p=""}=e;const M=[{resetter:!1,url:i,opacityTW:"bg-opacity-100",text:"Pay Now"},{resetter:!1,url:p,opacityTW:"bg-opacity-70",text:"Pay Later"}];let{btnColorHover:b=""}=e,{card:f}=e,N={1:"bg-[rgb(244,77,77)]",2:"bg-[rgb(254,164,92)]",3:"bg-[rgb(45,165,214)]"};e.payNowUrl===void 0&&t.payNowUrl&&i!==void 0&&t.payNowUrl(i),e.payLaterUrl===void 0&&t.payLaterUrl&&p!==void 0&&t.payLaterUrl(p),e.btnColorHover===void 0&&t.btnColorHover&&b!==void 0&&t.btnColorHover(b),e.card===void 0&&t.card&&f!==void 0&&t.card(f);let x,w;do x=!0,w=`

${U(L,"Modal").$$render(d,{bgTint:"bg-[rgba(0,0,0,0.1)]",showModal:u},{showModal:a=>{u=a,x=!1}},{default:()=>`<iframe title="Thinksolve Plans" class="${r(y,!0)+" opacity-0 w-full fixed bottom-0 md:w-[80vw] h-[90vh] md:-translate-y-5 backdrop-blur-3xl rounded-xl border-dotted border-gray-500"}"${k("src",v,0)}></iframe>`})}

<plans-card class="${"cardIdentifier block shadow-md hover:scale-105 "+r(l?"hover:shadow-xl":"hover:shadow-lg",!0)+" rounded-xl m-1 p-7 text-center duration-300 group"}"${k("style",`background:${c}`,0)}><p class="text-4xl font-Poppins py-5 text-center">${o.cardTitle?o.cardTitle({}):"Classico"}</p>

  ${_(M,a=>`

    
    <button class="${""+r(N[f],!0)+" "+r(b,!0)+" "+r(a.opacityTW,!0)+" hover:shadow-md hover:scale-105 duration-200 rounded-md hover:rounded-lg p-4 m-1 group-hover:bg-opacity-80 text-xl text-white"}">${o.buttonText?o.buttonText({}):`${r(a.text)}`}</button>
    `)}

  <div class="py-4">${o.cardText?o.cardText({}):"default cardText"}</div></plans-card>`;while(!x);return s(),n(),w}),T="https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9NU1ljQlpTa1hvSEhnNlkySjhrRmxRWVhQQmhrendpLDU0MTA5ODkz0200eSUPP97h?s=db",m={red:"f34d4e",yellow:"fea45c",blue:"2aa5d6"};function h(d,e,t){return`https://calendly.com/thinksolve/${d}-${e}?hide_gdpr_banner=1&primary_color=${t}`}const R=[{card:1,payNowUrl:h("classico","stripe",m.red),payLaterUrl:h("classico","invoice",m.red),buttonText:"Classico",cardTitle:"Classico",cardText:"Classic 1-on-1 session with smooth screen-sharing. Digital session notes available as a +1hr premium.",href:T},{card:3,payNowUrl:h("mock","stripe",m.blue),payLaterUrl:h("mock","invoice",m.blue),buttonText:"Mock",cardTitle:"Mock",cardText:" Get test ready. We provide a mock test session with live support/ answers to completed questions. Digital solution key available as a +2hr premium.",href:T},{card:2,payNowUrl:"https://calendly.com/thinksolve/custom?hide_gdpr_banner=1",payLaterUrl:"https://calendly.com/thinksolve/custom?hide_gdpr_banner=1",buttonText:"Custom",cardTitle:"Custom",cardText:"Pick the first session date/time. Describe the remaining quantity of sessions + desired times/dates (check the calendar for availability), and we will send you a custom invoice. ",href:T}],E=g((d,e,t,o)=>{D();let{plansCards:l=R}=e,{noTransition:s=!1}=e,c=s;return e.plansCards===void 0&&t.plansCards&&l!==void 0&&t.plansCards(l),e.noTransition===void 0&&t.noTransition&&s!==void 0&&t.noTransition(s),`
<plans-section class="grid grid-cols-1 sm:grid-cols-dynamic sm:px-4 px-[7%] md:m-7">
  ${c?`${_(l,({card:n,payNowUrl:u,payLaterUrl:v,cardTitle:y,cardText:i},p)=>`<div>${U(W,"PlansCard").$$render(d,{card:n,payNowUrl:u,payLaterUrl:v},{},{cardText:()=>`<span slot="cardText">${r(i)} </span>`,cardTitle:()=>`<span slot="cardTitle">${r(y)} </span>`,default:()=>`
          
          
        `})}
      </div>`)}`:""}</plans-section>



`});export{E as default};
