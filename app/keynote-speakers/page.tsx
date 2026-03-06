import { HeroSection } from "@/components/hero-section";

export const metadata = {
  title: "Keynote Speakers | ICCoSD-26",
  description: "Meet the distinguished keynote speakers at ICCoSD-26.",
};

export default function KeynoteSpeakers() {
  const guests = {
    inaugural: [
      {
        role: "Chief Guest",
        name: "Mr. Varun Ranjan, IAS",
        position:
          "Managing Director, Jharkhand Industrial Infrastructure Development Corporation Ltd (JIIDCO), Dept of Industries",
      },
      {
        role: "Guest of Honour",
        name: "Prof. Saswat Chakrabarti",
        position:
          "Professor, GS Sanyal School of Telecommunications, IIT Kharagpur",
      },
    ],
    valedictory: [
      {
        role: "Chief Guest",
        name: "Ms. Nancy Sahay, IAS",
        position:
          "Managing Director, Jharkhand Industrial Infrastructure Development Corporation Ltd (JIIDCO), Dept of Industries",
      },
    ],
  };

  const invitedSpeakers25July = [
    {
      title: "Plenary Talk",
      name: "Prof. Saswat Chakrabarti",
      position:
        "Professor, GS Sanyal School of Telecommunications, IIT Kharagpur",
    },
    {
      title: "Invited Talk",
      name: "Prof. Preetam Kumar",
      position: "Professor, Department of Electrical Engineering, IIT Patna",
    },
    {
      title: "Invited Talk",
      name: "Prof. Xiao-Zhi Gao",
      position: "Professor in University of Eastern Finland, Finland (online)",
    },
  ];

  const invitedSpeakers26July = [
    {
      title: "Invited Talk",
      name: "Dr. Sumit Chakravarty",
      position: "Associate Professor, Kennesaw State University, USA (Online)",
    },
    {
      title: "Invited Talk",
      name: "Professor Ganapati Panda",
      position:
        "Professor and Research Advisor, C V Raman Global University, Bhubaneswar, India",
    },
    {
      title: "Invited Talk",
      name: "Dr. Rajeev Kumar Ranjan",
      position:
        "Associate Professor, Department of Electronics Engineering, Indian Institute of Technology (ISM), Dhanbad, Jharkhand India",
    },
    {
      title: "Invited Talk",
      name: "Dr. Manish Okade",
      position:
        "Associate Professor, Department of Electronics and Communication Engineering, National Institute of Technology (NIT), Rourkela, India-769008WB, India",
    },
    {
      title: "Invited Talk",
      name: "Prof. Suvra Sekhar Das",
      position:
        "Professor, G.S Sanyal School of Telecommunication, Indian Institute of Technology Kharagpur, WB, India",
    },
  ];

  return (
    <main>
      <HeroSection
        title="Keynote Speakers"
        subtitle="Distinguished voices in communication and smart devices"
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-12">
            {/* Inaugural */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Guest for Inaugural Ceremony
              </h2>
              <div className="space-y-4">
                {guests.inaugural.map((speaker, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-light-gray rounded-lg border-l-4 border-gold-accent"
                  >
                    <p className="text-sm font-semibold text-gold-accent uppercase tracking-wide mb-2">
                      {speaker.role}
                    </p>
                    <h3 className="text-lg font-bold text-primary mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-foreground/70">{speaker.position}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Valedictory */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Guest for Valedictory Ceremony
              </h2>
              <div className="space-y-4">
                {guests.valedictory.map((speaker, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-light-gray rounded-lg border-l-4 border-teal-accent"
                  >
                    <p className="text-sm font-semibold text-teal-accent uppercase tracking-wide mb-2">
                      {speaker.role}
                    </p>
                    <h3 className="text-lg font-bold text-primary mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-foreground/70">{speaker.position}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 1 Speakers */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Invited Speakers: 18th February 2026
              </h2>
              <div className="space-y-4">
                {invitedSpeakers25July.map((speaker, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500"
                  >
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                      {speaker.title}
                    </p>
                    <h3 className="text-lg font-bold text-primary mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-foreground/70">{speaker.position}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 2 Speakers */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Invited Speakers: 19th February 2026
              </h2>
              <div className="space-y-4">
                {invitedSpeakers26July.map((speaker, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-green-50 rounded-lg border-l-4 border-green-500"
                  >
                    <p className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">
                      {speaker.title}
                    </p>
                    <h3 className="text-lg font-bold text-primary mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-foreground/70">{speaker.position}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
