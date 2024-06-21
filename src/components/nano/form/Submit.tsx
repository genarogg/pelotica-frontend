interface SubmitProps {
  loading: boolean;
}

const Submit: React.FC<SubmitProps> = ({ loading }) => {
  return (
    <div className="submit-container">
      <button type="submit" disabled={loading}>
        Enviar
      </button>
    </div>
  );
};

export default Submit;
