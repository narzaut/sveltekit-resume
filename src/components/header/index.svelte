<script lang="ts">
  import NavBar from './nav.svelte';
  import Content from './header.content.svelte';
  import ArrowDown from '../shared/arrow.down.svelte';
  import viewport from '../../utils/useViewportAction';
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
    <NavBar />
    <Content />
    <ArrowDown href="about_section" />
  </header>
{/key}
