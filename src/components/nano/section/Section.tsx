interface SectionProps {
  id?: string;
  titulo: string;
  css?: string;
}

const Section: React.FC<SectionProps> = ({ titulo, id = " ", css = " " }) => {
  return (
    <div className={`title-section ${css}`}>
      <a href={`#${id}`}>
        <label>{titulo}</label>
      </a>
    </div>
  );
};

export default Section;
