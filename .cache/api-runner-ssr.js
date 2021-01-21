var plugins = [{
      plugin: require('F:/reactproject/me_qprofile_module_create_profile_stub-master/profile-frontend/node_modules/gatsby-plugin-next-seo/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('F:/reactproject/me_qprofile_module_create_profile_stub-master/profile-frontend/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('F:/reactproject/me_qprofile_module_create_profile_stub-master/profile-frontend/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"transpileTemplateLiterals":true,"pure":false},
    },{
      plugin: require('F:/reactproject/me_qprofile_module_create_profile_stub-master/profile-frontend/node_modules/gatsby-plugin-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":["Inter:300,400,600,700,800,900"],"display":"swap"},
    },{
      plugin: require('F:/reactproject/me_qprofile_module_create_profile_stub-master/profile-frontend/node_modules/gatsby-plugin-favicon/gatsby-ssr'),
      options: {"plugins":[],"logo":"./static/favicon/favicon-512.png","injectHTML":true,"icons":{"android":true,"appleIcon":true,"appleStartup":true,"coast":false,"favicons":true,"firefox":true,"twitter":false,"yandex":false,"windows":false}},
    },{
      plugin: require('F:/reactproject/me_qprofile_module_create_profile_stub-master/profile-frontend/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"short_name":"starter","start_url":"/","display":"minimal-ui","icon":"./static/favicon/favicon-512.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"b57aaefed6f6f6be9a3511c8fe06fe2e"},
    },{
      plugin: require('F:/reactproject/me_qprofile_module_create_profile_stub-master/profile-frontend/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('F:/reactproject/me_qprofile_module_create_profile_stub-master/profile-frontend/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
