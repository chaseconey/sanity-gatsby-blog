export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb842dd649aed1aad75f269',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-hv4hvr4u',
                  apiId: '3b57bea8-04c4-4e95-97ca-5cb6f66a60e4'
                },
                {
                  buildHookId: '5fb842ddec6a9b23001f5db0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-y98dfvmf',
                  apiId: '9dd51fe4-bc7d-4c15-b864-7ab6c36af574'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chaseconey/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-y98dfvmf.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
