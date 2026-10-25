export const content = {
  brand: {
    name: "Manjushree Finance Limited",
    logoAlt: "Manjushree Finance Limited",
  },
  seo: {
    siteUrl: "https://inside-the-bank-manjushree.aktarul7331400.chatgpt.site",
    title: "Inside the Bank | Free Guide from Manjushree Finance Limited",
    description:
      "Get Inside the Bank, a free 10-minute guide explaining how interest works, how banks use savings, and how to choose the right account.",
    keywords: ["banking guide", "savings", "interest", "Manjushree Finance", "Nepal"],
  },
  hero: {
    headlineBefore: "Do You Know ",
    headlineHighlight: "What Your Bank Does",
    headlineAfter: " With Your Money?",
    subheadline: "Get the free guide that explains it in plain words. Read it in 10 minutes.",
    description:
      '“Inside the Bank” is a free, simple guide. It explains how interest works, how banks use your savings, and how to pick the right account. Made for anyone who saves money and wants to understand it.',
    cta: "Get My Free Guide",
    guideTitle: "Inside the Bank",
    guideLabel: "Free guide",
    guideTime: "10-minute read",
  },
  problem: {
    heading: "",
    body: "",
  },
  benefits: {
    heading: "How you benefit",
    items: [
      "Understand where your money goes after you deposit it",
      "Know how interest is paid on your savings",
      "Learn what to ask before you open any account",
      "Pick a savings account with confidence",
      "Stop feeling lost when you talk to a bank",
    ],
  },
  process: {
    heading: "How it works",
    steps: [
      "Fill the short form. It takes less than a minute.",
      "Get your free guide. Read it at your own pace, in simple words.",
      "Talk to us if you want help. Our team can help you choose the right account.",
    ],
  },
  urgency: {
    heading: "",
    body: "",
  },
  form: {
    heading: "Book the Call",
    subtext: "One-to-One Consultation · Customized Guidance for Your Savings",
    button: "Get My Free Guide",
    loading: "Sending...",
    trust: "We respect your privacy. No spam.",
    submitError: "We couldn’t send your details. Please try again.",
    fields: {
      fullName: { label: "Full Name", placeholder: "Enter your full name" },
      email: { label: "Active Email", placeholder: "you@example.com" },
      mobile: { label: "Mobile / WhatsApp Number", placeholder: "Enter your mobile number" },
      interest: {
        label: "I am interested in",
        placeholder: "Choose an option",
        options: ["Premium Saving", "Virtual Credit Card", "Not sure yet"],
      },
      city: { label: "City", placeholder: "Enter your city" },
      message: { label: "Anything You Want to Say", placeholder: "Write your message here" },
    },
    errors: {
      fullName: "Please enter your full name.",
      emailRequired: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
      mobile: "Please enter your mobile or WhatsApp number.",
    },
  },
  thankYou: {
    title: "Thank you!",
    message:
      'We received your details. Your free guide, “Inside the Bank,” is on its way. Message us on WhatsApp if you want help choosing an account.',
    whatsappButton: "Message Us on WhatsApp",
    guideButton: "Download the Free Guide",
  },
  whatsapp: {
    number: "9779851366640",
    message:
      "Hi, I just submitted the form to get the Inside the Bank guide. I'd like to know the next steps.",
  },
  vimeoUrl: "",
  guideUrl: "",
} as const;

export const whatsappUrl = `https://wa.me/${content.whatsapp.number}?text=${encodeURIComponent(
  content.whatsapp.message,
)}`;
