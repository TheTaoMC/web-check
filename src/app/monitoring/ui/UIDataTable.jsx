import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function UIDataTable({ values }) {
  const columns = [
    { field: "JobCode", header: "Job No." },
    {
      field: "JobDate",
      header: "วันที่สั่ง",
      body: (rowData) => {
        const currentDate = new Date(rowData.JobDate);
        const options = { day: "2-digit", month: "2-digit", year: "numeric" };
        const formattedDate = currentDate.toLocaleDateString("th-TH", options); // แปลงเป็นรูปแบบวันที่ที่ต้องการ
        return formattedDate;
      },
    },
    { field: "FormulaDescription1", header: "ชื่อสูตร" },
    { field: "TotalBatch", header: "จำนวน Batch" },
    {
      field: "WeightFinishBatch",
      header: "Batch ที่เสร็จ",
      /*       body: (rowData) => {
        console.log(rowData);
        return rowData.WeightFinishBatch === 0 ? "ใช้งาน" : "ยกเลิก";
      }, */
    },
  ];

  /*   const rowClassName = (rowData) =>
    rowData.JobCheckStatus === null || rowData.JobCheckStatus === ""
      ? "bg-white hover:bg-white hover:font-semibold"
      : rowData.JobCheckStatus === "FINISH"
      ? "bg-green-300 hover: hover:font-semibold"
      : "bg-yellow-300 hover: hover:font-semibold"; */

  const rowClassName = (rowData) => {
    if (rowData.JobCheckStatus === null || rowData.JobCheckStatus === "") {
      return "bg-white hover:bg-white hover:font-semibold";
    } else if (rowData.JobCheckStatus === "FINISH") {
      return "bg-green-300 hover:font-semibold";
    } else {
      return "bg-yellow-300 hover:font-semibold";
    }
  };
  return (
    <div className="car ">
      <DataTable
        value={values}
        tableStyle={{ minWidth: "50rem" }}
        scrollable
        scrollHeight="90vh"
        paginator
        rows={10}
        size={"small"}
        selectionMode="single"
        rowClassName={rowClassName}
      >
        {columns.map((e, i) => (
          <Column
            key={i}
            field={e.field}
            header={e.header}
            body={e.body}
            /* className={`${e.WeightFinishBatch > "0" ? 'bg-red-500' : 'bg-green-500'}`}  */
          />
        ))}
      </DataTable>
    </div>
  );
}

export default UIDataTable;
