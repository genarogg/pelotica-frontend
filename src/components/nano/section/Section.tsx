import "./css/_section.scss";

interface SectionProps {
  id?: string;
  titulo: string;
}

const Section: React.FC<SectionProps> = ({ titulo, id = " " }) => {
  return (
    <div className="title-section">
      <a href={`#${id}`}>
        <label>{titulo}</label>
      </a>
    </div>
  );
};

export default Section;
