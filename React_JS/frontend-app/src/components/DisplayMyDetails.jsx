const DisplayMyDetails=(props)=>{
    return(
        <>
        <h4>Name:{props.student[0]}</h4>
        <h4>Roll:{props.student[1]}</h4>
        <h4>Course:{props.student[2]}</h4>
        <h4>College:{props.student[3]}</h4>
        </>
    )
}
export default DisplayMyDetails;