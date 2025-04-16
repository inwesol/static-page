import { BarChart3Icon, FolderOpenIcon, WandSparklesIcon } from "lucide-react";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [
    {
        name: "Asana",
        logo: "/assets/company-01.svg",
    },
    {
        name: "Tidal",
        logo: "/assets/company-02.svg",
    },
    {
        name: "Innovaccer",
        logo: "/assets/company-03.svg",
    },
    {
        name: "Linear",
        logo: "/assets/company-04.svg",
    },
    {
        name: "Raycast",
        logo: "/assets/company-05.svg",
    },
    {
        name: "Labelbox",
        logo: "/assets/company-06.svg",
    }
] as const;

export const PROCESS = [
    {
        title: "Organize Your Links",
        description: "Efficiently categorize and tag your links for quick access and easy management.",
        icon: FolderOpenIcon,
    },
    {
        title: "Shorten and Customize",
        description: "Create concise, branded links that are easy to share and track.",
        icon: WandSparklesIcon,
    },
    {
        title: "Analyze and Optimize",
        description: "Gain insights into link performance and optimize for better engagement.",
        icon: BarChart3Icon,
    },
] as const;

export const FEATURES = [
    {
        title: "Link shortening",
        description: "Create short links that are easy to remember and share.",
    },
    {
        title: "Advanced analytics",
        description: "Track and measure the performance of your links.",
    },
    {
        title: "Password protection",
        description: "Secure your links with a password.",
    },
    {
        title: "Custom QR codes",
        description: "Generate custom QR codes for your links.",
    },
    {
        title: "Link expiration",
        description: "Set an expiration date for your links.",
    },
    {
        title: "Team collaboration",
        description: "Share links with your team and collaborate in real-time.",
    },
] as const;

export const REVIEWS = [
    {
        name: "Ritwika S",
        position: "Business Development Executive",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 5,
        review: "My experience throughout the sessions with Akarsh has been transformative, helping me gain clarity and focus in my personal and professional life. The structured guidance and actionable strategies provided during our sessions have been instrumental in building my confidence and improving my consistency. I particularly valued the emphasis on emotional stability and identifying my pros and cons, positively influencing my overall mindset. I am grateful for the support and highly recommend these sessions to anyone seeking growth and direction."
    },
    {
        name: "Abhinav Rao",
        position: "Operations Manager",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 4,
        review: "We’ve completed around seven sessions together, and I wanted to take a moment to acknowledge and appreciate the process. The sessions have been very helpful, and I have gained a better clarity and perspective. I also do feel that taking these sessions earlier would have been much more impactful in my case. You've also been very patient and flexible in terms of facilitating the sessions. I would definitely recommend this if someone in my circle is looking for some structured support for professional development."
    },
    {
        name: "Amulika G",
        position: "Tennis Player",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        rating: 5,
        review: "The coaching sessions I had with Akarsh helped me a lot. I felt truly heard and understood. There were specific breathing exercises and activities we did that allowed me to gain a better understanding of my situation. I also think that Akarsh’s ability to reach out consistently showing an effort helped me make more of an effort from my side as well. In a particular activity, we set up some images according to how I view life and the goals that I have. This activity helped me understand what I was missing in my present, and how that was affecting me."
    },
    {
        name: "Arun S",
        position: "Student, B.Tech(4th year)",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 4,
        review: "Before I started career coaching with Akarsh, I had no idea what I was going to do after college. I felt lost and overwhelmed thinking about the future. But through the sessions, he helped me gain clarity and direction. Together, we mapped out a realistic plan, figured out which jobs suited my interests and strengths, and created a roadmap I could actually follow. Now, I have a clear vision of where I'm headed, and I feel confident about my career. I’m really grateful for the support and would highly recommend this to anyone who’s feeling uncertain after college."
    }
] as const;
