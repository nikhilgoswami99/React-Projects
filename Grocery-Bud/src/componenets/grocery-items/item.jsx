import './item.css'

function Item(props)
{
    return <>
    <div className='item-div'>
        <p>{props.item}</p>
        <button onClick={props.deleteItems}>Delete</button>
    </div>
    </>
}

export default Item;