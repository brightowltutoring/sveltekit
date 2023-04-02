import{PUBLIC_UPLOAD_ENDPOINT as s}from"../../../../chunks/public.js";const a=["https://us-central1-thinksolve-app.cloudfunctions.net/postToGoogleDriveGCF/formidable",s];async function i(n){try{const r=await n.request.formData(),e=[];for(const[t,o]of r.entries())o instanceof File&&e.push(o);for(let t of e){console.log("file.name",t.name);let o=new FormData;o.append("file",t,t.name),await fetch(a[0],{method:"POST",body:o})}return new Response("Redirect",{status:303,headers:{Location:"/"}})}catch(r){const e=`An error occured with the /api/submit-homework/+server.ts code:

 ${r}
`;return console.log(e),new Response(e,{status:500})}}export{i as POST};
