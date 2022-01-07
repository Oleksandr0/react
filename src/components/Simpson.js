import './simpson.css'

function Simpson(props){
    let {name, surname, age, info, photo} = props;

    return(
        <div>
            <h2>{name} {surname}; {age} yer old</h2>
            <img src={photo} alt="name"/>
            <p>{info}</p>
        </div>
    )
}

export default Simpson;