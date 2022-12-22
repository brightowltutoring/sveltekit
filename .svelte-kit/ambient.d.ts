
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const MANPATH: string;
	export const alfred_theme_background: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const GEM_HOME: string;
	export const TERM: string;
	export const SHELL: string;
	export const npm_config_metrics_registry: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const npm_config_global_prefix: string;
	export const CONDA_SHLVL: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const TERM_PROGRAM_VERSION: string;
	export const alfred_preferences_localhash: string;
	export const ZDOTDIR: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const MallocNanoZone: string;
	export const COLOR: string;
	export const npm_config_noproxy: string;
	export const npm_config_local_prefix: string;
	export const ZSH: string;
	export const alfred_version_build: string;
	export const USER: string;
	export const COMMAND_MODE: string;
	export const npm_config_globalconfig: string;
	export const CONDA_EXE: string;
	export const alfred_version: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const alfred_preferences: string;
	export const npm_execpath: string;
	export const alfred_theme_selection_background: string;
	export const PAGER: string;
	export const _CE_CONDA: string;
	export const LSCOLORS: string;
	export const alfred_theme_subtext: string;
	export const PATH: string;
	export const npm_package_json: string;
	export const _: string;
	export const LaunchInstanceID: string;
	export const npm_config_userconfig: string;
	export const npm_config_init_module: string;
	export const USER_ZDOTDIR: string;
	export const CONDA_PREFIX: string;
	export const __CFBundleIdentifier: string;
	export const npm_command: string;
	export const PWD: string;
	export const JAVA_HOME: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const XPC_FLAGS: string;
	export const RUBY_ENGINE: string;
	export const npm_config_node_gyp: string;
	export const npm_package_version: string;
	export const _CE_M: string;
	export const XPC_SERVICE_NAME: string;
	export const VSCODE_INJECTION: string;
	export const HOME: string;
	export const SHLVL: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const GEM_ROOT: string;
	export const HOMEBREW_PREFIX: string;
	export const npm_config_cache: string;
	export const CONDA_PYTHON_EXE: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const npm_lifecycle_script: string;
	export const GEM_PATH: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const LC_CTYPE: string;
	export const RUBY_ROOT: string;
	export const CONDA_DEFAULT_ENV: string;
	export const alfred_workflow_uid: string;
	export const npm_config_user_agent: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const GIT_ASKPASS: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const alfred_workflow_name: string;
	export const RUBYOPT: string;
	export const RUBY_VERSION: string;
	export const SECURITYSESSIONID: string;
	export const alfred_theme: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const COLORTERM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_FIREBASE_apiKey: string;
	export const PUBLIC_FIREBASE_authDomain: string;
	export const PUBLIC_FIREBASE_projectId: string;
	export const PUBLIC_FIREBASE_storageBucket: string;
	export const PUBLIC_FIREBASE_messagingSenderId: string;
	export const PUBLIC_FIREBASE_appId: string;
	export const PUBLIC_STRIPE_KEY: string;
	export const PUBLIC_UPLOAD_ENDPOINT: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		MANPATH: string;
		alfred_theme_background: string;
		TERM_PROGRAM: string;
		NODE: string;
		INIT_CWD: string;
		GEM_HOME: string;
		TERM: string;
		SHELL: string;
		npm_config_metrics_registry: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		npm_config_global_prefix: string;
		CONDA_SHLVL: string;
		CONDA_PROMPT_MODIFIER: string;
		TERM_PROGRAM_VERSION: string;
		alfred_preferences_localhash: string;
		ZDOTDIR: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		MallocNanoZone: string;
		COLOR: string;
		npm_config_noproxy: string;
		npm_config_local_prefix: string;
		ZSH: string;
		alfred_version_build: string;
		USER: string;
		COMMAND_MODE: string;
		npm_config_globalconfig: string;
		CONDA_EXE: string;
		alfred_version: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		alfred_preferences: string;
		npm_execpath: string;
		alfred_theme_selection_background: string;
		PAGER: string;
		_CE_CONDA: string;
		LSCOLORS: string;
		alfred_theme_subtext: string;
		PATH: string;
		npm_package_json: string;
		_: string;
		LaunchInstanceID: string;
		npm_config_userconfig: string;
		npm_config_init_module: string;
		USER_ZDOTDIR: string;
		CONDA_PREFIX: string;
		__CFBundleIdentifier: string;
		npm_command: string;
		PWD: string;
		JAVA_HOME: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		npm_package_name: string;
		LANG: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		XPC_FLAGS: string;
		RUBY_ENGINE: string;
		npm_config_node_gyp: string;
		npm_package_version: string;
		_CE_M: string;
		XPC_SERVICE_NAME: string;
		VSCODE_INJECTION: string;
		HOME: string;
		SHLVL: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		GEM_ROOT: string;
		HOMEBREW_PREFIX: string;
		npm_config_cache: string;
		CONDA_PYTHON_EXE: string;
		LESS: string;
		LOGNAME: string;
		npm_lifecycle_script: string;
		GEM_PATH: string;
		VSCODE_GIT_IPC_HANDLE: string;
		LC_CTYPE: string;
		RUBY_ROOT: string;
		CONDA_DEFAULT_ENV: string;
		alfred_workflow_uid: string;
		npm_config_user_agent: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		GIT_ASKPASS: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		alfred_workflow_name: string;
		RUBYOPT: string;
		RUBY_VERSION: string;
		SECURITYSESSIONID: string;
		alfred_theme: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		COLORTERM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_FIREBASE_apiKey: string;
		PUBLIC_FIREBASE_authDomain: string;
		PUBLIC_FIREBASE_projectId: string;
		PUBLIC_FIREBASE_storageBucket: string;
		PUBLIC_FIREBASE_messagingSenderId: string;
		PUBLIC_FIREBASE_appId: string;
		PUBLIC_STRIPE_KEY: string;
		PUBLIC_UPLOAD_ENDPOINT: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
