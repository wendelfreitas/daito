import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "@ascendio/eslint-config/react-internal.js",
    "plugin:storybook/recommended",
), {
    languageOptions: {
        globals: {
            ...globals.jest,
            ...globals.browser,
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "commonjs",

        parserOptions: {
            project: "./tsconfig.lint.json",
            tsconfigRootDir: "/Users/wendel/Projects/Wendel/daito/packages/ui",
        },
    },

    rules: {
        "no-redeclare": ["error", {
            builtinGlobals: false,
        }],
    },
}];