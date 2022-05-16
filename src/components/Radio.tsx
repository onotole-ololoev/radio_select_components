import React, {ChangeEvent} from 'react';

type RadioType = {
    setValue: (value: any) => void
    value: string
    arr: string[]
}

const Radio = (props: RadioType) => {

    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        let currentRadio = props.arr.find( b => b === e.currentTarget.value)
        props.setValue(currentRadio);
    }

    let mappedInputs = props.arr.map( (r, i) => {
        return (
            <div>
                <label key={i}>
                    {r}
                    <input type="radio" value={r} name={r} checked={r === props.value} onChange={onChangeHandle}/>
                </label>
            </div>

        )
    })

    return (
        <div>
            {mappedInputs}
        </div>
    );
};

export default Radio;