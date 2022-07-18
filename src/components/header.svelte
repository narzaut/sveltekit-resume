<script lang='ts'>
  import NavBar from '../components/nav.svelte'
  import Content from '../components/header.content.svelte'
  import ArrowDown from '../components/arrow.down.svelte'
  export let data: any;
  import { fade } from 'svelte/transition';
	import viewport from '../utils/useViewportAction';
  let animate: boolean = false;
  let visibility: string = 'invisible'
</script>
{#key animate}
<header 
  
  id='home'
  class={`main_section ${visibility}`}
  use:viewport
    on:enterViewport={() => { 
      animate = true
      visibility='visible'
    }}
>
  <NavBar data={data.navBar} buttonText={data.button}/>
  <Content title={data.title} description={data.description} />
  <ArrowDown href='about'/>
</header>
{/key}
