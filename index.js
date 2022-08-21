#! /usr/bin/env node

import fs from "fs";

import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import exec from "node-async-exec";

import { prettierConfig } from "./configs/prettier.js";
import { reactJsEslintConfig } from "./configs/react-js.js";
import { reactTsEslintConfig } from "./configs/react-ts.js";

const answers = await inquirer.prompt([
  {
    name: "projectType",
    type: "list",
    message: "What type of project are you setting up?",
    choices: ["React - TypeScript", "React - JavaScript"],
  },
  {
    name: "packageManager",
    type: "list",
    message: "What package manager are you using?",
    choices: ["Yarn", "npm"],
  },
]);

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

async function handleDependenciesInstallation() {
  const spinner = createSpinner("Installing required dependencies...").start();

  await install("eslint");
  await install("prettier");
  await install("eslint-config-prettier");
  await install("eslint-plugin-prettier");

  if (answers.projectType === "React - TypeScript") {
    await install("typescript");
    await install("@typescript-eslint/eslint-plugin");
    await install("@typescript-eslint/parser");
    await install("eslint-plugin-react");
    await install("eslint-plugin-react-hooks");
    await install("eslint-plugin-react-perf");
  }

  if (answers.projectType === "React - JavaScript") {
    await install("eslint-plugin-react");
    await install("eslint-plugin-react-hooks");
    await install("eslint-plugin-react-perf");
  }

  spinner.success("Projeto configurado com sucesso!");
}

fs.writeFileSync(".prettierrc.json", JSON.stringify(prettierConfig, null, 2));

if (answers.projectType === "React - TypeScript" && answers.typescript) {
  fs.writeFileSync(
    ".eslintrc.json",
    JSON.stringify(reactTsEslintConfig, null, 2)
  );
}

if (answers.projectType === "React - JavaScript" && answers.typescript) {
  fs.writeFileSync(
    ".eslintrc.json",
    JSON.stringify(reactJsEslintConfig, null, 2)
  );
}

handleDependenciesInstallation();
