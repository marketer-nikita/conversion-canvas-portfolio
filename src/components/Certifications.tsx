import React from "react";
import { Award, ExternalLink } from "lucide-react";
import { certificationsConfig } from "@/config/certifications";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-recognized certifications from leading marketing platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsConfig.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg flex items-center justify-center">
                    <img
                      src={cert.logo}
                      alt={cert.platform}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-500 transition-colors duration-200">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-gray-600">{cert.platform}</p>
                  </div>
                </div>
                {cert.verified && (
                  <div className="flex items-center text-green-500">
                    <Award className="w-5 h-5 mr-1" />
                    <span className="text-sm font-medium">Verified</span>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-br from-pink-50 to-purple-50 rounded-full text-sm text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm text-pink-500 hover:text-pink-600 transition-colors duration-200"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
