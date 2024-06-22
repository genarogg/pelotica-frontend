interface FormProps {
  children: React.ReactNode;
  submit: (event: React.FormEvent<HTMLFormElement>) => void;
  css?: string;
  titulo?: string;
}

const Form: React.FC<FormProps> = ({ children, submit, css, titulo }) => {
  return (
    <form
      className={`container-form ${css}`}
      onSubmit={(e) => {
        submit(e);
      }}
    >
      {titulo && <h3 className="title">{titulo}</h3>}
      {children}
    </form>
  );
};

export default Form;
