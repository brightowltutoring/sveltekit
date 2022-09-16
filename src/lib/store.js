import { writable, derived } from 'svelte/store';
import { quintOut, elasticOut } from 'svelte/easing'
// import { slide, fade, scale, fly, blur } from 'svelte/transition';

// export function moduloScale(node, {easing = elasticOut, duration = 1000}) {

//   return {  
//     easing,
//     duration,
//     css: (t,u) => 
//     ` filter: hue-rotate(${10*u}turn) blur(${t*4}px);
//     `
//   }
// }

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

export const isLoggedIn = writable(false) 
export const lastScrollY = writable(0) 
export const scrollY = writable(0) 

// This is equivalent to "setTimeout(()=>{ $startScrollY = $scrollY },200)" 
// if placed inside +layout.svelte .. under an onscroll event attached to the window 
export const startScrollY = derived(scrollY,($scrollY, set)=>{ 
  setTimeout(()=>{ set($scrollY) },50)
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
// export const burgerBreakPoint = derived(innerWidth, $innerWidth => $innerWidth < 640  )
export const lessThan768 = derived(innerWidth, $innerWidth => $innerWidth < 768  )


// export const inTransition  = derived(burgerBreakPoint, $burgerBreakPoint =>  $burgerBreakPoint ? customFade :  ()=>{} )
// export const outTransition = derived(burgerBreakPoint, $burgerBreakPoint =>  $burgerBreakPoint ? customFade :  ()=>{} )


// the all important
export const routes = writable({
  home: {
    name:'Home',
    href: "/",
    title: "Thinksolve.io 💫",
    isCurrent: false,
  }, 
  login: {
    name:'Login',
    href: "/login",
    title: "Login 🚀",
    isCurrent: false,
  },
  plans: {
    name:'Plans',
    href: "/plans",
    title: "Plans",
    isCurrent: false,
  }, 
  math: {
    name:'math',
    href: "/math",
    title: "math",
    isCurrent: false,
  }, 
  schools: {
    name:'schools',
    href: "/schools",
    title: "Schools 📚",
    isCurrent: false,
  },
  jitsi: {
    name:'jitsi',
    href: "/jitsi",
    title: "jitsi 🚀",
    isCurrent: false,
  },
  physics: {
    name:'physics',
    href: "/physics",
    title: "physics 🚀",
    isCurrent: false,
  },
})


export const isDarkMode = writable(false)

export const redirectAfterLoginTimeOut = writable('')
export const redirectSetInterval = writable('')

export const light = '#f7f7f7'
export const light_darkened =  'rgb(242,247,250)'
export const light_darkened_half =  'pink'
export const dark =  'rgb(37,27,47)'
// export const dark_lightened =  'rgb(39,35,53)'
export const dark_lightened =  'rgb(38, 35, 51)'
export const dark_lightened_half =  '#8f86b8'


export const elementColor = derived(isDarkMode, ($isDarkMode,set)=>{
  $isDarkMode ? set(dark_lightened_half) : set(light_darkened_half)
})