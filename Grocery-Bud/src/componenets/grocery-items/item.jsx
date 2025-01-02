import './item.css'

function Item(props)
{
    return <>
    <div className='item-div'>
        <p className='item-name'>{props.item}</p>
        <button className='del-btn' onClick={props.deleteItems}>Delete</button>
    </div>
    </>
}

export default Item;