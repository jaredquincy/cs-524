// Course Data
const courseData = {
    description: "The emergence of foundation models has revolutionized AI applications, but the most powerful AI systems today are increasingly compound systems—compositions of multiple models, retrievers, tools, and traditional software components. This research seminar explores the <b>intersection of cloud computing infrastructure and compound AI systems</b>, covering both the infrastructure required to build and deploy these systems at scale and the architectural patterns that make them effective.",
    
    courseInfo: [
        {
            icon: "people",
            label: "Instructors:",
            value: "Christos Kozyrakis, Jared Quincy Davis"
        },
        {
            icon: "people",
            label: "TA:",
            value: "Caleb Winston"
        },
        {
            icon: "schedule",
            label: "",
            value: "Spring 2025, Wed/Fri 10:30 AM - 11:20 PM"
        },
        {
            icon: "place",
            label: "",
            value: "THORNT 110"
        }
    ],
    
    modules: [
        {
            id: 1,
            name: "Foundations and Infrastructure",
            weeks: [
                {
                    number: 1,
                    dates: "Apr 1-5",
                    topic: "Introduction to Compound AI Systems",
                    readings: {
                        required: [
                            "The Shift from Models to Compound AI Systems (Zaharia et al.)",
                            "OpenAI o1 system card and blog post"
                        ],
                        additional: [
                            "Are more LLM calls all you need? (Chen et al.)",
                            "Networks of Networks: Complexity Class Principles (Davis et al.)"
                        ]
                    }
                },
                {
                    number: 2,
                    dates: "Apr 8-12",
                    topic: "Cloud Infrastructure for AI",
                    readings: {
                        required: [
                            "Twine: A Unified Cluster Management System for Shared Infrastructure",
                            "Ray: A Distributed Framework for Emerging AI Applications (Moritz et al.)"
                        ],
                        additional: [
                            "Resource Central: Understanding and Predicting Workloads"
                        ]
                    }
                }
            ]
        },
        {
            id: 2,
            name: "Model Serving and Inference",
            weeks: [
                {
                    number: 3,
                    dates: "Apr 15-19",
                    topic: "LLM Serving and Inference",
                    milestone: "Project Proposal Due",
                    readings: {
                        required: [
                            "AlpaServe: Statistical Multiplexing with Model Parallelism"
                        ],
                        additional: [
                            "Efficient Memory Management for Large Language Model Serving with PagedAttention",
                            "DeepSpeed-FastGen: High-throughput Text Generation for LLMs"
                        ]
                    }
                },
                {
                    number: 4,
                    dates: "Apr 22-26",
                    topic: "Retrieval-Augmented Generation",
                    readings: {
                        required: [
                            "Baleen: Robust Retrieval Augmentation for LLMs"
                        ],
                        additional: [
                            "Milvus: A Purpose-Built Vector Data Management System",
                            "A Comprehensive Survey on Vector Database"
                        ]
                    }
                }
            ]
        },
        {
            id: 3,
            name: "Agentic Systems Architecture",
            weeks: [
                {
                    number: 5,
                    dates: "Apr 29-May 3",
                    topic: "Tool Use and Function Calling",
                    readings: {
                        required: [
                            "React: Synergizing Reasoning and Acting in LLMs"
                        ],
                        additional: [
                            "ToolFormer: Language Models Can Teach Themselves to Use Tools"
                        ]
                    }
                },
                {
                    number: 6,
                    dates: "May 6-10",
                    topic: "Agent Planning and Orchestration",
                    readings: {
                        required: [
                            "DSPy: Compiling Declarative Language Model Calls"
                        ],
                        additional: [
                            "AutoGen: Enabling Next-Gen LLM Applications",
                            "HuggingGPT: Solving AI Tasks with ChatGPT and its Friends"
                        ]
                    }
                }
            ]
        },
        {
            id: 4,
            name: "System Optimization and Deployment",
            weeks: [
                {
                    number: 7,
                    dates: "May 13-17",
                    topic: "Orchestration and Optimization",
                    milestone: "Mid-term Review Due",
                    readings: {
                        required: [
                            "FrugalGPT: How to Use Large Language Models While Reducing Cost",
                            "Distilling The Knowledge in A Neural Network (Hinton et. al)"
                        ],
                        additional: [
                            "Optimizing Model Selection for Compound AI Systems (Chen et al.)"
                        ]
                    }
                },
                {
                    number: 8,
                    dates: "May 20-24",
                    topic: "Compound AI Systems in Production: Specifications, Evaluation",
                    readings: {
                        required: [
                            "Specifications: The Missing Link for LLM Systems Engineering"
                        ],
                        additional: [
                            "LangSmith: Runtime Infrastructure for LLM Application Development",
                            "RAGAS: Automated Evaluation of RAG"
                        ]
                    }
                }
            ]
        },
        {
            id: 5,
            name: "Advanced Topics and Applications",
            weeks: [
                {
                    number: 9,
                    dates: "May 27-31",
                    topic: "Multi-Agent Systems",
                    readings: {
                        required: [
                            "Generative Agents: Interactive Simulacra of Human Behavior"
                        ],
                        additional: []
                    }
                },
                {
                    number: 10,
                    dates: "Jun 3-7",
                    topic: "AI System Security and Trust",
                    readings: {
                        required: [
                            "Everywhere All at Once: Co-Location Attacks on Public Cloud FaaS"
                        ],
                        additional: [
                            "The Security Design of the AWS Nitro System",
                            "Honeycomb: Secure and Efficient GPU Executions"
                        ]
                    }
                }
            ]
        },
        {
            id: 6,
            name: "Project Presentations",
            weeks: [
                {
                    number: 11,
                    dates: "Jun 10-14",
                    topic: "Project Presentations",
                    milestone: "Project Presentations",
                    readings: {
                        required: [],
                        additional: []
                    }
                },
                {
                    number: 12,
                    dates: "Jun 17-21",
                    topic: "Project Presentations and Course Synthesis",
                    milestone: "Project Presentations",
                    readings: {
                        required: [],
                        additional: []
                    }
                }
            ]
        }
    ],
    
    finals: {
        dates: "Jun 24-28",
        milestone: "Final Report Due"
    },
    
    assignments: [
        {
            number: 1,
            title: "Paper Presentations",
            content: `
                <p>
                    For lectures with assigned readings, students will be assigned to present the papers 
                    and lead class discussions. The assigned student(s) will spend roughly 5 minutes 
                    presenting the day's paper and then lead the subsequent discussion (~25 minutes). In 
                    your presentation, cover:
                </p>
                <ul>
                    <li><strong>Motivation:</strong> What is the key problem being addressed?</li>
                    <li><strong>Key insight:</strong> What are the key insights to address the problem?</li>
                    <li><strong>Novelty/Strengths:</strong> What is different from previous work, and why?</li>
                    <li><strong>Critique:</strong> Is there anything you would change in the solution or evaluation?</li>
                    <li><strong>Discussion:</strong> Prepare questions to start class discussion.</li>
                </ul>
            `
        },
        {
            number: 2,
            title: "Paper Summaries",
            content: `
                <p>
                    For lectures with assigned readings, everyone must submit a summary for each paper 
                    on Gradescope prior to the start of each class.
                </p>
            `
        },
        {
            number: 3,
            title: "Projects",
            content: `
                <p>
                    Students will propose and run a quarter-long project, ideally in groups of 2-3. It 
                    is fine to use your existing research project if it is relevant to the course and 
                    the instructor approves. Projects should combine multiple aspects of the course 
                    (e.g., integrating infrastructure optimizations with agentic orchestration patterns) 
                    to create compound systems.
                </p>
                
                <h4>Project ideas include:</h4>
                <ul>
                    <li>Design and implement a novel compound AI system architecture</li>
                    <li>Build an agentic system that coordinates multiple models and tools</li>
                    <li>Develop evaluation frameworks for measuring compound AI system performance</li>
                    <li>Create new optimization techniques for AI system components</li>
                    <li>Build infrastructure improvements for AI system deployment</li>
                    <li>Research security and safety considerations for agentic systems</li>
                    <li>Implement cross-model orchestration or tool-use frameworks</li>
                    <li>Design edge-cloud distributed agentic systems</li>
                </ul>
                
                <h4>Project timeline:</h4>
                <ul class="project-timeline">
                    <li><span>Project proposal:</span> Week 3 (Apr 15-19)</li>
                    <li><span>Mid-term review:</span> Week 7 (May 13-17)</li>
                    <li><span>Presentation:</span> Weeks 11-12 (Jun 10-21, in class)</li>
                    <li><span>Final report:</span> Finals week (Jun 24-28)</li>
                </ul>
            `
        }
    ],
    
    grading: [
        {
            percentage: "60%",
            description: "<strong>Project</strong> (proposal, mid-term review, final presentation, report)"
        },
        {
            percentage: "20%",
            description: "<strong>Participation</strong> in class discussions"
        },
        {
            percentage: "20%",
            description: "<strong>Paper</strong> presentations and summaries"
        }
    ],
    
    resources: [
        {
            icon: "cloud",
            description: "Access to cloud computing resources will be provided"
        },
        {
            icon: "access_time",
            description: "Office hours: TBD"
        },
        {
            icon: "forum",
            description: "Discussion site: Online discussions will take place at edstem"
        },
        {
            icon: "assignment",
            description: "Gradescope: You will use Gradescope to submit paper summaries"
        },
        {
            icon: "menu_book",
            description: "Stanford Libraries Extension: For accessing ACM Digital Library papers off-campus"
        },
        {
            description: "Contact course staff at <a href='mailto:cs349d-spr2425-staff@lists.stanford.edu'>cs349d-spr2425-staff@lists.stanford.edu</a>",
            icon: "email"
        }
    ]
};