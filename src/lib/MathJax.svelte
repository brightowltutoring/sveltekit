<svelte:head>
	<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script> 
</svelte:head>



<script>
    import { onMount } from 'svelte'

    onMount( mathJaxFunction )

    async function mathJaxFunction(){
        window.MathJax = {
            loader: {
                load: [
                    '[tex]/physics',
                     '[tex]/cancel',
                    ]
            },
            tex: {
                inlineMath: [
                    ['$', '$'],
                    ['\\(', '\\)']
                ],
                packages: {
                    '[+]': [
                        'physics',
                        'cancel'
                    ]
                }
            },
            options: {
                renderActions: {
                    addMenu: []
                }
            },
            svg: {
                fontCache: 'global'
            }
        }
    }
</script>

<!-- TODO: considering katex  -->
<!-- https://svelte.dev/repl/49ff6c089825418888cf804d9dde77bc?version=3.46.4 -->


<!-- taken from: https://svelte.dev/repl/ebd12dbf04574b2bb40003cc8a4299b0?version=3.14.1 -->
<!-- <script>
    import { onMount } from 'svelte'

    onMount(() => {
		
		let script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
        document.head.append(script);
		
		script.onload = () => {
            MathJax = {
                tex: {inlineMath: [['$', '$'], ['\\(', '\\)']]},
                svg: {fontCache: 'global'}
            };
		};
					  
	})
</script> -->