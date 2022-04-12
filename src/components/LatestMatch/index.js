import './index.css'

const LatestMatch = props => {
  const {latestData} = props
  const {id} = latestData

  return (
    <div className="latest-match-container">
      <div>
        {/* <h1>{date}</h1> */}
        {/* <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>  */}
        <p>{id}</p>

        <p>{JSON.stringify(latestData)}</p>
      </div>
    </div>
  )
}

export default LatestMatch
