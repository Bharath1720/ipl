import './index.css'

const LatestMatch = props => {
  const {latestData} = props
  //   While accessing the props through destructing i am getting error
  //   const {id} = latestData
  // Note : I have accessed the id through destructing and while i am trying to use in the <p></p> element i am getting error how to resolve it

  return (
    <div className="latest-match-container">
      <h1>Hello</h1>
      {/* <p>{id}</p> */}
    </div>
  )
}

export default LatestMatch
