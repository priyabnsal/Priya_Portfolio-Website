const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("F:\\reactproject\\me_qprofile_module_create_profile_stub-master\\profile-frontend\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("F:\\reactproject\\me_qprofile_module_create_profile_stub-master\\profile-frontend\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("F:\\reactproject\\me_qprofile_module_create_profile_stub-master\\profile-frontend\\src\\pages\\index.js")))
}

