import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    "@stylistic/semi": ["error", "always"],

  }
})
  .append( {
    rules: {
      'vue/block-tag-newline': ["error",
        { "singleline": "always", }
      ],
    }

  })
