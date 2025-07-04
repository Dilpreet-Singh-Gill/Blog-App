import React from "react";

export default function TeamSection() {
  const team = [
    { name: "Alice Smith", role: "React Developer" },
    { name: "Bob Johnson", role: "Backend Engineer" },
    { name: "Sara Lee", role: "Content Creator" },
    { name: "David Kim", role: "UI/UX Designer" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-teal-500 flex items-center justify-center text-white text-xl font-bold">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
