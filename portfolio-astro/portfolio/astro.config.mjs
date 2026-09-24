import { defineConfig } from "astro/config";

// ⚠️ À adapter avant de déployer :
// - site : ton URL GitHub Pages (ex: "https://fellabennounas.github.io")
// - base : le nom de ton dépôt précédé d'un slash (ex: "/portfolio")
//   Si ton dépôt s'appelle exactement "TONPSEUDO.github.io", laisse base à "/"
export default defineConfig({
  site: "https://fellabennounas.github.io",
  base: "/portfolio",
});
