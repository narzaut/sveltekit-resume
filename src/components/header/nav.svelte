<script lang='ts'>
    import { onMount } from 'svelte'
    import { fly } from 'svelte/transition';
    import { json } from '../../lib/i18n';
    import { setupI18n, locale } from '../../lib/i18n';
    import NavItem from './nav.item.svelte'
    import Button from '../shared/button.svelte'
    import LocaleSwitcher from './locale.switcher.svelte'
    $: data = $json('header.navBar') as { 
        items: [{
            name: string,
            href: string
        }], 
        button: {
            name: string,
            href: string
        } 
    }
    let currentScroll = 0
    let show = false
    onMount(() => {
      window.onscroll = () => {
        if (window.scrollY + 1 > currentScroll) {
          show = true
          currentScroll = window.scrollY - 1
        } else {
          show = false
          currentScroll = window.scrollY + 1
        }
      }
    })

</script>
  <nav   class:scrolled={show} class="z-40 font-mono glass scrolled fixed w-full items-center justify-center py-6 flex select-none  shadow-2xl ">
  <div in:fly={{x: -200, duration: 700, delay: 100}} class='h-12 flex text-gray mx-8 text-center justify-center items-center'>
    <span class="text-green-400 mt-2 font-medium italic text-5xl">{'</ia>'}</span>
  </div>
  <div class='hidden mr-10 gap-8 w-full md:flex justify-end items-center ' id='nav_section' >
    {#each data.items as item, index}
      <NavItem href={item.href} itemName={item.name} index={index}/>
	{/each}
    <div
        in:fly={{x: 400, duration: 900, delay: 750}}
    >
        <LocaleSwitcher
            locale={$locale}
            on:locale-changed = { e =>
              setupI18n({ withLocale: e.detail }) 
            }
        />
    </div>
    
  </div>
</nav>
