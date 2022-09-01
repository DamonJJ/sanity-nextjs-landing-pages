export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6310dfd9fb8ed5210af6a5eb',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-j3di6kfc',
                  apiId: 'a3e37294-4938-47dc-b840-ab4efb304134'
                },
                {
                  buildHookId: '6310dfd94776d91e477f18d3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-p1xp4ad7',
                  apiId: 'f40f46b4-7c50-4a38-9c88-69f487bf8330'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DamonJJ/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-p1xp4ad7.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
