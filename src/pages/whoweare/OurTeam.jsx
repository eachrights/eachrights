import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Handshake, Mail, X, ChevronRight } from "lucide-react";
import heroImage from "../../assets/hero/team-hero.png";

/*
|--------------------------------------------------------------------------
| PHOTO LOADING
|--------------------------------------------------------------------------
| Instead of one static `import photo from "../../assets/team/X.jpg"` per
| person (where a single typo'd filename or missing file throws at build
| time and can take the whole page down), every file in src/assets/team/
| is loaded dynamically via this second import, right alongside the hero
| image import above. If a filename below doesn't match an actual file,
| that one person just falls back to an initials badge — nothing else on
| the page breaks.
|
| Drop each person's photo into src/assets/team/ using any filename, then
| reference that exact filename in `photo: getPhoto("Whatever.jpg")` below.
|
| This path is "../../assets/team/*" — two levels up, same depth as the
| heroImage import above it, since both assets/hero/ and assets/team/
| live inside the same assets/ folder. If this component ever moves to a
| different folder depth, bump both imports together.
*/

const teamImageModules = import.meta.glob("../../assets/team/*", {
  eager: true,
  import: "default",
});

// Build a lookup by filename only (e.g. "Gilbert.jpg"), so callers don't
// need to know the full relative path.
const teamImagesByFilename = Object.fromEntries(
  Object.entries(teamImageModules).map(([path, url]) => [path.split("/").pop(), url])
);

function getPhoto(filename) {
  return teamImagesByFilename[filename] || null;
}

/*
|--------------------------------------------------------------------------
| ADD YOUR BOARD MEMBERS HERE
|--------------------------------------------------------------------------
| Board members are volunteer governance leaders, shown in their own
| section, grouped separately from the Leadership Office and Staff below.
| photo: getPhoto("Filename.jpg"), or leave it as null for an initials
| badge.
*/

const board = [
  {
    name: "Okero Otieno",
    role: "Board Chairperson",
    photo: getPhoto("Isaack.jpg"),
    bio: `MR. OKERO OTIENO
Chairperson, Board of Directors and Trustee
Mr. Okero Otieno is a Democratic Governance, applied Public Policy, Elections, Development and Human Rights expert with over 22 years' experience working with State, Non-State, Academic, and Donor Organizations as well as Think Tanks in more than 15 sub-Saharan African Countries. Mr. Okero Otieno also offers technical and policy support to Regional Governance Non-State Actors. Mr. Otieno has many years of experience in designing, implementing, monitoring, and evaluating Democratic Governance Projects and Programmes.
He is currently the Chief Technical Advisor (CTA)-Elections with the United Nations Development Programme (UNDP) Malawi Country Office. Previously, he served as a served as CTA with UNDP Nigeria Country Office and as the Head of International Foundations for Electoral Systems (IFES) both in Kenya and Uganda Country Offices.
He also previously served as the Project Manager for the UNDP Kenya Office, Chief of Party with the Kenya Government's Ministry of Justice and Constitutional Affairs in the countrywide Kenya National Integrated Constitutional Civic Education Programme (2011-2013), and Country Director with the International Development Law Organization.
Further, Mr. Otieno served as the Head of Governance and Corruption Unit with the Institute for Security Studies, South Africa (2010); Director, Democratic Governance Fund-CIDA (2007-2009); Deputy Executive Director and Head of Programmes with the Institute for Education in Democracy (2005-2007; University academic in Kenya (2000-
2004).
Mr. Otieno is currently a PhD candidate at the University of Manitoba, Canada. He holds a Master of Arts degree in Political Science from Central European University, Budapest, Hungary; a Master of Arts degree in Development Studies from the International Institute for Social Studies, The Hague, Netherlands, and a Bachelor of Arts degree in Anthropology from the University of Nairobi, Kenya. Additionally, he has undertaken several relevant courses in the subjects of Human Rights, Results-Based Management, Programmed/Project Management, Money and Politics, and Public Finance Management Reforms and Anti-Corruption.
He has published a Chapter in a widely referenced book on Governance and authored several online articles and op-eds.`,
    email: "",
  },
  {
    name: "Florence Annan",
    role: "Vice Chair, Board of Directors",
    photo: getPhoto("Florence.jpg"),
    bio: `Vice Chair - Board of Directors
Florence Annan
Ms. Florence Annan is a Human Rights and Governance practitioner with over 18 years' work experience in the civil society and government sectors. Her expertise revolves around: Partnerships and Fundraising; Organization Development Management and Policy Advocacy.
Ms. Annan has extensive knowledge of matters Land governance, Gender and Child protection, health, and Devolution. She has successfully spearheaded programs and campaigns in partnership with high-level consortiums and government agencies such as the Keeping Girls in School - Sanitary Towels Campaign; GBV and Child Protection Campaigns; Protection of Public-School Land (ShuleYangu Alliance); and the Nyandarua County Titling Program that sought to address historical issues of communities living in colonial and squatter villages.
Ms. Annan has also been part of lobby groups that have successfully advocated for the enactment of key human rights frameworks and guidelines in Kenya, including The Children Act (2021); The Guidelines on the Application Process of Public-School Title Deeds (2016); The Protection Against Domestic Violence Act (2015); The Teachers Service Commission Act (2012); The Basic Education Act (2013); Review of the Gender Policy in Education (2007). In Somalia, The Anti-FGM Policy (2014); and the Somaliland Youth Policy (2010).
Ms. Annan currently serves as the Fundraising and Partnership Manager at Amnesty International Kenya. She also serves as a Board Member of The Change Trust and The Sports Development Trust. Further to this, she is a member of the Pan-African Women Rights Organization (FEMNET). She is a proud alumna of Deakin University, Trinity College of Foundational Studies (Melbourne, Australia) and the Alliance Girls High School.`,
    email: "",
  },
  {
    name: "Fredrick K. Kinama",
    role: "Treasurer, Board of Directors",
    photo: getPhoto("Fredrick.jpg"),
    bio: `Fredrick K. Kinama
Treasurer, Board of Directors
Mr. Fredrick K. Kinama is a seasoned Finance Advisor with a wealth of experience managing financial systems and ensuring compliance with policies and standards across various organizations in Africa. His career began with a role as a Consultant in Finance and Administration for the USDA/USAID PASA University of Missouri Assistance Program in Juba, South Sudan. Subsequently, he joined the Aga Khan Foundation - East Africa as a Program Accountant, overseeing education programs in Zanzibar, Tanzania, and Kenya.
Mr. Kinama then transitioned to become the Finance Advisor for the West Africa Region at Tearfund UK in Liberia, focusing on Water, Sanitation, and Hygiene (WASH) projects. In this capacity, he ensured strict adherence to Tearfund financial management policies, standards, and statutory regulations.
Additionally, he contributed his expertise at Ignite the Orphan Africa-Kenya, overseeing the regional office accounting system and providing support to budget holders with coding, reporting, and analysis.
His professional development includes short-term training in financial management, strategic planning, office operations, ethics, as well as compliance and fraud prevention workshops with USAID. Mr. Kinama extensive experience and dedication to financial management make him a valuable asset in the non - profit and development sectors.
Mr. Kinama also possesses a Diploma in Business Management from Sigalagala Polytechnic College and a Bachelor of Business Administration from the Switzerland Centre for Management University and is a Certified Public Accountant (CPA) certified by the Kenya Accountants and Secretaries National Examination Board (KASNEB) in Nairobi, Kenya.`,
    email: "",
  },
  {
    name: "Gilbert Onyango",
    role: "Executive Director and Founder",
    photo: getPhoto("Gilbert.jpg"),
    bio: `Mr. Gilbert Onyango is the Founder and a member of the Board of Trustees at EACHRights. His journey in the non-governmental sector began in 2002 as a legal intern with The CRADLE – The Children's Foundation, where he later became the Deputy Director. He then served as the Regional Deputy Director for the Canadian Bar Association's Strengthening Access to Justice in Eastern Africa (SAJEA) Programme in Dar es Salaam, Tanzania, from June to December 2010. Following this, Mr. Onyango assumed the role of Regional Director at EACHRights from December 2010 to May 2015, after which he joined UPR Info, a Swiss NGO, as the Regional Director for Africa from June 2015 to December 2020. He resumed his position as Executive Director of EACHRights in November 2022.
Mr. Onyango holds an LL.B Degree from Dr. BAM University, Aurangabad, India, and was admitted to the Kenyan Bar in 2002. He also obtained a Master's of Science (M.Sc.) Degree in Management and Organisational Development from United States International University, Africa (USIU-A) in 2008, and a Master's of Arts (M.A.) Degree in Development Studies with a major in Human Rights, Development, and Social Justice from the International Institute of Social Studies (ISS) at Erasmus University, Rotterdam in 2012.
Throughout his career, Mr. Onyango has pursued professional development in various areas including child rights, human rights, law, development, strategic planning and management, human resource management, project evaluation, and grant making. His steadfast dedication to human rights and substantial contributions to the development sector underscore Mr. Onyango's commitment to driving positive change, guiding EACHRights' growth and impact through his leadership.
For inquiries, Mr. Gilbert Onyango can be reached at director@eachrights.or.ke`,
    email: "director@eachrights.or.ke",
  },
  {
    name: "Christine Alai",
    role: "Board Member",
    photo: getPhoto("Christine.jpg"),
    bio: `Ms. Christine Alai is a human rights lawyer who has dedicated her 15-year career to promoting equality, non-discrimination, social inclusion, and access to justice for victims of gross human rights violations and atrocity crimes.
She has led and contributed to innovative research, litigation, policy and capacity development, technical assistance, resource mobilization and advocacy initiatives to advance human rights and transitional justice in Kenya, South Sudan, and parts of East and Central Africa. 
Ms. Alai is presently the Transitional Justice Advisor to the UN Commission on Human Rights in South Sudan. 
She is also a co-founder of Utu Wetu Trust – a budding firm that focuses on
enhancing prevention and response to conflict-related sexual and gender-based violence.`,
    email: "",
  },
  {
    name: "Julie M. Kubai",
    role: "Board Member",
    photo: getPhoto("Julie.jpg"),
    bio: `Ms. Julie M. Kubai is an Auditor who has been serving at the Office of the Auditor- General (OAG) since 2015, giving her work experience of about 8 years, 5 of which have been in the Human Resource Department. Before joining the OAG, she was working with the Kenya Trade Network Agency (KENTRADE) as a Trade Facilitator and was involved in the development, testing and roll-out of part of the Kenya Single Window System (KESWS) and also played a support role in its live environment.
She holds a Master of Arts Degree in International Relations from the University of Nairobi and a Bachelor of Science in Hospitality Management from Strathmore University. She is currently pursuing a Certified Human Resource Professional (CHRP) Certification.`,
    email: "",
  },
  {
    name: "Martin Ray T. Mavenjina",
    role: "Board Member",
    photo: getPhoto("Martin.jpg"),
    bio: `MARTIN RAY T. MAVENJINA
Board Member
Mr. Martin Mavenjina is a seasoned Constitutional and Human Rights lawyer, specializing in research, policy review, and advocacy on Civic Space, Security Governance, Counter Terrorism, and Transitional Justice at National, Regional, and International levels. Currently employed as the Senior Program Advisor Transitional Justice at the Kenya Human Rights Commission, he holds a Bachelor of Laws Degree from Nkumba University, a Post Graduate Diploma in Legal Practice from the Kenya School of Law, and a Graduate Certificate in Advanced Human Rights Course on Police Oversight and Vulnerable Groups from the University of Pretoria. Mr. Mavenjina is also pursuing a Master of Laws at the University of Nairobi.
His engagements with prominent peer review mechanisms like the United Nations Human Rights Council, the African Commission on Human and Peoples Rights, and the Assembly of State Parties have resulted in numerous positive resolutions benefiting victims of human rights violations.
Mr. Mavenjina has spearheaded successful campaigns at national and international levels, significantly impacting the lives of victims of systemic human rights violations. He has also played a key role in forming coalitions advocating for victims' rights and has contributed to seminal research on transitional justice, civic space, freedom of expression, protest rights, and surveillance, published both locally and globally.
Mr. Mavenjina is a member of the Law Society of Kenya, the East African Law Society, the Chartered Institute of Arbitrators, and the International Commission of Jurists, Mr. Mavenjina currently chairs the Democracy Without Borders-Kenya Chapter. He also serves on various committees of the East African Law Society, including Trade and Regional Integration, Business and Human Rights, Technology, Media and Telecom, and Oil and Gas.`,
    email: "",
  },
  {
    name: "Allan Oginga",
    role: "Board Member",
    photo: getPhoto("Allan.jpg"),
    bio: `Allan has over 25 years' experience working with Non-State Actors in the
health sector, in senior management positions in several organisations
including, Living Goods, The Fred Hollows Foundation, IntraHealth
International and AMREF Health Africa. He began his professional career in
corporate banking with Citbank N.A Kenya. He is currently the Chief
Executive Officer at No Malaria Kenya, a social enterprise company. He
holds Board positions at several organizations including Basic Needs Basic
Rights Kenya, a Public Benefits Organization promoting community mental
health interventions in Kenya and No Taps Foundation-Australia, a non-
profit organisation committed to providing clean, safe water to
marginalised communities. He holds a Postgraduate degree in Social and Applied Economics with concentrations in Health and Development Economics, obtained from Wright State University,
Dayton, Ohio, USA.`,
    email: "",
  },
];

/*
|--------------------------------------------------------------------------
| ADD YOUR STAFF MEMBERS HERE
|--------------------------------------------------------------------------
| Each entry carries a `group` label — this is what drives the Mizizi-
| style department sections below (a small caps heading above each row of
| cards). Add a new group name here and it becomes a new section on the
| page automatically, in the order people first appear.
| photo: getPhoto("Filename.jpg"), or leave as null for a placeholder
| initial instead.
*/

const leadership = [
  {
    name: "Gilbert Onyango",
    role: "Executive Director",
    group: "Executive Director Office",
    bio: "Mr. Gilbert Onyango is the Founder and a member of the Board of Trustees at EACHRights. His journey in the non-governmental sector began in 2002 as a legal intern with The CRADLE – The Children's Foundation, where he later became the Deputy Director. He then served as the Regional Deputy Director for the Canadian Bar Association's Strengthening Access to Justice in Eastern Africa (SAJEA) Programme in Dar es Salaam, Tanzania, from June to December 2010. Following this, Mr. Onyango assumed the role of Regional Director at EACHRights from December 2010 to May 2015, after which he joined UPR Info, a Swiss NGO, as the Regional Director for Africa from June 2015 to December 2020. He resumed his position as Executive Director of EACHRights in November 2022. Mr. Onyango holds an LL.B. degree from Dr. BAM University, Aurangabad, India, and was admitted to the Kenyan Bar in 2002. He also obtained a Master's of Science (M.Sc.) Degree in Management and Organisational Development from United States International University, Africa (USIU-A) in 2008, and a Master's of Arts (M.A.) Degree in Development Studies with a major in Human Rights, Development, and Social Justice from the International Institute of Social Studies (ISS) at Erasmus University, Rotterdam, in 2012. Throughout his career, Mr. Onyango has pursued professional development in various areas, including child rights, human rights, law, development, strategic planning and management, human resource management, project evaluation, and grant making. His steadfast dedication to human rights and substantial contributions to the development sector underscore Mr. Onyango's commitment to driving positive change, guiding EACHRights' growth and impact through his leadership.",
    photo: getPhoto("Gilbert.jpg"),
    email: "director@eachrights.or.ke",
  },
];

const staff = [
  {
    name: "Marcelino Thuku",
    role: "Programme Manager",
    group: "Programmes",
    bio: "Marcelino Waithaka Thuku manages the Watoto Wetu project under the Gender Justice Programme in EACHRights. He is a seasoned Community Development Professional with 20+ years of experience managing and implementing donor-funded programs on human rights and peacebuilding in Kenya. His expertise spans various areas, including land, labour, and child rights, transitional justice, devolution, gender equality, and the prevention of gender-based violence and harmful cultural practices. His professional reach extends across diverse landscapes, from the urban informal settlements in Nairobi to Counties such as Garissa, Kajiado, Kilifi, Kwale, Lamu, Marsabit, Mombasa, Taita Taveta, Turkana, and Uasin Gishu. A graduate of the University of Nairobi with a Bachelor of Arts degree in Anthropology, Marcelino has enriched his academic foundation with extensive training in monitoring, evaluation, reporting, and learning (MERL), data quality management, resource mobilization, peace-building, conflict management, and finance & grants management. Under his stewardship of the Watoto Wetu project, Marcelino has overseen critical partnerships between EACHRights, the Directorate of Children's Services, County Governments and Civil Society Organizations that have contributed to the development of several important policies towards addressing harmful cultural practices in Kenya. These include the Kajiado Eradication of Female Genital Mutilation Policy 2019, the Marsabit County Integrated Child Policy 2024 and Guidelines for Management of Missing and Found Children in Kenya 2024. Marcelino is also a dedicated advocate for human rights and peace-building, and has demonstrated remarkable expertise in mediating complex disputes and fostering collaboration. During his impactful tenure at the Mombasa Catholic Justice and Peace Commission (MCJPC), Marcelino spearheaded the successful resolution of a water dispute between the Kamba and Maasai communities over the crucial River Njukini water resources in Taveta Sub County, a notable achievement under the USAID – funded Kilifi – Taveta Peace – Building Project. His unwavering commitment to human rights advocacy and peacebuilding continues to make a profound impact on communities throughout Kenya. For inquiries, Mr. Marcelino Thuku can be reached at marcelino@eachrights.or.ke",
    photo: getPhoto("Marcelino.jpg"),
    email: "marcelino@eachrights.or.ke",
  },
  {
    name: "Johnstone Shisanya",
    role: "Programme Manager",
    group: "Programmes",
    bio: "Mr. Johnstone S. Shisanya is a seasoned professional with a Master of Arts Degree in African Studies from the MaryKnoll Institute of African Studies, MN/USA, and Tangaza University College. He also holds credentials as a Master Practitioner in Neuro-Linguistic Programming, along with a Bachelor of Arts degree in Philosophy and Religious Studies. With over 7 years of experience in community empowerment, development, and the NGO sector, Mr Shisanya is a strong advocate for human rights, with a particular focus on education, child protection, and safeguarding. His skills encompass project management, gender healing and reconciliation, leadership development, team nurturing, programmatic research, as well as training and facilitation. Throughout his career, Mr. Shisanya has held managerial roles at distinguished organizations such as Edmund Rice Advocacy Network East Africa, Omni One Limited, and L'Arche Kenya, showcasing his commitment to driving positive change. His passion, adaptability, and continuous quest for knowledge highlight his dedication to making significant contributions to EACHRights' growth and strengthening existing partnerships. For enquiries, Mr. Johnstone S. Shisanya can be reached at johnstone@eachrights.or.ke",
    photo: getPhoto("Johnstone.jpg"),
    email: "",
  },
  {
    name: "Madina Mohamed",
    role: "Project Officer",
    group: "Programmes",
    bio: "Ms. Madina Mohamed is a highly accomplished professional with a dynamic background and extensive experience specializing in Gender Development, Governance, and Human Rights, demonstrating an unwavering commitment to fostering social and gender justice. Before joining EACHRights, Ms. Mohamed served as a Programmes Officer at the Centre for Community Development and Human Rights where she led initiatives in Human Rights, Governance, and Peace and Cohesion. She actively collaborated with Members of Parliament through the Kenya Parliamentary Caucus on Human Rights, managing crucial CSO - Caucus linkages and administrative responsibilities. Ms. Mohamed's commitment to driving social change extends to her involvement with the Parliamentary Caucus on Sustainable Development Goals (SDG Caucus). Ms. Mohamed stands out as a passionate advocate, particularly focused on quality and inclusive education and eradicating gender-based violence, especially against vulnerable and marginalized girls and young women. Ms. Mohamed's six-year career in the challenging environment of Kibra informal settlement has equipped her with a unique perspective and practical understanding of community issues. Her work in implementing gender transformative programs reflects not only her expertise but also her genuine dedication to creating positive and lasting change. Currently, Ms. Mohamed serves on the Board of Directors at Uweza Foundation, empowering children and youth in Kibra for a better future, and on the Board of Edmund Rice Centre Nairobi, focusing on children with disabilities in informal settlements. Additionally, she represents EACHRights as the Kenya Equity and Inclusion Thematic co-lead at the Regional Education Learning Initiative (RELI) Africa network, comprising 70+ East African organizations working towards inclusive learning. In Ms. Mohamed, the realm of Equitable & Inclusive Education, Gender Development, Governance, and Human Rights finds a luminary whose passion, expertise, and diverse experience converge to create a force for positive transformation. Her journey reflects a deep-seated belief in advocacy and program implementation's power to shape a more just and equitable society. For enquiries, Ms. Madina Mohamed can be reached at madina@eachrights.or.ke",
    photo: getPhoto("Madina.jpeg"),
    email: "",
  },
  {
    name: "Lois Mwaniki",
    role: "Project Officer",
    group: "Programmes",
    bio: "Lois Mwaniki is a dynamic advocate and legal professional serving as a Project Officer under the Health Justice Programme at EACHRights. She holds an LLB, a Diploma in Law from the Kenya School of Law, and is an Advocate of the High Court of Kenya. She brings a strong mix of legal expertise, project management skills, and rights-based advocacy to her role, supporting the advancement of Sexual and Reproductive Health and Rights (SRHR) and broader health justice initiatives across the region. At EACHRights, Lois coordinates project activities, supports downstream partners, contributes to policy advocacy, and ensures alignment with donor requirements. She plays a key role in driving evidence-based implementation through baseline assessments, reporting frameworks, and monitoring tools that enhance programme delivery and impact. A commitment to equity, transparency, and the realization of economic, social, and cultural rights for marginalized communities guides her work.",
    photo: getPhoto("Lois.jpg"),
    email: "",
  },
  {
    name: "Jane Otieno",
    role: "Project Officer",
    group: "Programmes",
    bio: "Ms Jane Otieno is a dedicated human rights practitioner and a qualified Nursing Officer with strong expertise in Sexual and Reproductive Health and Rights (SRHR), social justice, legal and policy advocacy and community-driven advocacy. Her clinical training enhances her ability to connect health service delivery with rights-based programming, strengthening her work with vulnerable and marginalized populations. In her role as Project Officer under the Health Justice Programme at EACHRights, Ms Otieno leads county and national-level engagements aimed at strengthening SRHR advocacy, amplifying the voices of social movements, and supporting accountability for rights-based health policies. She plays a central role in coordinating stakeholder dialogues, conducting legal and policy analysis, and facilitating evidence generation to inform programme decision-making. Before joining EACHRights, Ms Otieno worked extensively in community-centred health and rights initiatives, applying her nursing background to improve awareness, service linkages, and advocacy on health and human rights. Her experience working with civil society organizations, county duty-bearers, and grassroots networks has given her a deep understanding of local health systems, community needs, and the systemic barriers affecting rights realization. Ms Otieno is particularly passionate about expanding access to comprehensive SRHR, promoting youth-friendly health services, and addressing inequalities affecting vulnerable and marginalized groups. Her commitment is demonstrated through her work supporting county-level advocacy coalitions, facilitating participatory dialogues, and documenting evidence that drives policy reform. Her growing leadership in the Health Justice Programme reflects a strong foundation in programme management, health systems understanding, and rights-based advocacy. She remains committed to strengthening community resilience, improving policy implementation, and contributing to a more equitable and just health system in Kenya.",
    photo: getPhoto("Jane.jpg"),
    email: "",
  },
  {
    name: "Samson Mutange",
    role: "Finance and Operations Officer",
    group: "Administration",
    bio: "Mr. Samson Mutange is the Finance, Administration and Operations Officer at EACHRights, where he plays a pivotal role in coordinating financial administration in alignment with donor and organizational regulations, emphasizing good governance practices. His responsibilities include planning, organizing, coordinating, and monitoring finance, human resources, administration, fieldwork logistics, supplies and procurement, security, and office management activities. Mr. Mutange ensures the proper implementation of EACHRights' policies and procedures, including Finance Management, Administration and Human Resources, Purchases, and Procurement Manuals. He oversees the availability of required cash for operational needs, facilitates the preparation of regular reports for project management, government entities, and other stakeholders. Mr. Mutange is known for his results-driven approach and meticulous attention to detail. With a Certified Public Accountants Certification and over 15 years of experience in the NGO sector, Mr. Mutange brings a wealth of expertise to his role. For inquiries, he can be reached at samson@eachrights.or.ke",
    photo: getPhoto("Samson.jpg"),
    email: "",
  },
  {
    name: "Mirriam Mwongela",
    role: "Communications Officer",
    group: "Administration",
    bio: "Mirriam is an experienced communication professional with a passion for using the power of communication through mass media and public relations to inform the public through journalism, broadcasting and public relations with the community. A strategic communication and public relations officer, offering proven leadership in creating comprehensive public relations and communication strategies to advance companies' visions and goals. Adept in all aspects of public relations, including media relations, internal communications, event planning and community programming. She is an experienced videographer and photographer with top-notch editing skills. In addition, she is a member of the Association of Women in Media in Kenya (AMWIK), which brings together over 300 women in media across the 47 counties to pool their professional skills in giving visibility to women's concerns. AMWIK recognizes that gender inequality and inequity undermine development and that media is a powerful tool for social change and agenda-setting, which is used to create awareness around key issues affecting women to ensure public support and appreciation. As a communications officer at EACHRights, Mirriam plays a vital role in managing the organization's online presence by developing and implementing its social media strategy. She leads campaigns and projects across a range of social media channels, producing and engaging content, analyzing usage data and facilitating customer service.",
    photo: getPhoto("Mirriam.jpg"),
    email: "",
  },
  {
    name: "Pachu Ibrahim",
    role: "Administrative Assistant",
    group: "Administration",
    bio: "As an Administrative Assistant at EACHRights, Ms. Pachu Ibrahim plays a crucial role in ensuring that the office operates smoothly. Her responsibilities include providing dedicated support to other staff, optimizing daily office functions for increased efficiency, and managing the organization's general administrative tasks. Ms. Ibrahim brings a robust skill set in office management and procedures, exceptional time management, strong organizational skills, and the capacity to handle multiple tasks effectively. Her attention to detail and proficiency in problem-solving underscore her commitment to maintaining a seamless workflow. Ms. Ibrahim is proficient in using various office equipment like printers and photocopying machines. All the aforementioned highlight her versatility and adaptability in administrative duties thereby significantly enhancing EACHRights' overall effectiveness and productivity. For inquiries, Ms. Pachu Ibrahim can be reached at pachu@eachrights.or.ke",
    photo: getPhoto("Pachu.jpg"),
    email: "",
  },
];

/* =========================================================
   GROUPING HELPER
   ---------------------------------------------------------
   Mizizi's team page is organised into named department
   sections (Executive Director Office, Operations and
   Governance, Research and Knowledge & Impact, ...), each
   its own row of minimal cards. This buckets `staff` (and
   `leadership`) by their `group` field, in first-seen order,
   so adding a new group above is all it takes to create a
   new section here.
========================================================= */

function groupPeople(people) {
  const order = [];
  const byGroup = {};

  people.forEach((person) => {
    const key = (person.group || "Team").trim();
    if (!byGroup[key]) {
      byGroup[key] = [];
      order.push(key);
    }
    byGroup[key].push(person);
  });

  return order.map((key) => ({ group: key, people: byGroup[key] }));
}

const staffSections = groupPeople([...leadership, ...staff]);

/* =========================================================
   PRELOAD HELPER
   ---------------------------------------------------------
   Every photo across board, leadership and staff is fetched
   via a JS Image() before the page reveals its content, so
   nothing pops in as the visitor scrolls. Guarded with a
   short overall timeout so a single broken URL can never
   trap the page on the loader.
========================================================= */

const allPhotos = [...board, ...leadership, ...staff]
  .map((person) => person.photo)
  .filter(Boolean);

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = resolve; // don't block the page forever on one bad file
    img.src = src;
  });
}

/* =========================================================
   SHARED HELPERS
========================================================= */

/* Card grid used everywhere: compact 5-up on large screens so a group of
   around ten people fits in two tidy rows. */
const CARD_GRID = "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5";

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

function Avatar({ name, photo, large = false }) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        decoding="async"
        className={`w-full object-cover ${
          large ? "aspect-[4/5] object-top sm:h-full sm:aspect-auto" : "aspect-[4/5]"
        }`}
      />
    );
  }

  return (
    <div
      className={`flex w-full items-center justify-center bg-forest-light text-forest-dark ${
        large ? "aspect-[4/5] sm:h-full sm:aspect-auto" : "aspect-[4/5]"
      }`}
    >
      <span className="font-display text-4xl font-bold">{getInitials(name)}</span>
    </div>
  );
}

// One reveal per grid, staggered across its children, instead of each
// card independently computing its own animation delay.
const gridVariants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  shown: { opacity: 1, y: 0 },
};

/* =========================================================
   PAGE LOADER
========================================================= */

function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-forest text-paper">
      <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-paper/25 border-t-accent" />
      <p className="text-sm font-medium tracking-wide text-paper/70">Loading team…</p>
    </div>
  );
}

/* =========================================================
   MEMBER CARD
   ---------------------------------------------------------
   Mizizi's grid card is deliberately minimal: photo, name,
   role, and a small "View profile" link — no bio preview
   text on the card itself. Since this site doesn't have a
   per-person route, "View profile" opens the same modal used
   elsewhere instead of navigating away.
========================================================= */

function MemberCard({ person, onSelect }) {
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.05 }}
      onClick={() => onSelect(person)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onSelect(person);
      }}
      className="group cursor-pointer overflow-hidden bg-white shadow-sm transition hover:shadow-lg"
    >
      <Avatar name={person.name} photo={person.photo} />
      <div className="p-3">
        <h3 className="font-display text-base font-bold text-forest">{person.name}</h3>
        <p className="mt-1 text-sm leading-snug text-ink/60">{person.role}</p>
        <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-accent">
          View profile
          <ChevronRight
            size={14}
            className="transition group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </motion.article>
  );
}

/* =========================================================
   TEAM SECTION
   ---------------------------------------------------------
   One department group: a small caps label followed by its
   row of MemberCards, mirroring Mizizi's "Executive Director
   Office" / "Administration" / etc. sections.
========================================================= */

function TeamSection({ title, people, onSelect }) {
  return (
    <div className="mb-10 last:mb-0">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
        {title}
      </h3>
      <div className={CARD_GRID}>
        {people.map((person) => (
          <MemberCard key={person.name} person={person} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   PROFILE MODAL
========================================================= */

function ProfileModal({ person, onClose }) {
  useEffect(() => {
    if (!person) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [person, onClose]);

  return (
    <AnimatePresence>
      {person && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest-dark/70 p-4 backdrop-blur-sm sm:p-8"
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-y-auto bg-white shadow-2xl sm:h-[85vh] sm:max-h-[85vh] sm:flex-row sm:overflow-hidden"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close profile"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-forest shadow transition hover:bg-white"
            >
              <X size={18} />
            </button>

            <div className="w-full sm:h-full sm:w-[320px] sm:flex-shrink-0">
              <Avatar name={person.name} photo={person.photo} large />
            </div>

            <div className="flex flex-col sm:h-full sm:min-h-0 sm:flex-1">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <h3 className="font-display text-2xl font-bold text-forest sm:text-3xl">{person.name}</h3>
                <p className="mt-1.5 text-base font-medium text-accent">{person.role}</p>
              </div>

              <div className="px-8 pb-8 sm:min-h-0 sm:flex-1 sm:overflow-y-auto sm:px-10 sm:pb-10">
                <p className="mt-5 max-w-none whitespace-pre-line text-base leading-8 text-ink/70">{person.bio}</p>

                {person.email && (
                  <a
                    href={`mailto:${person.email}`}
                    className="mt-6 inline-flex w-fit items-center gap-2 bg-forest-light px-4 py-2.5 text-sm font-medium text-forest-dark transition hover:bg-forest hover:text-paper"
                  >
                    <Mail size={16} />
                    {person.email}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Team() {
  const [ready, setReady] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    let cancelled = false;

    Promise.all(allPhotos.map(preloadImage)).then(() => {
      if (!cancelled) setReady(true);
    });

    const fallback = setTimeout(() => {
      if (!cancelled) setReady(true);
    }, 4000);

    return () => {
      cancelled = true;
      clearTimeout(fallback);
    };
  }, []);

  if (!ready) {
    return <PageLoader />;
  }

  return (
    <main className="min-h-screen bg-paper font-sans text-ink">

      {/* =====================================================
          HERO — breadcrumb over a full-bleed forest band, in
          the same spirit as Mizizi's "Who We Are / Team" strip
          above a long, descriptive H1.
      ===================================================== */}

      <header className="relative flex min-h-[380px] items-center overflow-hidden bg-forest text-paper lg:min-h-[440px]">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border-[25px] border-accent/10" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full border-[25px] border-paper/5" />
        <div className="absolute left-0 right-0 top-0 z-20 h-1 bg-accent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
          <nav className="mb-4 flex items-center gap-2 text-sm font-medium text-white/60">
            <Link to="/about" className="transition hover:text-white">
              Who We Are
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/85">Team</span>
          </nav>

          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
            The people advancing
            <span className="block text-accent">human rights every day.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            EACHRights is powered by a board, leadership team and staff of researchers, advocates, legal experts
            and programme staff working together to advance Economic, Social and Cultural Rights across East
            Africa.
          </p>
        </div>
      </header>

      {/* =====================================================
          LEADERSHIP + STAFF — grouped into named department
          sections, each a minimal card grid, mirroring
          Mizizi's "Executive Director Office" / "Operations
          and Governance" / etc. layout.
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-10 sm:py-12">
        {staffSections.map((section) => (
          <TeamSection
            key={section.group}
            title={section.group}
            people={section.people}
            onSelect={setSelectedPerson}
          />
        ))}
      </section>

      {/* =====================================================
          BOARD — its own section beneath staff, same minimal
          card treatment.
      ===================================================== */}

      <section className="bg-forest-light px-6 py-10 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-forest sm:text-4xl font-display">
              Board of Directors
            </h2>
            <p className="mt-2 leading-7 text-ink/65">
              Volunteer governance leaders who set EACHRights' strategic direction and hold the organisation
              accountable.
            </p>
          </div>

          <div className={CARD_GRID}>
            {board.map((person) => (
              <MemberCard key={person.name} person={person} onSelect={setSelectedPerson} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          JOIN THE TEAM CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-forest-dark px-6 py-10 text-paper">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[25px] border-paper/10" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Want to work with EACHRights?
            </h2>
            <p className="mt-2 max-w-2xl leading-7 text-paper/80">
              We're always looking for people who share our commitment to human rights and social justice. See
              our current openings.
            </p>
          </div>

          <Link
            to="/opportunities"
            className="inline-flex shrink-0 items-center gap-2 bg-accent px-7 py-3.5 font-bold text-forest shadow-lg transition hover:brightness-105"
          >
            View Opportunities
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-forest px-6 py-12 text-center text-paper">
        <div className="mx-auto max-w-3xl">
          <Handshake size={44} strokeWidth={1.3} className="mx-auto text-accent" />
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl font-display">Be part of the change.</h2>
          <p className="mx-auto mt-4 max-w-xl leading-8 text-paper/65">
            Whether through partnership, advocacy, research or support, there is a role for everyone in advancing
            human rights and social justice.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent px-7 py-3.5 font-bold text-forest transition hover:brightness-105"
            >
              Get Involved
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/donors"
              className="inline-flex items-center gap-2 border-2 border-dashed border-accent px-7 py-3.5 font-bold text-accent transition hover:bg-accent/10"
            >
              Support Our Work
            </Link>
          </div>
        </div>
      </section>

      <ProfileModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />
    </main>
  );
}
