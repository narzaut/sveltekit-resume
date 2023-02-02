<script lang="ts">
  import Item from '../shared/contact.item.svelte';
  import { json } from '../../lib/i18n';

  import { ArrowUpCircleIcon, GithubIcon, AtSignIcon, LinkedinIcon } from 'svelte-feather-icons';

  $: data = $json('footer') as {
    credits: {
      made: string;
      by: string;
    };
    copyright: string;
  };

  $: aboutData = $json('about') as {
    title: string;
    description: string;
    contactDescription: {
      name: string;
      location: string;
      linkedin: string;
      email: string;
      github: string;
    };
  };
</script>

<footer
  id="footer"
  aria-label="Footer Section"
  class="bg-secondary relative z-30 mt-12 flex flex-col items-center py-4 text-sm text-gray-300"
>
  <a
    href="#home_section"
    aria-label="Home section"
    class="bg-secondary transition-color hover-bg-green-200  absolute -top-12  flex h-12 w-12 animate-bounce  cursor-pointer items-center justify-center rounded-full opacity-80   transition"
  >
    <ArrowUpCircleIcon class="h-full w-full text-green-400" />
  </a>
  <div class="flex  flex-col items-center  pb-4 text-center lg:items-start ">
    <div class="flex flex-col gap-2 pt-4 text-sm  leading-8 text-gray-300 lg:text-base ">
      <Item Icon={LinkedinIcon} value={aboutData.contactDescription.linkedin} />
      <Item Icon={AtSignIcon} value={aboutData.contactDescription.email} />
      <Item Icon={GithubIcon} value={aboutData.contactDescription.github} />
    </div>
  </div>

  <div>
    {data.credits.made}
    <span class="font-mono italic text-green-400"> {data.credits.by} </span>
    {data.copyright}
  </div>
</footer>
