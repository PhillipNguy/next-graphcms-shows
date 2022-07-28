import Layout from '@c/Layout'
import { Grid, Card } from '@c/Grid'
import { Title } from '@c/Title'
import { getAllShows } from '@l/graphcms'
import { useState, useEffect } from 'react'
import { formatUSD, formatDate } from '@l/utils'

export default function Shows({ shows }) {

  const [gridToggle, setGridToggle] = useState(true)

  function toggleButton () {
    gridToggle ? setGridToggle(false) : setGridToggle(true);
    console.log(gridToggle)
  }

  // const [sortOption, setSortOption] = useState("title_DESC")

  // function updateSortOption() {
  //   setSortOption("title_ASC")
  // }

  // useEffect(() => {
  //   const showsFilter = (getAllShows(sortOption))
  // }, [sortOption])



  return (
    <Layout title="next-graphcms-shows / Shows">
      <Title>Shows</Title>

      {/* <select id="sortOption"
      value={sortOption}
      onChange={(e) => {
        setSortOption(e.target.value);
      }}
      >
        <option value="title_ASC">Title Ascending</option>
        <option value="title_DESC">Title Descending</option>
        <option value="scheduleStartTime_ASC">Start Date Ascending</option>
        <option value="scheduleStartTime_DESC">Start Date Descending</option>
      </select>
      <input type="submit" value="Sort"/> */}

      <button onClick={toggleButton}>Toggle Grid</button>

      <Grid gridToggle={gridToggle}>
        {
          shows.map(show => (
          <Card href={`/show/${show.slug}`} header={show.title} key={show.id}>
            <p>{show.artists.map(({ fullName }) => fullName).join(', ')}</p>

            {!gridToggle &&
            <span>{formatDate(show.scheduledStartTime)}</span>
            }

            {/* Need to get price */}
            {/* <span>{formatUSD(show.ticketPrice)}</span> */}
          </Card>
        ))}
      </Grid>
    </Layout>
  )
}

export async function getServerSideProps() {
  const shows = (await getAllShows("title_DESC")) || []
  return {
    props: { shows },
  }
}
