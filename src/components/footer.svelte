<script lang="ts">
import Item from './about.item.svelte'
export let data: any;
export let aboutData: any
import { ArrowUpCircleIcon ,UserIcon, GithubIcon, AtSignIcon, PhoneCallIcon, MapIcon } from 'svelte-feather-icons'

</script>


<footer id="footer" class=' relative bg-secondary py-4 flex flex-col items-center text-gray-300 text-sm'> 

  <a href='#home' class='h-12 w-12 rounded-full  opacity-80 bg-secondary  transition-color hover-bg-green-200 transition absolute  flex items-center justify-center cursor-pointer -top-5   animate-bounce' >
		<ArrowUpCircleIcon class='w-full h-full text-green-400'/>
  </a>
	<div class='flex  text-center pb-4  flex-col items-center lg:items-start '>
		<div class='flex flex-col pt-4 text-sm lg:text-base  text-gray-300 leading-8 gap-2 '>				
      <Item Icon={AtSignIcon} value={ aboutData.contactDescription.email }/>
      <Item Icon={GithubIcon} value={ aboutData.contactDescription.github }/>
      <Item Icon={PhoneCallIcon} value={ aboutData.contactDescription.phoneNumber }/>
    </div>
	</div>

	<div>
		 {data.credits.made}
		<span class='text-green-400 font-mono italic'> {data.credits.by} </span>
		 {data.copyright}
	</div>
</footer>