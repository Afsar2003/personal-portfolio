import { Trophy } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    period: "2024 - 2025",
    role: "Vice Chancellor's Award",
    description: "Outstanding Student Contribution.",
  },
  {
    icon: Trophy,
    period: "2023 - 2024",
    role: "Vice Chancellor's Award",
    description: "Best Student Contribution.",
  },
  {
    icon: Trophy,
    period: "2022 - 2023",
    role: "Vice Chancellor's Award",
    description: "Best Student Contribution.",
  },
  {
    icon: Trophy,
    period: "2021 - 2022",
    role: "Vice Chancellor's Award",
    description: "Overall Performance.",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium uppercase tracking-wider animate-fade-in">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground ">
            My{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              Accomplishments.
            </span>
          </h2>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Icon size={22} />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground font-medium tracking-wide">
                    {item.period}
                  </span>
                  <h3 className="text-lg font-semibold mt-1 text-secondary-foreground">
                    {item.role}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
