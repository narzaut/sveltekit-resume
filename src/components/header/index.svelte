<script lang="ts">
  import NavBar from './nav.svelte';
  import Content from './header.content.svelte';
  import LocaleSwitcher from '../header/locale.switcher.svelte';
  import viewport from '../../utils/useViewportAction';
  import { fly } from 'svelte/transition';
  import { locale, setupI18n } from '../../lib/i18n';
  export let data: HeaderType;
  let animate: boolean = false;
  let visibility: string = 'invisible';
</script>

{#key animate}
  <header
    id="home_section"
    aria-label="Home section"
    class={`main_section ${visibility}`}
    use:viewport
    on:enterViewport={() => {
      animate = true;
      visibility = 'visible';
    }}
  >
    <div
      class="absolute z-40 flex w-full items-center justify-end pr-4 pt-2 md:hidden lg:hidden"
      in:fly={{ x: 200, duration: 900, delay: 900 }}
    >
      <LocaleSwitcher
        data={data.navBar.locale}
        locale={$locale}
        on:locale-changed={(e) => setupI18n({ withLocale: e.detail })}
      />
    </div>
    <NavBar data={data.navBar} />
    <Content {data} />
  </header>
{/key}
