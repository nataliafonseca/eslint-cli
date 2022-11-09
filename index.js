#! /usr/bin/env node

import fs from "fs";

import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import exec from "node-async-exec";

import { nodeJsEslintConfig } from "./configs/node-js.js";
import { nodeTsEslintConfig } from "./configs/node-ts.js";
import { prettierConfig } from "./configs/prettier.js";
import { reactJsEslintConfig } from "./configs/react-js.js";
import { reactTsEslintConfig } from "./configs/react-ts.js";

async function install(packageName) {
  try {
    if (answers.packageManager === "Yarn") {
      await exec({ cmd: `yarn add -D ${packageName}` });
    } else {
      await exec({ cmd: `npm i -D ${packageName}` });
    }
  } catch (err) {
    console.log(err);
  }
}

const answers = await inquirer.prompt([
  {
    name: "projectType",
    type: "list",
    message: "What type of project are you setting up?",
    choices: [
      "React - TypeScript",
      "React - JavaScript",
      "Node - TypeScript",
      "Node - JavaScript",
    ],
  },
  {
    name: "packageManager",
    type: "list",
    message: "What package manager are you using?",
    choices: ["Yarn", "npm"],
  },
]);

console.log();

const spinner = createSpinner("Installing required dependencies...").start();

fs.writeFileSync(".prettierrc.json", JSON.stringify(prettierConfig, null, 2));

if (answers.projectType === "React - TypeScript") {
  fs.writeFileSync(
    ".eslintrc.json",
    JSON.stringify(reactTsEslintConfig, null, 2)
  );

  await install(
    "eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-import eslint-import eslint-plugin-simple-import-sort eslint-import-resolver-alias eslint-plugin-promise typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-flowtype eslint-plugin-jsx-a11y"
  );
}

if (answers.projectType === "React - JavaScript") {
  fs.writeFileSync(
    ".eslintrc.json",
    JSON.stringify(reactJsEslintConfig, null, 2)
  );
  await install(
    "eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks"
  );
}

if (answers.projectType === "Node - TypeScript") {
  fs.writeFileSync(
    ".eslintrc.json",
    JSON.stringify(nodeTsEslintConfig, null, 2)
  );

  await install(
    "eslint prettier eslint-config-prettier eslint-plugin-prettier typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser"
  );
}

if (answers.projectType === "Node - JavaScript") {
  fs.writeFileSync(
    ".eslintrc.json",
    JSON.stringify(nodeJsEslintConfig, null, 2)
  );
  await install(
    "eslint prettier eslint-config-prettier eslint-plugin-prettier"
  );
}

spinner.success({ text: "Projeto configurado com sucesso!" });
