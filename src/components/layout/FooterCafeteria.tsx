const FooterCafeteria = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer-cafeteria">
      <div className="container">
        <address>
          <strong>Victor Hugo Aguiar Porfiro</strong>
          <br />
          {anoAtual} &mdash; Desenvolvimento de Software WEB
          <br />
          Prof. Alexandre Cláudio de Almeida &mdash; Escola Politécnica
        </address>
      </div>
    </footer>
  );
};

export default FooterCafeteria;
