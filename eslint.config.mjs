import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.plugins("react-hooks", "import"),
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ),
  {
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // Node.js 내장 모듈 (e.g., fs, path)
            "external", // 외부 모듈 (e.g., react, lodash)
            "internal", // 절대 경로 모듈 (프로젝트 내부 모듈)
            ["parent", "sibling", "index"], // 상대 경로 모듈
            "object", // import 문에서 object 형태로 가져오는 경우 (옵션)
            "type", // 타입 임포트
            "unknown", // 알 수 없는 임포트
          ],
          "newlines-between": "always", // 각 그룹 내에서도 줄 바꿈 허용
          alphabetize: {
            order: "asc",
          },
        },
      ],
      "import/no-unresolved": "off",
    },
  },
];

export default eslintConfig;
