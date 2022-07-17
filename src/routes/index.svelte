<script lang='ts'>
  import Header from '../components/header.svelte'
  import About from '../components/about.svelte'
  import Footer from '../components/footer.svelte'
  import Experience from '../components/experience.svelte';
  import Portfolio from '../components/portfolio.svelte'
  import data from '../lang/spanish.json'
</script>
<div class="flex flex-col gap-40">
  <Header data = {data.header}/>
  <About data = {data.about}/>
  <Experience />
  <Portfolio />
</div>
