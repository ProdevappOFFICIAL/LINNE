
export const clients = [...new Array(10)].map((client, index) => ({
  href: `/${index + 1}.png`,
}))

// for linne products display 
// linne studio
// linne activity mandager
// linne canvas mirror
// linne Ai with lenium ai 
export const products = [
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail: '/images/web-1.webp',
  },
  {
    title: 'Cursor',
    link: 'https://cursor.so',
    thumbnail: '/images/web-1.webp',
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail: '/images/web-1.webp',
  },

  {
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail: '/images/web-1.webp',
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail: '/images/web-1.webp',
  },
  {
    title: 'Pixel Perfect',
    link: 'https://app.pixelperfect.quest',
    thumbnail: '/images/web-1.webp',
  },

  {
    title: 'Algochurn',
    link: 'https://algochurn.com',
    thumbnail: '/images/web-1.webp',
  },
  {
    title: 'Aceternity UI',
    link: 'https://ui.aceternity.com',
    thumbnail: '/images/web-1.webp',
  },
  {
    title: 'Tailwind Master Kit',
    link: 'https://tailwindmasterkit.com',
    thumbnail: '/images/web-1.webp',
  },
  {
    title: 'SmartBridge',
    link: 'https://smartbridgetech.com',
    thumbnail: '/images/web-1.webp',
  },
  {
    title: 'Renderwork Studio',
    link: 'https://renderwork.studio',
    thumbnail: '/images/web-1.webp',
  },

  {
    title: 'Creme Digital',
    link: 'https://cremedigital.com',
    thumbnail: '/images/web-1.webp',
  },
  {
    title: 'Golden Bells Academy',
    link: 'https://goldenbellsacademy.com',
    thumbnail: '/images/web-1.webp',
  },
  {
    title: 'Invoker Labs',
    link: 'https://invoker.lol',
    thumbnail: '/images/web-1.webp',
  },
  {
    title: 'E Free Invoice',
    link: 'https://efreeinvoice.com',
    thumbnail: '/images/web-1.webp',
  },
]


export const EditorCanvasDefaultCardTypes = {
  Email: { description: 'Send and email to a user', type: 'Action' },
  Condition: {
    description: 'Boolean operator that creates different conditions lanes.',
    type: 'Action',
  },
  AI: {
    description:
      'Use the power of AI to summarize, respond, create and much more.',
    type: 'Action',
  },
  Slack: { description: 'Send a notification to slack', type: 'Action' },
  'Google Drive': {
    description:
      'Connect with Google drive to trigger actions or to create files and folders.',
    type: 'Trigger',
  },
  Notion: { description: 'Create entries directly in notion.', type: 'Action' },
  'Custom Webhook': {
    description:
      'Connect any app that has an API key and send data to your applicaiton.',
    type: 'Action',
  },
  Discord: {
    description: 'Post messages to your discord server',
    type: 'Action',
  },
  'Google Calendar': {
    description: 'Create a calendar invite.',
    type: 'Action',
  },
  Trigger: {
    description: 'An event that starts the workflow.',
    type: 'Trigger',
  },
  Action: {
    description: 'An event that happens after the workflow begins',
    type: 'Action',
  },
  Wait: {
    description: 'Delay the next action step by using the wait timer.',
    type: 'Action',
  },
}
