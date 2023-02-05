<script lang="ts">
  import { fly } from 'svelte/transition';
  import { writable } from 'svelte/store';
  import { quintOut } from 'svelte/easing';
  import { crossfade } from 'svelte/transition';
  import {
    FilmIcon,
    UserIcon,
    ToolIcon,
    BriefcaseIcon,
    CodepenIcon,
    DownloadIcon,
    PenToolIcon
  } from 'svelte-feather-icons';
  import Button from '../shared/button.svelte';
  import LocaleSwitcher from './locale.switcher.svelte';
  import { setupI18n, locale } from '../../lib/i18n';

  export let data: NavBarType;
  $: items = data.items;
  console.log('🚀 ~ file: nav.svelte:21 ~ items', items);
  let activeSectionValue: string;
  let currentScroll = 0;
  let scrollDirection: 'up' | 'down' = 'down';
  const activeSection = writable('home_section');

  activeSection.subscribe((value) => {
    activeSectionValue = value;
  });

  $: handleScroll = () => {
    // set scroll direction
    if (window.scrollY + 1 > currentScroll) {
      currentScroll = window.scrollY - 5;
    } else {
      currentScroll = window.scrollY + 5;
    }
    // navbar active section
    try {
      for (let i = 0; i <= items.length; i++) {
        if (items[i].href.includes('http')) break;
        const element = document.querySelector(`#${items[i].href}`) as Element;
        const rect = element.getBoundingClientRect();

        if (rect.top >= 0 && rect.bottom <= window.innerHeight + 150) {
          activeSection.set(items[i].href);
          break;
        }
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  $: if (typeof window !== 'undefined') window.addEventListener('scroll', handleScroll);

  const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * 4000),
    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === 'none' ? '' : style.transform;

      return {
        easing: quintOut,
        css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
      };
    }
  });
</script>

<nav
  in:fly={{ x: -200, duration: 700, delay: 0 }}
  class=" glass fixed left-0 z-30 hidden h-screen w-32 select-none flex-col items-center  font-mono shadow-2xl  lg:flex "
>
  <div class="flex h-full max-h-min w-full flex-col items-center justify-between  ">
    <div class="h-1/2 w-full">
      <div class=" h-full w-full flex-col items-center justify-end  md:flex" id="nav_section">
        {#each items as item, index}
          <a
            class:bg-green-pressed={activeSectionValue === item.href}
            class:transition={activeSectionValue === item.href}
            href={item.href.includes('https') ? item.href : `#${item.href}`}
            in:fly={{ x: -200, duration: 700, delay: 200 * index }}
            class="relative z-40 h-full w-full"
          >
            {#if activeSectionValue === item.href}
              <div
                in:receive={{ key: items[index] }}
                out:send={{
                  key: scrollDirection == 'up' ? items[index + 1] : items[index - 1]
                }}
                class="bg-green absolute right-0 z-20 h-full w-2"
              />
            {/if}
            <Button
              icon={item.href === 'about_section'
                ? UserIcon
                : item.href === 'skillset_section'
                ? ToolIcon
                : item.href === 'experience_section'
                ? BriefcaseIcon
                : item.href === 'portfolio_section'
                ? CodepenIcon
                : item.href === 'footer_section'
                ? PenToolIcon
                : item.href.includes('https')
                ? DownloadIcon
                : FilmIcon}
              buttonText={item.name}
              className="border-0 w-full flex flex-col  text-base rounded-none"
            />
          </a>
        {/each}
      </div>
    </div>
    <div class="pb-12" in:fly={{ x: -400, duration: 900, delay: 900 }}>
      <LocaleSwitcher
        data={data.locale}
        locale={$locale}
        on:locale-changed={(e) => setupI18n({ withLocale: e.detail })}
      />
    </div>
  </div>
</nav>
