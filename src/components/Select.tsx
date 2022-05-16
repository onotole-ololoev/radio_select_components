import React, {ChangeEvent} from 'react';

type SelectType = {
    setValue: (value: any) => void
    value: string
    arr: string[]
}

const Select = (props: SelectType) => {

    const onChangeHandle = (e: ChangeEvent<HTMLSelectElement>) => {
        let currentOption = props.arr.find( o => o === e.currentTarget.value);
        props.setValue(currentOption);
    }

    let mappedOptions = props.arr.map( (o, i) => {
        return (
            <option key={i} value={o}>{o}</option>
        )
    })

    return (
        <div>
            <select name={props.value} onChange={onChangeHandle}>
                {mappedOptions}
            </select>
        </div>
    );
};

export default Select;