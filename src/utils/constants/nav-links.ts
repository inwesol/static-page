import {
  BookOpenIcon,
  LightbulbIcon,
  MailIcon,
  MapIcon,
  NewspaperIcon,
  SettingsIcon,
  UsersIcon,
  WandSparklesIcon,
} from "lucide-react";

export const NAV_LINKS = [
  {
    title: "Be Future Ready",
    href: "/career-test/",
  },
  {
      title: "Features",
      href: "#",
      menu: [
          {
              title: "Explorer",
              tagline: "Be curious. Seek Information.",
              href: "/explorer/",
              icon: MapIcon,
        },
          {
              title: "Behavioural Tools",
              tagline: "Simple Tools. Everyday Impact.",
              href: "/behavioural-tools/",
              icon: SettingsIcon,
        },
          {
              title: "CoCo : AI Mindset Coach",
              tagline: "Everyday ally for your journey.",
              href: "/coco/",
              icon: WandSparklesIcon,
        },
          {
              title: "Community",
              tagline: "Connect with mentors & peers.",
              href: "/community/",
              icon: UsersIcon,
          },
          {
              title: "Coaching",
              tagline: "Personalized & holistic support.",
              href: "/coaching/",
              icon: LightbulbIcon,
          },
      ],
  },
  {
    title: "Company",
    href: "#",
    menu: [
      {
        title: "Blogs",
        tagline: "Read articles on Coaching",
        href: "/blog/",
        icon: NewspaperIcon,
      },
      {
        title: "Contact Us",
        tagline: "How we can help you",
        href: "/contact-us/",
        icon: MailIcon,
      },
      {
        title: "Our Story",
        tagline: "Know Inwesol story",
        href: "/story/",
        icon: BookOpenIcon,
      },
    ],
  },
  // {
  //   title: "Career Coaching",
  //   href: "/events/coaching/",
  // },
  {
    title: "Schools",
    href: "/school/",
  },
  {
    title: "Coaches",
    href: "/coach/",
  },
  
];
