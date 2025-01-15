import { useLoaderData } from 'react-router-dom';


function Github() {
  const data = useLoaderData();
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Public Repos: {data.public_repos}</div>
  )
}

export default Github