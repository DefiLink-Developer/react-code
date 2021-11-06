import "./Error.scss";

const Error = () => {
  let mainHeading = (
    <h2 className="heading-small mb-3 mb-lg-5 mb-md-3">
      Oops!This page is not found
    </h2>
  );
  return (
    <section className="contect-section">
      <section className="section-space text-center">{mainHeading}</section>
    </section>
  );
};

export default Error;
