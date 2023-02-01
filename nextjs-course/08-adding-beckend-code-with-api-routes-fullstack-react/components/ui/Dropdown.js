export default function Dropdown( ref, ...props ){

    const { htlmfor, labelText, options } = props;
    return(
        <>
            <label htmlFor={ htlmfor } >{ labelText }</label>
            <select id={ htlmfor } ref={ ref } >
                {
                    options.map( (option) => {
                        <option value={ option.value } >{ option.text }</option>
                    } )
                }
            </select>
        </>
    )
}