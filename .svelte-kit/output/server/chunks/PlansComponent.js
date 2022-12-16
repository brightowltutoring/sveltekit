import{c as U,a as g,v as T,e as r,d as k,j as _,p as N}from"./index.js";import{M as P}from"./Modal.js";import{i as D,e as L}from"./store.js";import{I as H,j as S,c as j}from"./InView.js";const W=U((d,e,t,o)=>{let s,l,c,p;l=g(D,a=>s=a),p=g(L,a=>c=a);let u=!1,h,y,{payNowUrl:n=""}=e,{payLaterUrl:i=""}=e;const w=[{resetter:!1,url:n,opacityTW:"bg-opacity-100",text:"Pay Now"},{resetter:!1,url:i,opacityTW:"bg-opacity-70",text:"Pay Later"}];let{btnColorHover:v=""}=e,{card:x}=e,M={1:"bg-[rgb(244,77,77)]",2:"bg-[rgb(254,164,92)]",3:"bg-[rgb(45,165,214)]"};e.payNowUrl===void 0&&t.payNowUrl&&n!==void 0&&t.payNowUrl(n),e.payLaterUrl===void 0&&t.payLaterUrl&&i!==void 0&&t.payLaterUrl(i),e.btnColorHover===void 0&&t.btnColorHover&&v!==void 0&&t.btnColorHover(v),e.card===void 0&&t.card&&x!==void 0&&t.card(x);let b,C;do b=!0,C=`

${T(P,"Modal").$$render(d,{bgTint:"bg-[rgba(0,0,0,0.1)]",showModal:u},{showModal:a=>{u=a,b=!1}},{default:()=>`<iframe title="Thinksolve Plans" class="${r(y,!0)+" opacity-0 w-full fixed bottom-0 md:w-[80vw] h-[90vh] md:-translate-y-5 backdrop-blur-3xl rounded-xl border-dotted border-gray-500"}"${k("src",h,0)}></iframe>`})}

<plans-card class="${"cardIdentifier block shadow-md hover:scale-105 "+r(s?"hover:shadow-xl":"hover:shadow-lg",!0)+" rounded-xl m-1 p-7 text-center duration-300 group"}"${k("style",`background:${c}`,0)}><p class="text-4xl font-Poppins py-5 text-center">${o.cardTitle?o.cardTitle({}):"Classico"}</p>

  ${_(w,a=>`

    
    <button class="${""+r(M[x],!0)+" "+r(v,!0)+" "+r(a.opacityTW,!0)+" hover:shadow-md hover:scale-105 duration-200 rounded-md hover:rounded-lg p-4 m-1 group-hover:bg-opacity-80 text-xl text-white"}">${o.buttonText?o.buttonText({}):`${r(a.text)}`}</button>
    `)}

  <div class="py-4">${o.cardText?o.cardText({}):"default cardText"}</div></plans-card>`;while(!b);return l(),p(),C}),f="https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9NU1ljQlpTa1hvSEhnNlkySjhrRmxRWVhQQmhrendpLDU0MTA5ODkz0200eSUPP97h?s=db";function m(d,e,t){return"https://calendly.com/thinksolve/"}const I=[{card:1,payNowUrl:m(),payLaterUrl:m(),buttonText:"Classico",cardTitle:"Classico",cardText:"Classic 1-on-1 session with smooth screen-sharing. Digital session notes available as a +1hr premium.",href:f},{card:3,payNowUrl:m(),payLaterUrl:m(),buttonText:"Mock",cardTitle:"Mock",cardText:" Get test ready. We provide a mock test session with live support/ answers to completed questions. Digital solution key available as a +2hr premium.",href:f},{card:2,payNowUrl:"https://calendly.com/thinksolve/custom?hide_gdpr_banner=1",payLaterUrl:"https://calendly.com/thinksolve/custom?hide_gdpr_banner=1",buttonText:"Custom",cardTitle:"Custom",cardText:"Pick the first session date/time. Describe the remaining quantity of sessions + desired times/dates (check the calendar for availability), and we will send you a custom invoice. ",href:f}],Q=U((d,e,t,o)=>{N();let{plansCards:s=I}=e,{noTransition:l=!1}=e,c=l;function p(){console.log("\u{1F4C5}"),S("calendlyJS","https://assets.calendly.com/assets/external/widget.js"),j("calendlyCSS","https://assets.calendly.com/assets/external/widget.css")}return e.plansCards===void 0&&t.plansCards&&s!==void 0&&t.plansCards(s),e.noTransition===void 0&&t.noTransition&&l!==void 0&&t.noTransition(l),`${T(H,"InView").$$render(d,{once:!0,margin:"200px",onview:p},{},{default:()=>`<plans-section class="grid grid-cols-1 sm:grid-cols-dynamic sm:px-4 px-[7%] md:m-7">
    ${c?`${_(s,({card:u,payNowUrl:h,payLaterUrl:y,cardTitle:n,cardText:i},w)=>`<div>${T(W,"PlansCard").$$render(d,{card:u,payNowUrl:h,payLaterUrl:y},{},{cardText:()=>`<span slot="cardText">${r(i)} </span>`,cardTitle:()=>`<span slot="cardTitle">${r(n)} </span>`,default:()=>`
            
            
          `})}
        </div>`)}`:""}</plans-section>`})}


`});export{Q as P};
