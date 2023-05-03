module.exports = function scarf(context, options) {
  const { siteConfig } = context;
  const { themeConfig } = siteConfig;
  const { scarf = {} } = themeConfig;
  const { trackingCode, domain } = options;

  if (!trackingCode || !domain) {
    throw new Error(
      `You need to specify 'trackingCode' and 'domain' properties in the options object when calling the Scarf plugin.`
    );
  }

  if (process.env.VERCEL_ENV === 'production') {
    return {
      name: 'scarf-plugin',
      injectHtmlTags() {
        return {
          headTags: [
            {
              tagName: 'img',
              attributes: {
                src: `https://static.scarf.sh/a.png?x-pxid=${trackingCode}`,
                'data-domain': domain,
                async: true,
              },
            },
          ],
        };
      },
    };
  }

  return {};
};
