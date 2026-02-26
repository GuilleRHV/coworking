import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";
import "../App.css";


function Stats() {
  const machinesRef = useRef(null);
  const clientsRef = useRef(null);
  const spacesRef = useRef(null);

  useEffect(() => {
    const countMachinesUp = new CountUp(machinesRef.current, 120, {
      startVal: 0,
      duration: 2.5,
      prefix: "> ",
      suffix: " Máquinas a tu disposición",
    });

    const countClientsUp = new CountUp(clientsRef.current, 750, {
      startVal: 0,
      duration: 2.5,
      prefix: "> ",
      suffix: " Clientes satisfechos",
    });

    const countSpacesUp = new CountUp(spacesRef.current, 40, {
      startVal: 0,
      duration: 2,
      suffix: " Espacios de trabajo",
    });

    countMachinesUp.start();
    countClientsUp.start();
    countSpacesUp.start();
  }, []);

  return (
    <div className="container py-5">
      <div className="row justify-content-center g-4 stats-cards">

        <div className="col-12 col-md-4">
          <div className="card shadow-sm border-0 rounded-4 text-center p-4">
            <h2 className="fw-bold stats-fonts" ref={machinesRef}></h2>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card shadow-sm border-0 rounded-4 text-center p-4">
            <h2 className="fw-bold stats-fonts" ref={clientsRef}></h2>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card shadow-sm border-0 rounded-4 text-center p-4">
            <h2 className="fw-bold stats-fonts" ref={spacesRef}></h2>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;