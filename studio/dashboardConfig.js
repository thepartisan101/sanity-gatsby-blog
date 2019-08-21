export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d5d288af6b077229eb66e0f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pq4xsghe',
                  apiId: 'c677c67f-8a0a-47d6-bd2d-459104390809'
                },
                {
                  buildHookId: '5d5d288ad271c09839a27f9f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-b3rp9tan',
                  apiId: 'eb9eb001-8238-4c8b-bd1b-024b96b2ab9c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thepartisan101/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-b3rp9tan.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
