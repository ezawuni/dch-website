export default function Team() {
  const members = [
    {
      name: "Maame Efua Brameah Hagan (MSc. NEBOSH OHS Certified)",
      title: "Partner / Health & Safety, Gender & Inclusion Expert",
      bio: "Maame Efua Brameah Hagan brings a decade of experience in gender, inclusion, and occupational health and safety (OHS) to DCH. She is recognized for her leadership in mainstreaming gender and equity across environment, quality infrastructure, tourism, entrepreneurship, public health, and social development projects. Efua has delivered high-impact work for organizations such as the Ghana Standards Authority, UNICEF, World Bank, European Union, and Fairtrade Africa. She is a NEBOSH-certified OHS professional and holds an MSc in Environment & Public Health, with a strong record in capacity building, community engagement, and the development of inclusive workplace policies."
    },
    {
      name: "Robert Kolbila, PhD",
      title: "Project Manager/Team Lead – Evaluation & ICR Design, Implementation and Supervision",
      bio: "Dr. Robert Kolbila is an applied social scientist, evaluation consultant, and certified project manager with 15+ years’ experience across Africa and the US. He specializes in the design and management of large-scale monitoring, evaluation, and research projects in areas such as youth employment, social protection, agriculture, health, and private sector development. Robert is recognized for his ability to lead complex, multi-country research teams, advise on digital data and results systems, and deliver evidence-based insights to donors including the World Bank, UNICEF, USAID, Fairtrade Africa, and more. He holds a PhD in Sociology (Social Demography & Population Studies), MPhil in Development Studies, and is highly published and awarded for his work in social innovation and research."
    },
    {
      name: "Alfred Dongzagla, PhD",
      title: "Sector-Specific and Institutional Development Expert",
      bio: "Dr. Alfred Dongzagla is a lecturer and development planning specialist with over a decade of experience in program evaluation, institutional reform, and investment climate analysis. He holds a PhD in Geography (University of Nottingham, UK) and has led and supported research and technical assistance projects for organizations such as UNICEF, GIZ, Catholic Relief Services, CARE International, and the Civil Society Platform on SDGs. Alfred brings a robust background in GIS, mixed-methods research, and strategic analysis across sectors including MSMEs, tourism, social protection, and education, and is recognized for delivering practical, evidence-based solutions to strengthen systems and attract private investment in Ghana."
    },
  ];
  return (
    <main className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Meet Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {members.map((m) => (
          <div key={m.name} className="bg-white p-6 rounded-xl shadow text-center">
            <div className="font-bold text-lg mb-2">{m.name}</div>
            <div className="text-green-700 mb-2">{m.title}</div>
            <div className="text-gray-700 text-sm">{m.bio}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
