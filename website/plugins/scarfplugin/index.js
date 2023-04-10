module.exports = function scarf(context, options) {
    const {siteConfig} = context;
    const {themeConfig} = siteConfig;
    const {scarf = {}} = themeConfig;
    const {trackingCode, domain} = options;
  
    if (!trackingCode || !domain) {
      throw new Error(
        `You need to specify 'trackingCode' and 'domain' properties in the options object when calling the Scarf plugin.`
      );
    }
  
    return {
      name: 'scarf-plugin',
      injectHtmlTags() {
        return {
          headTags: [
            {
              tagName: 'script',
              attributes: {
                src: `https://static.scarf.sh/a.js?tracking-code=${trackingCode}&domain=${domain}`,
                'data-domain': domain,
                async: true,
              },
            },
          ],
        };
      },
    };
  };
  