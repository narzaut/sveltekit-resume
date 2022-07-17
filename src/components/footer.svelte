<script lang="ts">
import Item from './about.item.svelte'
export let data: any;
export let aboutData: any
</script>


<footer id="footer" class='border-t-4 border-green-500 text-shadow relative bg-gray py-4 flex flex-col items-center text-gray-300 text-sm'> 
    <div class=' w-28 border-b-4 rounded-lg flex flex-col border-green-400 '>
		<p class='mt-3'></p>
		</div>
	<div class='flex  text-center pb-4  flex-col items-center lg:items-start '>
		<p class='flex flex-col pt-4 text-sm lg:text-base  text-gray-300 leading-8'>				
      {#each aboutData.contactDescription as item}
        <Item item={item} />
      {/each}
		</p>
	</div>
	<a href='#home' class='h-12 w-12 rounded-full bg-gray-500 transition-color hover:bg-green-400 transition absolute  flex items-center justify-center cursor-pointer -top-5   animate-bounce' >
		<i class="fas fa-arrow-up text-3xl  " />
  </a>
	<div>
		 {data.credits.made}
		<span class='text-green-400'> {data.credits.by} </span>
		 {data.copyright}
	</div>
</footer>