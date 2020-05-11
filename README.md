# hpe design-system monorepo
### HPE Design System Site

[![Netlify Status](https://api.netlify.com/api/v1/badges/39e37d4a-4f9f-4946-8aeb-b8328b1821cd/deploy-status)](https://app.netlify.com/sites/keen-mayer-a86c8b/deploys) - https://design-system.hpe.design/  



### Storybook

[![Netlify Status](https://api.netlify.com/api/v1/badges/e4cb8d72-f3c0-4490-a4d7-54273ac277ed/deploy-status)](https://app.netlify.com/sites/thirsty-shockley-2b7675/deploys) - http://storybook.hpe.design/

# Welcome to HPE Design System
Aries is a monorepo built from two modules.

1. aries-core
2. aries-site (For designers and developers. This is the documentation site for the HPE Design System.)

The Monorepo is installed using [yarn](https://github.com/yarnpkg/yarn), and relies on [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/).

Packages are automatically linked together, meaning you can do cross-package work within the repo. woot-woot!

### Basic structure and configurations

```
aries/
  aries-*/
    src/js/
      index.js
    package.json         // package-specific deps and scripts
    README.md            // shown in npmjs.com. included in npm artifact

.eslintignore            // eslint (linter) ignored directories/files
.eslintrc                // eslint (linter) configuration based on @hpe/project-scripts
.gitignore               // github's default node gitignore with customizations
.prettierrc.js           // prettier (formatter) configuration based on @hpe/project-scripts
package.json             // common dev deps and workspace-wide scripts WIP
README.md                // workspace-wide information. shown in github
yarn.lock                // the only lock file in the repo. all packages combined
```

## Getting Started

```
yarn install
```

Running 'yarn install' anywhere in the monorepo hierarchy will always install ALL the modules in the workspaces.

Run aries-site in development mode:

```
cd aries-site
yarn start
```

Running in production mode:

```
yarn build
```

## Sprint Schedule 

**1. January 13 - 17**  
- Server app component breakdown
- Finalize Component pages (Design System site) 
- Review site
- Establish research plan

**2. January 20 - 24**  
- Incorporate Design System site feedback 
- HPE XS showcase
- Core component discovery

**3. January 27 - 31**   
- Finalize Design System site
- Reprioritize roadmap 
- Identify simple patterns 
- Remove references to Aries

**4. February 3 - 7**   
- Publish HPE theme
- Incorporate site testing (discuss approach) 
- Optimize Netlify build process
- Finalize pattern vis approach (inline vs storybook) 
- Designs for: Button, Type, Anchor, Color
- Research kick off email 
- Schedule stakeholder interviews and gather probing questions. (what info is valuable for us moving forward?) 

**5. February 10 - 14**   
- Dev: 
  - Button Pattern
  - Type patterns
- Design: 
  - Anchor pattern  
  - Grid Layout template 
- Research: 
  - Usability testing the website 

**6. February 17 - 21**  
- Dev: 
  - List template
  - Dashboard template
- Research:
  - Moterated stakeholder interviews
- Update website to accomidate templates 
- Form Discovery 

**7. February 24 - 28**  
- Development:
  - Refine Dashboard and List template implementation
- Design: 
  - Form and Dashboard template variations
  - Finalize stickersheet 
  - Finalize Sidebar navigation template 
- Research  
  - User testing shareout 
  
**8. March 2 - 6**
- Design:
  - Navigation variations 
  - Dashboard variation 
- Development: 
  - Anchor pattern
  - Form dev/design sync
  - Website refinments 
- Research
  - Moderated interview shareout 
  
**9. March 9 - 13**  
- Design:
  - List variation 
- Development:
  - Form template variations
  - Navigation dev/design sync

  
**10. March 16 - 20**
- Design: 
  - On-boarding Vicky and Maggie
  - Anchor
  - Button
- Development: 
  - Sidebar Navigation 
  - Theme Updates 
  
**11. March 23 - 27**  
- HPE XS Showcase
  - Update/Community
  - Usability/moderated interview shareout
  - Testing suite
  - Design tools and feeback 
- Design:
  - Search
  - CheckBox
  - TextInput
- Development:
  - Website design updates 
  
**12. March 30 - April 3**  
- Design:
  - TextArea
  - Radio Button Group 
- Development:
  - Website design updates 
  
**13. April 6 - 10**  
- Design:
  - Select  
  - Menu
  - Layer
- Development:
  - Website design
  - Theme updates 
  
**14. April 13 - 17** 
- Design: 
  - Accordian
  - Tabs 
  - MaskedInput 
- Development:
  - Theme updates 
  
**15. April 20 - 24** 
- Research:
  - Usability testing 
- Design:
  - RangeInput
  - Stack
- Development: 
