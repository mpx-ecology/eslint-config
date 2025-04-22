import type { Linter } from 'eslint'
import type { ConfigNames, RuleOptions } from './typegen'
import type { ParserOptions } from '@typescript-eslint/parser'

export interface Rules extends RuleOptions {}
export type { ConfigNames }
export type Awaitable<T> = T | Promise<T>
export type TypedFlatConfigItem = Omit<Linter.Config<Linter.RulesRecord & Rules>, 'plugins'> & {
  // Relax plugins type limitation, as most of the plugins did not have correct type info yet.
  /**
   * An object containing a name-value mapping of plugin names to plugin objects. When `files` is specified, these plugins are only available to the matching files.
   *
   * @see [Using plugins in your configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-plugins-in-your-configuration)
   */
  plugins?: Record<string, any>
}
export interface OptionsHasTypeScript {
  typescript?: boolean
}
export interface OptionsOverrides {
  overrides?: TypedFlatConfigItem['rules']
}
export interface OptionsFiles {
  /**
   * Override the `files` option to provide custom globs.
   */
  files?: string[]
}
export interface OptionsMpx extends OptionsOverrides {
  type?:  'compositionApi' | 'options'
}
export interface OptionsVue extends OptionsOverrides {
  /**
   * Vue version. Apply different rules set from `eslint-plugin-vue`.
   *
   * @default 3
   */
  vueVersion?: 2 | 3
}
export interface OptionsConfig {
  javascript?: OptionsOverrides
  typescript?: boolean | OptionsFiles & OptionsOverrides
  mpx?: boolean | OptionsMpx
  vue?: boolean | OptionsVue
  wxs?: boolean
  /**
   * Provide overrides for rules for each integration.
   *
   * @deprecated use `overrides` option in each integration key instead
   */
  overrides?: {
    javascript?: TypedFlatConfigItem['rules']
    typescript?: TypedFlatConfigItem['rules']
    mpx?: TypedFlatConfigItem['rules']
  }
}
export interface OptionsTypeScriptWithTypes {
  /**
   * When this options is provided, type aware rules will be enabled.
   * @see https://typescript-eslint.io/linting/typed-linting/
   */
  tsconfigPath?: string

  /**
   * Override type aware rules.
   */
  overridesTypeAware?: TypedFlatConfigItem['rules']
}
export interface OptionsTypeScriptParserOptions {
  /**
   * Additional parser options for TypeScript.
   */
  parserOptions?: Partial<ParserOptions>

  /**
   * Glob patterns for files that should be type aware.
   * @default ['**\/*.{ts,tsx}']
   */
  filesTypeAware?: string[]

  /**
   * Glob patterns for files that should not be type aware.
   * @default ['**\/*.md\/**', '**\/*.astro/*.ts']
   */
  ignoresTypeAware?: string[]
}
export type OptionsTypescript =
  (OptionsTypeScriptWithTypes & OptionsOverrides)
  | (OptionsTypeScriptParserOptions & OptionsOverrides)