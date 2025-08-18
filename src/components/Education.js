import React from "react";

function Education(props) {
  const { education, basic_info } = props;
  if (!education || !basic_info) return null;
  return (
    <section id="education">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title">
            <span>
              {basic_info.section_name && basic_info.section_name.education ? basic_info.section_name.education : "Education"}
            </span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        {education.map((edu, idx) => (
          <div key={idx} className="education-card">
            <h3>{edu.school}</h3>
            <h5>{edu.degree}</h5>
            <div className="edu-years">{edu.years}</div>
            <ul>
              {edu.details && edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
