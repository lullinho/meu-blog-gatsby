import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

//usar chaves porque vai ter que usar return, tratar dados primeiro
//buscar dados do graphyql utilizando o hook do react useStaticQuery, separa dados e renderização, tratar dados primeiro, usar {} para return
const Profile = () => {
    const{//quais dados eu quero
        site: { 
            siteMetadata: { title, position, description },
        }
        //useStaticQuery retorna os dados acima(title, posi...)
    } = useStaticQuery(graphql` 
    query MysiteMedata{
        site{
            siteMetadata{
                title
                position
                description
                author
            }
        }
    }
    
    `) 
    //renderizar o componente
    return(
        <div class="Profile-wrapper">
                    <h1>{title}</h1>
                    <h2>{position}</h2>
                    <p>{description}</p>
            </div>
    )
}

//StaticQuery é um componente react e dentro tem query e parte de renderização, no mesmo lugar trata dados e renderização.

/*const Profile = () => (
    <StaticQuery
        query={graphql`
        query MysiteMedata{
            site{
                siteMetadata{
                    title
                    position
                    description
                    author
                }
            }
        }
        
        `}
        render={({
            site: { 
                siteMetadata: { title, position, description },
            },
        }) => (
            <div class="Profile-wrapper">
                    <h1>{title}</h1>
                    <h2>{position}</h2>
                    <p>{description}</p>
            </div>
        )}
    />
    
)*/

export default Profile