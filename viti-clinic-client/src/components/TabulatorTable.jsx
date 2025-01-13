import { createEffect } from "solid-js";
import { TabulatorFull as Tabulator } from "tabulator-tables";

function TabulatorTable(props) {
  let table;

  createEffect(() => {
    console.log(props);
    table = new Tabulator("#table", {
      data: props.data(),
      layout: "fitColumns",
      columns: props.columns,
    });
    return () => table.destroy();
  });

  return <div id="table" class="mt-4"></div>;
}
export default TabulatorTable;
