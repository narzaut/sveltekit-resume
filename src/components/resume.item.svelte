<script lang="ts">
  export let data: any;
  </script>
<div class='container  flex flex-col  md:flex-row pb-10 items-center text-center md:items-start md:text-left'>

  <div class='w-full px-6 gap-12 flex flex-col'>
    {#each data.items as item}
      <div class='glass'>
        <div class='shadow-2xl bg-gray text-gray-200 p-6 text-center rounded'>
          <h1 class='font-bold text-2xl'>{item.title}</h1>
          <div class='flex flex-col items-center justify-center' >
            <div class='text-sm bg-green-300 rounded-sm text-gray-800 font-bold px-2 pt-0.5'>
              {item.date.from} <span class='font-black'>/</span> {item.date.until}
            </div>
          </div> 
        </div>
        <div class='p-6 text-center flex flex-col items-center justify-center'>
          <div class='text-gray-800 font-bold flex items-center justify-center lg:justify-start'>
            <p class='text-gray-800 italic text-base pt-2 font-medium'>{item.header}</p>
          </div>  
          <p class='text-gray-600 text-sm pt-4'>{item.description} </p>
  
        </div>
      </div>
	  {/each}
  </div>
</div>