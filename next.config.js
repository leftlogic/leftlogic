const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  // target: 'serverless',
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  // exportPathMap: function() {
  //   return {
  //     '/': { page: '/' },
  //     '/about': { page: '/about' },
  //     '/contact': { page: '/contact' },
  //     '/thanks': { page: '/thanks' },
  //     '/training': { page: '/training' },
  //     '/training/debug': { page: '/training/debug' },
  //     '/training/mobile': { page: '/training/mobile' },
  //     '/training/node': { page: '/training/node' },
  //     '/training/html': { page: '/training/html' },
  //     '/training/react': { page: '/training/react' },
  //     '/training/whynode': { page: '/training/whynode' },
  //     '/404': { page: '/404' },
  //   };
  // },
});
