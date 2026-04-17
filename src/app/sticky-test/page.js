import "./test.css";

export default function Page() {
  return (
    <>
      <div className="header">
        <h1>TEST STICKY</h1>
        <p>Se questo non funziona, il problema è nel browser o build</p>
      </div>

      <div className="wrapper">
        <div className="row">

          <div className="left">
            {Array.from({ length: 60 }).map((_, i) => (
              <p key={i}>Contenuto scroll {i + 1}</p>
            ))}
          </div>

          <div className="right">
            <div className="sticky">
              <h3>SIDEBAR STICKY</h3>
              <p>Questo deve restare fisso mentre scrolli</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}