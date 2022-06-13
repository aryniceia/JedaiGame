
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
						<div className="PopUpHoverChar">
							<div className="foto1">
              	<img className={charProps.className.image} src={charProps.img} alt={`Imagem do personagem ${charProps.charName} \n${charProps.charDescription}`} />
								<span className="textfoto1">
									{charProps.popUpText}
								</span> 
							</div>
            </div>
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