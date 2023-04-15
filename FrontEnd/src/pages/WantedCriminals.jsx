import React from "react";
import { ColumnsDirective } from "@syncfusion/ej2-react-kanban";
import { Header } from "../components";

const WantedCriminals = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Other Options" title="Wanted Criminals" />

    <ColumnsDirective />
  </div>
);
export default WantedCriminals;
