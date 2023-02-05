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
  projectName: string,
  business: string,
  description: {
    text: string,
    techTools: string[]
  },
  date: string,
  achievements: string[]
}

type Skill = {
    name: string,
    icon: string
}
type Skills = {
    title: string,
    description: string,
    front: Skill[],
    back: Skill[],
    infra: Skill[]
}

declare namespace svelte.JSX {
  interface HTMLProps<T> {
    onenterViewport?: () => void
  }
}