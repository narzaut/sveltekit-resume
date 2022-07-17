/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}

}

type ExperienceItem = {
  id: number,
  role: string,
  business: string,
  date: string,
  items: Array<string>
}