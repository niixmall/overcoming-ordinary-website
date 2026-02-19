export interface Playbook {
  slug: string
  title: string
  displayTitle: {
    line1: string
    line2: string
  }
  subtitle: string
  description: string
  metaDescription: string
  keywords: string[]
  highlights: string[]
  downloadUrl: string
}

export const PLAYBOOKS: Playbook[] = [
  {
    slug: "focus-playbook",
    title: "The Focus Playbook",
    displayTitle: {
      line1: "THE FOCUS",
      line2: "PLAYBOOK",
    },
    subtitle: "Tactically leveraging attention and concentration",
    description:
      "This is not another motivational PDF that sits in your downloads folder. The Focus Playbook is your personalized training program to expert focus -- built by Dr. Dillon Small using the same performance psychology frameworks trusted by elite military operators, Division I athletes, and high-performing leaders.",
    metaDescription:
      "Download the free Focus Playbook by Dr. Dillon Small. A personalized training program for expert focus -- tactically leveraging attention and concentration to dominate average.",
    keywords: [
      "focus training",
      "mental performance",
      "attention training",
      "concentration",
      "high performance psychology",
      "Dr. Dillon Small",
      "Overcoming Ordinary",
    ],
    highlights: [
      "A structured daily training regimen aligned with your Focus Manual",
      "Science-backed attention and concentration tactics",
      "The same methods used with elite athletes and special operators",
      "Designed for athletes, leaders, coaches, students, and parents",
    ],
    downloadUrl:
      "https://docs.google.com/document/d/17dE0ItJ1AjEAQtRMzetFDjfxSWsckbWFSoh70uH09kw/edit?usp=sharing",
  },
  // Add more playbooks here in the future:
  // {
  //   slug: "resilience-playbook",
  //   title: "The Resilience Playbook",
  //   ...
  // },
]

export function getPlaybookBySlug(slug: string): Playbook | undefined {
  return PLAYBOOKS.find((p) => p.slug === slug)
}
