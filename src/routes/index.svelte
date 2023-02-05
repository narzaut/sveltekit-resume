<script lang="ts">
  import Header from '../components/header/index.svelte';
  import About from '../components/about/index.svelte';
  import Skillset from '../components/skills/index.svelte';
  import Experience from '../components/experience/index.svelte';
  import Portfolio from '../components/portfolio/index.svelte';
  import Footer from '../components/footer/index.svelte';
  import ShootingStars from '../components/shooting-stars/index.svelte';
  import { setupI18n, isLocaleLoaded, json } from '../lib/i18n';
  import { onMount } from 'svelte';
  $: if (!$isLocaleLoaded) setupI18n({ withLocale: 'en' });
  $: data = $json('data') as any;
  $: header = data.header as HeaderType;
  $: about = data.about as AboutType;
  $: resume = data.resume as ResumeType;
  $: work = data.resume.work as WorkType;
  $: portfolio = data.portfolio as PortfolioType;
  $: footer = data.footer as FooterType;
  onMount(async () => {
    //fetch('https://getdata-narzaut-narzaut312.vercel.app/api/send-log', {
    //  mode: 'no-cors'
    //});
  });
</script>

{#if $isLocaleLoaded}
  <div class=" flex flex-col gap-12 lg:ml-32 lg:gap-24">
    <ShootingStars />
    <Header data={header} />
    <About data={about} />
    <Skillset data={resume.skills} />
    <Experience data={work} />
    <Portfolio data={portfolio} />
    <Footer data={footer} aboutData={about} />
  </div>
{:else}
  <p>Loading...</p>
{/if}
