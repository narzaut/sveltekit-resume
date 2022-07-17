<script lang='ts'>
  import NavItem from '../components/nav.item.svelte'
  export let data: any;
  export let buttonText: string;
  import { onMount } from 'svelte'
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

<nav class:scrolled={show} class="font-mono z-20 glass scrolled fixed w-full  py-6 flex select-none  shadow-2xl ">
  <div class='h-12 flex text-gray mx-8 text-center justify-center items-center'>
    <img src="/images/logo.png" alt="logo" class='h-full'>
  </div>
  <div class='hidden mr-10 gap-8 w-full md:flex justify-end items-center ' id='nav' >
    {#each data as item, index}
      <NavItem href='' itemName={item} index={index}/>
	  {/each}
    <button class='border border-green bg-transparent rounded transition hover-bg-green-200 px-4 text-sm py-2 text-green-400'>{buttonText}</button>

  </div>
</nav>
