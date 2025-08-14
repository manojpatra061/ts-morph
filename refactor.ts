import { Project, SyntaxKind } from "ts-morph";

const project = new Project();
const originalFile = project.addSourceFileAtPath("src/index.ts");

// making a copy of original file so the original remains unchanged
const sourceFile = originalFile.copy('newIndex.ts')
const sumFun = sourceFile.getFunctionOrThrow("sum");

// add a new parameter
sumFun.addParameter({ name: "c", type: "number" });

// get the return statement
const returnStmt = sumFun
  .getBodyOrThrow()
  .getFirstDescendantByKindOrThrow(SyntaxKind.ReturnStatement);

// change the return statement
returnStmt.replaceWithText("return a + b + c;");

// save changes
sourceFile.saveSync();

console.log("✅ Updated sum function to take 3 parameters!");
