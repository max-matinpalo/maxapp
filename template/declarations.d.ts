/**
 * TYPE DEFINITIONS FOR NON-JS ASSETS
 * * We use the TypeScript compiler (tsc) to perform type-checking and provide 
 * IntelliSense for our JavaScript codebase via jsconfig.json.
 * * Because the compiler does not natively understand how to "read" non-JS 
 * files, these declarations prevent "Module not found" errors and allow 
 * us to import assets (CSS, Images, SVGs) as valid modules.
 */


declare module "*.module.css";
declare module "*.css";
declare module "*.svg";
declare module "*.json";
declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";