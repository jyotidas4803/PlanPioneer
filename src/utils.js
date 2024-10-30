import shortUUID from "short-uuid";
import  startCase  from "lodash/startCase";
import  lowerCase  from "lodash/lowerCase";
import { sortBy } from "lodash";
console.log(startCase("my name is jyoti"))

export function titleCase(str) {
    return startCase(lowerCase(str))
  }


  export function randomUd(){
    return shortUUID.generate();
  }

  // state=sortBy("state", isCompleted)