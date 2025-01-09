import Main from "../../Components/Main/Main";
import data from '../../data/data.json'

function Tostas () {
  return (
    <>
    <Main data={data} category={data[12].cat} />
    </>
  )
}

export default Tostas