export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.git/**',
      '**/*.min.js',
      '**/*.d.ts'
    ]
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    rules: {
      'no-console': 'warn',
      'semi': ['error', 'never'],
      'quotes': ['error', 'single']
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: (await import('@typescript-eslint/parser')).default,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': (await import('@typescript-eslint/eslint-plugin')).default
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },
  {
    plugins: {
      vue: (await import('eslint-plugin-vue')).default
    }
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: (await import('vue-eslint-parser')).default,
      parserOptions: {
        parser: (await import('@typescript-eslint/parser')).default,
        sourceType: 'module',
        ecmaVersion: 'latest',
        extraFileExtensions: ['.vue']
      }
    }
  },
  {
    files: ['**/*.vue'],
    rules: {
      ...(await import('eslint-plugin-vue')).default.configs.base.rules,
      ...(await import('eslint-plugin-vue')).default.configs.essential.rules,
      ...(await import('eslint-plugin-vue')).default.configs.recommended.rules,
      'vue/comment-directive': 'off',
      'vue/no-multiple-template-root': 'off',
      'vue/html-self-closing': ['error', {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        }
      }],
      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'always'
      }],
      'vue/multi-word-component-names': 'off'
    }
  }
] 