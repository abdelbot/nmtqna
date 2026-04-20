export interface FAQItem {
  id: string;
  question: string;
  answer: string | string[] | { label: string; text: string }[];
  category: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "Q1",
    category: "About NMT",
    question: "What is Numidia Mind Technologies (NMT)?",
    answer: [
      "Numidia Mind Technologies (NMT) operates at the intersection of artificial intelligence, digital transformation, and organizational performance. The company develops ethical and scalable solutions that enhance decision-making, streamline processes, and enable sustainable growth in data-intensive environments.",
      "NMT places a strong emphasis on sovereign AI, promoting data governance, security, and technological autonomy as foundational capabilities for institutions.",
      "Drawing on expertise in both AI and management, NMT adopts a systems-oriented and human-centered approach to design responsible solutions with measurable impact across public and private sectors."
    ]
  },
  {
    id: "Q2",
    category: "About NMT",
    question: "Who founded NMT and what is the team's background?",
    answer: [
      "NMT was co-founded by two experienced professionals:",
      "CHIROUF Ahmed - Co-Founder and Managing Director, with expertise in AI services for business, management, and standardized, recognized processes.",
      "IHADDADENE Nacim - Co-Founder, specializing in research & development in artificial intelligence and digital transition.",
      "The founding team is backed by 20+ years of combined expertise in AI and management, giving NMT a strong foundation in both technical depth and organizational performance."
    ]
  },
  {
    id: "Q3",
    category: "About NMT",
    question: "Where is NMT headquartered?",
    answer: "NMT is headquartered at Cité Garidi 01, Bureau N°15, Bâtiment N°F08, Kouba, Algiers, Algeria. The company can be reached at contact@numidiatec.com or +213 (0) 770 878 227, and its website is www.numidiatec.com."
  },
  {
    id: "Q4",
    category: "About NMT",
    question: "What is NMT's core mission?",
    answer: "NMT's mission is to bridge the gap between cutting-edge AI and everyday operations - enabling companies to optimize performance, accelerate growth, and operate with greater intelligence and efficiency. In short: Unfold Artificial Intelligence, Empower Your Business."
  },
  {
    id: "Q5",
    category: "About NMT",
    question: "What industries does NMT serve?",
    answer: [
      "NMT serves both public and private sector clients across five key verticals:",
      "Banking & Insurance",
      "Industry & Manufacturing",
      "Security & Civil Defense",
      "Oil & Gas",
      "Telecoms & Media",
      "NMT also works with educational institutions, government agencies, and any data-driven environment where AI can create measurable impact."
    ]
  },
  {
    id: "Q6",
    category: "Offer & Solutions",
    question: "What is NMT's overall approach to AI deployment?",
    answer: [
      "NMT takes a holistic approach to Sovereign Intelligence, combining four complementary pillars:",
      "Business Automation - streamline work and boost productivity with intelligent AI-driven automation.",
      "Hardware & Software Integration - connect devices and systems seamlessly for unified, scalable operations.",
      "R&D / Innovation - intelligence tailored to local realities: personalized, co-developed AI optimized for real-time, business-specific impact.",
      "Data Security & Privacy - your data stays protected: encrypted, compliant, and monitored for total peace of mind."
    ]
  },
  {
    id: "Q7",
    category: "Offer & Solutions",
    question: "What does Business Automation mean at NMT?",
    answer: [
      "Business Automation at NMT encompasses three capabilities:",
      "Intelligent Automation - automate repetitive tasks with AI-powered workflows that streamline operations, boost efficiency, and free up teams to focus on high-value work.",
      "Smart Decision-Making - leverage data-driven AI systems to enhance decision-making, reduce errors, and deliver faster, more accurate business outcomes.",
      "Scalable AI Solutions - deploy tailored AI systems that integrate seamlessly with existing tools, enabling flexible, cost-effective growth as the business evolves."
    ]
  },
  {
    id: "Q8",
    category: "Offer & Solutions",
    question: "What does Hardware & Software Integration cover?",
    answer: [
      "NMT delivers end-to-end AI integration - from embedded systems to enterprise infrastructure. This includes:",
      "Hybrid Deployment - on-premises & cloud solutions, tailored to specific security needs.",
      "Dedicated AI Infrastructure - Edge AI and high-performance GPU clusters for real-time inference.",
      "Built to Scale - solutions that grow with the business, seamlessly and securely.",
      "Full Interoperability - smooth communication across all devices and platforms.",
      "All deployments are backed by NMT's 24/7 technical support."
    ]
  },
  {
    id: "Q9",
    category: "Offer & Solutions",
    question: "What does NMT's R&D and Innovation service offer?",
    answer: [
      "NMT drives AI innovation from concept to deployment through four dimensions:",
      "Adapt AI to Your Needs - custom solutions ranging from predictive analytics to intelligent automation.",
      "Personalize AI for Your Industry - fine-tuned models trained on your data, your language, your domain.",
      "Optimize AI for Your Constraints - real-time processing, embedded AI and hybrid infrastructure built for demanding environments.",
      "Open Innovation - collaboration beyond boundaries to bring the most relevant AI breakthroughs to your business."
    ]
  },
  {
    id: "Q10",
    category: "Offer & Solutions",
    question: "How does NMT protect data and privacy?",
    answer: [
      "Data security is a core pillar of NMT's offer. NMT ensures:",
      "Secure Data Handling - data is encrypted, anonymized, and processed to the highest security standards.",
      "Compliance & Transparency - solutions are built to meet global data protection regulations and are responsible by design.",
      "Access Control & Monitoring - strict access controls with real-time threat detection and response."
    ]
  },
  {
    id: "Q11",
    category: "Offer & Solutions",
    question: "What is the NMT Framework for AI Adoption?",
    answer: [
      "NMT follows a structured three-phase framework for AI adoption:",
      "PLAN - define the project development roadmap and determine requirements and specifications aligned with organizational goals.",
      "BUILD - implement the necessary features and functionalities based on the project plan, integrating AI capabilities into existing systems.",
      "DEPLOY - launch the solution to the desired platform, validate performance, and ensure everything works as intended.",
      "This approach ensures a controlled, progressive, and sustainable adoption of AI within any organization."
    ]
  },
  {
    id: "Q12",
    category: "Sovereign & Responsible AI",
    question: "What is 'Sovereign AI' and why does it matter?",
    answer: [
      "Sovereign AI refers to building AI systems that remain under the full control of the institution or country using them. It ensures:",
      "Data stays secure and locally governed.",
      "The system is not dependent on external providers.",
      "The institution retains complete control over its AI tools.",
      "In a world where data is a strategic asset, sovereign AI is essential for national security, institutional autonomy, and long-term technological independence. NMT's tagline captures it perfectly: 'The power of AI is universal; its sovereign mastery and use lie at the core of our commitment.'"
    ]
  },
  {
    id: "Q13",
    category: "Sovereign & Responsible AI",
    question: "How does NMT ensure responsible AI practices?",
    answer: [
      "NMT integrates ethics from the design stage. Responsible AI at NMT means:",
      "Transparency - AI systems are explainable and auditable.",
      "Data Protection - personal and institutional data is handled with the highest standards.",
      "Responsible Model Design - models are designed to support human decision-making, not replace it blindly.",
      "Human-Centered Alignment - AI systems remain aligned with human values and organizational objectives.",
      "NMT builds AI that is both powerful and responsible."
    ]
  },
  {
    id: "Q14",
    category: "Sovereign & Responsible AI",
    question: "Why is sovereign AI particularly relevant for Algeria and Africa?",
    answer: [
      "Africa is undergoing rapid digital transformation. Algeria, with its investments in digitalization, modern infrastructure, and strong political engagement, is positioning itself as a strategic technology hub between Africa, Europe, and the Arab world.",
      "For Algerian and African institutions, sovereign AI means retaining ownership of their data and digital intelligence - rather than outsourcing it to foreign platforms - which is critical for national sovereignty, economic development, and competitive independence."
    ]
  },
  {
    id: "Q15",
    category: "Summit Participation",
    question: "Why is NMT participating in the ICT Africa Summit 2026?",
    answer: [
      "NMT's participation in the ICT Africa Summit 2026 reflects its commitment to being a leading actor in Algeria's and Africa's AI ecosystem. The summit is a strategic platform for NMT to:",
      "Showcase its sovereign AI solutions to a pan-African and international audience.",
      "Connect with potential partners, clients, and investors.",
      "Contribute to the dialogue on digital sovereignty, responsible AI, and technological innovation in Africa.",
      "Demonstrate that Algeria can produce world-class, locally-developed AI solutions."
    ]
  },
  {
    id: "Q16",
    category: "Summit Participation",
    question: "Which summit themes are most relevant to NMT's offering?",
    answer: [
      "NMT's solutions are directly aligned with several key summit themes:",
      "Digital Transformation & AI - NMT's core business.",
      "Cybersecurity, Cloud & Digital Sovereignty - NMT's sovereign AI approach.",
      "Industry 4.0, IoT & Automation - NMT's hardware/software integration and business automation capabilities.",
      "E-Government & Modernization of Public Services - NMT's AI tools for public sector decision-making.",
      "Oil & GasTech - NMT's predictive analytics and industrial AI for Algeria's energy sector.",
      "FinTech & Financial Inclusion - NMT's solutions for the banking and insurance vertical."
    ]
  },
  {
    id: "Q17",
    category: "Summit Participation",
    question: "What can visitors expect to discover at NMT's exhibit?",
    answer: [
      "Visitors to NMT's exhibit at the ICT Africa Summit 2026 can expect:",
      "Discussions on how NMT's sovereign AI framework applies to specific sectoral needs.",
      "Insight into NMT's Plan–Build–Deploy methodology for AI adoption.",
      "Opportunities to initiate partnerships, pilot projects, or R&D collaborations.",
      "Come meet the NMT team and discover how AI can be made both powerful and sovereign for your organization."
    ]
  },
  {
    id: "Q18",
    category: "Summit Participation",
    question: "How does NMT's vision align with the ICT Africa Summit's goals?",
    answer: "NMT and the ICT Africa Summit 2026 share a common strategic vision: making Africa a competitive, connected, and digitally autonomous continent. NMT's mission - to bridge cutting-edge AI with everyday operations - directly supports the summit's goals of accelerating digital transformation, stimulating public-private synergies, and positioning Algeria as a continental technology hub. NMT is not just a participant; it is a contributor to the digital future being built at this summit."
  },
  {
    id: "Q19",
    category: "Summit Participation",
    question: "How can organizations connect with NMT at and after the summit?",
    answer: [
      "Organizations interested in NMT's solutions can connect through multiple channels:",
      "At the Summit - visit NMT's exhibit at the ICT Africa Summit 2026, April 21–23, SAFEX, Algiers.",
      "Email - contact@numidiatec.com",
      "Phone - +213 (0) 770 878 227",
      "Website - www.numidiatec.com",
      "LinkedIn - www.linkedin.com/company/numidia-mind-technologies",
      "Headquarters - Cité Garidi 01, Bureau N°15, Bâtiment N°F08, Kouba, Algiers, Algeria",
      "NMT welcomes discussions on partnerships, pilot projects, custom AI solutions, and R&D collaborations."
    ]
  }
];
