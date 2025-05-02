export async function fetchTopBlogPosts(publicationId: string, numberOfPosts: number = 3) {
    const query = `
      query GetPublicationArticles($host: String!, $first: Int!) {
        publication(host: $host) {
          title
          posts(first: $first) {
            edges {
              node {
                title
                brief
                slug
                updatedAt
                coverImage {
                  url
                }
                readTimeInMinutes
              }
            }
          }
        }
      }
    `;
  
    const variables = {
      host: publicationId,
      first: numberOfPosts
    };
  
    try {
      const response = await fetch('https://gql.hashnode.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables
        })
      });
  
      const data = await response.json();
      
      if (data.errors) {
        throw new Error(`GraphQL Error: ${JSON.stringify(data.errors)}`);
      }
      
      return data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }