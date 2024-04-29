import { NextResponse, NextRequest } from "next/server";
const { pool } = require("../../../db/db.config");

export async function GET() {
  try {
    await pool.connect();

    const results = await pool.request().query(`
    select j.DataID as JobDataID, j.JobCode, j.JobDate, bf.DataID as BatchFormulaDataID, bf.FormulaDescription1, count(*) as TotalBatch
    , COUNT(CASE WHEN UPPER(jb.JobBatchStatus) = 'FINISH' THEN 1 END) as WeightFinishBatch
    , COUNT(CASE WHEN UPPER(jb.JobBatchCheckStatus) = 'FINISH' THEN 1 END) as CheckFinishBatch
    from Job j, JobBatch jb, BatchFormula bf
    where j.DataID = jb.JobDataID
    and jb.BatchFormulaDataID = bf.DataID
    and j.IsCurrent = 'Y' and j.IsActive = 'Y'
    and jb.IsCurrent = 'Y' and jb.IsActive = 'Y'
    and bf.IsCurrent = 'Y' and bf.IsActive = 'Y'
    and j.JobDate > (GETDATE() - 30)
    and ((UPPER(j.JobCheckStatus) <> 'FINISH') or ((j.JobCheckStatus IS NULL) or (j.JobCheckStatus = '')) or (CAST(j.JobCheckTime AS DATE) = CAST(GETDATE() AS DATE)))
    group by j.DataID, j.JobCode, j.JobDate, bf.DataID, bf.FormulaDescription1
    order by j.JobDate, j.JobCode, bf.FormulaDescription1    
                    `);

    return NextResponse.json({ data: results.recordset }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    pool.close();
  }
}

export async function POST(req, res) {
  const { LogInName, LogInPassword } = await req.json();

  console.log(LogInName);
  console.log(LogInPassword);

  // Check if LogInName and LogInPassword are defined
  if (!LogInName || !LogInPassword) {
    return NextResponse.json(
      { error: "LogInName and LogInPassword are required" },
      { status: 400 }
    );
  }

  try {
    await pool.connect();

    const results = await pool.request().query(`
            Select UserLogIn.DataID, UserLogIn.LogInName, UserLogIn.LogInPassword, UserRole.UserRoleCode
            From UserLogIn, UserRole
            Where UserLogIn.IsCurrent = 'Y' and 
            UserLogIn.IsActive = 'Y' and 
            UserLogIn.UserRoleDataID = UserRole.DataID and 
            UserRole.IsCurrent = 'Y' and 
            UserRole.IsActive = 'Y'   and 
            UserLogIn.LogInName = '${LogInName}' and 
            UserLogIn.LogInPassword = '${LogInPassword}'
                        `);

    return NextResponse.json({ data: results.recordset }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    pool.close();
  }
}
