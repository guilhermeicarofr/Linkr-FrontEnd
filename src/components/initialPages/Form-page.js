import InitialPages from "../../styles/commons/InitialPages";

export default function FormPage({ children }) {
  return (
    <InitialPages>
      <div>
        <p>linkr</p>
        <p>
          save, share and discover <br />
          the best links on the web
        </p>
      </div>
      <div>{children}</div>
    </InitialPages>
  );
}
