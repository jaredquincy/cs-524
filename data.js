// Course Data
const courseData = {
    description: `
  <p><strong>What this is:</strong> CS 524 “AI for Science,” a graduate seminar on how modern AI accelerates discovery—protein structures, materials, climate, plasma control, and formal mathematics—via a small set of recurring ideas: multi-scale modeling, multi-modal architectures, differentiable simulation, search-augmented reasoning, and data valuation.</p>
  <p><strong>Format:</strong> Each week pairs a classical milestone (e.g., AlphaFold or AlphaGo → AlphaZero → MuZero) with a recent advance (e.g., FourCastNet, Earth-2/CorrDiff downscaling, Evo/IgLM, AlphaTensor → AlphaDev → AlphaEvolve). You will read, present, critique, and ship a scoped research project.</p>
  <p><strong>Prereqs:</strong> CS229 or CS230 (or equivalent ML); Python proficiency; familiarity with PyTorch or JAX. <strong>Recommended:</strong> CS224W/CS246 (graphs); CS224N for language-heavy topics; numerical methods and linear algebra.</p>
  <p><strong>Positioning:</strong> AI first, illuminated by scientific case studies. Expect a dash of systems (tooling, infrastructure, reliability) and a pinch of economics (compute budgets, incentives). We surface model-theoretic limits of frontier methods and ask how tool shape directs inquiry.</p>
  <h4>Learning Objectives</h4>
  <ul>
      <li>Spot architectural patterns (multi-scale, multi-modal, graph-structured, search-augmented) behind state-of-the-art systems.</li>
      <li>Evaluate research for rigor, novelty, reproducibility, and scientific impact—against credible baselines and ablations.</li>
      <li>Implement and stress-test reference baselines on scientific datasets.</li>
      <li>Design and present a focused project with a clear question, method, evaluation plan, and reproducibility checklist.</li>
      <li>Articulate limits and trade-offs: model-theoretic constraints, failure modes, and compute/economic budgets.</li>
      <li>Decompose ambitious goals into testable sub-problems with measurable counterfactual value.</li>
  </ul>
  <p class="light">The syllabus below is canonical for Autumn 2025.</p>
`,

    courseInfo: [
        {
            icon: "people",
            label: "Instructors:",
            value: "CS 524 · AI for Science — Jure Leskovec; Jared Quincy Davis"
        },
        {
            icon: "email",
            label: "Instructor Contact:",
            value: "Jared Quincy Davis — <a href=\"mailto:jaredq@cs.stanford.edu\">jaredq@cs.stanford.edu</a>; Jure Leskovec — <a href=\"mailto:jure@cs.stanford.edu\">jure@cs.stanford.edu</a>"
        },
        {
            icon: "event",
            label: "Quarter:",
            value: "Instruction: Sep 22 – Dec 5, 2025; Finals: Dec 8 – 12, 2025; Quarter ends: Dec 12, 2025"
        },
        {
            icon: "schedule",
            label: "Meeting Pattern:",
            value: "Wed & Fri 10:30-11:50 a.m. PT"
        },
        {
            icon: "place",
            label: "Location:",
            value: "Littlefield 107"
        },
        {
            icon: "school",
            label: "Units:",
            value: "3 units (Letter or CR/NC)"
        },
        {
            icon: "category",
            label: "Course Component:",
            value: "Seminar (discussion + light replication demos)"
        },
        {
            icon: "groups",
            label: "Modality:",
            value: "In-person"
        },
        {
            icon: "apps",
            label: "Tools:",
            value: "Canvas, Gradescope, Ed (course forum) for Q&A"
        },
        {
            icon: "email",
            label: "TA Contact:",
            value: "Teaching team via Canvas; primary contact Yanay — <a href=\"mailto:yanay@stanford.edu\">yanay@stanford.edu</a>"
        }
    ],

    modules: [
        {
            id: "A",
            name: "Foundations (Weeks 1-3)",
            weeks: [
                {
                    number: 1,
                    dates: "Sep 24 & Sep 26",
                    topic: "Landscape, expectations, AlphaFold and FourCastNet exemplars",
                    readings: {
                        required: [
                            "Wed Sep 24: Course overview; AI in Science landscape; Anima Anandkumar (Caltech AI+Science Lab) fireside 10:30-11:30 a.m.",
                            "Fri Sep 26: AlphaFold impact and FourCastNet weather case; guest weather systems discussion — final date confirmations pending."
                        ],
                        additional: [
                            "Opening survey and background round robin; prompts on ambitious scientific goals"
                        ]
                    }
                },
                {
                    number: 2,
                    dates: "Oct 1 & Oct 3",
                    topic: "Multi-scale modeling, PINNs, weather foundation models",
                    readings: {
                        required: [
                            "Wed Oct 1: Physics-informed neural networks and MuMMI multiscale workflows; Pushmeet Kohli (Google DeepMind) fireside 11:00-11:30 a.m.",
                            "Fri Oct 3: FourCastNet (AFNO) vs GraphCast (GNN) comparison; guest slot — final date confirmations pending."
                        ],
                        additional: [
                            "Lightning kickoffs (ungraded, 2 x 6 minute volunteer talks each day)"
                        ]
                    }
                },
                {
                    number: 3,
                    dates: "Oct 8 & Oct 10",
                    topic: "Graph-structured learning, AlphaFold vs OpenFold debate",
                    readings: {
                        required: [
                            "Wed Oct 8: Message passing neural networks; AlphaFold as graph reasoning",
                            "Fri Oct 10: Debate on AlphaFold vs OpenFold reproducibility and priors; guest discussant — final date confirmations pending."
                        ],
                        additional: [
                            "Guardrail. No graded work released or due before Fri Oct 10, 5:00 p.m."
                        ]
                    }
                }
            ]
        },
        {
            id: "B",
            name: "Modalities and Simulation (Weeks 4-5)",
            weeks: [
                {
                    number: 4,
                    dates: "Oct 15 & Oct 17",
                    topic: "Cross-domain models and student lightning talks",
                    milestone: "Project pitch assigned (due Fri Oct 24, 5:00 p.m.)",
                    readings: {
                        required: [
                            "Wed Oct 15: Gato, Evo, IgLM; Alex Wiltschko (Osmo) virtual visit 10:30-11:30 a.m.; graded lightning (Groups 01-02)",
                            "Fri Oct 17: Graded lightning talks (Groups 03-04); modality alignment workshop."
                        ],
                        additional: [
                            "Prompts on compute budgets and modality alignment"
                        ]
                    }
                },
                {
                    number: 5,
                    dates: "Oct 22 & Oct 24",
                    topic: "Differentiable simulation, CorrDiff, and tooling review",
                    milestone: "Project pitch due Fri Oct 24, 5:00 p.m.",
                    readings: {
                        required: [
                            "Wed Oct 22: World Models, decoupled neural interfaces, Earth-2/CorrDiff; graded lightning (Groups 05-06)",
                            "Fri Oct 24: Differentiable PDE methods discussion; graded lightning (Groups 07-08)"
                        ],
                        additional: [
                            "Discussion: virtual cell experiment design and validation"
                        ]
                    }
                }
            ]
        },
        {
            id: "C",
            name: "Reasoning and Data (Weeks 6-7)",
            weeks: [
                {
                    number: 6,
                    dates: "Oct 29 & Oct 31",
                    topic: "Search, reinforcement learning, and scientific exploration",
                    readings: {
                        required: [
                            "Wed Oct 29: AlphaGo → AlphaZero → MuZero arc; graded lightning (Groups 09-10)",
                            "Fri Oct 31: AlphaTensor → AlphaDev → AlphaEvolve; AlphaProof and AlphaGeometry 2; graded lightning (Groups 11-12)"
                        ],
                        additional: [
                            "Provocation: root-node problems and search-augmented inference limits"
                        ]
                    }
                },
                {
                    number: 7,
                    dates: "Nov 5 & Nov 7",
                    topic: "Curriculum design, data valuation, human-in-the-loop optimization",
                    milestone: "Mid-term review (artifact + 3-4 page memo) due Fri Nov 7, 5:00 p.m.",
                    readings: {
                        required: [
                            "Wed Nov 5: Curriculum learning; Data Shapley; Kexin Huang (Biomni) session 10:30-11:30 a.m.; graded lightning (Groups 13-14)",
                            "Fri Nov 7: HIL optimization and Optometrist algorithm; graded lightning (Groups 15-16)"
                        ],
                        additional: [
                            "Project check-ins and risk assessment"
                        ]
                    }
                }
            ]
        },
        {
            id: "D",
            name: "Knowledge and Systems (Weeks 8-9)",
            weeks: [
                {
                    number: 8,
                    dates: "Nov 12 & Nov 14",
                    topic: "Knowledge graphs, neuro-symbolic tools, RTX-KG2 case study",
                    readings: {
                        required: [
                            "Wed Nov 12: TransE, neural theorem proving, RTX-KG2 case walkthrough; graded lightning (Groups 17-18)",
                            "Fri Nov 14: KG construction and QA deep dive; graded lightning (Groups 19-20)"
                        ],
                        additional: [
                            "Guest hold at 11:05-11:50 a.m.; ontology and curation trade-offs"
                        ]
                    }
                },
                {
                    number: 9,
                    dates: "Nov 19 & Nov 21",
                    topic: "Whole-system case studies and autonomous labs panel",
                    readings: {
                        required: [
                            "Wed Nov 19: AlphaChip reproducibility discourse; overflow lightning window if needed",
                            "Fri Nov 21: Autonomous labs and scientific workflows panel — final date confirmations pending."
                        ],
                        additional: [
                            "No lightning talks on Fri; prep questions for panelists; Thanksgiving recess next week (Nov 24–28; no class)"
                        ]
                    }
                }
            ]
        },
        {
            id: "E",
            name: "Symposium and Wrap (Week 10)",
            weeks: [
                {
                    number: "Recess",
                    dates: "Nov 26 & Nov 28",
                    topic: "Thanksgiving recess -- no class meetings",
                    readings: {
                        required: [],
                        additional: [
                            "Use the week for project iteration, community contributions, and peer feedback"
                        ]
                    }
                },
                {
                    number: 10,
                    dates: "Dec 3 & Dec 5",
                    topic: "Project lightning talks, synthesis, course reflections",
                    milestone: "Project lightning talks delivered in class; last day of instruction Fri Dec 5",
                    readings: {
                        required: [
                            "Wed Dec 3: Project lightning talks (part 1)",
                            "Fri Dec 5: Project lightning talks (part 2), Max Jaderberg (Isomorphic Labs) fireside 10:30-11:30 a.m., and course reflections"
                        ],
                        additional: [
                            "Final project due Fri Dec 12, 5:00 p.m. PT"
                        ]
                    }
                }
            ]
        }
    ],

    guestSpeakers: {
        note: "Confirmed guests; schedule highlights fixed slots (Anima Anandkumar 9/24, Pushmeet Kohli 10/1, Alex Wiltschko 10/15, Kexin Huang 11/5, Max Jaderberg 12/5). All other appearances — final date confirmations pending; updates will land on Canvas and the course calendar. Roster sorted alphabetically by last name.",
        speakers: [
            {
                name: "Anima Anandkumar",
                affiliation: "Bren Professor of Computing and Mathematical Sciences, Caltech; formerly Senior Director of AI Research, NVIDIA",
                focus: "Neural operators and FourCastNet for multi-scale climate and scientific simulation."
            },
            {
                name: "Patrick Hsu",
                affiliation: "Co-Founder & Core Investigator, Arc Institute; Assistant Professor of Bioengineering, UC Berkeley",
                focus: "Programmable biology, CRISPR toolchains, and AI-guided therapeutics discovery."
            },
            {
                name: "Kexin Huang",
                affiliation: "PhD student, Stanford Computer Science (SAIL); Lead author of the Biomni generalist biomedical AI agent",
                focus: "Generalist biomedical agents that automate hypothesis generation and wet-lab planning."
            },
            {
                name: "Max Jaderberg",
                affiliation: "Chief AI Officer, Isomorphic Labs",
                focus: "Scaling AlphaFold-era playbooks into AI-native drug discovery systems."
            },
            {
                name: "Pushmeet Kohli",
                affiliation: "VP of Research, Google DeepMind",
                focus: "Agentic AI for scientific discovery, from AlphaFold to AlphaEvolve and Co-Scientist."
            },
            {
                name: "Remi Lam",
                affiliation: "Staff Research Scientist, Google DeepMind",
                focus: "Lead author on GraphCast and diffusion-powered weather forecasting for climate resilience."
            },
            {
                name: "Michelle Lee",
                affiliation: "Founder & CEO, Medra",
                focus: "Autonomous robotics for biotech operations and AI-native lab infrastructure."
            },
            {
                name: "Ngan Vu",
                affiliation: "Researcher, Google DeepMind (AlphaEvolve team)",
                focus: "Evolutionary coding agents that co-design algorithms and hardware scheduling."
            },
            {
                name: "Alex Wiltschko",
                affiliation: "Founder & CEO, Osmo",
                focus: "Olfactory intelligence and molecular search for fragrances and health diagnostics."
            },
            {
                name: "Jiajun Wu",
                affiliation: "Assistant Professor of Computer Science, Stanford",
                focus: "Physical scene understanding, generative simulators, and embodied AI reasoning."
            }
        ]
    },

    finals: {
        dates: "Dec 8-12",
        milestone: "Final project window; final report (<=8 page paper + repo) due Fri Dec 12, 5:00 p.m. PT"
    },

    assignments: [
        {
            number: 1,
            title: "Research Project",
            content: `
                <p>Plan and execute a quarter-long research project that combines AI methods with scientific inquiry. Teams of two to three are encouraged; solo is allowed with instructor approval.</p>
                <ul class="project-timeline">
                    <li><span>Project pitch (10%):</span> Fri Oct 24, 5:00 p.m. PT.</li>
                    <li><span>Mid-term review (20%):</span> Fri Nov 7, 5:00 p.m. PT; submit artifact plus 3-4 page memo.</li>
                    <li><span>Project lightning talk (5%):</span> Week 10 in-class slot per roster.</li>
                    <li><span>Final report + repo (25%):</span> Fri Dec 12, 5:00 p.m. PT; <=8 pages plus reproducible code.</li>
                </ul>
                <p>Document data provenance, hardware, seeds, runtimes, ablations, and negative results. Coordinate compute through Stanford clusters; limited partner credits may be available; details on Canvas.</p>
                <p>Slip-days: shared 72-hour bank for the quarter (max 48 hours on any single deliverable). No slip-days for live talks or panel days.</p>
            `
        },
        {
            number: 2,
            title: "Papers and Lightning Presentations",
            content: `
                <p>Engage deeply with the reading list and present insights to the class.</p>
                <ul>
                    <li><strong>Pair lightning presentation (10%):</strong> 8 minute talk + 4 minute Q&A; upload slides by 8:30 a.m. day-of; both partners speak; rubric emphasizes delivery, technical accuracy, critique, and timing.</li>
                    <li><strong>Reading responses (10%):</strong> Submit <=1 page per core paper via Gradescope by 10:00 a.m. on class days.</li>
                    <li><strong>Living roster:</strong> 20 student pairs (G01-G20); overflow or make-up slots default to Wed Nov 19.</li>
                </ul>
                <p>Prepare discussion prompts that surface model limits, reproducibility concerns, and evaluation gaps.</p>
            `
        },
        {
            number: 3,
            title: "Participation and Professionalism",
            content: `
                <p>20% of the grade recognizes consistent engagement and community contributions.</p>
                <ul>
                    <li>Attend and contribute thoughtful questions; be ready for cold-calls and peer feedback.</li>
                    <li>Post helpful notes or issue reports on Ed; share repro tips, datasets, or tool pointers.</li>
                    <li>Join rolling 5 minute project check-ins starting Week 5; communicate blockers early.</li>
                    <li>Adhere to academic integrity expectations, citing all sources, data, and code.</li>
                </ul>
            `
        }
    ],

    grading: [
        {
            percentage: "60%",
            description: "<strong>Research Project</strong> (pitch, mid-term review, lightning talk, final report + repo)"
        },
        {
            percentage: "20%",
            description: "<strong>Papers and Presentations</strong> (pair lightning presentation + reading responses)"
        },
        {
            percentage: "20%",
            description: "<strong>Participation and Professionalism</strong> (discussion readiness, community contributions, check-ins)"
        }
    ],

    resources: [
        {
            icon: "cast_for_education",
            description: "Canvas hosts announcements and project logistics; Gradescope for reading responses; Ed (course forum) for Q&A and community threads."
        },
        {
            icon: "event_note",
            description: "Key dates: Instruction starts Mon Sep 22; study list deadline Fri Oct 10, 5:00 p.m.; Thanksgiving recess Nov 24-28; classes end Fri Dec 5; project due Fri Dec 12."
        },
        {
            icon: "policy",
            description: "Guardrails: no graded work is released or due before Fri Oct 10, 5:00 p.m.; slip-days are limited to 72 hours shared across the quarter."
        },
        {
            icon: "computer",
            description: "Compute and software: Python with PyTorch or JAX; Stanford clusters preferred; limited partner credits (Foundry, Azure, GCP) may be available; details on Canvas."
        },
        {
            icon: "group",
            description: "Student presentation roster: 20 pairs (G01-G20); upload slides by 8:30 a.m. on your slot day; overflow uses Wed Nov 19."
        },
        {
            icon: "support_agent",
            description: "Primary contact / TA: Yanay (<a href='mailto:yanay@stanford.edu'>yanay@stanford.edu</a>). Coordinate additional needs via Canvas office hours and OAE early in the quarter."
        }
    ]
};
