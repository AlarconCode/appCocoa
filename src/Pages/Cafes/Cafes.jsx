import Main from "../../Components/Main/Main";
import data from '../../data/data.json'

function Cafes () {
  return (
    <>
    <Main data={data} category="Cafes" />
    </>
  )
}

export default Cafes