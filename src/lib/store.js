import { writable, derived } from 'svelte/store';
import { quintOut, elasticOut } from 'svelte/easing'
// import { slide, fade, scale, fly, blur } from 'svelte/transition';


// to animate the loggedin logo ..but this is overkill
// css:   transform: scale(${0.75*t});
// filter: hue-rotate(${u}turn) 
export function moduloScale(node, {easing = elasticOut, duration = 5000 }) {
  return {
    easing,
    duration,
    css: (t,u) => 
    ` transform: translateX(${t*5}px); 
      filter: hue-rotate(${u}turn) blur(${t}px);
    `
  }
}


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


// the all important
export const routes = writable({
  home: {
    name:'Home',
    href: "/",
    title: "💫 Thinksolve.io",
    isCurrent: false,
    btnColor : 'sm:bg-[rgba(69,140,117,0.8)]',
    btnColorHover : 'hover:sm:bg-[rgba(69,140,117,0.5)]',
    bgColor:`bg-gradient-to-t from-[#f7f7f8] to-[rgba(89,208,174,1)]`,
  }, 
  etc: {
    name:'Etc',
    href: "/etc",
    title: "Etc - Thinksolve.io",
    isCurrent: false,
    btnColor : 'sm:bg-[rgba(69,140,117,0.8)]',
    btnColorHover : 'hover:sm:bg-[rgba(69,140,117,0.5)]',
    bgColor:`bg-gradient-to-t from-[#f7f7f8] to-[rgba(89,208,174,1)]`,
  }, 
  plans: {
    name:'Plans',
    href: "/plans",
    title: "Plans - Thinksolve.io",
    isCurrent: false,
    btnColor : 'sm:bg-[rgba(69,140,117,0.8)]',
    btnColorHover : 'hover:sm:bg-[rgba(69,140,117,0.5)]',
    bgColor:`bg-gradient-to-t from-[#f7f7f8] to-[rgba(89,208,174,1)]`,
  }, 
  login: {
    name:'Login',
    href: "/login",
    title: "Login - Thinksolve.io",
    isCurrent: false,
    btnColor : 'sm:bg-[rgba(69,140,117,0.8)]',
    btnColorHover : 'hover:sm:bg-[rgba(69,140,117,0.5)]',
    bgColor:`bg-gradient-to-t from-[#f7f7f8] to-[rgba(89,208,174,1)]`,
  }, 
})


// Since I am checking "Object.keys($routes)" quite a bit in my code, I might as well 
// create a dedicated array for it rather than recreate it every time I use it.

  // export const routesKeysArray = derived(routes, ($routes) => { 
  //   return Object.keys($routes) 
  // }) 

// TODO: ... using a for in loop I can access the keys of routes directly ... Previously I was using forEach or for of
//  and hence had to grab the keys first
