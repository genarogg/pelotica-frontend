interface FormProps {
  children: React.ReactNode;
  submit: (event: React.FormEvent<HTMLFormElement>) => void;
  css?: string;
}

const Form: React.FC<FormProps> = ({ children, submit, css }) => {
  return (
    <form
      className={`container-form ${css}`}
      onSubmit={(e) => {
        submit(e);
      }}
    >
      {children}
    </form>
  );
};

export default Form;
