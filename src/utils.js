// short-uuid, uuid
import shortUUID from "short-uuid";
import startCase from "lodash/startCase";
import lowerCase from "lodash/lowerCase";

console.log(startCase("hey there how are you"));

export function titleCase(str) {
  return startCase(lowerCase(str));
}

export function randomID() {
  return shortUUID.generate();
}