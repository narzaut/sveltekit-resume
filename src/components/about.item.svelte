<script lang="ts">
  export let item: any;
</script>

	

{#if !item.value.includes('.com') }
  <span class=''>
		<i class={`${item.icon} pr-2 flex h-1 w-1 text-green-400`} />
		{ item.value }
	</span>
{:else}
  <a class='hover-text-green-400 transition outline-none select-none' href={`https://${item.value}`}>
		<i class={`${item.icon} pr-6  self-center h-1 w-1 text-green-400`} />
		{ item.value }
	</a>
{/if}