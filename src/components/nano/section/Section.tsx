interface SectionProps {
  id?: string;
  titulo: string;
  css?: string;
}

const Section: React.FC<SectionProps> = ({ titulo, id = " ", css = " " }) => {
  return (
    <div className={`title-section ${css}`} style={{ position: "relative" }}>
      {id && (
        <div
          id={id}
          style={{
            position: "absolute",
            top: "-90px",
            left: "0",
            height: "100px",
            width: "100%",
            pointerEvents: "none",
            zIndex: -10000000,
          }}
        />
      )}
      <a>
        <label>{titulo}</label>
      </a>
    </div>
  );
};

export default Section;
