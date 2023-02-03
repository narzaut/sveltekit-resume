<script lang="ts">
  import Header from '../components/header/index.svelte';
  import About from '../components/about/index.svelte';
  import Skillset from '../components/skills/index.svelte';
  import Experience from '../components/experience/index.svelte';
  import Portfolio from '../components/portfolio/index.svelte';
  import Footer from '../components/footer/index.svelte';
  import ShootingStars from '../components/shooting-stars/index.svelte';
  import { setupI18n, isLocaleLoaded } from '../lib/i18n';
  import { onMount } from 'svelte';
  $: if (!$isLocaleLoaded) setupI18n({ withLocale: 'en' });
  onMount(() => {
    fetch('https://getdata-narzaut.vercel.app/api/send-log', {
      mode: 'no-cors'
    });
  });
</script>

{#if $isLocaleLoaded}
  <div class=" flex flex-col gap-12 lg:gap-24 ">
    <ShootingStars />
    <Header />
    <About />
    <Experience />
    <Skillset />
    <Portfolio />
    <Footer />
  </div>
{:else}
  <p>Loading...</p>
{/if}
