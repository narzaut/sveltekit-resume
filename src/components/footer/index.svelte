<script lang="ts">
    import Item from '../shared/contact.item.svelte'
    import { json } from '../../lib/i18n';

    import { 
        ArrowUpCircleIcon,
        GithubIcon, 
        AtSignIcon, 
        LinkedinIcon
    } from 'svelte-feather-icons';

    $: data = $json('footer') as {
        credits: {
            made: string,
            by: string
        },
        copyright: string
    }

    $: aboutData = $json('about') as {
        title: string,
        description: string,
        contactDescription: {
            name: string,
            location: string,
            linkedin: string,
            email: string,
            github: string
        }
    }
</script>


<footer id="footer" aria-label="Footer Section" class='z-30 relative bg-secondary py-4 mt-12 flex flex-col items-center text-gray-300 text-sm'> 
    <a href='#home_section' aria-label="Home section" class='h-12 w-12 rounded-full  opacity-80 bg-secondary  transition-color hover-bg-green-200 transition absolute  flex items-center justify-center cursor-pointer -top-12   animate-bounce' >
	    <ArrowUpCircleIcon class='w-full h-full text-green-400'/>
    </a>
	<div class='flex  text-center pb-4  flex-col items-center lg:items-start '>
	    <div class='flex flex-col pt-4 text-sm lg:text-base  text-gray-300 leading-8 gap-2 '>				
        <Item Icon={LinkedinIcon} value={ aboutData.contactDescription.linkedin }/>
        <Item Icon={AtSignIcon} value={ aboutData.contactDescription.email }/>
        <Item Icon={GithubIcon} value={ aboutData.contactDescription.github }/>
    </div>
	</div>

	<div>
		{data.credits.made}
		<span class='text-green-400 font-mono italic'> {data.credits.by} </span>
		{data.copyright}
	</div>
</footer>