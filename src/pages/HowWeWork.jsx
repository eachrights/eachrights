import researchImg from "../assets/whatwedo/research.png";
import partnershipsImg from "../assets/whatwedo/partnerships.png";
import movementsImg from "../assets/whatwedo/movements.png";
import trainingImg from "../assets/whatwedo/training.png";
import advocacyImg from "../assets/whatwedo/advocacy.png";
import awarenessImg from "../assets/whatwedo/awareness.png";

const approaches = [
  {
    id: "research",
    title: "Research",
    image: researchImg,
    alt: "EACHRights team conducting research in the field",
    body: "EACHRights recognizes that research is critical in understanding and addressing the challenges faced by vulnerable and marginalized groups and communities. To this end, the organization is undertaking various forms of research, including baseline studies, perception surveys, position papers, and policy briefs. Through this approach, EACHRights is establishing itself as a credible institution that leverages field experiences and knowledge to shape opinions, promote learning, and drive innovation. Additionally, the organization prioritizes the design and implementation of research-driven, evidence-based programs.",
  },
  {
    id: "partnerships",
    title: "Networking, collaboration, and partnerships",
    image: partnershipsImg,
    alt: "Partners collaborating with EACHRights",
    body: "Networking, collaborations, and partnerships with government and like-minded organisations are key to EACHRights’ success in realising the economic and social rights for vulnerable and marginalised communities and groups. EACHRights is working with CSOs, NGOs, INGOs, the government, and the private sector in the design and implementation of their programs in this strategic plan.",
  },
  {
    id: "movements",
    title: "Social movement building and grassroots community mobilization",
    image: movementsImg,
    alt: "Community members organizing together",
    body: "EACHRights is supporting and empowering groups and communities to self-organize around their common concerns and challenges, as well as engage in citizen-driven campaigns at the national and county levels. This approach is enabling social movements to actively engage in the media campaigns, lobbying, public education, advocacy, and awareness-raising on human rights issues. The movements are further strengthened to take actions and mobilize communities to submit memoranda and petitions to the various duty bearers both at national and county levels.",
  },
  {
    id: "training",
    title: "Training and capacity building",
    image: trainingImg,
    alt: "A training session led by EACHRights",
    body: "Training and capacity building is a core component of EACHRights’ work, empowering vulnerable and marginalized groups and communities to claim and defend their rights. EACHRights is designing and investing in tailored initiatives that strengthen the knowledge and expertise of civil society organizations (CSOs), local leaders, government agencies, and partners. The organization is also investing in training and capacity building for its staff to strengthen their analytical and methodological skills, enabling them to develop effective strategies, design impactful programs, and conduct robust monitoring and evaluation.",
  },
  {
    id: "advocacy",
    title: "Lobbying and advocacy",
    image: advocacyImg,
    alt: "EACHRights engaging decision-makers",
    body: "EACHRights is engaging decision-makers, generating and disseminating credible evidence, sharing insights with peer organizations, and targeting institutions responsible for implementing change. EACHRights is also undertaking focused lobbying and advocacy to drive legal, policy, and structural reforms on key issues such as economics, education, gender, climate, and health. Through these efforts, the organization is amplifying community voices, strengthening accountability, and advancing social justice.",
  },
  {
    id: "awareness",
    title: "Community and public awareness creation",
    image: awarenessImg,
    alt: "A community awareness event",
    body: "Community awareness is facilitating a collective understanding and knowledge among community members about issues, events, and opportunities that affect them. EACHRights is disseminating information to educate the public, fostering a sense of shared responsibility and empowerment, and encouraging active participation and collective action to address local challenges and improve outcomes. Public awareness is being used to promote collective understanding and consciousness within a society about human rights, empowering individuals to make informed decisions and take collective action for positive societal change.",
  },
];

const styles = `
.hww { --ink:#1d2b2a; --muted:#516260; --line:#d5dedc; --accent:#2e7d32; --bg:#ffffff;
  max-width: 1000px; margin: 0 auto; padding: 48px 20px 64px; color: var(--ink); background: var(--bg);
  font-family: Georgia, "Times New Roman", serif; line-height: 1.65; }
.hww h1 { color: var(--accent); font-size: clamp(2rem, 5vw, 2.75rem); line-height: 1.15; margin: 0 0 12px; letter-spacing: -0.01em; }
.hww-intro { font-size: 1.125rem; color: var(--muted); margin: 0 0 32px; }
.hww-section { display: grid; grid-template-columns: 1fr; gap: 24px; align-items: center;
  padding: 40px 0; border-top: 1px solid var(--line); }
.hww-img { width: 100%; height: auto; aspect-ratio: 4 / 3; object-fit: cover; border-radius: 6px; display: block; background: #e6f2ef; }
.hww-title { font-size: 1.5rem; line-height: 1.3; margin: 0 0 12px; color: var(--accent); }
.hww-text { margin: 0; max-width: 62ch; }
@media (min-width: 760px) {
  .hww-section { grid-template-columns: 1fr 1fr; gap: 48px; }
  .hww-section:nth-child(even) .hww-img { order: 2; }
}
`;

function HowWeWork() {
  return (
    <div className="hww">
      <style>{styles}</style>
      <h1>How We Work</h1>
      <p className="hww-intro">Implementation Strategies and Approaches</p>

      {approaches.map((item) => (
        <section key={item.id} className="hww-section">
          <img className="hww-img" src={item.image} alt={item.alt} loading="lazy" />
          <div>
            <h2 className="hww-title">{item.title}</h2>
            <p className="hww-text">{item.body}</p>
          </div>
        </section>
      ))}
    </div>
  );
}

export default HowWeWork;
