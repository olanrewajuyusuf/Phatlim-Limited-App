import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Your Next.js + TypeScript recommended rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Ignore specific files/folders
  {
    ignores: [
      "node_modules",
      ".next",
      "dist",
      "build",
      ".vercel",
      "coverage",
      "**/*.config.js",
      "**/*.config.mjs",
      "**/*.config.ts",
      "src/generated/**",
      "prisma/**", // Ignore Prisma generated code
    ],
  },

  // Optional rules overrides
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];

export default eslintConfig;
