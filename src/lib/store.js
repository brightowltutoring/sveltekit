import { writable, derived } from 'svelte/store';
import { quintOut, elasticOut } from 'svelte/easing'
// import { slide, fade, scale, fly, blur } from 'svelte/transition';

export function customEase(t){

    // supercon function
    // let a = 0.344
    // let b = 1.4
    // let a = 1
    // let b = 2.7
    // return b*Math.exp(-a/t)


    // curtain effect created on: https://www.desmos.com/calculator/kr2w0zv092
      // return 2*Math.tanh(t)*Math.sin(8*t) 

      let u=t
      return (1/8)*(8*u)*Math.sin(8*u) // less dramatic takeoff


   // ... i think this reproduces sineOut svelte easing 
    // let τ = 4 
    // return Math.sin( (2 * Math.PI / τ ) * t );
    // with period of 4, goes from 0 to 1 when t∈[0,1]
 
  // step function
    // if (t < 0.3) return 0;
    // if (t < 0.6) return 0.3;
    // if (t < 0.9) return 0.6;
    // return 1;
}

function customFade(node, {easing = elasticOut, duration = 3000 }) {
    return {
      easing, duration,
      css: (t,u) => 
      ` opacity: ${0.8*u + t};
        filter: hue-rotate(${0.15*u}turn) 
                blur(${u}px);
      `
    }
}

export function slider(node, { X=0, Y=-100, easing = quintOut, duration = 300 }) {
    return {
      X, Y, easing, duration,  
      css: (t,u) => 
      ` transform: translate(${ X * u}px, ${ Y * u}px);
        opacity: ${t};
      `
    }
}

export const lastScrollY = writable(0) 
export const scrollY = writable(0) 

// This is equivalent to "setTimeout(()=>{ $startScrollY = $scrollY },200)" 
// if placed inside +layout.svelte .. under an onscroll event attached to the window 
export const startScrollY = derived(scrollY,($scrollY, set)=>{ 
  setTimeout(()=>{ set($scrollY) },60)
})


// Conceptually this is like an inst. change, since it sets back to zero
// however the time step is 200 not infinitesimal
export const instDeltaY = derived([scrollY,startScrollY],([$scrollY,$startScrollY])=>{
  return $scrollY-$startScrollY
})

export const scrollHeight = writable(0) 
export const scrollYMax = writable(0) 
export const fractionScroll = derived([scrollY,scrollYMax],([$scrollY,$scrollYMax]) => {
 return 1-($scrollY/$scrollYMax)
})


export const windowInnerHeight = writable(0) 
export const innerWidth = writable(0) 
// isXs needed since tailwind doesn't allow dynamic classes (i.e. for sm: )
export const isXs = derived(innerWidth, $innerWidth => $innerWidth < 640  )

export const inTransition  = derived(isXs, $isXs =>  $isXs ? customFade :  ()=>{} )
export const outTransition = derived(isXs, $isXs =>  $isXs ? customFade :  ()=>{} )

// rgba(255,192,203,0.6)
//indigo-500 = hsl(240,84%,68%)
    

export const homeColor  = `from-[rgba(34,156,121,0.8)]`;
export const aboutColor = `from-[rgba(34,156,121,0.8)]`;
export const loginColor = `from-[rgba(34,156,121,0.8)]`;
export const plansColor = `from-[rgba(34,156,121,0.8)]`;

export const bgColour = {
  
  home : `bg-gradient-to-b ${ homeColor } via-[rgba(89,208,174,1)]`,
  about : `bg-gradient-to-b ${ aboutColor } via-[rgba(89,208,174,1)]`,
  login : `bg-gradient-to-b ${ loginColor } via-[rgba(89,208,174,1)]`,
  plans : `bg-gradient-to-b ${ plansColor } via-[rgba(89,208,174,1)]`, 

  // about: 'bg-gradient-to-b from-[rgba(79,80,240,0.7)] via-purple-300 to-pink-200 ',
  // login: 'bg-gradient-to-b from-[rgba(79,80,240,0.6)] via-purple-300 to-pink-200 ',
  // plans: 'bg-gradient-to-b from-[rgba(79,80,240,0.5)] via-purple-300 to-pink-200 ',

  // home: 'bg-indigo-300',
  // about: 'bg-rose-300',
  // login: 'bg-lime-200',
  // plans: 'bg-teal-300',
  
  // home:  'bg-indigo-300 hue-rotate-0',
  // about: 'bg-rose-300 hue-rotate-0',
  // login: 'bg-lime-200 hue-rotate-0',
  // plans: 'bg-teal-300 hue-rotate-0',
}
