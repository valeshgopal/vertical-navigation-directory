const navigation = {
  isFolder: true,
  name: 'directory',
  contents: [
    {
      isFolder: true,
      name: 'public',
      contents: [{ isFolder: false, name: 'index.html', contents: null }],
    },
    {
      isFolder: true,
      name: 'src',
      contents: [
        {
          isFolder: true,
          name: 'App',
          contents: [
            { isFolder: false, name: 'App.js', contents: null },
            { isFolder: false, name: 'App.css', contents: null },
            { isFolder: false, name: 'index.js', contents: null },
          ],
        },
        {
          isFolder: true,
          name: 'Components',
          contents: [
            { isFolder: false, name: 'CompA.js', contents: null },
            { isFolder: false, name: 'CompB.js', contents: null },
          ],
        },
      ],
    },
    {
      isFolder: true,
      name: 'node_modules',
      contents: [
        {
          isFolder: true,
          name: 'react',
          contents: [
            {
              isFolder: true,
              name: 'react-router-dom',
              contents: [
                { isFolder: false, name: 'BrowserRouter', contents: null },
                { isFolder: false, name: 'Routes', contents: null },
                { isFolder: false, name: 'Link', contents: null },
              ],
            },
            {
              isFolder: true,
              name: 'react-dom',
              contents: [
                {
                  isFolder: true,
                  name: 'cjs',
                  contents: [
                    {
                      isFolder: false,
                      name: 'react-dom-server',
                      contents: null,
                    },
                  ],
                },
                {
                  isFolder: true,
                  name: 'umd',
                  contents: [
                    {
                      isFolder: false,
                      name: 'react-dom-uitls',
                      contents: null,
                    },
                  ],
                },
                {
                  isFolder: false,
                  name: 'client.js',
                  contents: null,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default navigation;
