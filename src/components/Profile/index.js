import React from 'react'
import {StaticQuery, graphql} from 'gatsby'

const Profile = () => (
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
        render={({site:{ siteMetadata: { title, position, description }}}) => (
            <div class="Profile-wrapper">
                    <h1>{title}</h1>
                    <h2>{position}</h2>
                    <p>{description}</p>
            </div>
        )}
    />
    
)

export default Profile