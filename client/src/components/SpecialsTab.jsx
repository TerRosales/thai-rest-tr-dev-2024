import { specials } from "./data";
import "../global.css";

const SpecialsTab = () => {
  const renderSpecials = () => {
    const sections = [];

    for (const category in specials) {
      const sectionContent = [];

      sectionContent.push(
        <p key={`${category}-title`} className="titleItem">
          {category}
        </p>
      );

      for (const subcategory in specials[category]) {
        const subCategoryContent = specials[category][subcategory];

        if (Array.isArray(subCategoryContent)) {
          sectionContent.push(
            <p key={`${category}-${subcategory}`}>
              <span className="mx-2">🔥</span>
              {subcategory}
            </p>
          );
          subCategoryContent.forEach((item, index) => {
            sectionContent.push(
              <p
                key={`${category}-${subcategory}-${index}`}
                className="textItem"
              >
                {item}
              </p>
            );
          });
        } else {
          sectionContent.push(
            <p key={`${category}-${subcategory}-title`} className="textItem">
              <span className="mx-2">🎉</span>
              {subcategory}
            </p>
          );
          sectionContent.push(
            <p key={`${category}-${subcategory}-date`} className="textItem">
              <span className="text-red-800">Date:</span>
              {subCategoryContent.date}
            </p>
          );
          sectionContent.push(
            <p key={`${category}-${subcategory}-description`}>
              <span className="text-red-800">Description:</span>{" "}
              {subCategoryContent.description}
            </p>
          );
        }
      }

      sections.push(<section key={category}>{sectionContent}</section>);
    }

    return sections;
  };

  return <div className="specialsTab">{renderSpecials()}</div>;
};

export default SpecialsTab;
