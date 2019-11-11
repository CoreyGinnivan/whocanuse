import React from "react";
import { PassFailTextWrapper } from "./styled";

/*----------------------------------------------------------
   Vision Table
----------------------------------------------------------*/
export function renderPassFail(pass) {
  return pass ? (
    <PassFailTextWrapper pass={pass}>Pass</PassFailTextWrapper>
  ) : (
    <PassFailTextWrapper pass={pass}>Fail</PassFailTextWrapper>
  );
}
