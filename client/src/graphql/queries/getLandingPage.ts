const GET_LANDING_PAGE = /* GraphQL*/ `
query GET_LANDING_PAGE {
  landingPage {
    data {
      attributes {
        logo {
          data {
            attributes {
              alternativeText
              url
            }
          }
        }
        header {
          title
          description
          button {
            label
            url
          }
          image {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
        sectionAboutProject {
          title
          description
          media {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
        sectionPet {
          title
          subtitle
          petImage (pagination: {limit: 50}){
            petName
            image {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}

`

export default GET_LANDING_PAGE
