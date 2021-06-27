import './char.css';
/*const charProps = {
    id: '',
    charName: "",
    charDescription: '',
    className: {
        container: '',
        image: ''
    }
}
*/
function Char ({personagem, setPersonagem, charProps}) { 
    return (
        <div className={`char-item ${charProps.className.container}`}>
            <label title={charProps.charName}>
                <img className={charProps.className.image} src={charProps.img} alt={`Imagem do personagem ${charProps.charName} \n${charProps.charDescription}`}></img>
                <p>{charProps.charName}</p>
            </label>
            
            <input onChange={({target}) => {setPersonagem(target.value)}} value={charProps.value} 
                checked={personagem == charProps.value}
                name="personagem" className="input" required="required"
                type="radio" id={charProps.id}>
            </input>
        </div>
    );
}
export default Char;