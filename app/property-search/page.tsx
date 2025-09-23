import React from 'react'
import PropertyTopSearch from '../components/property-search-components/PropertyTopSearch'


const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function page() {
  await wait(5000);
  return (
    <div>
      <PropertyTopSearch />
    </div>
  )
}

export default page