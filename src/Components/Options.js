export default function Options(props) {

    return (
        <div className={`${props.Item.selected ? 'SelectedAnswer' : 'Options'}`} checked={props.Item.selected} onClick={props.PickAnswer}>{props.Item.value}</div>
    )

}
