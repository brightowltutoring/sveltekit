import{c as g,a as w,v as k,e as r,d as C,j as U,q as M}from"./index.js";import{M as N}from"./Modal.js";import{i as L,e as P}from"./store.js";const H=g((s,e,t,o)=>{let l,i,c,n,p;c=w(L,a=>i=a),p=w(P,a=>n=a);let u=!1,v,{payNowUrl:d=""}=e,{payLaterUrl:h=""}=e;const _=[{resetter:!1,url:d,opacityTW:"bg-opacity-100",text:"Pay Now"},{resetter:!1,url:h,opacityTW:"bg-opacity-70",text:"Pay Later"}];let{btnColorHover:y=""}=e,{card:x}=e,D={1:"bg-[rgb(244,77,77)]",2:"bg-[rgb(254,164,92)]",3:"bg-[rgb(45,165,214)]"};e.payNowUrl===void 0&&t.payNowUrl&&d!==void 0&&t.payNowUrl(d),e.payLaterUrl===void 0&&t.payLaterUrl&&h!==void 0&&t.payLaterUrl(h),e.btnColorHover===void 0&&t.btnColorHover&&y!==void 0&&t.btnColorHover(y),e.card===void 0&&t.card&&x!==void 0&&t.card(x);let b,f;do b=!0,l="",f=`

${k(N,"Modal").$$render(s,{bgTint:"bg-[rgba(0,0,0,0.1)]",showModal:u},{showModal:a=>{u=a,b=!1}},{default:()=>`<embed title="Thinksolve Plans" class="${"bg-red-500 "+r(v,!0)+" opacity-0 w-full fixed bottom-0 md:w-[80vw] h-[90vh] md:-translate-y-5 backdrop-blur-3xl rounded-xl border-dotted border-gray-500"}"${C("src",l,0)}>

  `})}

<plans-card class="${"cardIdentifier block shadow-md hover:scale-105 "+r(i?"hover:shadow-xl":"hover:shadow-lg",!0)+" rounded-xl m-1 p-7 text-center duration-300 group"}"${C("style",`background:${n}`,0)}><p class="text-4xl font-Poppins py-5 text-center">${o.cardTitle?o.cardTitle({}):"Classico"}</p>

  ${U(_,a=>`

    
    <button class="${""+r(D[x],!0)+" "+r(y,!0)+" "+r(a.opacityTW,!0)+" hover:shadow-md hover:scale-105 duration-200 rounded-md hover:rounded-lg p-4 m-1 group-hover:bg-opacity-80 text-xl text-white"}">${o.buttonText?o.buttonText({}):`${r(a.text)}`}</button>
    `)}

  <div class="py-4">${o.cardText?o.cardText({}):"default cardText"}</div></plans-card>

${s.head+='<!-- HEAD_svelte-q4rsxx_START --><script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async><\/script><link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"><!-- HEAD_svelte-q4rsxx_END -->',""}`;while(!b);return c(),p(),f}),T="https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9NU1ljQlpTa1hvSEhnNlkySjhrRmxRWVhQQmhrendpLDU0MTA5ODkz0200eSUPP97h?s=db";function m(s,e,t){return`https://calendly.com/thinksolve/${s}-${e}?hide_gdpr_banner=1`}const j=[{card:1,payNowUrl:m("classico","stripe"),payLaterUrl:m("classico","invoice"),buttonText:"Classico",cardTitle:"Classico",cardText:"Classic 1-on-1 session with smooth screen-sharing. Digital session notes available as a +1hr premium.",href:T},{card:3,payNowUrl:m("mock","stripe"),payLaterUrl:m("mock","invoice"),buttonText:"Mock",cardTitle:"Mock",cardText:" Get test ready. We provide a mock test session with live support/ answers to completed questions. Digital solution key available as a +2hr premium.",href:T},{card:2,payNowUrl:"https://calendly.com/thinksolve/custom?hide_gdpr_banner=1",payLaterUrl:"https://calendly.com/thinksolve/custom?hide_gdpr_banner=1",buttonText:"Custom",cardTitle:"Custom",cardText:"Pick the first session date/time. Describe the remaining quantity of sessions + desired times/dates (check the calendar for availability), and we will send you a custom invoice. ",href:T}],q=g((s,e,t,o)=>{M();let{plansCards:l=j}=e,{noTransition:i=!1}=e,c=i;return e.plansCards===void 0&&t.plansCards&&l!==void 0&&t.plansCards(l),e.noTransition===void 0&&t.noTransition&&i!==void 0&&t.noTransition(i),`
<plans-section class="grid grid-cols-1 sm:grid-cols-dynamic sm:px-4 px-[7%] md:m-7">
  ${c?`${U(l,({card:n,payNowUrl:p,payLaterUrl:u,cardTitle:v,cardText:d},h)=>`<div>${k(H,"PlansCard").$$render(s,{card:n,payNowUrl:p,payLaterUrl:u},{},{cardText:()=>`<span slot="cardText">${r(d)} </span>`,cardTitle:()=>`<span slot="cardTitle">${r(v)} </span>`,default:()=>`
          
          
        `})}
      </div>`)}`:""}</plans-section>



`});export{q as default};
