import {
  FaExternalLinkAlt,
  FaLinkedin,
  FaCertificate,
  FaCode,
} from "react-icons/fa";

const issuerIcons = {
  "LinkedIn Learning": <FaLinkedin className="text-blue-500" />,
  Anthropic: <FaCode className="text-purple-400" />,
  Scholarhat: <FaCertificate className="text-yellow-400" />,
  IBM: <FaCode className="text-blue-400" />,
};

const certificates = [
  {
    title: "HTML Essential Training (2020)",
    issuer: "LinkedIn Learning",
    image: "/certificates_pics/html_essential_trainning.jpeg",
    link: "https://www.linkedin.com/learning/certificates/46e0966106eab529b5491c7e189ebc6b06616e20b53246c2ef130f27a997c5c9?trk=share_certificate",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    image: "/certificates_pics/claude_101.jpeg",
    link: "https://verify.skilljar.com/c/sc2aux2uqxib",
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic",
    image: "/certificates_pics/claude_code_101.jpeg",
    link: "https://verify.skilljar.com/c/4eadqx3zp9jg",
  },
  {
    title: "Angular Foundations Course",
    issuer: "Scholarhat",
    credential_id: "BMM1130426",
    image: "/certificates_pics/angular_foundations_course.jpeg",
    link: "https://www.scholarhat.com/certificate/verify",
  },
  {
    title: "ReactJS Foundations Course",
    issuer: "Scholarhat",
    credential_id: "6EKU130426",
    image: "/certificates_pics/reactjs_foundation_course.jpeg",
    link: "https://www.scholarhat.com/certificate/verify",
  },
  {
    title: "MongoDB Foundation Course For Beginners",
    issuer: "Scholarhat",
    credential_id: "TEOC130426",
    image: "/certificates_pics/mongodb_foundation.jpeg",
    link: "https://www.scholarhat.com/certificate/verify",
  },
  {
    title: "React.js Essential Training",
    issuer: "LinkedIn Learning",
    image: "/certificates_pics/react.js_essential_trainning.jpeg",
    link: "https://www.linkedin.com/learning/certificates/bb4d25d107986b789874a3f00ba8ec7e10c2fcc0fd4d554b415ae2d3fdca6528?u=229219690",
  },
  {
    title: "Docker Foundations Professional Certificate",
    issuer: "LinkedIn Learning",
    image:
      "/certificates_pics/docker_foundations_professional_certificate.jpeg",
    link: "https://www.linkedin.com/learning/certificates/c3ae906699ec42603c23c24dbf3c647d76597ed85a80593b59d51eeb979097ab?u=229219690",
  },
  {
    title: "Docker Essentials: A Developer Introduction",
    issuer: "IBM",
    image: "/certificates_pics/docker_essentials_a_developer_introduction.jpeg",
    link: "https://courses.cognitiveclass.ai/certificates/24731c6c02ff4db687b1c768a03268b4",
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium uppercase tracking-wider animate-fade-in">
            Certificates
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground animate-fade-in animation-delay-200">
            My{" "}
            <span className="font-serif italic font-normal text-white">
              Certifications.
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              {/* Image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-5">
                <h3 className="text-lg font-semibold text-white">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-300">
                  {issuerIcons[cert.issuer] || <FaCertificate />}
                  {cert.issuer}
                </div>

                {/* Credential ID */}
                {cert.credential_id && (
                  <p className="text-xs text-gray-400 mt-1">
                    Credential ID: {cert.credential_id}
                  </p>
                )}

                {/* Link */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary mt-2"
                >
                  View Certificate <FaExternalLinkAlt />
                </a>
              </div>

              {/* Bottom Info */}
              <div className="p-4">
                <h3 className="text-base font-semibold text-secondary-foreground">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                  {issuerIcons[cert.issuer] || <FaCertificate />}
                  {cert.issuer}
                </div>

                {cert.credential_id && (
                  <p className="text-xs text-muted-foreground mt-1">
                    ID: {cert.credential_id}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
