import Main from "../../Components/Main/Main";
import data from '../../data/data.json'

function Desayunos () {
  return (
    <>
    <Main data={data} category='Desayunos' />
    </>
  )
}

export default Desayunos