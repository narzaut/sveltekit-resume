<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { json } from '../../lib/i18n';
  import { setupI18n, locale } from '../../lib/i18n';
  import NavItem from './nav.item.svelte';
  import Button from '../shared/button.svelte';
  import LocaleSwitcher from './locale.switcher.svelte';
  $: data = $json('header.navBar') as {
    items: [
      {
        name: string;
        href: string;
      }
    ];
    button: {
      name: string;
      href: string;
    };
  };
  let currentScroll = 0;
  let show = false;
  onMount(() => {
    window.onscroll = () => {
      if (window.scrollY + 1 > currentScroll) {
        show = true;
        currentScroll = window.scrollY - 1;
      } else {
        show = false;
        currentScroll = window.scrollY + 1;
      }
    };
  });
</script>

<nav
  class:scrolled={show}
  class="glass scrolled fixed z-40 flex w-full select-none items-center justify-center py-6 font-mono  shadow-2xl "
>
  <div
    in:fly={{ x: -200, duration: 700, delay: 100 }}
    class="text-gray mx-8 flex h-12 items-center justify-center text-center"
  >
    <span class="mt-2 text-5xl font-medium italic text-green-400">{'</ia>'}</span>
  </div>
  <div class="mr-10 hidden w-full items-center justify-end gap-8 md:flex " id="nav_section">
    {#each data.items as item, index}
      <NavItem href={item.href} itemName={item.name} {index} />
    {/each}
    <div in:fly={{ x: 400, duration: 900, delay: 750 }}>
      <LocaleSwitcher
        locale={$locale}
        on:locale-changed={(e) => setupI18n({ withLocale: e.detail })}
      />
    </div>
  </div>
</nav>
