<script>
    import { onMount } from 'svelte'
    let script;


    onMount(() => {
		
		script = document.createElement('script');
        // script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
        script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
        script.async = true;
        
        document.head.appendChild(script);
		
		script.addEventListener("load",()=>{
            MathJax = {
                loader: {
                    load: [
                        // 'ui/lazy',
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
        })

	})

    

</script>


