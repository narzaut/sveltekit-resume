<script lang='ts'>
  import Header from '../components/header.svelte'
  import About from '../components/about.svelte'
  import Skillset from '../components/skillset.svelte'
  import Experience from '../components/experience.svelte';
  import Portfolio from '../components/portfolio.svelte'
  import Footer from '../components/footer.svelte'
  import data from '../lang/spanish.json'


</script>
<div class="flex flex-col gap-12 lg:gap-32 ">
  <Header data = {data.header}/>
  <About data = {data.about}/>
  <Experience  />
  <Skillset />
  <Portfolio />
  <Footer data={data.footer} aboutData={data.about}/>
</div>
