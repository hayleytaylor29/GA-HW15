const Receipt = ({ receipt}) => {
    return (
        <div className="card">
            <h3>{receipt.person} </h3>
            <h5>Main: {receipt.order.main}</h5>
            <h5>Protein: {receipt.order.protein}</h5>
            <h5>Rice: {receipt.order.rice}</h5>
            <h5>Sauce: {receipt.order.sauce}</h5>
            <h5>Toppings: 
                {receipt.order.toppings.map((topping) => {
                    return (
                        <>
                            <h6>{topping}</h6>
                        </>
                    )
                })}
            </h5>
        </div>
    )
}

export default Receipt;