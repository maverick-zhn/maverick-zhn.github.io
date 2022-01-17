export const projects = [
  {
    title: 'AGAPECert',
    description: "An Auditable, Generalized, Automated, Privacy-Enabling, Certification framework capable of performing auditable computation on private data and reporting real-time aggregate certification status without disclosing underlying private data. AGAPECert utilizes a novel mix of trusted execution environments, blockchain technologies, and a real-time graph-based API standard to provide automated, oblivious, and auditable certification.",
    image: '/images/agapecert.png',
    tags: ['Rust', 'Blockchain', 'C++', 'Node', 'TypeScript'],
    source: 'https://github.com/agapecert/agapecert',
    visit: 'https://github.com/agapecert/agapecert',
    id: 0
  },
  {
    title: 'AuditGraph.io',
    description: "An auditable and authenticated graph processing model that performs auditable computation on authenticated graph-structured data on a trusted or controlled node. AuditGraph.io exploits access locality of traversal algorithms; it utilizes trusted execution environments and blockchain technologies to provide authenticated access to subgraphs and provide auditable proof of correct code execution. To the best of our knowledge, AuditGraph.io is the first solution for auditable, authenticated, and integrity-preserving computation for network-structure data exploiting the access locality of traversal algorithms. ",
    image: '/images/auditgraph.png',
    tags: ['React', 'JavaScript', 'Node', 'Scala'],
    source: 'https://github.com/TruenoDB/trueno',
    visit: 'https://github.com/TruenoDB/trueno',
    id: 1,
  },
  {
    title: 'TruenoDB',
    description: "The Hybrid Graph Datastore/Computational Engine.",
    image: '/images/truenodb.png',
    tags: ['React', 'JavaScript', 'Node', 'Scala'],
    source: 'https://github.com/TruenoDB/trueno',
    visit: 'https://github.com/TruenoDB/trueno',
    id: 2,
  },
  {
    title: 'MioStream - WebRTC App',
    description: "We present the design, implementation, and evaluation of a novel P2P service based on WebRTC (web browsers with Real-Time Communications) called MioStream. MioStream is an open-source alternative for distributed media streaming that runs on the edge of the network without incurring in costly and extensive CDN infrastructure. We contribute a unique mix of algorithms using WebRTC data channels.",
    image: '/images/miostream.png',
    tags: ['React', 'WebRTC', 'Node'],
    source: 'https://github.com/maverick-zhn/miostream',
    visit: 'https://github.com/maverick-zhn/miostream',
    id: 3
  }
];

export const TimeLineData = [
  { year: 2001, text: 'Started my journey', },
  { year: 2004, text: 'Worked as a consultant for the World Bank Group', },
  { year: 2007, text: 'Worked as Software Engineer for a Private Company', },
  { year: 2013, text: 'Won Fulbright Scholarship', },
  { year: 2013, text: 'Won Purdue Computer Science Fellowship', },
  { year: 2015, text: 'Earned Masters Degree in Computer Science', },
  { year: 2015, text: 'Started Ph.D. in Computer Science', },
  { year: 2019, text: 'Won NASA grant for Secure Architecture for Graph Database Systems', },
  { year: 2020, text: 'Earned Ph.D. in Computer Science', },
  { year: 2020, text: 'Started working in a startup', },
  { year: 2021, text: 'Founded iStardom Technologies', },
  { year: 2022, text: 'In the process of patenting AGAPECert and creating startup in the US', },
];

export const Papers = [
  { id: 0, year: 2022, title: 'AGAPECERT', description: "This paper introduces AGAPECert, an Auditable, Generalized, Automated, Privacy-Enabling, Certification framework capable of performing auditable computation on private data and reporting real-time aggregate certification status without disclosing underlying private data. AGAPECert utilizes a novel mix of trusted execution environments, blockchain technologies, and a real-time graph-based API standard to provide automated, oblivious, and auditable certification.", authors: [{ name: "Servio", lastname: "Palacios" }, { name: "Aaron", lastname: "Ault" }, { name: "James", lastname: "Krogmeier" }, , { name: "Bharat", lastname: "Bhargava" }], url: "https://doi.org/10.25394/PGS.12721169.v1" },
  { id: 1, year: 2021, title: 'Auditable serverless computing for farm management', description: "In this paper, we propose a novel mix of serverless functions, shared ledgers, webhooks, and REST APIs to enhance Agriculture/Farm Management Systems, providing an integrated solution for Task, User, and Field Management that exploits a fine-grained pricing model.", authors: [{ name: "Servio", lastname: "Palacios" }, { name: "Drew", lastname: "Zabrocki" }, { name: "Bharat", lastname: "Bhargava" }], url: "https://dl.acm.org/doi/10.1145/3460866.3461770" },
  { id: 2, year: 2020, title: 'Auditable Computations on (Un)Encrypted Graph Structured Data', description: "This dissertation proposes breaking from the traditional cloud computation model, and instead ship certified pre-approved trusted code closer to the data to protect graph-structured data confidentiality. Further, our technique runs in a controlled environment in a trusted data owner node and provides proof of correct code execution. This computation can be audited in the future and provides the building block to automate a variety of real use cases that require preserving data ownership. This project utilizes trusted execution environments (TEEs) but does not rely solely on TEE's architecture to provide privacy for data and code. We thoughtfully examine the drawbacks of using trusted execution environments in cloud environments. Similarly, we analyze the privacy challenges exposed by the use of blockchain technologies to provide accountability and traceability.", authors: [{ name: "Servio", lastname: "Palacios" }, { name: "Bharat", lastname: "Bhargava" }], url: "https://doi.org/10.25394/PGS.12721169.v1" },
  { id: 3, year: 2019, title: 'MioStream: A peer-to-peer live video streaming on the edge', description: "We present the design, implementation, and evaluation of a novel P2P service based on WebRTC (web browsers with Real-Time Communications) called MioStream. MioStream is an open-source alternative for distributed media streaming that runs on the edge of the network without incurring in costly and extensive CDN infrastructure. We contribute a unique mix of algorithms using WebRTC data channels.", authors: [{ name: "Servio", lastname: "Palacios" }, { name: "Victor", lastname: "Santos" }, , { name: "Bharat", lastname: "Bhargava" }], url: "https://doi.org/10.1007/s11042-018-6940-2" },
];