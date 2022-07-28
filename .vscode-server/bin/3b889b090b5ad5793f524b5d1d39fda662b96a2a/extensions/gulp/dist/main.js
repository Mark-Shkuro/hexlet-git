(()=>{"use strict";var e={403:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var o,s,n,i,a,c=r(622),l=r(747),u=Object.prototype.toString;function d(e){return void 0!==e}function f(e){return"[object Number]"===u.call(e)}function p(e){return"[object String]"===u.call(e)}function g(e){return JSON.parse(l.readFileSync(e,"utf8"))}function h(e,t){return a&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===t.length?e:e.replace(/\{(\d+)\}/g,(function(e,r){var o=r[0],s=t[o],n=e;return"string"==typeof s?n=s:"number"!=typeof s&&"boolean"!=typeof s&&null!=s||(n=String(s)),n}))}function v(e){return function(t,r){for(var o=[],s=2;s<arguments.length;s++)o[s-2]=arguments[s];return f(t)?t>=e.length?void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: "+new Error("").stack):h(e[t],o):p(r)?(console.warn("Message "+r+" didn't get externalized correctly."),h(r,o)):void console.error("Broken localize call found. Stacktrace is\n: "+new Error("").stack)}}function m(e,t){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];return h(t,r)}function k(e,t){return n[e]=t,t}function w(e){try{return function(e){var t=g(c.join(e,"nls.metadata.json")),r=Object.create(null);for(var o in t){var s=t[o];r[o]=s.messages}return r}(e)}catch(e){return void console.log("Generating default bundle from meta data failed.",e)}}function b(e,t){var r;if(!0===i.languagePackSupport&&void 0!==i.cacheRoot&&void 0!==i.languagePackId&&void 0!==i.translationsConfigFile&&void 0!==i.translationsConfig)try{r=function(e,t){var r,o,s,n=c.join(i.cacheRoot,e.id+"-"+e.hash+".json"),a=!1,u=!1;try{return r=JSON.parse(l.readFileSync(n,{encoding:"utf8",flag:"r"})),o=n,s=new Date,l.utimes(o,s,s,(function(){})),r}catch(e){if("ENOENT"===e.code)u=!0;else{if(!(e instanceof SyntaxError))throw e;console.log("Syntax error parsing message bundle: "+e.message+"."),l.unlink(n,(function(e){e&&console.error("Deleting corrupted bundle "+n+" failed.")})),a=!0}}if(!(r=function(e,t){var r=i.translationsConfig[e.id];if(r){var o=g(r).contents,s=g(c.join(t,"nls.metadata.json")),n=Object.create(null);for(var a in s){var l=s[a],u=o[e.outDir+"/"+a];if(u){for(var d=[],f=0;f<l.keys.length;f++){var h=l.keys[f],v=u[p(h)?h:h.key];void 0===v&&(v=l.messages[f]),d.push(v)}n[a]=d}else n[a]=l.messages}return n}}(e,t))||a)return r;if(u)try{l.writeFileSync(n,JSON.stringify(r),{encoding:"utf8",flag:"wx"})}catch(e){if("EEXIST"===e.code)return r;throw e}return r}(e,t)}catch(e){console.log("Load or create bundle failed ",e)}if(!r){if(i.languagePackSupport)return w(t);var o=function(e){for(var t=i.locale;t;){var r=c.join(e,"nls.bundle."+t+".json");if(l.existsSync(r))return r;var o=t.lastIndexOf("-");t=o>0?t.substring(0,o):void 0}if(void 0===t&&(r=c.join(e,"nls.bundle.json"),l.existsSync(r)))return r}(t);if(o)try{return g(o)}catch(e){console.log("Loading in the box message bundle failed.",e)}r=w(t)}return r}function F(e){if(!e)return m;var t=c.extname(e);if(t&&(e=e.substr(0,e.length-t.length)),i.messageFormat===o.both||i.messageFormat===o.bundle){var r=function(e){for(var t,r=c.dirname(e);t=c.join(r,"nls.metadata.header.json"),!l.existsSync(t);){var o=c.dirname(r);if(o===r){t=void 0;break}r=o}return t}(e);if(r){var s=c.dirname(r),u=n[s];if(void 0===u)try{var f=JSON.parse(l.readFileSync(r,"utf8"));try{var p=b(f,s);u=k(s,p?{header:f,nlsBundle:p}:null)}catch(e){console.error("Failed to load nls bundle",e),u=k(s,null)}}catch(e){console.error("Failed to read header file",e),u=k(s,null)}if(u){var h=e.substr(s.length+1).replace(/\\/g,"/"),w=u.nlsBundle[h];return void 0===w?(console.error("Messages for file "+e+" not found. See console for details."),function(){return"Messages not found."}):v(w)}}}if(i.messageFormat===o.both||i.messageFormat===o.file)try{var F=g(function(e){var t;if(i.cacheLanguageResolution&&t)t=t;else{if(a||!i.locale)t=".nls.json";else for(var r=i.locale;r;){var o=".nls."+r+".json";if(l.existsSync(e+o)){t=o;break}var s=r.lastIndexOf("-");s>0?r=r.substring(0,s):(t=".nls.json",r=null)}i.cacheLanguageResolution&&(t=t)}return e+t}(e));return Array.isArray(F)?v(F):d(F.messages)&&d(F.keys)?v(F.messages):(console.error("String bundle '"+e+"' uses an unsupported format."),function(){return"File bundle has unsupported format. See console for details"})}catch(e){"ENOENT"!==e.code&&console.error("Failed to load single file bundle",e)}return console.error("Failed to load message bundle for file "+e),function(){return"Failed to load message bundle. See console for details."}}!function(e){e.file="file",e.bundle="bundle",e.both="both"}(o=t.MessageFormat||(t.MessageFormat={})),function(e){e.is=function(e){var t=e;return t&&d(t.key)&&d(t.comment)}}(s||(s={})),function(){if(i={locale:void 0,languagePackSupport:!1,cacheLanguageResolution:!0,messageFormat:o.bundle},p(process.env.VSCODE_NLS_CONFIG))try{var e=JSON.parse(process.env.VSCODE_NLS_CONFIG);if(p(e.locale)&&(i.locale=e.locale.toLowerCase()),(!0===(t=e._languagePackSupport)||!1===t)&&(i.languagePackSupport=e._languagePackSupport),p(e._cacheRoot)&&(i.cacheRoot=e._cacheRoot),p(e._languagePackId)&&(i.languagePackId=e._languagePackId),p(e._translationsConfigFile)){i.translationsConfigFile=e._translationsConfigFile;try{i.translationsConfig=g(i.translationsConfigFile)}catch(t){e._corruptedFile&&l.writeFile(e._corruptedFile,"corrupted","utf8",(function(e){console.error(e)}))}}}catch(e){}var t;a="pseudo"===i.locale,n=Object.create(null)}(),t.loadMessageBundle=F,t.config=function(e){return e&&(p(e.locale)&&(i.locale=e.locale.toLowerCase(),n=Object.create(null)),void 0!==e.messageFormat&&(i.messageFormat=e.messageFormat)),a="pseudo"===i.locale,F}},129:e=>{e.exports=require("child_process")},747:e=>{e.exports=require("fs")},622:e=>{e.exports=require("path")},549:e=>{e.exports=require("vscode")}},t={};function r(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}var o={};(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.deactivate=e.activate=void 0;const t=r(622),s=r(747),n=r(129),i=r(549),a=r(403).loadMessageBundle(r(622).join(__dirname,"main.ts"));async function c(e){try{if((await s.promises.stat(e)).isFile())return!0}catch(e){return!1}return!1}const l=["build","compile","watch"];function u(e){for(const t of l)if(-1!==e.indexOf(t))return!0;return!1}const d=["test"];function f(e){for(const t of d)if(-1!==e.indexOf(t))return!0;return!1}let p,g;function h(){return p||(p=i.window.createOutputChannel("Gulp Auto Detection")),p}function v(){i.window.showWarningMessage(a(0,null),a(1,null)).then((e=>{void 0!==e&&p.show(!0)}))}async function m(e){const r=process.platform;if("win32"===r&&await c(t.join(e,"node_modules",".bin","gulp.cmd"))){const e=t.join(process.env.APPDATA?process.env.APPDATA:"","npm","gulp.cmd");return await c(e)?`"${e}"`:t.join(".","node_modules",".bin","gulp.cmd")}return"linux"!==r&&"darwin"!==r||!await c(t.join(e,"node_modules",".bin","gulp"))?"gulp":t.join(".","node_modules",".bin","gulp")}class k{constructor(e,t){this._workspaceFolder=e,this._gulpCommand=t}get workspaceFolder(){return this._workspaceFolder}isEnabled(){return"on"===i.workspace.getConfiguration("gulp",this._workspaceFolder.uri).get("autoDetect")}start(){const e=t.join(this._workspaceFolder.uri.fsPath,"{node_modules,gulpfile{.babel.js,.esm.js,.js,.mjs,.cjs,.ts}}");this.fileWatcher=i.workspace.createFileSystemWatcher(e),this.fileWatcher.onDidChange((()=>this.promise=void 0)),this.fileWatcher.onDidCreate((()=>this.promise=void 0)),this.fileWatcher.onDidDelete((()=>this.promise=void 0))}async getTasks(){return this.isEnabled()?(this.promise||(this.promise=this.computeTasks()),this.promise):[]}async getTask(e){const t=e.definition.task;if(t){const r=e.definition,o={cwd:this.workspaceFolder.uri.fsPath};return new i.Task(r,this.workspaceFolder,t,"gulp",new i.ShellExecution(await this._gulpCommand,[t],o))}}async hasGulpfile(e){for(const r of await s.promises.readdir(e)){const e=t.extname(r);if(".js"!==e&&".mjs"!==e&&".cjs"!==e&&".ts"!==e)continue;if(!c(r))continue;const o=t.basename(r,e).toLowerCase();if("gulpfile"===o)return!0;if("gulpfile.esm"===o)return!0;if("gulpfile.babel"===o)return!0}return!1}async computeTasks(){const e="file"===this._workspaceFolder.uri.scheme?this._workspaceFolder.uri.fsPath:void 0,t=[];if(!e)return t;if(!await this.hasGulpfile(e))return t;const r=`${await this._gulpCommand} --tasks-simple --no-color`;try{const{stdout:t,stderr:a}=await(o=r,s={cwd:e},new Promise(((e,t)=>{n.exec(o,s,((r,o,s)=>{r&&t({error:r,stdout:o,stderr:s}),e({stdout:o,stderr:s})}))})));if(a&&a.length>0){const e=a.split("\n");e.pop(),e.every((e=>e.indexOf("No license field")>=0))||(h().appendLine(a),v())}const c=[];if(t){const e=t.split(/\r{0,1}\n/);for(const t of e){if(0===t.length)continue;const e={type:"gulp",task:t},r={cwd:this.workspaceFolder.uri.fsPath},o=new i.Task(e,this.workspaceFolder,t,"gulp",new i.ShellExecution(await this._gulpCommand,[t],r));c.push(o);const s=t.toLowerCase();u(s)?o.group=i.TaskGroup.Build:f(s)&&(o.group=i.TaskGroup.Test)}}return c}catch(e){const r=h();return e.stderr&&r.appendLine(e.stderr),e.stdout&&r.appendLine(e.stdout),r.appendLine(a(2,null,this.workspaceFolder.name,e.error?e.error.toString():"unknown")),v(),t}var o,s}dispose(){this.promise=void 0,this.fileWatcher&&this.fileWatcher.dispose()}}class w{constructor(){this.detectors=new Map}start(){const e=i.workspace.workspaceFolders;e&&this.updateWorkspaceFolders(e,[]),i.workspace.onDidChangeWorkspaceFolders((e=>this.updateWorkspaceFolders(e.added,e.removed))),i.workspace.onDidChangeConfiguration(this.updateConfiguration,this)}dispose(){this.taskProvider&&(this.taskProvider.dispose(),this.taskProvider=void 0),this.detectors.clear()}updateWorkspaceFolders(e,t){for(const e of t){const t=this.detectors.get(e.uri.toString());t&&(t.dispose(),this.detectors.delete(e.uri.toString()))}for(const t of e){const e=new k(t,m(t.uri.fsPath));this.detectors.set(t.uri.toString(),e),e.isEnabled()&&e.start()}this.updateProvider()}updateConfiguration(){for(const e of this.detectors.values())e.dispose(),this.detectors.delete(e.workspaceFolder.uri.toString());const e=i.workspace.workspaceFolders;if(e)for(const t of e)if(!this.detectors.has(t.uri.toString())){const e=new k(t,m(t.uri.fsPath));this.detectors.set(t.uri.toString(),e),e.isEnabled()&&e.start()}this.updateProvider()}updateProvider(){if(!this.taskProvider&&this.detectors.size>0){const e=this;this.taskProvider=i.tasks.registerTaskProvider("gulp",{provideTasks:()=>e.getTasks(),resolveTask:t=>e.getTask(t)})}else this.taskProvider&&0===this.detectors.size&&(this.taskProvider.dispose(),this.taskProvider=void 0)}getTasks(){return this.computeTasks()}computeTasks(){if(0===this.detectors.size)return Promise.resolve([]);if(1===this.detectors.size)return this.detectors.values().next().value.getTasks();{const e=[];for(const t of this.detectors.values())e.push(t.getTasks().then((e=>e),(()=>[])));return Promise.all(e).then((e=>{const t=[];for(const r of e)r&&r.length>0&&t.push(...r);return t}))}}async getTask(e){if(0!==this.detectors.size){if(1===this.detectors.size)return this.detectors.values().next().value.getTask(e);if(e.scope!==i.TaskScope.Workspace&&e.scope!==i.TaskScope.Global&&e.scope){const t=this.detectors.get(e.scope.uri.toString());if(t)return t.getTask(e)}}}}e.activate=function(e){g=new w,g.start()},e.deactivate=function(){g.dispose()}})();var s=exports;for(var n in o)s[n]=o[n];o.__esModule&&Object.defineProperty(s,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/3b889b090b5ad5793f524b5d1d39fda662b96a2a/extensions/gulp/dist/main.js.map