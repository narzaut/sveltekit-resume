<script lang='ts'>
  import NavItem from '../components/nav.item.svelte'
  import { onMount } from 'svelte'
  import { fly,fade } from 'svelte/transition';
  
  export let data: any;
  export let buttonText: any;
  let currentScroll = 0
  let show = false
  onMount(() => {
    window.onscroll = () => {
      if (window.scrollY > currentScroll) {
        show = true
        currentScroll = window.scrollY
      } else {
        show = false
        currentScroll = window.scrollY - 1
      }
    }
  })

</script>

 
  <nav   class:scrolled={show} class="font-mono z-20 glass scrolled fixed w-full items-center justify-center py-6 flex select-none  shadow-2xl ">
  <div in:fly={{x: -200, duration: 700, delay: 100}} class='h-12 flex text-gray mx-8 text-center justify-center items-center'>
    <img  src="/images/logo.png" alt="logo" class='h-full'>
  </div>
  <div class='hidden mr-10 gap-8 w-full md:flex justify-end items-center ' id='nav' >
    {#each data as item, index}
      <NavItem href={item.href} itemName={item.name} index={index}/>
	  {/each}
    <a in:fly={{x:400, duration: 700, delay: 800}} href="/#portafolio ">
      <button class='border border-green bg-transparent rounded transition hover-bg-green-200 px-4 text-sm py-2 text-green-400'>{buttonText.name}</button>
    </a>

  </div>
</nav>
