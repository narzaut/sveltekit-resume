/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}

}



type ContactDescriptionType = {
    name: string,
    location: string,
    linkedin: string,
    email: string,
    github: string
}

type AboutType = {
    title: string,
    description: string,
    contactDescription: ContactDescription
}

type NavBarType = {
    items: {
        name: string,
        href: string
    }[],
    locale: LocaleType[]
}

type HeaderType = {
    navBar: NavBarType,
    introduction: string,
    name: string,
    title: string,
    description: string,
    button: {
        text: string,
        link: string
    }
}

type LocaleOption = {
    name: string;
    locale: string;
    flag: string;
  };

type WorkType = {
    title: string,
    projects: ExperienceItem[]
}

type ResumeType = {
    work: WorkType,
    skills: SkillsType
}

type PortfolioProjectType = {
    tech: string[],
    title: string,
    description: string
}


type PortfolioType = {
    title: string,
    description: string,
    projects: PortfolioProjectType[]

}

type FooterType = {
    contact: {
        introduction:string,
        title: string
        text: string,
        button: {
            text: string,
            link: string
        }
    }
    credits: {
        text: string,
        by: string
    }[]

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

type SkillType = {
    name: string,
    icon: string
}
type SkillsType = {
    title: string,
    description: string,
    front: SkillType[],
    back: SkillType[],
    infra: SkillType[]
}

declare namespace svelte.JSX {
  interface HTMLProps<T> {
    onenterViewport?: () => void
  }
}